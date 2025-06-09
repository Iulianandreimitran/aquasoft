// src/routes/hotels.ts
import { Router } from 'express';
import { 
  getAllHotels, getHotelByName, createHotel, updateHotel, deleteHotel 
} from '../controllers/hotelsController';
import { authenticateJWT } from '../auth';

const router = Router();

router.get('/', getAllHotels);
router.get('/:name', getHotelByName);
router.post('/', authenticateJWT, createHotel);    
router.put('/:id', authenticateJWT, updateHotel);    
router.delete('/:id', authenticateJWT, deleteHotel);

export default router;
