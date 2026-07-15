import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";
import { GAME_CONFIG } from "../config.js";

let game = null;

export async function startGame(){

    try{

        game = await loadQuestions();

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

    const selected = findQuestion(
        game.categories,
        question.category,
        question.value
    );

    if (selected) {

        showQuestion(selected);

    }

}

function findQuestion(categories, categoryName, value) {

    const category = categories.find(c => c.name === categoryName);

    if (!category) {

        return null;

    }

    return category.questions.find(q => q.value === value);

}