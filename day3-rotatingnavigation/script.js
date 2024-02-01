const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener(() => container.classList.add("show-nav"));
close.addEventListener(() => container.classList.add("show-nav"));
