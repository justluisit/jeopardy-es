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
}