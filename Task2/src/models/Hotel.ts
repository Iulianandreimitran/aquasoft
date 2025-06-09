// src/models/Hotel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export class Hotel extends Model {
  public globalPropertyID!: number;
  public sourcePropertyID!: string | null;
  public globalPropertyName!: string;
  public globalChainCode!: string | null;
  public propertyAddress1!: string;
  public propertyAddress2!: string | null;
  public primaryAirportCode!: string | null;
  public cityID!: number;
  public propertyStateProvinceID!: number | null;
  public propertyZipPostal!: string | null;
  public propertyPhoneNumber!: string | null;
  public propertyFaxNumber!: string | null;
  public sabrePropertyRating!: number | null;
  public propertyLatitude!: number | null;
  public propertyLongitude!: number | null;
  public sourceGroupCode!: string;
}

Hotel.init({
  globalPropertyID: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, field: 'globalpropertyid' },
  sourcePropertyID:   { type: DataTypes.STRING(50),  allowNull: true,  field: 'sourcepropertyid' },
  globalPropertyName: { type: DataTypes.STRING(100), allowNull: false, field: 'globalpropertyname' },
  globalChainCode:    { type: DataTypes.STRING(10),  allowNull: true,  field: 'globalchaincode' },
  propertyAddress1:   { type: DataTypes.TEXT,        allowNull: false, field: 'propertyaddress1' },
  propertyAddress2:   { type: DataTypes.TEXT,        allowNull: true,  field: 'propertyaddress2' },
  primaryAirportCode: { type: DataTypes.STRING(10),  allowNull: true,  field: 'primaryairportcode' },
  cityID:             { type: DataTypes.INTEGER,     allowNull: false, field: 'cityid' },
  propertyStateProvinceID: { type: DataTypes.INTEGER, allowNull: true, field: 'propertystateprovinceid' },
  propertyZipPostal:  { type: DataTypes.STRING(20),  allowNull: true,  field: 'propertyzippostal' },
  propertyPhoneNumber:{ type: DataTypes.STRING(20),  allowNull: true,  field: 'propertyphonenumber' },
  propertyFaxNumber:  { type: DataTypes.STRING(20),  allowNull: true,  field: 'propertyfaxnumber' },
  sabrePropertyRating:{ type: DataTypes.DECIMAL(3,1),allowNull: true,  field: 'sabrepropertyrating' },
  propertyLatitude:   { type: DataTypes.DECIMAL(9,6),allowNull: true,  field: 'propertylatitude' },
  propertyLongitude:  { type: DataTypes.DECIMAL(9,6),allowNull: true,  field: 'propertylongitude' },
  sourceGroupCode:    { type: DataTypes.STRING(10),  allowNull: false, field: 'sourcegroupcode' },
}, {
  sequelize,
  tableName: 'hotels', 
  timestamps: false     
});
