import { Router } from "express";
import { logoutController } from "../controllers/logout.controller";
import { registerController } from "../controllers/register.controller";
import { loginController } from "../controllers/login.controller";
import { tokenLoginController } from "../controllers/tokenlogin.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/token-login", authenticate, tokenLoginController);
router.post("/logout", authenticate, logoutController);

export default router;
