export function convertSecondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    // Format angka dengan leading zero jika diperlukan
    var formattedMinutes = String(minutes).padStart(2, "0");
    var formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return formattedMinutes + ":" + formattedSeconds;
}

export function convertSecondsToHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const seconds_ = seconds - hours * 3600 - minutes * 60;
    let time = "";
    if (hours > 0) {
        time += hours + "h ";
    }
    if (minutes > 0) {
        time += minutes + "m";
    }
    return time;
}
