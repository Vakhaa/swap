import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
.setTitle('Swap landia')
.setDescription('Don`t confuse with fap, but fealings the same.')
.setVersion('1.0')
.addTag('Swap')
.build();