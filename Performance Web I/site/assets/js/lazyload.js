let ativaLazy = false;

window.addEventListener("scroll", () => {   
    if(ativaLazy) return    
    ativaLazy = true;
    setTimeout(() => {
        ativaLazy = false
    }, 200)

    console.log(ativaLazy);
    const imagens = document.querySelectorAll("[data-src]");
    imagens.forEach((image) => {
      if (image.getBoundingClientRect().top < window.innerHeight + 200) {
        image.src = image.getAttribute("data-src");
      }
    });
});
