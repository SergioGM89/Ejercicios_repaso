const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: [
            'Don Pepito', 'Perico', 'Don José'
        ]
    },
    {
        nombre: 'Entornos de desarrollo',
        curso: 1,
        alumnos: [
            'Don Pepito', 'Perico', 'Don José', 'Juan', 'Luis'
        ]
        },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        alumnos: [
            'Juan', 'Perico', 'Andrés', 'Don Pepito'
        ]
    },
    {
        nombre: 'Desarrollo Web en entorno servidor',
        curso: 2,
        alumnos: [
            'Pedro', 'Lucas', 'Luis'
        ]
    }
]

function addAlumCourse(modulo, alumnosCurso){
    for(let i=0; i<modulo.alumnos.length; i++){
        alumnosCurso.add(modulo.alumnos[i])
    }
}

let alumnos1 = new Set();
let alumnos2 = new Set();

modulos.forEach(function (modulo){
    if(modulo.curso === 1){
        addAlumCourse(modulo, alumnos1);
    }else{
        addAlumCourse(modulo, alumnos2);
    }
});

let alumnoActual = new Set([...alumnos1].filter(alum => alumnos2.has(alum)));

for (let alum of alumnoActual) console.log(alum);