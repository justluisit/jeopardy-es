export default class GameModel {

    constructor() {

        this.info = {};

        this.categories = [];

        this.players = [];

        this.currentPlayer = 0;

        this.currentQuestion = null;

        this.usedQuestions = new Set();

        this.scoreBoard = [];

        this.gameStarted = false;

        this.board = [];

        this.players = [];

        this.gameReady = false;

    }

    setInfo(info){

        this.info = info;

    }

    addCategory(category){

        this.categories.push(category);

    }

    setCurrentQuestion(question){

        this.currentQuestion = question;

    }

    markQuestionAsUsed(questionId){

        this.usedQuestions.add(questionId);

    }

    isQuestionUsed(questionId){

        return this.usedQuestions.has(questionId);

    }

    addPlayer(player){

        this.players.push(player);

    }

    startGame(){

        this.gameReady = true;

    }
}
