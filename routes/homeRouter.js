import express from "express";
import { getFile, postFile } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getFile);

export default router;
