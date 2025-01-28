const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:passwd@almacen.1zegl.mongodb.net/almacen')
  .then(() => console.log('Connected!'));

//definir esquema del documento
const ordenadorSchema = new mongoose.Schema({
marca:String,
precio:Number
});

//creamos el modelo
const Ordenador = mongoose.model("ordenadore",ordenadorSchema,"ordenadores");
//buscamos el primer registro 
const buscaPrimero = ()=>{
    Ordenador.findOne()
    .then(ordenador=>{
        if(ordenador){
            console.log("Primer ordenador encontrado: ",ordenador);
        }else{
            console.log("No hemos encontrado ordenador");
        }
    })
    .catch(err=>error("Error al obtener el ordenador; ",err));
}
const buscaTodos = ()=>{
    Ordenador.find()
    .then(ordenadores=>{
        if(ordenadores.length>0){
            console.log("Ordenadores encontrados: ",ordenadores);
        }else{
            console.log("No hemos encontrado ordenadores");
        }
    })
    .catch(err=>error("Error al obtener el ordenadores; ",err));
}
const buscaId = (id)=>{
    Ordenador.findById(id)
    .then(ordenador=>{
        if(ordenador){
            console.log("Ordenador encontrado: ",ordenador);
        }else{
            console.log("No hemos encontrado ordenador");
        }
    })
    .catch(err=>error("Error al obtener el ordenador; ",err));
}
//buscaTodos();

const idBuscado="6798f7a97d38fd52c9a3cbeb";

//buscaId(idBuscado);

//Buscar por precios preciosos

const buscaPrecioMayor = ()=>{
    Ordenador.find({precio:{$gt:150}})
    .then(ordenador=>{
        if(ordenador){
            console.log("ordenadores con preico mayor que 150: ",ordenador);
        }else{
            console.log("No hemos encontrado ordenador");
        }
    })
    .catch(err=>error("Error al obtener el ordenador; ",err));
}

buscaPrecioMayor();
