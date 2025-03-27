let liamBucks = 0;
let bucksPerClick = 1;
let playerName = "Player";
let upgrades = [
    {id: "click1", name: "Better Clicker", cost: 10, increase: 1, level: 0},
    {id: "click2", name: "Super Clicker", cost: 50, increase: 5, level: 0},
    {id: "click3", name: "Mega Clicker", cost: 100, increase: 10, level: 0},
    {id: "click4", name: "Ultra Clicker", cost: 500, increase: 50, level: 0}
];

const skins = {
    default: "https://via.placeholder.com/200",
    star: "https://via.placeholder.com/200/FFD700",
    coin: "https://via.placeholder.com/200/FFA500"
};

function updateDisplay() {
    document.getElementById("liamBucks").textContent = Math.floor(liamBucks);
    document.getElementById("bucksPerClick").textContent = bucksPerClick;
}

function clickLiam() {
    liamBucks += bucksPerClick;
    updateDisplay();
}

function changeName() {
    playerName = document.getElementById("playerName").value || "Player";
    if (playerName.toLowerCase() === "robbie") {
        document.getElementById("cheatBoard").classList.remove("hidden");
    } else {
        document.getElementById("cheatBoard").classList.add("hidden");
    }
}

function changeSkin(skin) {
    document.getElementById("clickerImage").src = skins[skin];
}

function buyUpgrade(upgradeId) {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (liamBucks >= upgrade.cost) {
        liamBucks -= upgrade.cost;
        bucksPerClick += upgrade.increase;
        upgrade.level++;
        upgrade.cost = Math.floor(upgrade.cost * 1.5);
        updateDisplay();
        renderUpgrades();
    }
}

function renderUpgrades() {
    const upgradesDiv = document.getElementById("upgrades");
    upgradesDiv.innerHTML = "";
    upgrades.forEach(upgrade => {
        const div = document.createElement("div");
        div.className = "upgrade-item";
        div.innerHTML = `
            ${upgrade.name} (Level ${upgrade.level})<br>
            Cost: ${upgrade.cost} Liam Bucks<br>
            +${upgrade.increase} per click<br>
            <button onclick="buyUpgrade('${upgrade.id}')">Buy</button>
        `;
        upgradesDiv.appendChild(div);
    });
}

// Cheat functions
function cheatMoney() {
    liamBucks += 1000;
    updateDisplay();
}

function cheatUpgrades() {
    upgrades.forEach(upgrade => {
        bucksPerClick += upgrade.increase * 10;
        upgrade.level += 10;
        upgrade.cost = Math.floor(upgrade.cost * Math.pow(1.5, 10));
    });
    updateDisplay();
    renderUpgrades();
}

// Initial setup
renderUpgrades();
updateDisplay();
