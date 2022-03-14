// vars //

const button1 = document.querySelector("#arrow__button");
const button2 = document.querySelector("#arrow__button2");

const coinTable1 = document.querySelector(".coins--section")
const coinTable2 = document.querySelector(".coins--section2")


button1.addEventListener('click', () => {
    coinTable1.style.display = "none";
    coinTable2.style.display = "block";
});

button2.addEventListener('click', () => {
    coinTable1.style.display = "block";
    coinTable2.style.display = "none";
});
