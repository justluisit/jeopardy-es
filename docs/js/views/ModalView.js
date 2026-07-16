export function initializeModal(onClose){

    document
        .getElementById("close-modal")
        .addEventListener("click", () => {

            closeModal();

            onClose();

        });

}
export function initializeEvaluation(onSave){

    document
        .getElementById("save-result")
        .addEventListener("click", () => {

            onSave();

        });

}

export function showQuestion(question) {

    hideEvaluation();

    const modal = document.getElementById("modal");

    document.getElementById("question-value").textContent =
    `${question.value} puntos`;

    document.getElementById("question-category").textContent =
        question.category;

    document.getElementById("question-text").textContent =
        question.question;

    document.getElementById("answer-text").textContent =
        question.answer;

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

