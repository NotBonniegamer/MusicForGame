// 1. Hier deine MP3-Dateien eintragen
const songs = [
    { title: "INDUSTRIAL HAVOC", file: "INDUSTRIAL_HAVOC.mp3" },
    { title: "trailer", file: "trailer.mp3" },
    { title: "trailer2", file: "trailer2.mp3" },
    { title: "trailer3", file: "trailer3.mp3" },
    { title: "trailer4", file: "trailer4.mp3" },
    { title: "song_0001", file: "song_0001.mp3" },
    { title: "song_0002", file: "song_0002.mp3" }

];

// 2. Den Ort in der HTML finden, wo die Songs hin sollen
const playlistContainer = document.getElementById('playlist');

// 3. Funktion, die die Liste abarbeitet
function loadSongs() {
    songs.forEach(song => {
        // Wir erstellen den HTML-Block als Text (Template Literal)
        const songHTML = `
            <div class="song-card">
                <h3>${song.title}</h3>
                <p>MP3-Track</p>
                <audio controls>
                    <source src="musik/${song.file}" type="audio/mpeg">
                    Dein Browser unterstützt kein Audio.
                </audio>
            </div>
        `;
        
        // Den Block in den Container einfügen
        playlistContainer.innerHTML += songHTML;
    });
}

// Ausführen, wenn die Seite geladen ist
loadSongs();
