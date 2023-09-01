import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';

interface IActor {
  id: number,
  name: string,
  birthDate: Date,
  country: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export type ActorCreationAttributes = Optional<IActor, 'id'>;

export class Actor extends Model<IActor, ActorCreationAttributes> {
  declare id: number | null;
  declare name: string | null;
  declare birthDate: Date | null;
  declare country: string | null;
  declare createdAt: Date | null;
  declare updatedAt: Date | null;
}

Actor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    birthDate: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
    country: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: new DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    tableName: 'actors',
    modelName: 'actor',
  },
);