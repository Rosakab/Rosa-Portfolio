


function opentab(tabname) {
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let sidemenu= document.getElementById("sideMenu");
// let closemenu= document.getElementById("closeMenu");
// let openmenu= document.getElementById("openMenu");

function openMenu(){
    sidemenu.style.right="0";
}

function closeMenu(){
    sidemenu.style.right="-200px";
}



