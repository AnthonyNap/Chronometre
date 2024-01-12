
window.onload = function () {
  // Initialisation des variables pour compter les dixièmes de secondes et les secondes.
  let seconds = 0;
  let tens = 0;

  // Récupération des éléments du DOM pour afficher les dixièmes de secondes et les secondes.
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");

  // Récupération des boutons pour démarrer, arrêter, et réinitialiser le chronomètre.
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');

  // Variable pour stocker l'intervalle de temps du chronomètre.
  let interval;

  // Événement déclenché lors du clic sur le bouton 'Start'.
  buttonStart.addEventListener('click', () => {
    // Arrêt du chronomètre (au cas où il serait déjà en cours).
    clearInterval(interval);
    // Démarrage du chronomètre avec un intervalle de 10 millisecondes.
    interval = setInterval(startTimer, 10);
  });

  // Événement déclenché lors du clic sur le bouton 'Stop'.
  buttonStop.addEventListener('click', () => {
    // Arrêt du chronomètre.
    clearInterval(interval);
  });

  // Événement déclenché lors du clic sur le bouton 'Reset'.
  buttonReset.addEventListener('click', () => {
    // Arrêt du chronomètre.
    clearInterval(interval);
    // Réinitialisation des compteurs de dixièmes de secondes et de secondes.
    tens = 0;
    seconds = 0;
    // Mise à jour de l'affichage du chronomètre.
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
  });

  // Fonction pour mettre à jour le chronomètre.
  function startTimer() {
    // Incrémentation des dixièmes de secondes.
    tens++;
    // Mise à jour de l'affichage des dixièmes de secondes.
    appendTens.innerHTML = tens < 10 ? `0${tens}` : tens;

    // Si les dixièmes de secondes atteignent 100, incrémentation des secondes.
    if (tens >= 100) {
      seconds++;
      // Mise à jour de l'affichage des secondes.
      appendSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      // Réinitialisation des dixièmes de secondes.
      tens = 0;
    }
  }
}