document.getElementById("registrationForm").onsubmit = function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    // Effacer les messages d'erreur précédents
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Obtenir les valeurs des champs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let valid = true;

    // Validation du nom
    if (name === "") {
        document.getElementById("nameError").innerText = "Le champ nom est requis.";
        valid = false;
    }

    // Validation de l'email
    if (email === "") {
        document.getElementById("emailError").innerText = "Le champ email est requis.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerText = "Veuillez entrer un email valide.";
        valid = false;
    }

    // Validation du mot de passe
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Le mot de passe doit contenir au moins 6 caractères.";
        valid = false;
    }

    // Si tout est valide, afficher une confirmation
    if (valid) {
        document.getElementById("successMessage").innerText = "Formulaire soumis avec succès !";
        // Ici, vous pouvez également envoyer les données au serveur si nécessaire
    }
};