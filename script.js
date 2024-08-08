gsap.registerPlugin(ScrollTriger);

document.addEventListener("DOMContentLoaded",function(){
    const footer=document.querySelector(".footer");
    const lastCard= document.querySelector(".card.scroll");
    const pinnedSections= gsap.utils.toArray(".pinned");

pinnedSections.forEach((section, index,section)=>{
    let img =section.querySelector(".img");
    let nextSection=section[index+1] || lastCard;
    let endScalePoint = 'top+=$ {nextSection.offsetTop - section.offsetTop} top';
});
});
