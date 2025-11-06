// Démonstration de la fonction trackTotal

function trackTotal(initialValue) {
  let total = initialValue;
  return function(increment) {
    total += increment;
    return total;
  };
}

console.log("=== CRÉATION DE COMPTEURS ===");

// Création de différents compteurs
const counter1 = trackTotal(0);    // Commence à 0
const counter2 = trackTotal(100);  // Commence à 100
const money = trackTotal(50);      // Commence à 50

console.log("Counter1 créé avec valeur initiale 0"); // Valeur initiale 0
console.log("Counter2 créé avec valeur initiale 100"); // Valeur initiale 100
console.log("Money créé avec valeur initiale 50"); // Valeur initiale 50

console.log("\n=== UTILISATION DU COUNTER1 ===");
console.log("counter1(5):", counter1(5));     // 0 + 5 = 5
console.log("counter1(3):", counter1(3));     // 5 + 3 = 8
console.log("counter1(-2):", counter1(-2));   // 8 - 2 = 6

console.log("\n=== UTILISATION DU COUNTER2 ===");
console.log("counter2(10):", counter2(10));   // 100 + 10 = 110
console.log("counter2(5):", counter2(5));     // 110 + 5 = 115

console.log("\n=== UTILISATION DU MONEY ===");
console.log("money(20) [+20€]:", money(20));      // 50 + 20 = 70
console.log("money(-15) [-15€]:", money(-15));    // 70 - 15 = 55
console.log("money(100) [+100€]:", money(100));   // 55 + 100 = 155

console.log("\n=== VÉRIFICATION DE L'INDÉPENDANCE ===");
console.log("counter1 final:", counter1(0));  // 6 + 0 = 6
console.log("counter2 final:", counter2(0));  // 115 + 0 = 115
console.log("money final:", money(0));        // 155 + 0 = 155

console.log("\n=== SIMULATION D'UN COMPTE BANCAIRE ===");
const compte = trackTotal(1000);  // Solde initial: 1000€

console.log("Solde initial:", compte(0));        // 1000
console.log("Dépôt +500€:", compte(500));        // 1500
console.log("Retrait -200€:", compte(-200));     // 1300
console.log("Retrait -50€:", compte(-50));       // 1250
console.log("Dépôt +1000€:", compte(1000));      // 2250