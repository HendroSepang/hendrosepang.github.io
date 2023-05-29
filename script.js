function hitungOperasi() {
  const urlParams = new URLSearchParams(window.location.search);
  const angka1 = parseFloat(urlParams.get('angka1'));
  const angka2 = parseFloat(urlParams.get('angka2'));

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById('hasil').innerText = 'Error: Mohon berikan parameter angka yang valid pada URL.';
  } else {
    const penjumlahan = angka1 + angka2;
    const pengurangan = angka1 - angka2;
    const perkalian = angka1 * angka2;
    const pembagian = angka1 / angka2;
    const pangkat = Math.pow(angka1, angka2);

    document.getElementById('hasil').innerHTML = `
      <p>Penjumlahan: ${angka1} + ${angka2} = ${penjumlahan}</p>
      <p>Pengurangan: ${angka1} - ${angka2} = ${pengurangan}</p>
      <p>Perkalian: ${angka1} * ${angka2} = ${perkalian}</p>
      <p>Pembagian: ${angka1} / ${angka2} = ${pembagian}</p>
      <p>Pangkat: ${angka1} ^ ${angka2} = ${pangkat}</p>
    `;
  }
}
