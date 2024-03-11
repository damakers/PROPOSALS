function openMenu() {
    if (document.getElementById("menu").classList.contains('threebaractive')) {
        document.getElementById("menu").classList.remove('threebaractive')
    } else {
        document.getElementById("menu").classList.add('threebaractive');
    }

}