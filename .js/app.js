// Pregunta = prompt("Cual es tu nombre?");
// nombre = '';


// if(nombre = ''){
//     alert().remove();
// }else{
//     alert(`¡${Pregunta} ${nombre}hola la ESFC te regala un fuerte abrazo y esperando que la gracia de Dios este contigo y con tu familia que disfrutes tu estadia en nuestra pagina atte: ESFCoficial!`);
// }

// Manera de editar atributos en el html(se neceseta de una clase de css)
// 1.- .ejemplo.setAttrubute("contentEdit", "true")


    const boton = document.querySelector('.evento1');
    let date = new Date();
    mostrar = document.createTextNode(`fecha actual: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} y son las ${date.getHours()}: ${date.getMinutes()}`)
    // let EG = {dia: 15, mes: 11,año: 2020}
    // let falta = {dia: date.getDay(), mes: date.getMonth(),año: date.getFullYear()}
    // let restar = EG-falta
    // let mostrar = document.createTextNode(rest)
    boton.appendChild(mostrar);


