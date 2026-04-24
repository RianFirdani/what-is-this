export const isBDay = function () {
  const openDate = process.env.OPEN_DATE; // format: YYYY-MM-DD

  // Ambil waktu sekarang dalam timezone WITA
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Makassar" })
  );

  // Set start time (00:00 WITA)
  const startTime = new Date(`${openDate}T00:00:00+08:00`).getTime();

  // End time (24 jam setelahnya)
  const endTime = startTime + 24 * 60 * 60 * 1000;

  const localTime = now.getTime();

  if (localTime < startTime) return "IS_EARLY";
  if (localTime > endTime) return "IS_LATE";
  return "ON_TIME";
};