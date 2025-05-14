document.querySelector('.logout').addEventListener('click', function () {
  // Redireciona para a página de logout
  window.location.href = './login.html'; // Altere para o caminho da sua página de logout
})

document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const idade = +document.getElementById('idade').value;
    const peso = +document.getElementById('peso').value;
    const altura = +document.getElementById('altura').value;
    const sexo = document.getElementById('sexo').value;
    const atividade = +document.getElementById('atividade').value;

    let tmb = sexo === 'masculino'
        //faz o calculo se for verdadeiro
        ? 10 * peso + 6.25 * altura - 5 * idade + 5
        //faz calculo se for falso
        : 10 * peso + 6.25 * altura - 5 * idade - 161;

    const calorias = tmb * atividade;

    const proteinas = peso * 2;
    const gorduras = peso * 1;
    const caloriasProteinas = proteinas * 4;
    const caloriasGorduras = gorduras * 9;
    const caloriasCarbs = calorias - (caloriasProteinas + caloriasGorduras);
    const carboidratos = caloriasCarbs / 4;
    const agua = peso * 35 / 1000;

    document.getElementById('resultado').innerHTML = `
<div class="alert alert-primary" role="alert">
  <p><strong>Calorias:</strong> ${calorias.toFixed(0)} kcal</p>
  <p><strong>Proteínas:</strong> ${proteinas.toFixed(1)} g</p>
  <p><strong>Gorduras:</strong> ${gorduras.toFixed(1)} g</p>
  <p><strong>Carboidratos:</strong> ${carboidratos.toFixed(1)} g</p>
  <p><strong>Água:</strong> ${agua.toFixed(2)} L</p>
</div>
`;
});
