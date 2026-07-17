export default class PlayerModel {

    constructor(id, name) {

        this.id = id;

        this.name = name;

        this.score = 0;

        this.correctAnswers = 0;

        this.wrongAnswers = 0;

    }

    applyResult(points, isCorrect){

        if(isCorrect){

            this.score += points;

            this.correctAnswers++;

        }else{

            this.score -= points;

            this.wrongAnswers++;

        }

    }

}
