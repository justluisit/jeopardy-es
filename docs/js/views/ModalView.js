export function showQuestion(question) {

    const modal = document.getElementById("modal");

    document.getElementById("question-value").textContent =
        question.value;

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

}

export function closeModal() {

    document.getElementById("modal").classList.add("hidden");

}