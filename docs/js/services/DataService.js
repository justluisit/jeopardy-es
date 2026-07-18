import GameModel from "../models/GameModel.js";
import CategoryModel from "../models/CategoryModel.js";
import ClueModel from "../models/ClueModel.js";

export async function loadClues(){

    const response = await fetch("./data/questions.json");

    if(!response.ok){

        throw new Error("No se pudo cargar questions.json");

    }

    const data = await response.json();

    return buildGame(data);

}

function buildClues(categories) {

    categories.forEach(category => {

        category.clues = category.clues.map(clue => {

            return new ClueModel({
                ...clue,
                categoryId: category.id
            });

        });

    });

    return categories;
}

function buildGame(data){

    const game = new GameModel();

    game.setInfo(data.game);

    data.categories.forEach(categoryData=>{

        const category = new CategoryModel(categoryData);

        categoryData.clues.forEach(clueData=>{

            const clue = new ClueModel({

                ...clueData,

                categoryId: category.id

            });

            category.addClue(clue);

        });

        game.addCategory(category);

    });

    return game;

}
