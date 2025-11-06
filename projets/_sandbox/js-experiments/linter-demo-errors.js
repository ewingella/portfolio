// Fichier avec erreurs volontaires pour démonstration du linter

// ❌ Erreur: pas de déclaration
function badFunction() {
    undeclaredVar = "problème";  // Variable non déclarée
    var unusedVar = "jamais utilisée";  // Variable non utilisée
    
    // ❌ Erreur: assignment au lieu de comparaison
    if (x = 5) {
        console.log("erreur de logique")
    }
    
    // ❌ Erreur: utilisation de var au lieu de const/let
    var oldStyleVar = "utilise var";
    
    // ❌ Erreur: variable qui pourrait être const
    let shouldBeConst = "ne change jamais";
    console.log(shouldBeConst);
    
    return "pas de point-virgule"  // ❌ Manque ;
}

// ❌ Erreur: fonction jamais utilisée
function neverUsed() {
    return "inutile";
}

// ❌ Erreur: indentation inconsistante
function badIndentation() {
console.log("mauvaise indentation");
    console.log("inconsistant");
}

// ❌ Erreur: guillemets mixtes
const mixedQuotes = "guillemets doubles";
const anotherString = 'guillemets simples';

// ❌ Erreur: code inaccessible
function unreachableCode() {
    return "fin";
    console.log("jamais exécuté");  // Code inaccessible
}

// ❌ Erreur: comparaison dangereuse
function dangerousComparison(value) {
    if (value == null) {  // Devrait être === 
        return true;
    }
    return false;
}

console.log("Fichier avec erreurs pour démonstration");