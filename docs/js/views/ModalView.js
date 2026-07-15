export function showQuestion(value) {

    const modal = document.getElementById("modal");

    document.getElementById("question-value").textContent =
        value;

    document.getElementById("question-text").textContent =
        "Aquí aparecerá la pregunta.";

    document.getElementById("answer-text").style.display = "none";

    modal.classList.remove("hidden");

}

export function showAnswer() {

    document.getElementById("answer-text").style.display =
        "block";

}

export function closeModal() {

    document.getElementById("modal").classList.add("hidden");

}