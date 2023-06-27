import express from 'express';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 8080;

app.get('/health', async (req, res) => {
  res.json({ message: `API is running on port ${port}` });
});

app.get('/participants', async (req, res) => {
  const participants = await prisma.participant.findMany();
  res.json({ participants: [participants] });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
