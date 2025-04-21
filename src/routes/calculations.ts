//* 1. Routes Contacts

import express from 'express';
import CalculationsHandler from '@/handlers/calculations';

const router = express.Router();
const calcHandler = new CalculationsHandler();

router.get('/areaCircle', calcHandler.getAreaCircle);
router.get('/areaTriangle', calcHandler.getAreaTriangle);
router.get('/areaRectangle', calcHandler.getAreaRectangle);

export default router;