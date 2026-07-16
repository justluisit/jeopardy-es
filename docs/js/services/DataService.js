import GameModel from "../models/GameModel.js";
import CategoryModel from "../models/CategoryModel.js";
import QuestionModel from "../models/QuestionModel.js";

export async function loadQuestions(){

    const response = await fetch("./data/questions.json");

    if(!response.ok){

        throw new Error("No se pudo cargar questions.json");

    }

    const data = await response.json();

    return buildGame(data);

}

function buildQuestions(categories) {

    categories.forEach(category => {

        category.questions = category.questions.map(question => {

            return new QuestionModel({
                ...question,
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

        categoryData.questions.forEach(questionData=>{

            const question = new QuestionModel({

                ...questionData,

                categoryId: category.id

            });

            category.addQuestion(question);

        });

        game.addCategory(category);

    });

    return game;

}
