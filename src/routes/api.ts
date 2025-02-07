import { Router } from 'express';
import { connectPlayer, connectToPlayer } from '../controllers/playerController';

const router = Router();

router.get('/connect', connectPlayer);

router.get('/connect-to/:id', connectToPlayer);

export default router;
