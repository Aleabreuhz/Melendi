let listPeople = [

];

function initialize() {
    const headerMenuIcon = document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", showSideMenu);
    const sideMenuHide = document.getElementById("side-menu-hide");
    sideMenuHide.addEventListener("click", hideSideMenu);
    window.addEventListener("scroll", moveImagesWhenUserScrolls);

}

function moveImagesWhenUserScrolls() {
    const scrollPosition = window.scrollY;
    const MELENDI = document.getElementById("mel");
    MELENDI.style.left = scrollPosition + "px";

}

function showSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("side-menu-open");
    sideMenu.classList.remove("side-menu-hide");
}

function hideSideMenu() {
    const sideMenu = document.getElementById("side-menu");
sideMenu.classList.add("side-menu-hide");
sideMenu.classList.remove("side-menu-open");
}

function addUser(){
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;

    if(email == ""){
        alert('El campo correo es requerido');
        return false;
    } else if (!email.includes('@')){
        alert('El corrreo no es valido')
        return false;
    }
    if(name == ""){
        alert('El campo nombre es requerido');
        return false;
    }
    if(phone == ""){
        alert('El campo numero es requerido');
        return false;
    }
    return true;

    listPeople.push({
        email: email,
        name: name,
        phone: phone

    })
    const peopleInStringFormat = JSON.stringify(listPeople);
    localStorage.setItem("listPeople",peopleInStringFormat);

}


function ReadData(){
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
    listPeople = [];
    } else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'))
    }
}