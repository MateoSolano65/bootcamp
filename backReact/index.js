import express from "express";
import connectMongo from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

import user from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.use('/usuario', user)

const startServer = async () => {
    try {
        await connectMongo(); 

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};

startServer();