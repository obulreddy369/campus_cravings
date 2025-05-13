import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "Authentication token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { id: decoded.id }; // ✅ correct field name (id)

    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default isAuthenticated;
