import jwt from "jsonwebtoken";
import dotenv from 'dotenv'


dotenv.config();

const JWT_SECRET:string = process.env.JWT_SECRET!;

const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "30d" });
console.log(token);