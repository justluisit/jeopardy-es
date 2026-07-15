export function renderBoard(categories) {

    const board = document.getElementById("board");

    board.innerHTML = "";

    // Número de columnas dinámico
    board.style.gridTemplateColumns =
        `repeat(${categories.length}, 1fr)`;

    // Encabezados
    categories.forEach(category => {

        const cell = document.createElement("div");

        cell.className = "category";

        cell.textContent = category.name;

        board.appendChild(cell);

    });

    const values = [100,200,300,400,500];

    values.forEach(value=>{

        categories.forEach(()=>{

            const button=document.createElement("button");

            button.className="question";

            button.textContent=value;

            board.appendChild(button);

        });

    });

}