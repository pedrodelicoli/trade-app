import express from 'express';
import { getUser, insert, update, loginUser } from '../controllers';
import { auth } from '../middlewares/auth';

const router = express.Router({ mergeParams: true });

router.post('/login', loginUser);
router.get('/user', auth, getUser)
router.post('/user', insert);
router.put('/user', update);

export { router }; 