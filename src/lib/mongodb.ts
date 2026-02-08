
import { MongoClient, Db } from 'mongodb';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly during API Route usage.
 * 
 * Biến global được dùng để lưu trữ kết nối đã cache qua các lần hot-reload
 * trong môi trường development. Điều này tránh việc tạo ra quá nhiều kết nối mới.
 */
// @ts-expect-error - `global` is a NodeJS global and causes conflicts with JSDom's `global`
let cachedClient: MongoClient | null = global.mongoClient || null;
// @ts-expect-error - `global` is a NodeJS global and causes conflicts with JSDom's `global`
let cachedDb: Db | null = global.mongoDb || null;

export async function connectToDatabase() {
  // Nếu đã có kết nối được cache, sử dụng nó
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Lấy chuỗi kết nối từ biến môi trường
  const MONGODB_URI = process.env.MONGODB_URI;

  // Kiểm tra xem MONGODB_URI đã được định nghĩa chưa
  if (!MONGODB_URI) {
    throw new Error(
      'Vui lòng định nghĩa biến môi trường MONGODB_URI trong file .env.local'
    );
  }

  // Nếu chưa, tạo kết nối mới
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  
  // Tên database có thể được lấy từ chuỗi URI
  const dbName = new URL(MONGODB_URI).pathname.substring(1);
  if (!dbName) {
    throw new Error(
        'Không tìm thấy tên database trong MONGODB_URI. Ví dụ: mongodb://.../ten_database'
    )
  }
  const db = client.db(dbName);

  // Cache lại kết nối mới để sử dụng cho các lần sau
  // @ts-expect-error - `global` is a NodeJS global and causes conflicts with JSDom's `global`
  global.mongoClient = client;
  // @ts-expect-error - `global` is a NodeJS global and causes conflicts with JSDom's `global`
  global.mongoDb = db;
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
