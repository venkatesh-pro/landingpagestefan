import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UploadService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.getOrThrow('CLOUD_NAME'),
      api_key: this.configService.getOrThrow('API_KEY'),
      api_secret: this.configService.getOrThrow('API_SECRET'),
    });
  }

  uploadThumbnailToCloudinary(file: Express.Multer.File) {
    console.log('file form the serviec', file);
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: 'auto', folder: 'stefan-fiver-images' },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve({ thumbnail: result.url });
            }
          },
        )
        .end(file.buffer);
    });
  }
}
