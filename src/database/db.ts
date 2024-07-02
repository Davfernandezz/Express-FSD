import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Author1719825063867 } from "./migrations/1719825063867-author";
import { User1719830267980 } from "./migrations/1719830267980-user";
import { Book1719832355608 } from "./migrations/1719832355608-book";
import { Favourite1719906554069 } from "./migrations/1719906554069-favourite";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [],
    migrations: [Author1719825063867, User1719830267980, Book1719832355608, Favourite1719906554069],
    synchronize: false,
    logging: false,
})

