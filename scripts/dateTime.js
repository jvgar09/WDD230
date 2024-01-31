
function setTimestamp() {
   // Get the current date and time
    const currentTimestamp = new Date();

    // Format the timestamp as per your requirement
    const formattedTimestamp = `${currentTimestamp.toLocaleDateString()} ${currentTimestamp.toLocaleTimeString()}`;

    // Set the timestamp value to the HTML element with id "timestamp"
    document.getElementById("timestamp").value = formattedTimestamp;
}
