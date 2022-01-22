class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }

    getfullName(){
        return `${this.nombre} ${this.apellido}`
    }
    adMascota(nombre){
        this.mascotas.push(nombre)
    }
    countMascotas(){
        let counter=0
        this.mascotas.forEach(mascota => counter++ )
        return counter
    }
    addBook(nombre,autor){
        this.libros.push({"nombre":nombre,"autor":autor})
    }
    getBookNames(){
        let arrayNombres
        this.libros.forEach(libro =>arrayNombres.push(libro.nombre) )
    }


}