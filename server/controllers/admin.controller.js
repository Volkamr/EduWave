import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {pool} from '../db.js';


//Login

export const postLoginAdmin = async (req, res) => {


    try {
        const data = req.body;
        if (data.adminusr != null && data.password != null) {

            const [result] = await pool.query("SELECT * FROM Admins WHERE adm_user = ?", [data.adminusr]);

            if (result.length === 0) {
                return res.status(200).json({
                    message: "ADMINISTRADOR NO ENCONTRADO",
                    success: false
                });
            } else if (data.password != result[0].password) {
                return res.status(200).json({
                    message: "CONTRASEÑA INCORRECTA",
                    success: false
                });
            } else {
                const secretKey = process.env.SECRET_KEY;
                const accessToken = jwt.sign({ cedula: result[0].cedula }, secretKey, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })
                res.status(200).json({
                    accessToken: accessToken,
                    success: true
                })
            }
        } else {
            return res.status(200).json({
                message: "No deben haber campos vacíos",
                success: false
            });
        }

    } catch (error) {
        console.error('Error en la función postLoginAdminr:', error);
        return res.status(500).json({
            message: "Error en el servidor",
            success: false
        });
    }
};