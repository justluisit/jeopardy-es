import PlayerModel from "./PlayerModel.js";

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

        this.answeredQuestions = 0;

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

    clearPlayers(){

        this.players = [];

    }

    createPlayers(names){

        this.clearPlayers();

        names.forEach((name,index)=>{

            this.players.push(
                new PlayerModel(
                    index + 1,
                    name
                )
            );

        });

    }

    getPlayer(playerId){

        return this.players.find(
            player => player.id === playerId
        );

    }

    recordAnswer(playerId, points, isCorrect){

        const player = this.getPlayer(playerId);

        if(!player){

            return false;

        }

        player.applyResult(points, isCorrect);

        this.answeredQuestions++;

        return true;

    }
    getLeaderboard(){

        return [...this.players]
            .sort((a, b) => b.score - a.score);

    }
    shouldShowLeaderboard(){

        return this.answeredQuestions > 0 &&
            this.answeredQuestions % 5 === 0;

    }
    isGameFinished(){

        return this.usedQuestions.size === 35;
    }
}
