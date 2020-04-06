import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

import Mission from "./Mission";


class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public priviledges!: number;
    public secret!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

  }


export default User;
