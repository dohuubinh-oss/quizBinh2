import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { connectToDatabase } from '../src/lib/mongodb';

async function testConnection() {
  try {
    console.log('Đang thử kết nối đến MongoDB...');
    const { client, db } = await connectToDatabase();
    // Ping a collection to confirm connection
    await db.command({ ping: 1 });
    console.log('✅ Kết nối đến MongoDB thành công!');
    console.log(`✅ Tên database: ${db.databaseName}`);

    // Lấy và hiển thị dữ liệu navlinks
    console.log('\n--- Lấy dữ liệu NavLinks ---');
    const navLinks = await db.collection('navlinks').find({}).toArray();
    console.log(navLinks);
    console.log('--------------------------\n');

    // Đóng kết nối
    await client.close();
  } catch (error) {
    console.error('❌ Lỗi kết nối đến MongoDB:', error);
    process.exit(1); // Thoát script với lỗi
  }
}

testConnection();
