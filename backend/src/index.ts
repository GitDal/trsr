import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Home route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Team Success Recognition System (TSRS)!" });
});

// Teams webhook route
app.post('/teams/webhook', (req: Request, res: Response) => {
    const data = req.body;
    // Process Teams-specific webhook data here
    res.json({ status: "success", data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
