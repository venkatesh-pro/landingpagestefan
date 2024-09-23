export const convertIsoDate = (isoDate) => {
  const date = new Date(isoDate);

  // Get the formatted date (e.g., Aug 19, 2024)
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};
