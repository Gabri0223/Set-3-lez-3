const creazioneCard = document.getElementById("dati");
creazioneCard.addEventListener("submit", (e) => {
  e.preventDefault();
});

const presaInput = function () {
  const Lista = creazioneLista();
  const Father = document.getElementById("cardSection");
  Father.appendChild(Lista);
};

const creazioneLista = function (element) {
  const array = document.getElementById("Task");
  const task = array.value;
  const card = document.createElement("div"); //<div></div>
  const lista = document.createElement("ul");
  const li = document.createElement("li");
  lista.classList.add("center");
  li.innerText = task;
  li.setAttribute("onclick", "testoBarrato()");
  lista.appendChild(li);
  card.appendChild(lista);
  return card;
};

const testoBarrato = function () {
  const li = document.createElement("li");
  const text = document.querySelectorAll("li");
  const testo = text[0].innerText;
  console.log(testo);
  const barrato = document.createElement("del");
  console.log(barrato);
  li.appendChild(barrato);
  barrato.appendChild("testo");
  console.log(li);
};
