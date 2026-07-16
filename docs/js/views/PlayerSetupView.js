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

        input.addEventListener(
            "input",
            validatePlayers
        );

        container.appendChild(input);

    }

    validatePlayers();

}

export function validatePlayers(){

    const names = getPlayerNames();

    const valid =
        names.length>0 &&
        names.every(n=>n.length>0) &&
        new Set(names).size===names.length;

    document
        .getElementById("start-game")
        .disabled=!valid;

}

export function getPlayerNames(){

    return Array
        .from(
            document.querySelectorAll(
                "#player-inputs input"
            )
        )
        .map(input=>input.value.trim());

}