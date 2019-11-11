const postcard = document.querySelectorAll(".c-card__box");
const galleryBody = document.getElementById("c-card");


document.addEventListener("click", function (e) {
    if (window.innerWidth > 1024) {
        if (e.target.classList.contains("c-card__box")) {
            open(e);
        }
    }
}, false);


function open(e) {

    const cardBox = document.createElement("div");
    const cardBoxWrapper = document.createElement("div");
    const cardImgBox = document.createElement('img');
    const cardCloseBox = document.createElement("a");
    cardCloseBox.innerText = 'X';

    cardBox.classList.add("c-card__open");
    cardBoxWrapper.classList.add("c-card__open-wrapper");
    cardImgBox.classList.add("c-card__open--img");
    cardCloseBox.classList.add("c-card__button");

    galleryBody.appendChild(cardBox);
    cardBox.appendChild(cardBoxWrapper);
    cardBoxWrapper.appendChild(cardImgBox);
    cardBoxWrapper.appendChild(cardCloseBox);

    cardImgBox.src = e.target.firstElementChild.src;



    // close window img
    cardCloseBox.addEventListener("click", function () {
        galleryBody.removeChild(cardBox);
    })

}