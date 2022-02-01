import express from 'express';
import { findEmail, insert, update } from '../controllers';

const router = express.Router({ mergeParams: true });

router.post('/login', findEmail);
router.post('/user', insert);
router.put('/user', update);

export { router }; 