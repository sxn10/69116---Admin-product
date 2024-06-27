const products = [
    {
        createdAt: -172800000,
        name: "Nike Juniper Trail 2 GORE-TEX",
        image: "https://nikearprod.vtexassets.com/arquivos/ids/877894-1200-1200?width=1200&height=1200&aspect=true",
        price: 199999,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        category: "mountain",
        id: "38"
    },
    {
        createdAt: 1717113600000,
        name: "Clifton 9",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660043072-hoka-bondi-8-zapatillas-running-1660043036.png?crop=1.00xw:0.823xh;0,0.0783xh&resize=980:*",
        price: 100000,
        description: "La novena versión de nuestra galardonada gama Clifton ofrece una versión más ligera y con más amortiguación que nunca. Las nuevas Clifton 9 reducen el peso al tiempo que añaden 3 mm de altura; además, ofrecen una experiencia revitalizada bajo los pies con una nueva espuma con capacidad de respuesta y un diseño de suela mejorado",
        category: "running",
        id: "43"
    },
    {
        createdAt: 1716076800000,
        name: "Nike Invencible 3",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28810afe-6b6a-4f6a-beb4-701a3539bb02/invincible-3-zapatillas-de-running-asfalto-9lqlcK.png",
        price: 365100,
        description: "Test de imagenmmmmmm",
        category: "running",
        id: "44"
    },
    {
        createdAt: -27076636800000,
        name: "Nike Air Force 1 07",
        image: "https://nikearprod.vtexassets.com/arquivos/ids/659742-1200-1200?width=1200&height=1200&aspect=true",
        price: 209999,
        description: "La luminosidad sigue viva con este calzado de básquetbol original. La fusión de la comodidad de la duela y un estilo externo a la cancha le da un giro fresco a lo que mejor conoces: una confección inspirada en los años 80, detalles audaces y un estilo basquetbolero puro.",
        category: "moda",
        id: "46"
    },
    {
        createdAt: 1719276313261,
        name: "Nike Pegasus 39 Shield",
        image: "https://static.nike.com/a/images/t_default/c7cee966-efba-4fc4-99ce-ab2ccacf9f81/infinityrn-4-gore-tex-zapatillas-de-running-asfalto-impermeables-BcdT0P.png",
        price: 167999,
        description: "Tu caballo alado regresa para ayudarte a avanzar bajo la lluvia. El acabado repelente al agua te ayuda a mantener los pies secos, mientras que una sensación cómoda, similar al tejido Fleece, en el interior mantiene los pies abrigados para carreras en climas",
        category: "running",
        id: "47"
    },
    {
        createdAt: 1648598400000,
        name: "Nike SB Dunk Low Pro",
        image: "https://nikearprod.vtexassets.com/arquivos/ids/914361-1200-1200?width=1200&height=1200&aspect=true",
        price: 209000,
        description: "El Nike SB Dunk Low Pro ofrece el aspecto icónico del Dunk con un estilo de perfil bajo. La unidad Zoom Air en el talón y la lengüeta acolchada proporcionan un nivel de comodidad ideal para practicar skate.",
        category: "moda",
        id: "48"
    }
]


const tableBodyHTML = document.getElementById('table-body')

console.log(tableBodyHTML)

products.forEach((prod) => {

    tableBodyHTML.innerHTML += 
    `<tr>
        <td class="product-image">
            <img src=${prod.image} alt="">
        </td>
        <td class="product-name">
            ${prod.name}
        </td>
        <td class="product-description">
            ${prod.description}
        </td>
        <td class="product-date">
            ${prod.createdAt}
        </td>
        <td class="product-price">
            ${prod.price}
        </td>
        <td class="product-actons"> 
            <button class="btn btn-primary btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    </tr>`

})

