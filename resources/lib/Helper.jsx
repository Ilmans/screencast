export function convertSecondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    // Format angka dengan leading zero jika diperlukan
    var formattedMinutes = String(minutes).padStart(2, "0");
    var formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return formattedMinutes + ":" + formattedSeconds;
}
