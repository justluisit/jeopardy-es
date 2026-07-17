import { GAME_CONFIG } from "../config.js";
import { showClue } from "./ModalView.js";

export function renderBoard(categories, onClueSelected) {

    const board = document.getElementById("board");

    board.innerHTML = "";

    // Número de columnas dinámico
    board.style.gridTemplateColumns =
        `repeat(${categories.length}, 1fr)`;


    // Encabezados
    categories.forEach(category => {

        const header = document.createElement("div");

        header.className = "category";

        header.textContent = category.name;

        board.appendChild(header);

    });

    // Filas de preguntas
    const maxClues = Math.max(
        ...categories.map(c => c.clues.length)
    );

    for (let row = 0; row < maxClues; row++) {

        categories.forEach(category => {

            const clue = category.clues[row];

            if (!clue) {

                const empty = document.createElement("div");

                board.appendChild(empty);

                return;

            }

            const button = document.createElement("button");

            button.dataset.clueId = clue.id;

            button.className = "clue";

            button.textContent = clue.value;

            button.addEventListener("click", () => {

                onClueSelected(clue);

            });

            board.appendChild(button);

        });

    }

    

}

export function disableClue(clueId){

    const button = document.querySelector(
        `[data-clue-id="${clueId}"]`
    );

    if(!button){
        return;
    }

    button.disabled = true;

    button.classList.add("used");
}

export function setBoardEnabled(enabled){

    document
        .querySelectorAll(".clue")
        .forEach(button=>{

            button.disabled=!enabled;

        });

}

