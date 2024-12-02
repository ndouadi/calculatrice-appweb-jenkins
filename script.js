let afficher = document.getElementById('afficher');

function calculer(value) {
    afficher.value += value;
}

function effacer() {
    afficher.value = '';
}

function resultat() {
    try {
        afficher.value = eval(afficher.value);
    } catch (error) {
        afficher.value = 'Erreur';
    }
}