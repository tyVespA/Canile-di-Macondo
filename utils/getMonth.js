export function getMonth() {
  const months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  const currentMonth = new Date().getMonth(); // getMonth() restituisce un valore da 0 a 11
  return months[currentMonth];
}
