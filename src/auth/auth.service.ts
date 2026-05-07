import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    if (email === 'admin@test.com' && password === '1234') {
      return {
        success: true,
        message: 'Login successful',
      };
    }

    return {
      success: false,
      message: 'Invalid credentials',
    };
  }
}