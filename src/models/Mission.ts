import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';


class Mission extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    // challenge, source, target
}


export default Mission;
