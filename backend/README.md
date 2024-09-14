`nest new shopping-backend`

`nest g module users`
`nest g controller users`
`nest g service users`

To use Validation we need to install
`npm i class-validator`
`npm i class-transformer`

To apply the validation we are going to use pipes

> Pipes are a powerful feature of NestJS that enable you to handle data validation

To setup config
`npm i @nestjs/config`

For logging in console be better view we can use this package

`npm i nestjs-pino`
`npm i pino-http`
`npm i pino-pretty`

To use prisma
`npm i prisma`

and to initailize prisma

`npx prisma init`

To check any postgress running on same port error
`sudo lsof -i :5432`
`sudo kill -9 pid`

To generate migration
`npx prisma migrate dev --name init`

To expose the prisma types, we need to connect the prisma to the nestjs

`nest g module prisma`
`nest g service prisma`

To install bcrypt
`npm i bcrypt`

To use bcrypt types
`npm i @types/bcrypt`

To use the passportjs
`npm i @nestjs/passport passport passport-local @types/passport-local`

`npm install @nestjs/jwt passport-jwt @types/passport-jwt`

to parse the cookie
`npm i cookie-parser`

What is provide?
if we put our services file in providers, that service file used in that specific module,

What is export?
If we export the user module, then that user module can be use any where in the application, that mean, using the user module, they can use their service without anyother config
![alt text](image.png)

To use the service or export it, we need to use the @Injectable decorator
![alt text](image-1.png)

In the export we only need to export the service, that can be exported, but when other module import it, it need to import the module only not service, if we import the module,the nestjs will automatically do that job


![alt text](image-2.png)

when we do circulate deplencency, we need to do the forwardRef() in both auth and user module