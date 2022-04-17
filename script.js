let reviews = [];
reviews[0] = "<i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae dignissimos voluptatem? <br><br> -John D.</i>";
reviews[1]= "<i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, illum.? <br><br> - Jane D.</i>";
reviews[2]= "<i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, illum.? <br><br> - Mark D.</i>";



let i = 0;
function next() {
    i++; 
    if (i == 3) {
        i=0;
    }
    document.getElementById("rev").innerHTML = reviews[i];
}

function prev() {
    i--;
    if (i == -1) {
        i = 2;
    }
    document.getElementById("rev").innerHTML = reviews[i];
}


const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");
const navCta = document.getElementById("navCta");

mobileMenu.addEventListener('click',() =>  {
    navLinks.classList.toggle('show');
    navCta.classList.toggle('show');
});