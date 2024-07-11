import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/users.models/signUpUser.model.js";

export const signupUser = async (req, res) => {

    try {
        const { email, nombre, apellido, tipoIdenficacion, numeroIdentificacion, telefono, direccion, password } = req.body;

        if (!email || !nombre || !apellido || !tipoIdenficacion || !numeroIdentificacion || !telefono || !direccion || !password) {
            return res.status(400).json({
                error: 'Faltan parámetros en la solicitud'
            });
        }

        if (isNaN(numeroIdentificacion)) {
            return res.status(400).json({
                error: 'El número de identificación debe ser un número'
            });
        }

        if (isNaN(telefono)) {
            return res.status(400).json({
                error: 'El teléfono debe ser un número'
            });
        }

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.MASTER_KEY));

        const newUser = await userModel.create({
            email,
            nombre,
            apellido,
            tipoIdenficacion,
            numeroIdentificacion,
            telefono,
            direccion,
            password: hashedPassword,
        });

        const payload = { _id: newUser._id };

        let token = jwt.sign(payload, process.env.JWT_KEY);

        const userData = {
            token,
            user: newUser._id
        };

        res.send(userData);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Error en el servidor' });
    }
}

export const loginUser = async (req, res) => {
    try{

        const { email, password } = req.body;

        if ( !email || !password ){
            return res.status(400).json({
                error: 'Faltan parámetros en la solicitud'
            });
        }

        let userExist = await userModel.findOne({ email: email })

        if (!userExist) {
            return res.status(404).json({ error: "No existe ningun usuario con este correo"})
        }

        const validatePassword = bcrypt.compare(password, userExist.password)

        if (validatePassword) {
            const payload = { _idUser: userExist._id}
            const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '30m'})
            return res.status(200).send({token, payload});
        } else {
            return res.status(401).json({ token:null, error: "Credenciales incorrectas"});
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message || 'Error en el servidor'})
    }
}

export const updateUserData = async (req, res) =>{
    try{
        const {userId, nombre, apellido, telefono, direccion} = req.body;

        const updateFields = {};
        if (nombre) updateFields.nombre = nombre
        if (apellido) updateFields.apellido = apellido
        if (telefono) updateFields.telefono = telefono
        if (direccion) updateFields.direccion = direccion

        if (Object.keys(updateFields).length === 0){
            return res.status(400).json({ error: 'No hay campos para actualizar'});
        }

        const updatedUser = await userModel.findByIdAndUpdate(userId, updateFields, {new: true})

        if (!updatedUser) {
            return res.status(400).json({error: 'usuario no encontrado'})
        }

        console.log(updatedUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message || 'Error en el servidor'})
    }
}


export const getUserData = async (req, res) => {
    try{
        const {userId} = req.body

        if (!userId){
            return res.status(400).json({ error: 'Faltan parametros en la solicitud'})
        }

        const userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ error: 'usuario no encontrado'})
        }

        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message || 'Error en el servidor'})
    }
}