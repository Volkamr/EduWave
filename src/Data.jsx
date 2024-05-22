import Hombre from './assets/hombre.jpg'

export const User1 = 
{
    nombre: "Juan Felipe García",
    cargo: "empleado",
    correo: "juan@eduwave.edu.co",
    cedula: "912678924",
    telefono: "325619056",
    direccion: "Carrera 90 #54-3",
    ciudad_nac: "Medellín",
    fecha_nac: "02/04/2000",
    foto_perfil: Hombre
}

export const lista_cursos = 
[
    {
        nombre: "Capacitación A-30",
        inicio: "marzo 31/2024",
        final: "Abril 30/2024",
        estado: "En progreso",
        modalidad:"presencial",
        color: "#C48857"
    },
    {
        nombre: "Seguridad informática",
        inicio: "marzo 31/2024",
        final: "Abril 30/2024",
        estado: "En progreso",
        modalidad:"presencial",
        color:"#A25035"
    },
    {
        nombre: "Seguridad Laboral",
        inicio: "marzo 31/2024",
        final: "abril 8/2024",
        estado:"en progreso",
        modalidad: "virtual",
        color: "#C48857"
    },
    {
        nombre: "Automatización",
        inicio: "marzo 31/2024",
        final: "abril 8/2024",
        estado:"en progreso",
        modalidad: "virtual",
        color:"#A25035"
    }
]


export const lista_tareas = 
[
    {
        nombre: "Tarea #1",
        curso: lista_cursos[0].nombre,
        hora: "8:00"
    },
    {
        nombre: "Tarea #2",
        curso: lista_cursos[0].nombre,
        hora: "9:00"
    },{
        nombre: "Tarea #1",
        curso: lista_cursos[3].nombre,
        hora: "22:00"
    },
    {
        nombre: "Tarea #1",
        curso: lista_cursos[2].nombre,
        hora: "23:59"
    }
]

export const lista_fechas = [
    {
        fecha: "20/6/2024",
        tareas: [
            lista_tareas[0]
        ]
    },
    {
        fecha: "24/6/2024",
        tareas: [
            lista_tareas[1],
            lista_tareas[2]
        ]
    },
    {
        fecha: "30/6/2024",
        tareas: [
            lista_tareas[3]
        ]
    }
];

export const lista_lecciones = 
[
    {
        nombre: "Lección 1",
        descripcion: "Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion "
    },
    {
        nombre: "Lección 2",
        descripcion: "Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion "
    },
    {
        nombre: "Lección 3",
        descripcion: "Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion "
    },
    {
        nombre: "Lección 4",
        descripcion: "Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion "
    },
]