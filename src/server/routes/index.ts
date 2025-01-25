import { Router } from 'express';
import { UsersController } from './../controllers';

const router = Router();

router.get('/users', UsersController.getAll);
router.get('/users/:userId/albums', UsersController.getAlbums);

export { router };