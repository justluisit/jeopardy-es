export default class CategoryModel {

    constructor(data){

        this.id = data.id;

        this.name = data.name;

        this.clues = [];

    }

    addClue(clue){

        this.clues.push(clue);

    }

}