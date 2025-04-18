import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cv84r2pu0jms73c8jdhg-a.frankfurt-postgres.render.com',
  port: 5432,
  username: 'sneakersshop_user',
  password: 'PMOk5ddIyz4py4fBFfgmo6fcH9PNSqzq',
  database: 'sneakersshop',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
  logging: false,
  ssl: { rejectUnauthorized: false },
});

