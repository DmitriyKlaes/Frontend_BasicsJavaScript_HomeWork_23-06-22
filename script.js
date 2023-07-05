const productData =
    `[
        {
            "productURL": "#",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_1.png",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00"
        },
        {
            "productURL": "#",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_2.png",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00"
        },
        {
            "productURL": "#",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_3.png",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00"
        },
        {
            "productURL": "#",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_4.png",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00"
        },
        {
            "productURL": "#",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_5.png",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00"
        },
        {
            "productURL": "#",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_6.png",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00"
        }
    ]`;

const productBoxContent = document.querySelector('.product-box_content')

JSON.parse(productData).forEach(e => {

    const item = document.createElement('a');
    item.href = e.productURL;
    item.classList.add('product_item');

    const itemHover = document.createElement('img');
    itemHover.src = e.hoverUrl;
    itemHover.alt = 'hover';
    itemHover.classList.add('product_item_hover_img');

    const itemImg = document.createElement('img');
    itemImg.src = e.imgUrl;
    itemImg.alt = 'product';
    itemImg.classList.add('product_item_img_main');

    const itemContent = document.createElement('div');
    itemContent.classList.add('product_item_content');

    const itemHeading = document.createElement('h3');
    itemHeading.textContent = e.heading;
    itemHeading.classList.add('product_item_heading');

    const itemText = document.createElement('p');
    itemText.textContent = e.text;
    itemText.classList.add('product_item_text');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$${e.price}`;
    itemPrice.classList.add('product_item_price');

    itemContent.appendChild(itemHeading);
    itemContent.appendChild(itemText);
    itemContent.appendChild(itemPrice);
    item.appendChild(itemHover);
    item.appendChild(itemImg);
    item.appendChild(itemContent);
    productBoxContent.appendChild(item);
});