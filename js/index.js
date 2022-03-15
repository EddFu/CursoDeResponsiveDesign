// vars //

const button1 = document.querySelector("#arrow__button--right");
const button2 = document.querySelector("#arrow__button--left");

const coinTable1 = document.querySelector(".coins--section")
const coinTable2 = document.querySelector(".coins--section2")


button1.addEventListener('click', () => {
    coinTable1.style.display = "none";
    coinTable2.style.display = "block";
    coinTable2.style.animation = "0.5s section2 ease-in-out";
});

button2.addEventListener('click', () => {
    coinTable1.style.display = "block";
    coinTable2.style.display = "none";
    coinTable1.style.animation = "0.5s section1 ease-in-out";
});
