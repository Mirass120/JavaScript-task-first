const existingRanking = localStorage.getItem("Ranking");
const RankingScore = existingRanking ? JSON.parse(existingRanking) : [];
const wynik = localStorage.getItem("Wynik");

//Wyświetlenie wyniku dla ostatniej gry
document.getElementById("Wynik").textContent = wynik;

// Posortowanie tablicy wyników według wyników (malejąco)
RankingScore.sort((a, b) => b.score - a.score);

// Ograniczenie wyników tylko do trzech najlepszych pozycji
const top3Results = RankingScore.slice(0, 3);

// Wygenerowanie prezentacji ranking w HTML
let rankingHTML = "";
top3Results.forEach((result, index) => {
  rankingHTML += `<p>${index + 1}. ${result.name}: ${result.score}</p>`;
});

// Wyświetlenie rankingu na stronie
document.getElementById("rankingContainer").innerHTML = rankingHTML;
