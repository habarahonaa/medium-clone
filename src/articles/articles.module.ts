import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesController } from './articles.controller';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}
