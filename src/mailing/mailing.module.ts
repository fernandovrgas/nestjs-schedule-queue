import { SendMailWithTweetsJob } from './send-mail-with-tweets.job';
import { Module } from '@nestjs/common';

@Module({
  providers: [SendMailWithTweetsJob],
})
export class MailingModule {}
