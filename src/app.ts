import express, { Request, Response } from 'express';

const app = express();

const dogs = [
  { name: 'Buddy', breed: 'Labrador Retriever' },
  { name: 'Max', breed: 'German Shepherd' },
  { name: 'Bailey', breed: 'Golden Retriever' },
  { name: 'Lucy', breed: 'Bulldog' },
  { name: 'Daisy', breed: 'Beagle' },
  { name: 'Charlie', breed: 'Poodle' },
  { name: 'Rocky', breed: 'Boxer' },
  { name: 'Molly', breed: 'Dachshund' },
  { name: 'Shadow', breed: 'Siberian Husky' },
  { name: 'Bella', breed: 'Great Dane' },
];

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: process.env.NAME || 'Hello World!',
  });
});

app.get('/api/v1/dogs', (req: Request, res: Response) => {
  res.status(200).json({
    data: dogs,
  });
});

export { app };
