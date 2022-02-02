import { Process } from '@nestjs/bull';
import { Job } from 'bull';

export class SendMailWithTweetsJob {
  @Process('emails')
  handle(job: Job) {
    console.log(JSON.stringify(job.data));
  }
}
