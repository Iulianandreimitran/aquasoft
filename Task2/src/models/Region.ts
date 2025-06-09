// src/models/Region.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export class Region extends Model {
  public propertyStateProvinceID!: number;
  public propertyStateProvinceName!: string;
}

Region.init({
  propertyStateProvinceID: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, field: 'propertystateprovinceid' },
  propertyStateProvinceName: { type: DataTypes.STRING(100), allowNull: false, field: 'propertystateprovincename' },
}, {
  sequelize,
  tableName: 'regions',
  timestamps: false
});
