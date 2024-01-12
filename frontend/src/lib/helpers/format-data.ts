export const formatData = (date: string): string => {
  const parsed = new Date(date);
  const formatted = parsed.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return formatted;
};
