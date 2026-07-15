import QuestionModel from "../models/QuestionModel.js";

export async function loadQuestions() {

    const response = await fetch("./data/questions.json");

    if (!response.ok) {
        throw new Error("No se pudo cargar questions.json");
    }

    const data = await response.json();

    data.categories = buildQuestions(data.categories);

    return data;
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
