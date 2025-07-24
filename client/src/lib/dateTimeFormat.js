function dateTimeFormat(dateString) {
  const date = new Date(dateString);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayName = weekdays[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  let hour = date.getUTCHours();
  const minute = date.getUTCMinutes().toString().padStart(2, '0');

  const period = hour >= 12 ? "P.M" : "A.M";
  hour = hour % 12 || 12; // Convert to 12-hour format

  return `${dayName}, ${monthName} ${day} at ${hour}:${minute} ${period}`;
}

export {dateTimeFormat}