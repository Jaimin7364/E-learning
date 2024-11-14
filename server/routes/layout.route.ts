import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/user.controller";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout", updateAccessToken as any, isAuthenticated as any, authorizeRoles("admin"), createLayout as any);

layoutRouter.put("/edit-layout", updateAccessToken as any, isAuthenticated as any, authorizeRoles("admin"), editLayout as any);

// Updated the route to include ':type' as a parameter
layoutRouter.get("/get-layout/:type", getLayoutByType as any);

export default layoutRouter;
