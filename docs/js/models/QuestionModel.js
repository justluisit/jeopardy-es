export default class QuestionModel{

    constructor(
        id,
        category,
        value,
        question,
        answer
    ){
        this.id = id;

        this.category = category;

        this.value = value;

        this.question = question;

        this.answer = answer;

        this.used = false;
    }
}