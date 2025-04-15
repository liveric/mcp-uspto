import { Request, Response } from 'express';
import { searchUSPTO, getPatentDetailsFromAPI } from '../services/uspto.service';

export const searchPatents = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    const results = await searchUSPTO(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search patents' });
  }
};

export const getPatentDetails = async (req: Request, res: Response) => {
  try {
    const { patentNumber } = req.params;
    const details = await getPatentDetailsFromAPI(patentNumber);
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get patent details' });
  }
}; 