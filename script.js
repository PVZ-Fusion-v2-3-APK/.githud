// Wait for the document to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {

    // Event listener for the download button
    const downloadButton = document.getElementById('download-btn');
    downloadButton.addEventListener('click', function() {
        alert('Download started for PVZ Fusion 2.3 APK!');
        // You can replace the alert with a redirect or download logic in a real-world scenario
        window.location.href = 'https://modhkt.com/games-apk/pvz-fusion-2-3/';
    });

});
