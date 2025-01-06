import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const middlewareAuth = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );
    req.user = decoded;
    next();
  } catch (error: any) {
    res
      .status(403)
      .json({ message: "Token no válido o expirado", error: error.message });
  }
};
