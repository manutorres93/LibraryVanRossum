import { Module } from '@nestjs/common';

import { BooksModule } from './modules/books/books.module';
import { AuthorModule } from './modules/author/author.module';
import { ConfigModule,  ConfigType  } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesModule } from './modules/sales/sales.module';
import dbConfig from './db-config';

@Module({
   imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'brzst35gzwmepa5inz2s-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u1rnrslxuiukxfqt',
      password: 'tcQQcQVu6PYNR1naMVhb',
      database: 'brzst35gzwmepa5inz2s',
      autoLoadEntities: true,
      synchronize: true, */
      //entities: ['dist/**/*.entity{.ts,.js}'],
     /*  retryDelay:3000,
      retryAttempts:10
    }), Quemados */

    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof dbConfig>) => {
        const { db } = configService;

        return {
          type: 'mysql',
          host: db.host,
          port: db.port,
          username: db.user,
          password: db.password,
          database: db.name,
          entities: ['dist/**/*.entity{.ts,.js}'],
          autoLoadEntities: true,
          synchronize: true,
          retryDelay:3000,
          retryAttempts:10 // Esto no debería estar en producción
          
        };
      },
      inject: [dbConfig.KEY],}),
    
    BooksModule, AuthorModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
