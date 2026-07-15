export default class QuestionModel {

    constructor(data) {

        this.id = data.id;

        this.categoryId = data.categoryId;

        this.value = data.value;

        this.question = data.question;

        this.answer = data.answer;

        this.used = false;

    }

}