function redirectToPage(choice) {
    if (choice === 'yes') {
        window.location.href = 'page1.html';  // Замініть на URL сторінки, на яку ви хочете перейти
    } else if (choice === 'no') {
        window.location.href = 'page2.html';  // Замініть на URL іншої сторінки, якщо користувач вибрав "ні"
    }
}
