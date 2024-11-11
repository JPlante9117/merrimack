const cleanupClasses = (e) => {
    let el = e.target,
        classes = el.classList || [];

    classes.remove('animating');
    el.textContent = "I did move!"
    el.removeEventListener('transitionend', cleanupClasses);
}

const animateBox = () => {
    let animationBox = document.querySelector('#animation-box'),
        classes = animationBox.classList;
    animationBox.addEventListener('transitionend', cleanupClasses);
    classes.add('animating');
    classes.toggle('right');
    animationBox.textContent = "I am moving!"
}

const toggleDarkmode = () => {
    let body = document.body,
        button = document.querySelector('button#dm'),
        label = document.querySelector('.mode span'),
        classes = body.classList;

    if (classes.contains('darkmode')) {
        classes.remove('darkmode');
        button.textContent = "Enable Darkmode";
        label.textContent = "Light";
    } else {
        classes.add('darkmode');
        button.textContent = "Disable Darkmode";
        label.textContent = "Dark";
    }
}