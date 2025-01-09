export function calculateAge(anno_di_nascita, mese_di_nascita, sesso) {
  anno_di_nascita = Number(anno_di_nascita);
  const anno_corrente = new Date().getFullYear();
  const mese_corrente = new Date().getMonth() + 1;
  sesso = sesso.toLowerCase();

  let etàAnni;
  if (anno_corrente == anno_di_nascita + 1) {
    etàAnni = 0;
  } else {
    etàAnni = anno_corrente - anno_di_nascita;
  }

  let etàMesi;
  if (mese_di_nascita > mese_corrente) {
    let mesi = 0;
    while (mese_di_nascita < 12) {
      mese_di_nascita++;
      mesi++;
    }
    etàMesi = mesi + mese_corrente;
    etàAnni--;
  } else {
    etàMesi = mese_corrente - mese_di_nascita;
  }

  const meseOMesi = etàMesi === 1 ? "mese" : "mesi";
  const annoOAnni = etàAnni === 1 ? "anno" : "anni";

  let ageReturned;

  if (etàAnni === 1 && anno_corrente != anno_di_nascita + 1 && etàMesi === 0) {
    ageReturned = "Un anno";
  } else if (etàAnni < 1) {
    if (etàMesi === 0 && sesso === "maschio") {
      ageReturned = "Appena nato";
    } else if (etàMesi === 0 && sesso === "femmina") {
      ageReturned = "Appena nata";
    } else if (etàMesi === 1) {
      ageReturned = "un mese";
    } else {
      ageReturned = `${etàMesi} ${meseOMesi}`;
    }
  } else if (etàAnni >= 1 && etàMesi === 0) {
    ageReturned = `${etàAnni} ${annoOAnni}`;
  } else {
    ageReturned = `${etàAnni} ${annoOAnni} e ${etàMesi} ${meseOMesi}`;
  }

  return ageReturned;
}
