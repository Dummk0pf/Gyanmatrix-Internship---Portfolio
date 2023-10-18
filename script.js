const inputName = document.getElementById("name");
const inputEmail = document.getElementById("mail");
const inputReview = document.getElementById("review");
const submitButton = document.getElementById("submit");

function disappear(){
    let x = document.getElementById("dis");
    x.style.display = "none";
}

const reviewer = {
    nameOfReviewer: "",
    email: "",
    review: ""
}

submitButton.addEventListener('click', function(){
    reviewer.nameOfReviewer = inputName.value;
    reviewer.email = inputEmail.value;
    reviewer.review = inputReview.value;

    console.log(reviewer);
})