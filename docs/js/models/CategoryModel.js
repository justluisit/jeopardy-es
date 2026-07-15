export default class CategoryModel {

    constructor(data){

        this.id = data.id;

        this.name = data.name;

        this.questions = [];

    }

    addQuestion(question){

        this.questions.push(question);

    }

}