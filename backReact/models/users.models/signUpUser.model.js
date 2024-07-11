import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    tipoIdenficacion: {
        type: String,
        required: true
    },

    numeroIdentificacion:{
        type: Number,
        required: true,
        unique: true
    },

    telefono: {
        type: Number,
        required: true,
        unique: true
    },

    direccion: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

export default mongoose.model('userModel', userModel);