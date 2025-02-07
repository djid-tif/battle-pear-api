import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const connectedPlayers: Set<string> = new Set();

export const connectPlayer = (req: Request, res: Response): void => {
    const playerId = uuidv4();
    connectedPlayers.add(playerId);
    res.json({ id: playerId, message: "Connected to server" });
};

export const connectToPlayer = (req: Request, res: Response): void => {
    const targetId = req.params.id;

    if (connectedPlayers.has(targetId)) {
        res.json({ message: `Player ${targetId} is available for connection` });
    } else {
        res.status(404).json({ error: `Player ${targetId} not found or not connected` });
    }
};
