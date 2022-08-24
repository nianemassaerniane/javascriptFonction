/*var tableMultiplication =(nombre , limite = 12) =>{
    if(limite && typeof(limite) === "number"){
       
    }
    if(nombre && typeof(nombre)=== "number"){
        for( let index = 0; index <= limite; index++){
            console.table(` ${nombre} x ${index } = ${ index*nombre}` );
        }
    }
    else{
        console.log(" le paramétre doit etre un nombre .");
    }
}
*/

/*
carré d'un nombre*/
var carre = (nombre) =>{
    if (nombre && typeof(nombre) === "number"){
        return nombre*nombre;
    }
    else{
        return null;
    }
    
}