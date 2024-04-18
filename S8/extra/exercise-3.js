// De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

// En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

// El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

// La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

// Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html.




async function getOrders(){
    const orders= await fetch(`http://localhost:3000/orders`);
    const resOrders= await orders.json();
    resOrders.sort((a,b)=> new Date(b.date)- new Date(a.date))
            console.log(resOrders)
    for (let i = 0; i < resOrders.length; i++) {
        const divOrder= document.createElement("div")
        const h2Order=document.createElement("h2")
        document.body.appendChild(divOrder);
        divOrder.appendChild(h2Order)
        h2Order.innerHTML=`Pedido número: ${resOrders[i].id}`

        for (let j = 0; j < resOrders[i].products.length; j++) {
            const productId=resOrders[i].products[j].productId

                const productsData = await fetch (`http://localhost:3000/products/${productId}`)
                const resProducts= await productsData.json();
                const productName=resProducts.name

                console.log(productName);

                const pProduct=document.createElement("p")
                const pQuantity=document.createElement("p")
                divOrder.appendChild(pProduct)
                divOrder.appendChild(pQuantity)
                pProduct.innerHTML=productName
                pQuantity.innerHTML=`Cantidad: ${resOrders[i].products[j].quantity}`
            }

            
        }
    }





getOrders()