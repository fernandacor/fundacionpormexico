export function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Agrega un cero a la izquierda del mes y del día si es necesario.
  const paddedMonth = month < 10 ? `0${month}` : month;
  const paddedDay = day < 10 ? `0${day}` : day;

  return `${year}-${paddedMonth}-${paddedDay}`;
}

export function formatDateToOutput(dateString) {
  const date = new Date(dateString);

  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const monthNames = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  return `${day} ${monthNames[month - 1]}, ${year}`;
}

export function getDay(dateString) {
  const date = new Date(dateString);

  const day = date.getDate() + 1;
  return day;
}

export function getMonthInitials(dateString) {
  const date = new Date(dateString);

  const month = date.getMonth() + 1;

  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  return monthNames[month - 1];
}
