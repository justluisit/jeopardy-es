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

        const header = document.createElement("div");

        header.className = "category";

        header.textContent = category.name;

        board.appendChild(header);

    });

    // Filas de preguntas
    const maxQuestions = Math.max(
        ...categories.map(c => c.questions.length)
    );

    for (let row = 0; row < maxQuestions; row++) {

        categories.forEach(category => {

            const question = category.questions[row];

            if (!question) {

                const empty = document.createElement("div");

                board.appendChild(empty);

                return;

            }

            const button = document.createElement("button");

            button.dataset.questionId = question.id;

            button.className = "question";

            button.textContent = question.value;

            button.addEventListener("click", () => {

                onQuestionSelected(question);

            });

            board.appendChild(button);

        });

    }

    

}

export function disableQuestion(questionId){

    const button = document.querySelector(
        `[data-question-id="${questionId}"]`
    );

    if(!button){
        return;
    }

    button.disabled = true;

    button.classList.add("used");
}

