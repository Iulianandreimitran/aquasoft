// src/controllers/hotelsController.ts
import { Request, Response } from 'express';
import { Hotel } from '../models/Hotel';

// GET /hotels - returns all hotels
export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const limit  = parseInt((req.query.limit  as string) || '100', 10);
    const offset = parseInt((req.query.offset as string) || '0', 10);
    const hotels = await Hotel.findAll({
      limit,
      offset,
      order: [['globalPropertyID', 'ASC']],
    });
    res.json(hotels);
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', details: error.message });
  }
};

// GET /hotels/:name - returns a hotel by GlobalPropertyName
export const getHotelByName = async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.findOne({ where: { globalPropertyName: req.params.name } });
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /hotels - creates a new hotel
export const createHotel = async (req: Request, res: Response) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', details: (error as Error).message });
  }
};

// PUT /hotels/:id - updates a hotel by GlobalPropertyID
export const updateHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (hotel) {
      await hotel.update(req.body);
      res.json(hotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// DELETE /hotels/:id - deletes a hotel by GlobalPropertyID
export const deleteHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (hotel) {
      await hotel.destroy();
      res.json({ message: 'Hotel deleted' });
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
