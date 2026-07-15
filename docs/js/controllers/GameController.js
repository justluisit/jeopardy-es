import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";

export async function startGame(){

    try{

        const game = await loadQuestions();

        renderBoard(game.categories);

    }
    catch(error){

        console.error(error);

    }

}