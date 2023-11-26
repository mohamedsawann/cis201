function displayCart() {
    
    const itemDetails = {
        'Jordan 4 Retro Military Black': { price: 200, image: 'j4s.webp' },
        'Jordan 11 Cool Greys': { price: 175, image: 'jordan11ss.webp' },
        'Jordan 1 Lost and Found': { price: 250, image: 'j1sR.jpg' },
        'Jordan 1 University Blues': { price: 300, image: 'j1sBB.webp' },
        'Jordan 4 Travis Scotts': { price: 400, image: 'j4sT.jpg' },
        'Dunks Low Black and White': { price: 230, image: 'panda.webp' },
        'Airforce White': { price: 150, image: 'airforceW.webp' },
        'Airforce Black': { price: 150, image: 'airforceB.webp' },
        'Airforce Travis Scott': { price: 410, image: 'airforceT.webp' },
    };

   
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = ''; 

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = itemDetails[item].image; 

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item;

        const price = document.createElement('p');
        price.textContent = `Price: $${itemDetails[item].price.toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1); 
            localStorage.setItem('cart', JSON.stringify(cart)); 
            displayCart(); 
        });

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(removeButton);

        card.appendChild(img);
        card.appendChild(cardBody);

        itemElement.appendChild(card);
        cartItems.appendChild(itemElement);

        
        total += itemDetails[item].price || 0;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

displayCart();