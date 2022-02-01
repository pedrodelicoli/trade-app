import express from 'express';
import { findAll } from '../controllers/findAll';
import { findEmail } from '../controllers/findByEmail';
import { insert } from '../controllers/insert';
import { update } from '../controllers/update';

const router = express.Router({ mergeParams: true });

router.get('/user', findAll);
router.get('/user/:email', findEmail);
router.post('/user', insert);
router.put('/user', update);

export { router }; 