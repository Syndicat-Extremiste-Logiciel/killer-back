import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

class Room extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string; // Note that the `null assertion` `!` is required in strict mode.
    public secret!: string; // Secret code
    public state!: string; // Cree, en cours, interrompu, terminee
}
