// Fichier corrigé après passage du linter

// ✅ Corrigé: déclaration explicite des variables
function goodFunction() {
    const declaredVar = "bien déclaré";  // Variable déclarée
    
    // ✅ Corrigé: comparaison au lieu d'assignment
    const x = 5;
    if (x === 5) {
        console.log("logique correcte");
    }
    
    // ✅ Corrigé: utilisation de const au lieu de var
    const modernVar = "utilise const";
    
    // ✅ Corrigé: const pour les valeurs qui ne changent pas
    const shouldBeConst = "ne change jamais";
    console.log(shouldBeConst);
    
    console.log(declaredVar);
    console.log(modernVar);
    
    return "avec point-virgule";  // ✅ Point-virgule ajouté
}

// ✅ Corrigé: indentation cohérente
function goodIndentation() {
    console.log("bonne indentation");
    console.log("cohérent");
}

// ✅ Corrigé: guillemets cohérents
const consistentQuotes = 'guillemets simples';
const anotherString = 'guillemets simples aussi';

// ✅ Corrigé: pas de code inaccessible
function reachableCode() {
    console.log("code accessible");
    return "fin";
}

// ✅ Corrigé: comparaison stricte
function safeComparison(value) {
    return value === null;  // Comparaison stricte et return direct
}

// ✅ Fonction utilisée
function usedFunction() {
    return "utile";
}

// Utilisation des fonctions pour éviter "unused"
console.log("Fichier corrigé");
console.log(goodFunction());
goodIndentation();
console.log(consistentQuotes, anotherString);
console.log(reachableCode());
console.log(safeComparison(null));
console.log(usedFunction());