let menus = document.querySelectorAll("#menu li");
for(let i = 0;i < menus.length; i++){
    menus[i].addEventListener("click", function(){
        deselect();
        indicator.style = `--pos:${i}`;
        this.classList.add("active");
    })
}

function deselect(){
    for(let i = 0;i < menus.length; i++){
        menus[i].classList.remove("active");
    }
}



