const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let isScrolling = false;

function scrollSection(event){
    if (isScrolling) return;
    isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;

    currentSectionIndex = Math.min(Math.max(currentSectionIndex + direction, 0), sections.length -1);

    sections[currentSectionIndex].scrollIntoView({behavior: "smooth"});

    setTimeout(() => {
        isScrolling = false;
    }, 700);
}

window.addEventListener('wheel', scrollSection);