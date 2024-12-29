export function calculateAge(anno_di_nascita, mese_di_nascita) {
  const anno_corrente = new Date().getFullYear();
  const mese_corrente = new Date().getMonth() + 1;

  const etàMesi = mese_corrente - mese_di_nascita;
  const etàAnni = anno_corrente - anno_di_nascita;

  const meseOMesi = etàMesi === 1 ? "mese" : "mesi";
  const annoOAnni = etàAnni === 1 ? "anno" : "anni";

  let ageReturned;

  if (etàAnni < 1) {
    if (etàMesi === 1) {
      ageReturned = "un mese";
    } else {
      ageReturned = `${etàMesi} ${meseOMesi}`;
    }
  } else if (etàAnni === 1) {
    ageReturned = "un anno";
  } else {
    ageReturned = `${etàAnni} ${annoOAnni}`;
  }

  return ageReturned;
}
