import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello! Voici le nouveau message après nettoyage de la structure!';
  }
}
