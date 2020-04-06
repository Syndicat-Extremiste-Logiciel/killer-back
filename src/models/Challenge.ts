import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

class Challenge extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public description!: string;
    public lang!: string;
}
