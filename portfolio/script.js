//navbar fixed
window.onscroll = function () {
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if (window.pageYOffset > fixedNav) {
        nav.classList.add("navbar");
    } else {
        nav.classList.remove("navbar");
    }
}
//copy to clipboard
let text = "lepiinnn@gmail.com";
const copy = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
