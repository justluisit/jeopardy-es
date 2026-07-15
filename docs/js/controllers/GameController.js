import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";

export async function startGame(){

    const game = await loadQuestions();

    renderBoard(game.categories);

}