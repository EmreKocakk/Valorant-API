const input = document.querySelector(".input")
const list = document.querySelector(".list")



// SAYFA YUKLENDIGINDE API VERILERINI CEKEN KISIM

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://valorant-api.com/v1/agents")
        .then((res) => res.json())
        .then((data) => listCharacter(data.data))
})



//VERILERI LISTELEYEN KISIM

function listCharacter(valoData) {
    valoData.forEach(element => {
        const { displayName, description, bustPortrait } = element
        if (!displayName || !bustPortrait) return //NULL DONEN DEGERI ATLAYAN KISIM
        const card = document.createElement("div")
        const img = document.createElement("img")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        card.className = "card"
        img.className = "img"
        img.src = bustPortrait
        h1.textContent = displayName
        p.textContent = description
        card.appendChild(img)
        card.appendChild(h1)
        card.appendChild(p)
        list.appendChild(card)
    });
}


//INPUT ILE ARAMA YAPAN KISIM

input.addEventListener("keyup", () => {
    const searchValue = input.value.toLowerCase();
    const cards = document.querySelectorAll(".card")

    cards.forEach((card) => {
        const name = card.querySelector("h1").textContent.toLowerCase();
        if (name.startsWith(searchValue)) {
            card.style.display = "block"
        }
        else {
            card.style.display = "none"
        }
    })
})