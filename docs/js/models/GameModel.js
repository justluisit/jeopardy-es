import PlayerModel from "./PlayerModel.js";

export default class GameModel {

    constructor() {

        this.info = {};

        this.categories = [];

        this.players = [];

        this.currentPlayer = 0;

        this.currentClue = null;

        this.usedClues = new Set();

        this.scoreBoard = [];

        this.gameStarted = false;

        this.board = [];

        this.players = [];

        this.gameReady = false;

        this.answeredClues = 0;

    }

    setInfo(info){

        this.info = info;

    }

    addCategory(category){

        this.categories.push(category);

    }

    setCurrentClue(clue){

        this.currentClue = clue;

    }

    markClueAsUsed(clueId){

        this.usedClues.add(clueId);

    }

    isClueUsed(clueId){

        return this.usedClues.has(clueId);

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

        this.answeredClues++;

        return true;

    }
    getLeaderboard(){

        return [...this.players]
            .sort((a, b) => b.score - a.score);

    }
    shouldShowLeaderboard(){

        return this.answeredClues > 0 &&
            this.answeredClues % 5 === 0;

    }
    isGameFinished(){

        return this.usedClues.size === 35;
    }
}
