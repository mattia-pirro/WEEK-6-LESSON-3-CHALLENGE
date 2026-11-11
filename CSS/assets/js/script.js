const prodotti = [
    {
        id: 1,
        titolo: 'Sneaker Run Uomo',
        info: 'Scarpa da corsa  leggera per la corsa, suola in gomma traspirante.',
        prezzo: '€89,00',
    },
    {
        id: 2,
        titolo: 'T-shirt Basic Uomo',
        info: 'Cotone biologico, taglio regolare, disponibili in 5 colori.',
        prezzo: '€19,00',
    },
    {
        id: 3,
        titolo: 'Zaino City Uomo',
        info: 'Zaino in tessuto resistente, tasca interna, cinghia regolabile.',
        prezzo: '€49,00',
    },
    {
        id: 4,
        titolo: 'Accessori Uomo',
        info: 'Accessori: cinture, occhiali, portafogli in pelle e orologi eleganti.',
        prezzo: '€29,00',
    },
    {
        id: 5,
        titolo: 'Sneaker Run Donna',
        info: 'Scarpa da corsa leggera per la corsa, suola in gomma traspirante.',
        prezzo: '€89,00',
    },
    {
        id: 6,
        titolo: 'T-shirt Basic Donna',
        info: 'Cotone biologico, taglio regolare, disponibili in 5 colori.',
        prezzo: '€19,00',
    },
    {
        id: 7,
        titolo: 'Borsa City Donna',
        info: 'Borsa in tessuto resistente, tasca interna, cinghia regolabile.',
        prezzo: '€49,00',
    },
    {
        id: 8,
        titolo: 'Accessori Donna',
        info: 'Accessori: cinture, collane, portafogli in pelle e gioielli eleganti.',
        prezzo: '€29,00',
    }
];

const carousel = [
    {
        id: 1,
        titolo: 'Saldi di primavera',
        info: 'Fino al 50% di sconto sui prodotti in evidenza',
        sfondo: 'bg-primary',
    },
    {
        id: 2,
        titolo: 'Nuova Collezione',
        info: 'Scopri tutti i nuovi prodotti del nostro shop',
        sfondo: 'bg-success',
    },
    {
        id: 3,
        titolo: 'Spedizioni Gratuite',
        info: 'Per gli acquisti sopra i 50€ su tutto il sito',
        sfondo: 'bg-dark',
    }
];

const carouselInner = document.querySelector('.carousel-inner');
const products = document.getElementById('products');
const btnClose = document.getElementById('toggle-tema');
const bodyPage = document.body;

function renderCarousel() {
    carouselInner.textContent = '';
    const shuffledCarousel = [...carousel].sort(() => Math.random() - 0.5);

    shuffledCarousel.forEach((slide, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item', slide.sfondo, 'py-5');

        if (index === 0) {
            carouselItem.classList.add('active');
        }

        const container = document.createElement('div');
        container.classList.add('container', 'text-center');

        const h2 = document.createElement('h2');
        h2.classList.add('text-white', 'fs-1', 'fw-bold', 'mb-3');
        h2.textContent = slide.titolo;

        const paragraph = document.createElement('p');
        paragraph.classList.add('text-white', 'fs-5');
        paragraph.textContent = slide.info;

        container.appendChild(h2);
        container.appendChild(paragraph);
        carouselItem.appendChild(container);
        carouselInner.appendChild(carouselItem);
    });
};

function renderProducts() {
    products.textContent = '';
    const shuffledProducts = [...prodotti].sort(() => Math.random() - 0.5);

    shuffledProducts.forEach(prodotto => {
        const article = document.createElement('article');
        article.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'col-xxl-3');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'h-100', 'p-0', 'bg-light');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', 'https://placehold.co/300x180/E8E8E8/333333');
        img.setAttribute('alt', prodotto.titolo);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between', 'rounded-bottom');

        const cardContent = document.createElement('div');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title', 'fs-5');
        cardTitle.textContent = prodotto.titolo;

        const cardInfo = document.createElement('p');
        cardInfo.classList.add('card-info', 'card-text', 'text-muted');
        cardInfo.textContent = prodotto.info;

        const cardPrice = document.createElement('p');
        cardPrice.classList.add('card-price', 'card-text', 'fs-5', 'fw-bold');
        cardPrice.textContent = prodotto.prezzo;

        const button = document.createElement('button');
        button.classList.add('dettagli', 'btn', 'btn-primary', 'mt-4', 'w-100', 'text-white');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#myModal');
        button.textContent = 'Dettagli';

        button.addEventListener('click', () => {
            const modalImg = document.querySelector('.modal-img');
            const modalTitle = document.querySelector('.modal-title');
            const modalInfo = document.querySelector('.modal-info');
            const modalPrice = document.querySelector('.modal-price');

            modalImg.setAttribute('src', 'https://placehold.co/600x300/E8E8E8/333333');
            modalImg.setAttribute('alt', prodotto.titolo);
            modalTitle.textContent = prodotto.titolo;
            modalInfo.textContent = prodotto.info;
            modalPrice.textContent = prodotto.prezzo;
        });

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardInfo);
        cardContent.appendChild(cardPrice);

        cardBody.appendChild(cardContent);
        cardBody.appendChild(button);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        article.appendChild(cardDiv);
        products.appendChild(article);
    });
};

btnClose.addEventListener('click', () => {
    bodyPage.classList.toggle('dark');

    if (bodyPage.classList.contains('dark')) {
        btnClose.textContent = 'Tema chiaro';
    } else {
        btnClose.textContent = 'Tema scuro';
    }
});

window.onload = () => {
    renderCarousel();
    renderProducts();
};

