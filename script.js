const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {/*Quand l'input darkMode change*/
    document.body.classList.toggle('dark');/*On ajoute ou on retire une class 'dark' au body(la method toggle permet de de supprimer la class si elle existe et vice-versa).*/
});