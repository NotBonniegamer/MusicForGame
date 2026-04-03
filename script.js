// 1. Hier deine MP3-Dateien eintragen
const songs = [
    { title: "Erster Beat", file: "track1.mp3" },
    { title: "Cooler Remix", file: "remix.mp3" },
    { title: "Night Drive", file: "night_drive.mp3" },
    { title: "Work in Progress", file: "test.mp3" }
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
