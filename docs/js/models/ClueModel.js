export default class ClueModel {

    constructor({
        id,
        value,
        clue,
        answer,
        used = false
    }) {
        this.id = id;
        this.value = value;
        this.clue = clue;
        this.answer = answer;
        this.used = used;

    }

    markAsUsed() {
        this.used = true;
    }


}