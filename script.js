/* ==================================== */
/* 1. ANIMATION DES SECTIONS AU DÉFILEMENT (SCROLL REVEAL) */
/* ==================================== */

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 && // Ajoute 100px de marge
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter la classe 'is-visible' si la section est dans le viewport
function handleScrollReveal() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            // Ajoute la classe qui déclenche la transition CSS (l'animation)
            section.classList.add('is-visible');
        }
    });
}

// Écoute l'événement de défilement (scroll) pour vérifier la visibilité
window.addEventListener('scroll', handleScrollReveal);

// Lance la fonction une première fois au chargement pour afficher les éléments du haut
handleScrollReveal();


/* ==================================== */
/* 2. GESTION DU FORMULAIRE DE CONTACT (MAILTO) */
/* ==================================== */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi normal du formulaire

            // Récupère les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // --- REMPLACEZ CETTE ADRESSE EMAIL PAR VOTRE VRAIE ADRESSE EMAIL ---
            const targetEmail = 'dorsainvilkervens00@gmail.com'; 

            // Crée le corps de l'e-mail
            const subject = encodeURIComponent(`Demande de Service : ${service} - par ${name}`);
            const body = encodeURIComponent(`
                Bonjour Dorsainvil,

                Vous avez reçu une nouvelle demande via le formulaire de votre site web MCM Design.

                Nom du client : ${name}
                Adresse Email : ${email}
                Service Requis : ${service}

                --- Message du client ---
                ${message}
                -------------------------
            `);

            // Construit le lien mailto:
            const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

            // Ouvre le client de messagerie de l'utilisateur
            window.location.href = mailtoLink;

            // Optionnel : Réinitialise le formulaire après l'ouverture du client e-mail
            // contactForm.reset(); 
            
            // NOTE : Certains navigateurs ou clients de messagerie peuvent bloquer la fenêtre.
            // Il est recommandé d'informer l'utilisateur.
            alert('Votre client de messagerie va s\'ouvrir. Veuillez envoyer l\'e-mail pour finaliser votre demande.');
        });
    }
});
