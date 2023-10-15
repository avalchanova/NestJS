import { Comment } from "src/entities/comment.entity";
import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "testDB",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  entities: [User, Topic, Comment], // we are passing the UserModule here, if we have other entities we will have to add them in as well
  synchronize: true,
};

export default config;
