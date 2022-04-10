/* ======================== Add Varibles ======================== */

const count = document.querySelector(".count");

const sub = document.querySelector(".subtract");

const resetCount = document.querySelector(".reset");

const add = document.querySelector(".add");

/* ======================== Add Varibles ======================== */



/* ======================== Set Color Function ======================== */

function setColor() {

    if (count.innerHTML > 0) {
        count.style.color = "green";
    } else if (count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
};

/* ======================== Set Color Function ======================== */



/* ======================== Add Sub Reset ======================== */

add.addEventListener("click", () => {
    count.innerHTML++;
    setColor();
});

sub.addEventListener("click", () => {
    count.innerHTML--;
    setColor();
});

resetCount.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor();
});

/* ======================== Add Sub Reset ======================== */
