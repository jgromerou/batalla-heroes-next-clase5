

export async function POST(request) {
    //Obtener el cuerpo JSON de la petición con los personajes que se enfrentaron
    const { personaje1, personaje2 } = await request.json();

    function randomBetween(min,max){
        return Math.random() * (max - min) + min;
    }

    function calcularDanio(atacante, defensor){
        //calculamos el daño base: ataque menos defensa, pero minimo 10
        // math max garantiza que el daño no sea menor a 10
        let base = Math.max(atacante.ataque - defensor.defensa, 10);

        //calculamos una variación aleatoria entre 90% y 110% del daño base multiplicado
        const variacion = randomBetween(0.9,1.1);
        base = base * variacion;

        //probabilidad del 10% de fallo, ataque que no hará daño
        if(Math.random() < 0.1) return 0;

        //probabilidad del 20% de golpe critico que hara 1.5 veces mas que el base
        if(Math.random() < 0.2) base *= 1.5;

        //redondeamos el daño final al entero mas cercano.
        return Math.round(base);
    }

    //copiamos la vida inicial para manipular sin alterar los objetos originales
    let vidaA = personaje1.vida;
    let vidaB = personaje2.vida;

    //Determinamos quien ataca primero segun la velocidad.
    const atacaPrimero = personaje1.velocidad >= personaje2.velocidad ? "A" : "B";

    //Definimos la cantidad de rondas que durará la batalla
    const rondas = Math.floor(randomBetween(3,6));

    //Simulamos cada ronda de combate
    for(let i = 0; i < rondas; i++){
        if(atacaPrimero == "A"){
            vidaB -= calcularDanio(personaje1,personaje2);
            if(vidaB <= 0) break;
            vidaA -= calcularDanio(personaje2,personaje1);
            if(vidaA <= 0) break;
        }else{
            vidaA -= calcularDanio(personaje2,personaje1);
            if(vidaA <= 0) break;
             vidaB -= calcularDanio(personaje1,personaje2);
            if(vidaB <= 0) break;  
        }
    }

    //Nos aseguramos que la vida NO QUEDE NEGATIVA minima de 0
    vidaA = Math.max(vidaA, 0);
    vidaB = Math.max(vidaB, 0);

    //Definimos al ganador
    const ganador = vidaA === vidaB ? "empate" : vidaA > vidaB ? personaje1.nombre : personaje2.nombre;

    //devolvemos al frotend la respuesta con el resultado
    return new Response (JSON.stringify({ganador,vidaA,vidaB,rondas}),{
        status: 200,
        headers: {"Content-Type":"application/json"}
    })

}