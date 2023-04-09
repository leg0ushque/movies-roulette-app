const formatInputDate = (date: Date): string => {
  const day = date.getUTCDate() + 1;
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export default formatInputDate
