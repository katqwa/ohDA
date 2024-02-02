function moveButton() {
    var button = document.getElementById('noBtn');

    // Визначте висоту та ширину вікна перегляду
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    // Визначте нові випадкові координати для кнопки
    var newX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

    // Змініть положення кнопки
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
