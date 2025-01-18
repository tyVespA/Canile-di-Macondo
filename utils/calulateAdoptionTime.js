export function calculateAdoptionTime(adozione_anno, adozione_mese) {
  adozione_anno = Number(adozione_anno);
  adozione_mese = Number(adozione_mese);
  const anno_corrente = new Date().getFullYear();
  const mese_corrente = new Date().getMonth() + 1;
  let adottatoDa;

  if (anno_corrente === adozione_anno && mese_corrente != adozione_mese) {
    if (12 - adozione_mese + mese_corrente === 1) {
      adottatoDa = `1 mese`;
    } else {
      adottatoDa = `${mese_corrente - adozione_mese} mesi`;
    }
  } else if (anno_corrente === adozione_anno + 1) {
    if (12 - adozione_mese + mese_corrente === 1) {
      adottatoDa = `1 mese`;
    } else {
      adottatoDa = `${12 - adozione_mese + mese_corrente} mesi`;
    }
  } else if (
    mese_corrente === adozione_mese &&
    anno_corrente === adozione_anno
  ) {
    adottatoDa = "qualche giorno";
  } else {
    adottatoDa = `${anno_corrente - adozione_anno} anni`;
  }

  return adottatoDa;
}
