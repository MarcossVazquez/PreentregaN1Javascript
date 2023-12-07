



function tipo(player){
    if(player == 1) {
        alert('Elegiste PIEDRA');
    } else if(player == 2) {
        alert('Elegiste PAPEL');
    } else if(player == 3) {
        alert('Elegiste TIJERA');
    }
}

function maquina(enemy){
    if(enemy == 0) {
        alert('La maquina eligió PIEDRA');
    } else if(enemy == 1) {
        alert('La maquina eligió PAPEL');
    } else if(enemy == 2) {
        alert('La maquina eligió TIJERA');
    }
}

function validar(enemy, player){
    if(enemy == (player-1)) {
        alert('Empate!');
    } else if(enemy == 0 && player == 2) {
        alert('GANASTEEE!!!');
    } else if(enemy == 1 && player == 3) {
        alert('GANASTEEE!!!');
    } else if(enemy == 2 && player == 1) {
        alert('GANASTEEE!!!');
    } else {
        alert('PERDISTE');
    }
}


alert('¡¡¡Bienvenido!!! Elige Piedra, Papel, o Tijera:');
let confirmacion=1;
while (confirmacion!=2) {
    let bandera = false;
    let player = null;

    
    do{
    player = prompt('Escribe 1 para PIEDRA, 2 para PAPEL, 3 para TIJERA');
    if((player >= 1) && (player <= 3)){
        bandera=true;
        tipo(player);
    } else if(bandera = false);
    }while (bandera == false);
    while(bandera == true) {

        
        let enemy = Math.round(Math.random() * 2);
        maquina(enemy);
        
        
        validar(enemy, player);
        bandera=false;
    }

    
    do{
        confirmacion = prompt('¿Queres Volver a Jugar? (1 para continuar o 2 para salir)');
    } while ((confirmacion!=1) && (confirmacion!=2));
}

alert('¡¡¡Gracias Por Jugar!!!')