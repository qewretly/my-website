// Упрощенный скрипт курсовой работы
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initDiagramModal();
});

// Навигация по секциям
function initNavigation() {
    const navCards = document.querySelectorAll('.nav-card');

    navCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.dataset.target;
            const targetSection = document.getElementById(target);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Модальное окно для диаграмм (если потребуется)
function initDiagramModal() {
    const diagramImages = document.querySelectorAll('.diagram-img');

    diagramImages.forEach(img => {
        img.addEventListener('click', () => {
            // Простое увеличение изображения в новом окне
            const newWindow = window.open('', '_blank');
            newWindow.document.write(`
                <html>
                    <head>
                        <title>Диаграмма</title>
                        <style>
                            body { margin: 0; background: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                            img { max-width: 100%; max-height: 100%; object-fit: contain; }
                        </style>
                    </head>
                    <body>
                        <img src="${img.src}" alt="${img.alt}">
                    </body>
                </html>
            `);
        });
    });
}