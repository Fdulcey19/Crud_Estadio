import {Router} from 'express'
import { createEstadio, deleteEstadio, getEstadios, updateEstadio } from '../controllers/estadios.controllers.js';

const router = Router();

router.get('/estadios', getEstadios)
router.post('/estadios', createEstadio)
router.put('/estadios/:id', updateEstadio)
router.delete('/estadios/:id', deleteEstadio)

export default router;