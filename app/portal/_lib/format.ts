// Small formatting helpers shared across the portal.

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const DAYS_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Number of days in a month (1-12). Uses a non-leap Feb of 29 so the day
// dropdown can always offer 29 for February birthdays.
export function daysInMonth(month: number): number {
  return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1] ?? 31;
}

export function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function naira(amount: number): string {
  return "₦" + amount.toLocaleString("en-NG");
}

// "12 May" style celebration label from month (1-12) + day.
export function celebration(month: number, day: number): string {
  return `${ordinal(day)} of ${MONTHS[month - 1] ?? ""}`;
}

// Friendly relative-ish date for activity lists.
export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const date = `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}`;
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${date}, ${time}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
