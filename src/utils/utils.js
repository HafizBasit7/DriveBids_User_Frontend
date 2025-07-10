export function formatDateTime(dateString) {
  const date = new Date(dateString);

  // Format options
  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  // Convert to desired format
  const formattedDate = date.toLocaleString("en-US", options);

  // Replace comma to match the requested format
  return formattedDate.replace(",", " at");
}

export function formatAmount(amount) {
  return amount.toLocaleString();
}

export function timeAgo(utcString) {
 
  const now = new Date();
  const past = new Date(utcString);

  const isSameDay = now.toDateString() === past.toDateString();

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = yesterday.toDateString() === past.toDateString();

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${dd}/${mm}/${yy}`;
  };

  if (isSameDay) {
    return `Today ${formatTime(past)}`;
  } else if (isYesterday) {
    return `Yesterday ${formatTime(past)}`;
  } else {
    return `${formatDate(past)} ${formatTime(past)}`;
  }
}

export const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const difference = new Date(targetDate) - now;

  if (difference <= 0) {
    return "Ended";
  }

  const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((difference / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

  return `${days}d:${hours}hr:${minutes}m:${seconds}s`;
};

export const validateForm = (validations, data) => {
  for (const validation of validations) {
    const result = validation.safeParse(data);
    if (!result.success) {
      throw {
        name: "app",
        message: result.error.errors[0].message,
      };
    }
  }
};

export function formatSeconds(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
