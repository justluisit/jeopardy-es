import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";
import { GAME_CONFIG } from "../config.js";

export async function startGame(){

    try{

        const game = await loadQuestions();

        renderBoard(
            game.categories,
            handleQuestionSelected
        );

        document.title = GAME_CONFIG.gameName;

        document.querySelector("h1").textContent =
            GAME_CONFIG.gameName;

        document
            .getElementById("show-answer")
            .addEventListener("click", showAnswer);

        document
            .getElementById("close-modal")
            .addEventListener("click", closeModal);

        

    }
    catch(error){

        console.error(error);

    }

}

import {
    showAnswer,
    showQuestion,
    closeModal
} from "../views/ModalView.js";

function handleQuestionSelected(question){

    showQuestion(question.value);

}