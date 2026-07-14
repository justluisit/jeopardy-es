const categories = [
    "Mundial",
    "Ecuador",
    "Dragon Ball",
    "Sitcoms",
    "ISO8583",
    "Emo 2000"
];

const values = [100,200,300,400,500];

const board = document.getElementById("board");

function buildBoard(){

    board.innerHTML="";

    categories.forEach(category=>{

        const cell=document.createElement("div");

        cell.className="category";

        cell.textContent=category;

        board.appendChild(cell);

    });

    values.forEach(value=>{

        categories.forEach(()=>{

            const cell=document.createElement("button");

            cell.className="question";

            cell.textContent=value;

            board.appendChild(cell);

        });

    });

}

buildBoard();
