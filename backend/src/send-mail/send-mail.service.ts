import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
@Injectable()
export class SendMailService {
  private transporter: any;
  private logger: Logger;
  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('NODEMAILER_HOST'),
      port: this.configService.get('NODEMAILER_PORT'),
      secure: true,
      auth: {
        user: this.configService.get('NODEMAILER_USER'),
        pass: this.configService.get('NODEMAILER_PASS'),
      },
    });

    // this.logger = new Logger('custom logger');
    // name of the logger pass to the logger argument
    this.logger = new Logger(SendMailService.name);

    this.logger.debug(configService.get('NODEMAILER_HOST'));
    console.log('HOST2', configService.get('NODEMAILER_HOST'));
  }

  async sendMailAfterUserCreated(userEmail: string) {
    try {
      console.log({ userEmail });

      const userMailOptions = {
        from: `"WaitingList 2" <${this.configService.get('NODEMAILER_USER')}>`,
        to: userEmail,
        subject: 'Welcome to Our Service', // Replace with your email subject
        html: `
        <h1>Welcome to Our Service</h1>
      `,
      };
      await this.transporter.sendMail(userMailOptions);
      return 'mail sended';
    } catch (error) {
      return new HttpException(error.message, 400);
    }
  }
}
