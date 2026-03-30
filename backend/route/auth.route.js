import express from "express";
import { registerController, loginController } from "../controller/auth.controller.js";

 const router = express.Router();

 router.post("/register", registerController);
 router.post("/login", loginController);

 router.get("/login", (req, res) => {
  res.send("Login route working");
});
 export default router;