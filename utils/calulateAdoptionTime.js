export function calculateAdoptionTime(adozione_anno, adozione_mese) {
  adozione_anno = Number(adozione_anno);
  adozione_mese = Number(adozione_mese);
  const anno_corrente = new Date().getFullYear();
  const mese_corrente = new Date().getMonth() + 1;
  let adottatoDa;

  // adottato da meno di un anno
  if (anno_corrente === adozione_anno && mese_corrente != adozione_mese) {
    if (12 - adozione_mese + mese_corrente === 1) {
      return `un mese`;
    } else {
      return `${mese_corrente - adozione_mese} mesi`;
    }
  }
  // adottato da meno di un anno ma con anno di adozione diverso da anno corrente
  else if (
    anno_corrente === adozione_anno + 1 &&
    12 - adozione_mese + mese_corrente != 12
  ) {
    if (12 - adozione_mese + mese_corrente === 1) {
      return `un mese`;
    } else {
      return `${12 - adozione_mese + mese_corrente} mesi`;
    }
  }
  // adottato da meno di un mese
  else if (mese_corrente === adozione_mese && anno_corrente === adozione_anno) {
    return "qualche giorno";
  }
  // adottato da esattamente un anno
  else if (
    12 - adozione_mese + mese_corrente == 12 &&
    anno_corrente === adozione_anno
  ) {
    return "un anno";
  }
  // adottato da più di un anno
  else {
    return `${anno_corrente - adozione_anno} anni`;
  }
}
