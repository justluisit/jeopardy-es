import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";
import { GAME_CONFIG } from "../config.js";
import { initializeModal } from "../views/ModalView.js";
import { disableQuestion } from "../views/BoardView.js";
import { generatePlayerInputs } from "../views/PlayerSetupView.js";

let game = null;

export async function startGame(){

    try{

        game = await loadQuestions();

        renderBoard(
            game.categories,
            handleQuestionSelected
        );

        document.title = GAME_CONFIG.gameName;
        document.getElementById("subtitle").textContent =
            "Versión MVP v0.1.0";

        document.querySelector("h1").textContent =
            GAME_CONFIG.gameName;

        document
            .getElementById("show-answer")
            .addEventListener("click", showAnswer);

        document
            .getElementById("close-modal")
            .addEventListener("click", closeModal);

        initializeModal(handleQuestionClosed);

        generatePlayerInputs(3);

        document
            .getElementById("player-count")
            .addEventListener("change", event=>{

                generatePlayerInputs(
                    Number(event.target.value)
                );

            });
        

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

/*function handleQuestionSelected(question){

    const selected = findQuestion(
        game.categories,
        question.category,
        question.value
    );

    if (selected) {

        showQuestion(selected);

    }

}*/

function handleQuestionSelected(question) {

    if(game.isQuestionUsed(question.id)){
        return;
    }

    game.setCurrentQuestion(question);

    showQuestion(question);

}

function handleQuestionClosed(){

    if(!game.currentQuestion){
        return;
    }

    game.markQuestionAsUsed(
        game.currentQuestion.id
    );

    disableQuestion(
        game.currentQuestion.id
    );

    game.currentQuestion = null;

}

