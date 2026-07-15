export async function loadQuestions() {

    const response = await fetch("./data/questions.json");

    if (!response.ok) {
        throw new Error("No se pudo cargar questions.json");
    }

    return await response.json();
}