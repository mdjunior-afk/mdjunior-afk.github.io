const enemiesDiv = document.getElementById("enemies");
const addBtn = document.getElementById("add");

let enemies = JSON.parse(localStorage.getItem("enemies") || "[]");

function render() {
  enemiesDiv.innerHTML = "";
  enemies.forEach((e, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <b>${e.name}</b> — HP: ${e.hp}, CA: ${e.ac}
      <button onclick="damage(${i}, -5)">-5 HP</button>
      <button onclick="damage(${i}, 5)">+5 HP</button>
    `;
    enemiesDiv.appendChild(div);
  });
}

function damage(index, amount) {
  enemies[index].hp += amount;
  localStorage.setItem("enemies", JSON.stringify(enemies));
  render();
}

addBtn.onclick = () => {
  const name = document.getElementById("name").value;
  const hp = parseInt(document.getElementById("hp").value);
  const ac = parseInt(document.getElementById("ac").value);
  enemies.push({ name, hp, ac });
  localStorage.setItem("enemies", JSON.stringify(enemies));
  render();
};

render();
