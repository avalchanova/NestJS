"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_entity_1 = require("./src/entities/comment.entity");
const topic_entity_1 = require("./src/entities/topic.entity");
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: "postgres",
    database: "testDB",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    entities: [user_entity_1.User, topic_entity_1.Topic, comment_entity_1.Comment],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map