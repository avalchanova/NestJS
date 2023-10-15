"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [user_entity_1.User],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map