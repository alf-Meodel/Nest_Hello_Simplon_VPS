import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from GitHub Actions - Automatic Deployment Test!';
  }
}
