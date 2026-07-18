export function initializeModal(onClose){

    document
        .getElementById("close-modal")
        .addEventListener("click", () => {

            closeModal();

            onClose();

        });

}
export function initializeEvaluation(
    onCorrect,
    onIncorrect
){

    document
        .getElementById("correct-answer")
        .addEventListener(
            "click",
            onCorrect
        );

    document
        .getElementById("incorrect-answer")
        .addEventListener(
            "click",
            onIncorrect
        );

}

export function showClue(clue) {

    hideEvaluation();

    const modal = document.getElementById("modal");

    document.getElementById("clue-value").textContent =
    `${clue.value} puntos`;

    document.getElementById("clue-category").textContent =
        clue.category;

    document.getElementById("clue-text").textContent =
        clue.clue;

    document.getElementById("answer-text").textContent =
        clue.answer;

    document.getElementById("answer-text").style.display =
        "none";

    modal.classList.remove("hidden");

}

export function showAnswer() {

    document.getElementById("answer-text").style.display =
        "block";

    showEvaluation();

}

export function closeModal() {

    document.getElementById("modal").classList.add("hidden");

}

export function showEvaluation() {

    document.getElementById("evaluation-panel").classList.remove("hidden");

}

export function hideEvaluation() {

    document.getElementById("evaluation-panel").classList.add("hidden");

}

export function populatePlayers(players){

    const container = document.getElementById("player-options");

    container.innerHTML = "";

    players.forEach(player => {

        const label = document.createElement("label");

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = "selected-player";

        radio.value = player.id;

        label.appendChild(radio);

        label.append(` ${player.name}`);

        container.appendChild(label);

    });

}

export function getSelectedPlayerId() {

    const selected = document.querySelector(
        'input[name="selected-player"]:checked'
    );

    return selected ? Number(selected.value) : null;

}

