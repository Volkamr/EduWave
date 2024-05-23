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

export const leccionDetallada = 
{
    id:1,
    nombre: "Nombre completo de la lección",
    descripcion_corta: "Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion",
    descripcion_larga:   `
    Lección: [Título de la Lección]
    
    Descripción:
    En esta lección, exploraremos [tema principal de la lección]. Nos sumergiremos en [aspectos clave o conceptos fundamentales relacionados con el tema]. A través de una combinación de teoría y práctica, aprenderemos [objetivos específicos que se abordarán durante la lección].
    
    Contenido:
    - Introducción a [Tema]: Comenzaremos con una introducción a [tema], donde abordaremos su importancia y relevancia en [campo de estudio o aplicación].
    - Conceptos Fundamentales: Profundizaremos en los conceptos fundamentales de [tema], incluyendo [subtemas relevantes].
    - Estudios de Caso: Analizaremos varios estudios de caso relacionados con [tema], lo que nos permitirá entender su aplicación práctica en diferentes contextos.
    - Práctica Guiada: Realizaremos ejercicios prácticos para afianzar los conceptos aprendidos durante la lección.
    - Recursos Adicionales: Proporcionaremos recursos adicionales como lecturas recomendadas, enlaces a sitios web relevantes y materiales multimedia para aquellos que deseen profundizar más en [tema].

    `
    ,
    fecha_creacion: "01/03/2024"

}

export const lista_temas = 
[
    {
        nombre: "Tema 1",
        archivos:
        [
            {
                nombre: "archivo1.txt",
            },
            {
                nombre: "archivo2.txt"
            },
            {
                nombre: "archivo3.pdf"
            }
        ]
    },
    {
        nombre: "Tema 2",
        archivos:
        [
            {
                nombre: "archivo1.txt",
            },
            {
                nombre: "archivo2.txt"
            },
            {
                nombre: "archivo3.pdf"
            },
            {
                nombre: "video"
            }
        ]
    }
]

export const lista_preguntas = [
    {
        pregunta: "Pregunta 1",
        descripcion: "Descripcion pregunta 1",
        opciones: ["opcion_a", "opcion_b", "opcion_c"]
    },
    {
        pregunta: "Pregunta 2",
        descripcion: "Descripcion pregunta 2",
        opciones: ["opcion_a", "opcion_b", "opcion_c"]
    },
    {
        pregunta: "Pregunta 3",
        descripcion: "Descripcion pregunta 3",
        opciones: ["opcion_a", "opcion_b", "opcion_c"]
    },
    {
        pregunta: "Pregunta 4",
        descripcion: "Descripcion pregunta 4",
        opciones: ["opcion_a", "opcion_b", "opcion_c"]
    },
    {
        pregunta: "Pregunta 5",
        descripcion: "Descripcion pregunta 5",
        opciones: ["opcion_a", "opcion_b", "opcion_c"]
    }
];
