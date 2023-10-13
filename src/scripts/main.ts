
window.addEventListener('resize', ()=> {
    const headerParagraphs = document.querySelectorAll('.header-p');

    window.innerWidth > 600 ?
       headerParagraphs.forEach( (p) =>{ p.style.display = 'inline'})
     : headerParagraphs.forEach( (p) =>{ p.style.display = 'block'})
})