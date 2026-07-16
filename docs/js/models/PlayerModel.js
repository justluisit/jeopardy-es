export default class PlayerModel {

    constructor(id, name) {

        this.id = id;

        this.name = name;

        this.score = 0;

        this.correctAnswers = 0;

        this.wrongAnswers = 0;

    }

    addScore(points) {

        this.score += points;

        this.correctAnswers++;

    }

    subtractScore(points) {

        this.score -= points;

        this.wrongAnswers++;

    }

}
