document.addEventListener('scroll', ()=>{
    const header = document.querySelector('nav');
    const x = "bg-dark"
    if (window.scrollY > 0){
        header.classList.add(x);
    }
    else{
        header.classList.remove(x);
    }
})