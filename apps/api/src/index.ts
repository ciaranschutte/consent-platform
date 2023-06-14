import express from 'express';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.get('/health', async (req, res) => {
  res.json({ message: `API is running on port ${port}` });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ users: [users] });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
