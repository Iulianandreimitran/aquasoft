// src/models/City.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export class City extends Model {
  public cityID!: number;
  public cityName!: string;
  public country!: string;
}

City.init({
  cityID:   { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, field: 'cityid' },
  cityName: { type: DataTypes.STRING(100), allowNull: false, field: 'cityname' },
  country:  { type: DataTypes.STRING(50),  allowNull: false, field: 'country' },
}, {
  sequelize,
  tableName: 'cities',
  timestamps: false
});
