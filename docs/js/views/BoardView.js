import { GAME_CONFIG } from "../config.js";
import { showQuestion } from "./ModalView.js";

export function renderBoard(categories, onQuestionSelected) {

    const board = document.getElementById("board");

    board.innerHTML = "";

    // Número de columnas dinámico
    board.style.gridTemplateColumns =
        `repeat(${categories.length}, 1fr)`;

    // Encabezados
    categories.forEach(category => {

        const cell = document.createElement("div");

        cell.className = "category";

        cell.textContent = category.name;

        board.appendChild(cell);

    });

    const values = GAME_CONFIG.questionValues;

    values.forEach(value=>{

        categories.forEach(category => {

            const button=document.createElement("button");

            button.className="question";

            button.textContent=value;

            board.appendChild(button);

           button.addEventListener("click", () => {

                onQuestionSelected({
                    category: category.name,
                    value: value
                });

            });

        });

    });

    

}