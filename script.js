const signupForm = document.getElementById('signup-form');
const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const fileInput = document.getElementById('file-input');

// Lorsque le formulaire est soumis
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Demander l'accès à la webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.classList.remove('hidden');

            // Capturer la photo après 3 secondes
            setTimeout(() => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                video.classList.add('hidden');
                canvas.classList.remove('hidden');
                alert("Inscription réussie ! Votre photo a été capturée.");
            }, 3000);
        })
        .catch(err => {
            console.error("Erreur d'accès à la webcam : ", err);
            alert("Impossible d'accéder à la caméra. Veuillez vérifier vos paramètres.");
        });
});