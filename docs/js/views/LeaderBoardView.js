const modal = document.getElementById("leaderboard-modal");
const title = document.getElementById("leaderboard-title");
const list = document.getElementById("leaderboard-list");
const progress = document.getElementById("leaderboard-progress");
const continueButton = document.getElementById("continue-game");

export function initializeLeaderboard(onContinue) {

    continueButton.addEventListener("click", () => {
        onContinue();
    });

}


//export function showLeaderboard(players, answeredQuestions, totalQuestions, isFinal = false) {
export function showLeaderboard({
    players,
    answeredQuestions,
    totalQuestions,
    isFinal = false
}) {
    title.textContent = isFinal
        ? "🏆 Clasificación Final"
        : "🏆 Clasificación";

    list.innerHTML = "";

    const medals = ["🥇", "🥈", "🥉"];


    players.forEach((player, index) => {

        const row = document.createElement("div");

        const position = medals[index] || `${index + 1}.`;

        row.className = "leaderboard-row";

        const left = document.createElement("span");
        left.textContent = `${position} ${player.name}`;

        const right = document.createElement("span");
        right.textContent = `${player.score} pts`;

        row.appendChild(left);
        row.appendChild(right);

        list.appendChild(row);

    });

    progress.textContent =
        `Preguntas respondidas: ${answeredQuestions} / ${totalQuestions}`;

    continueButton.textContent =
        isFinal
            ? "Nueva partida"
            : "Continuar";

    modal.classList.remove("hidden");

}

export function closeLeaderboard() {

    modal.classList.add("hidden");

}