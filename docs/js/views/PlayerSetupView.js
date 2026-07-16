export function generatePlayerInputs(count){

    const container = document.getElementById("player-inputs");

    const values = [];

    container
        .querySelectorAll("input")
        .forEach(input => values.push(input.value));

    container.innerHTML = "";

    for(let i=0;i<count;i++){

        const input=document.createElement("input");

        input.type="text";

        input.placeholder=`Jugador ${i+1}`;

        input.value = values[i] ?? "";

        container.appendChild(input);

    }

}