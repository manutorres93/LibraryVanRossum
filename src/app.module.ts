import { Module } from '@nestjs/common';

import { BooksModule } from './modules/books/books.module';
import { AuthorModule } from './modules/author/author.module';
import { SaleModule } from './modules/sale/sale.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'brzst35gzwmepa5inz2s-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u1rnrslxuiukxfqt',
      password: 'tcQQcQVu6PYNR1naMVhb',
      database: 'brzst35gzwmepa5inz2s',
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      retryDelay:3000,
      retryAttempts:10
    }),
    
    BooksModule, AuthorModule, SaleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
