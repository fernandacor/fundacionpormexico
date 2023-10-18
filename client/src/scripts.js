export function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Agrega un cero a la izquierda del mes y del día si es necesario.
  const paddedMonth = month < 10 ? `0${month}` : month;
  const paddedDay = day < 10 ? `0${day}` : day;

  return `${year}-${paddedMonth}-${paddedDay}`;
}
