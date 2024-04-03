$(document).ready(function() {
    // Array of audio sources
    var audioSources = [
        "song1.mp3",
        "song2.mp3",
        "song3.mp3",
        "song4.mp3",
        "song5.mp3"
    ];

    // Play audio function
    function playAudio() {
        var audio = document.getElementById("audioPlayer");
        var currentSource = audio.src;
        // Check if audio is playing and if the current source is among the available sources
        if (!audio.paused && audioSources.includes(currentSource)) {
            // Play next song in the array
            var index = audioSources.indexOf(currentSource);
            if (index < audioSources.length - 1) {
                audio.src = audioSources[index + 1];
                audio.play();
            } else {
                // If last song, stop playing
                audio.pause();
            }
        } else {
            // If audio is paused or current source is not among available sources, play the first song
            audio.src = audioSources[0];
            audio.play();
        }
    }

    // Call playAudio function when the page loads
    playAudio();

    // Add event listener to options for automatic playback
    $(".option").click(function() {
        // Reset audio player to first song
        document.getElementById("audioPlayer").currentTime = 0;
        // Play audio
        playAudio();
    });

    // Event listener for audio ended to play next song
    document.getElementById("audioPlayer").addEventListener("ended", function() {
        playAudio();
    });
});
