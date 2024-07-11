import express from "express";
import {signupUser, loginUser, updateUserData, getUserData} from "../controllers/user.controller.js";

const router = express.Router();

router.post('/registroUsuario', signupUser);
router.post('/ingresoUsuario', loginUser);
router.post('/actualizarDatosUsuario', updateUserData);
router.post('/datosDeUsuario', getUserData);

export default router;
