import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Đây là logic xác thực giả lập
    // Trong một ứng dụng thực tế, bạn sẽ kiểm tra thông tin này với database
    if (email && password) {
      // Giả lập đăng nhập thành công
      console.log(`Login attempt: email=${email}, password=${password} -> SUCCESS`);
      // Trả về một token giả hoặc thông tin người dùng
      return NextResponse.json({ 
        message: 'Đăng nhập thành công!', 
        user: { name: 'Người dùng Test', email: email },
        token: 'fake-jwt-token' // Gửi một token giả
      }, { status: 200 });
    } else {
      // Giả lập đăng nhập thất bại
      console.log(`Login attempt: email=${email}, password=${password} -> FAILED`);
      return NextResponse.json({ message: 'Email hoặc mật khẩu không hợp lệ.' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error in login API:', error);
    return NextResponse.json({ message: 'Đã có lỗi xảy ra phía server.' }, { status: 500 });
  }
}
