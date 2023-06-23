function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

var contexte = document.getElementById('contexte');
var presentation = document.getElementById('presentation');
var guide = document.getElementById('guide');
var cartographie = document.getElementById('cartographie');
var ressources = document.getElementById('ressources');

let sections = [contexte, presentation, guide, cartographie, ressources];

let contexteAnchor = document.getElementById('contexte-anchor');
let presentationAnchor = document.getElementById('presentation-anchor');
let guideAnchor = document.getElementById('guide-anchor');
let cartographieAnchor = document.getElementById('cartographie-anchor');
let ressourcesAnchor = document.getElementById('ressources-anchor');

let anchors = [contexteAnchor, presentationAnchor, guideAnchor, cartographieAnchor, ressourcesAnchor];

window.addEventListener('scroll', function (e) {

    sections.forEach(section => {
        if (isScrolledIntoView(section)) {
            anchors.forEach(anchor => {
                if (anchor.id === section.id + '-anchor') {
                    anchor.classList.add('active');
                } else {
                    if (anchor.classList.contains('active')){
                        anchor.classList.remove('active')
                    }
                };
            });
        }
    });
});