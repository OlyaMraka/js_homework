// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// // Відобразити всі поля кожної корзини.

fetch("https://dummyjson.com/carts")
.then(res => res.json())
.then(data => {
    let cartContainer = document.createElement("div");
    cartContainer.className = "cart_container";

    let {carts, total, skip, limit} = data;
    for(let {id,
        products,
        total,
        discountedTotal,
        userId,
        totalProducts,
        totalQuantity} of carts) {
        let cartCard = document.createElement("div");
        cartCard.className = "cart_card";

        let idText = document.createElement("p");
        idText.innerText = id;

        let productContainer = document.createElement("div");
        productContainer.className = "product_container";

        for(let {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} of products){
            let productCard = document.createElement("div");
            productCard.className = "product_card";

            let productHeader = document.createElement("p");
            productHeader.className = "product_header";

            let productIdText = document.createElement("p");
            productIdText.innerText = id;
            let productNameText = document.createElement("p");
            productNameText.innerText = title;

            productHeader.append(productIdText, productNameText);

            let productImage = document.createElement("img");
            productImage.src = thumbnail;

            let productFooter = document.createElement("div");
            productFooter.className = "product_footer";
            productFooter.innerHTML = `Price: ${price}<br>Quantity: ${quantity}<br>Total: ${total}<br>
Discount Percentage: ${discountPercentage}<br>Discounted Total: ${discountedTotal}<br>`;

            productCard.append(productHeader, productImage, productFooter);
            productContainer.appendChild(productCard);
        }

        let productSummary = document.createElement("div");
        productSummary.className = "product_summary";
        productSummary.innerHTML = `Total: ${total}<br>Discounted Total: ${discountedTotal}<br>User Id: ${userId}<br>
Total Products: ${totalProducts}<br>Total Quantity: ${totalQuantity}<br>`;

        cartCard.append(idText, productContainer, productSummary);
        cartContainer.appendChild(cartCard);
    }

    let cartFooter = document.createElement("div");
    cartFooter.className = "cart_footer";

    let totalText = document.createElement("p");
    totalText.innerText = `Total: ${total}`;

    let skipText = document.createElement("p");
    skipText.innerText = `Skip: ${skip}`;

    let limitText = document.createElement("p");
    limitText.innerText = `Limit: ${limit}`;

    cartFooter.append(totalText, skipText, limitText);

    document.body.append(cartContainer, cartFooter);
})