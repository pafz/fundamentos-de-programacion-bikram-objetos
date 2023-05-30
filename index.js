//### Objetos ###

//#### Declaración ####
//1
const Coche = {
    marca: '',
    modelo: '',
    matricula: ''
}
//2
const Casa = {
    codPostal: '',
    calle: '',
    portal: '',
    piso:''
}
//3
const FullStackDeveloper = {
    lenguajes : [],
    proyectos: []
}
//4
const Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar(){
        console.log('guau');
    },
    popo(){
        return Math.random() * 3;
    }
}

//#### Lectura de propiedades ####
//5
marcaPortatil = Portatil.marca;
//6
marcaPortatil2 = Portatil['marca'];
//7
grupos = Concierto.grupos;
//8
RGB = [Led.rojo, Led.verde, Led.azul];

//#### Modificación de propiedades ####
//9
Portatil.modelo = 'P345';
//10
Concierto.cartelera.push('Guns N\' Roses')
//11
Concierto.fecha = new Date();
//12
Impresora.imprimiendo = objetoConPropiedades = {
    nombreArchivo: '',
    copias: '',
    numPaginas: ''
}

//#### Declaración ####
//13
const Noticia = {
    titular: '',
    cuerpo: ''
}

//14
const Persona = {
    nombre: '',
    apellidos: '',
    edad: ''
}
//15
const Avion = {
    numPasajeros: '',
    despegar(){
        console.log('despegando');
    },
    volar(){
        console.log('llegando al destino');
    },
    aterrizar(){
        console.log('aterrizando')
    }
}
//16
const Paquete = {
    contenido: []
}
//17
const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: ''
}
//#### Lectura de propiedades ####
//18
codError = O_Error.codigo;
//19
integrantes = Grupo.integrantes;
//20
nivelesTinta = Impresora.tinta;
//21
pixeles = Pantalla.pixeles;
//22
especificaciones = Movil['especificaciones'];
//#### Modificación de propiedades
//23
Grupo.numIntegrantes = 5;
//24
Pantalla.dimensiones = '1920x1080';
//25
if(Led.encendido){
    Led.encendido = false;
} else {
    Led.encendido = true;
}
//26
Movil.temperatura = '20º';
