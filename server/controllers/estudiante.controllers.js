import {pool} from '../db.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getEstudiantes = async(req, res) =>{
    const [result] = await pool.query(
        "Select cedula, fotoPerfil, nombre, edad, celular, email, password, genero from empleados e " + 
        "inner join municipios m on e.municipio_id = m.id " + 
        "inner join departamentos d on m.departamento_id = d.id " +
        "where estado = 1" 
    );
    res.json(result);
}


export const getEstudiante = async (req, res) => {

    const token = req.params.accessToken;
    const key = process.env.SECRET_KEY;

    if (token) {
        jwt.verify(token, key, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Token inválido" })
            } else {
                req.cedula = decoded.cedula;
            }
        })
    }

    const cedula = req.cedula;
    const [result] = await pool.query("SELECT * FROM empleados WHERE cedula = ? ", [cedula]);
    return res.status(200).json(result[0]);
}

export const createEstudiante = async(req, res) =>{
    try {
        const data = req.body;
        const [result_email] = await pool.query("SELECT * FROM empleados WHERE email = ?", [data.email]);
        const [result_celular] = await pool.query("SELECT * FROM empleados WHERE celular = ?", [data.celular]);
        
        if (result_email.length != 0) {
            return res.status(200).json({
                success: false,
                message: "El correo ya está en uso"
            })
        } else if (result_celular.length != 0) {
            return res.status(200).json({
                success: false,
                message: "El celular ya está en uso"
            })
        } else if (data.celular.toString().length != 10) {
            return res.status(200).json({
                success: false,
                message: "El celular debe tener 10 caracteres"
            })
        }
        else if (data.password.length < 6) {
            return res.status(200).json({
                success: false,
                message: "La contraseña debe tener al menos 6 caracteres"
            })
        } else if (data.nombre == null || data.password == null || data.email == null) {
            return res.status(200).json({
                success: false,
                message: "No debe haber campos vacíos"
            })
        } else if (data.edad < 18) {
            return res.status(200).json({
                success: false,
                message: "El estudiante deber ser mayor de edad"
            })
        }else {

            const estado = 1;
            const [departamento] = await pool.query("Select id FROM departamentos WHERE descripcion = ?", data.departamento);
            const [municipio] = await pool.query("Select id FROM municipios WHERE descripcion = ?", data.municipio);
            
            if(departamento.length == 0){
                await pool.query("insert into departamentos set ?", {
                    descripcion: data.departamento
                })
            }

            const [departamentoId] = await pool.query("Select id FROM departamentos WHERE descripcion = ?", data.departamento);
            const deptId = departamentoId[0].id

            if(municipio.length == 0){
                await pool.query("insert into municipios set ?", {
                    descripcion: data.municipio,
                    departamento_id: deptId
                })
            }

            const [municipioId] = await pool.query("Select id FROM municipios WHERE descripcion = ?", data.municipio);
            const munId = municipioId[0].id

            let passwordHaash = await bcrypt.hash(data.password, 8);
            pool.query("INSERT INTO empleados set ? ",
                {
                    cedula: data.cedula,
                    fotoPerfil: data.imagen,
                    nombre: data.nombre,
                    edad: data.edad,
                    celular: data.celular,
                    email: data.email,
                    password: passwordHaash,
                    genero: data.genero,
                    estado: estado,
                    municipio_id: munId
                },
            )

            return res.status(200).json({
                success: true,
                message: "Estudiante registrado"
            })
        }
    } catch (error) {
        console.error('Error en la función postEstudiante:', error);
        return res.status(500).json({
            message: "Error en el servidor",
            success: false
        });
    }
}

export const updateEstudiante = (req, res) =>{
    res.send('actualizando profesor')
}

export const deleteEstudiante = (req, res) =>{
    res.send('eliminando profesor')
}

export const postLoginEstudiante = async (req, res) => {


    try {
        const data = req.body;
        if (data.cedula != null && data.password != null) {

            let passwordHaash = await (bcrypt.hash(data.password, 8))
            const [result] = await pool.query("SELECT * FROM empleados WHERE cedula = ?", [data.cedula]);

            if (result.length === 0) {
                return res.status(200).json({
                    message: "USUARIO NO ENCONTRADO",
                    success: false
                });
            } else if (!(await bcrypt.compare(data.password, result[0].password))) {
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
        console.error('Error en la función postLogin:', error);
        return res.status(500).json({
            message: "Error en el servidor",
            success: false
        });
    }
};
