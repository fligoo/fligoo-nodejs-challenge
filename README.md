# TODO API - Live Coding Challenge

## Objective

Create a simple REST API using **Node.js + TypeScript** + **Express** that lets users manage a TODO list.

### Requirements

1. Add a new TODO  
   - `POST /todos`
   - Body: `{ "task": "string" }`

2. Get all TODOs  
   - `GET /todos`

3. Mark a TODO as done  
   - `PUT /todos/:id`

4. Delete a TODO  
   - `DELETE /todos/:id`

### Constraints

- Store TODOs in memory (array or object).
- Use TypeScript interfaces for your TODO structure.
- Use only basic libraries (e.g., Express).

### Bonus (Optional)

- Add filtering support (e.g., `GET /todos?done=true`)
- Add validation (task should not be empty)
- Handle error responses gracefully

---

### Getting Started

```bash
npm install
npm run dev
```

The server will run at `http://localhost:3000`

---

### Submission

Please zip the entire project folder and send it back when done.
