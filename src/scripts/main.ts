

window.addEventListener('resize', ()=> {
    const headerParagraphs = document.querySelectorAll('.header-p');
    const discountspan = document.querySelector('.discount');

    window.innerWidth > 600 ?
       (headerParagraphs.forEach( (p) =>{ (p as HTMLElement).style.display = 'inline'}),
       (discountspan as HTMLElement).style.display = 'inline')
     : (headerParagraphs.forEach( (p) =>{ (p as HTMLElement).style.display = 'block'}),
     (discountspan as HTMLElement).style.display = 'none')
     
     
})


// slider fill background color 
const slider = document.querySelector('#range');

slider?.addEventListener('input', ()=> {
    let x = (slider as HTMLInputElement).value ;
    let color = `linear-gradient( 90deg, 
                  var(--cyan-dark-clr) ${x}%, 
                  var(--Light-Grayish-Blue) ${x}%)`;
    (slider as HTMLElement).style.background = color;
})