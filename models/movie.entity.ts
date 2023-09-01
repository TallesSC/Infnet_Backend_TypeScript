import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db';
import { Actor } from './actor.entity';

interface IMovie {
  id: number,
  name: string,
  releaseDate: Date,
  createdAt?: Date,
  updatedAt?: Date,
}

export type MovieCreationAttributes = Optional<IMovie, 'id'>;

export class Movie extends Model<IMovie, MovieCreationAttributes> {
  declare id: number | null;
  declare name: string | null;
  declare releaseDate: Date | null;
  declare createdAt: Date | null;
  declare updatedAt: Date | null;
}

Movie.init(
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
    releaseDate: {
      type: new DataTypes.DATE,
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
    tableName: 'movies',
    modelName: 'movie',
  },
);

Movie.hasMany(Actor);