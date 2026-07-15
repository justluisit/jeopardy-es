import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";
import { GAME_CONFIG } from "../config.js";

export async function startGame(){

    try{

        const game = await loadQuestions();

        renderBoard(game.categories);

        document.title = GAME_CONFIG.gameName;

        document.querySelector("h1").textContent =
            GAME_CONFIG.gameName;

    }
    catch(error){

        console.error(error);

    }

}