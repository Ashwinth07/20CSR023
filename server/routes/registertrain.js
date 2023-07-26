import express from "express";
import { gettrain, register, registerBulk } from "../controller/Train.js";


const router = express.Router();

router.post("/add", register);
router.post("/bulk",registerBulk);
router.get("/get", gettrain);

export default router;
