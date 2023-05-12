import { DataSource } from "typeorm";
import { User } from "./entity/User";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: "postgres",
  synchronize: true,
  entities: [User],
});

export default dataSource;
