export default class GameModel {

    constructor() {

        this.players = [];

        this.currentPlayer = 0;

        this.categories = [];

        this.currentQuestion = null;

        this.usedQuestions = new Set();

        this.scoreBoard = [];

        this.gameStarted = false;

    }

    addCategory(category) {

        this.categories.push(category);

    }

    setCurrentQuestion(question) {

        this.currentQuestion = question;

    }

    markQuestionAsUsed(questionId) {

        this.usedQuestions.add(questionId);

    }

    isQuestionUsed(questionId) {

        return this.usedQuestions.has(questionId);

    }
}