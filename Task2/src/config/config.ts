// src/config/config.ts
import dotenv from 'dotenv';
dotenv.config();

export const DB_HOST = process.env.DB_HOST ;
export const DB_PORT = Number(process.env.DB_PORT) ;
export const DB_NAME = process.env.DB_NAME ;
export const DB_USER = process.env.DB_USER ;
export const DB_PASSWORD = process.env.DB_PASS ; 
export const JWT_SECRET = process.env.JWT_SECRET || 'ExzgOlbmDHWuvyfNXPMISFo44E7a+EYSH107oxG0100=';
export const PORT = Number(process.env.PORT);
