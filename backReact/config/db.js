import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO, {});
        console.log("Conectado a MongoDB Atlas");
    } catch (err) {
        console.error("Error al conectar a MongoDB Atlas:", err);
        process.exit(1);
    }
};

export default connectMongo;