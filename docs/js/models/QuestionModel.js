export default class QuestionModel{

    constructor(
        category,
        value,
        question,
        answer
    ){

        this.category = category;

        this.value = value;

        this.question = question;

        this.answer = answer;

        this.used = false;

    }

}