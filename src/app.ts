import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// TODO: Implement in-memory data structure

// TODO: POST /todos

// TODO: GET /todos

// TODO: PUT /todos/:id

// TODO: DELETE /todos/:id

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
