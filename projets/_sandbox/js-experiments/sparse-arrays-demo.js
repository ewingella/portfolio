// Démonstration des Sparse Arrays

console.log("=== CRÉATION DE SPARSE ARRAYS ===");

// 1. Avec new Array()
let sparse1 = new Array(4);
console.log("new Array(4):", sparse1);
console.log("Length:", sparse1.length);
console.log("sparse1[0]:", sparse1[0]);
console.log("0 in sparse1:", 0 in sparse1);

console.log("\n=== ASSIGNMENT NON-CONSÉCUTIF ===");

// 2. Assignment à des indices non-consécutifs
let sparse2 = [];
sparse2[0] = 'Premier';
sparse2[3] = 'Quatrième';
sparse2[7] = 'Huitième';
console.log("sparse2:", sparse2);
console.log("Length:", sparse2.length);

console.log("\n=== DIFFÉRENCE EMPTY vs UNDEFINED ===");

let sparse = [1, , 3, , 5];
let dense = [1, undefined, 3, undefined, 5];

console.log("Sparse:", sparse);
console.log("Dense:", dense);

console.log("1 in sparse:", 1 in sparse);  // false
console.log("1 in dense:", 1 in dense);    // true

console.log("\n=== COMPORTEMENT AVEC LES MÉTHODES ===");

console.log("--- forEach (ignore empty) ---");
sparse.forEach((val, i) => console.log(`Index ${i}: ${val}`));

console.log("\n--- for...of (empty devient undefined) ---");
for (let val of sparse) {
    console.log("Valeur:", val);
}

console.log("\n--- map (preserve empty slots) ---");
let doubled = sparse.map(x => x * 2);
console.log("Original:", sparse);
console.log("Doubled:", doubled);

console.log("\n=== MÉTHODES QUI TRAITENT LES EMPTY ===");

// Méthodes qui IGNORENT les empty
console.log("filter:", sparse.filter(x => x > 0));
console.log("reduce:", sparse.reduce((acc, val) => acc + val, 0));

// Méthodes qui INCLUENT les empty (comme undefined)
console.log("join:", sparse.join('-'));
console.log("Array.from:", Array.from(sparse));

console.log("\n=== COMMENT DÉTECTER LES SPARSE ARRAYS ===");

function isSparse(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            return true;
        }
    }
    return false;
}

console.log("sparse est sparse?", isSparse(sparse));  // true
console.log("dense est sparse?", isSparse(dense));    // false

console.log("\n=== DENSIFIER UN SPARSE ARRAY ===");

function densify(sparseArray) {
    return Array.from(sparseArray);
}

let densified = densify(sparse);
console.log("Original sparse:", sparse);
console.log("Densifié:", densified);
console.log("Est maintenant sparse?", isSparse(densified)); // false