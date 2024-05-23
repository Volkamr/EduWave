import {pool} from '../db.js';
import bcrypt from 'bcrypt';

export const getProfesores = async(req, res) =>{
    const [result] = await pool.query(
        "Select cedula, fotoPerfil, nombre, profesion, edad, celular, email, password genero from instructores i " + 
        "inner join municipios m on i.municipio_id = m.id " + 
        "inner join departamentos d on m.departamento_id = d.id " +
        "estado = 1",
    );
    res.json(result);
}

export const getProfesor = async(req, res) =>{
    const nombre = req.params.nombre;
    const [result] = await pool.query(
        "Select cedula, fotoPerfil, nombre, profesion, edad, celular, email, password, genero, estado from instructores i " + 
        "inner join municipios m on i.municipio_id = m.id " + 
        "inner join departamentos d on m.departamento_id = d.id " + 
        "where nombre = ? and estado = 1",
        nombre
    );
    res.json(result);
}

export const createProfesor = async(req, res) =>{
    try {
        const data = req.body;
        const [result_email] = await pool.query("SELECT * FROM instructores WHERE email = ?", [data.email]);
        const [result_celular] = await pool.query("SELECT * FROM instructores WHERE celular = ?", [data.celular]);
        
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
                message: "El instructores deber ser mayor de edad"
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
            pool.query("INSERT INTO instructores set ? ",
                {
                    cedula: data.cedula,
                    fotoPerfil: data.imagen,
                    nombre: data.nombre,
                    profesion: data.profesion,
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
                message: "Profesor registrado"
            })
        }
    } catch (error) {
        console.error('Error en la función postLogin:', error);
        return res.status(500).json({
            message: "Error en el servidor",
            success: false
        });
    }
}

export const updateProfesor = (req, res) =>{
    res.send('actualizando profesor')
}

export const deleteProfesor = (req, res) =>{
    res.send('eliminando profesor')
}
