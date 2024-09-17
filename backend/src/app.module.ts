import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NumberIncrementModule } from './number-increment/number-increment.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [UserModule, NumberIncrementModule, ScheduleModule.forRoot(), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
