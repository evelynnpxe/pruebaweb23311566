document.getElementById('changeVideo').addEventListener('click', function() {
    const newVideoId = prompt('Introduce el ID del nuevo video de YouTube:');
    if (newVideoId) {
        const iframe = document.getElementById('youtubeVideo');
        iframe.src = `https://www.youtube.com/embed/${newVideoId}`;
    }
});
