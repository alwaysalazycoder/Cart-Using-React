const products = [
    {
        name: "Air jordan 1 low se",
        price: " ₹12,345",
        quantity: 1,
        mrp: 12345,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f190a992-411a-4990-bf8d-0e6023e937fe/air-force-1-mid-07-lx-shoes-KB8VF7.png",
        category: "Men's Shoes",
    },

    {
        name: "Nike Air Max 97 OG",
        price: "₹16,995",
        quantity: 1,
        mrp: 16995,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png",
        category: "Men's Shoes"

    },
    {
        name: "Nike Air Max 90 SE",
        price: "₹11,895",
        mrp: 11895,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa49ae81-923f-417b-8f20-b19eb1c26a19/air-max-90-se-shoes-4VpnRg.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Air Max Alpha 5",
        price: "₹7,985",
        mrp: 7985,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/68c28c49-4c26-4f81-9b4e-0e9760edcef9/air-max-alpha-trainer-5-training-shoes-x8Jzj6.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Revolution Next",
        price: "₹6,985",
        mrp: 6985,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a87e3da-58fd-4cdf-8b11-aee7501a8ac5/revolution-6-next-nature-road-running-shoes-NC0P7k.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Air Max 270",
        price: "₹14,975",
        mrp: 14975,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/561d8b68-bc31-498c-a360-882b4f5ab3d9/air-max-270-shoes-GMBL00.png",
        category: "Men's Shoes"
    },
    {
        name: "Air Jordan 1 Retro High",
        price: "₹16,995",
        mrp: 16995,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b1d3cf2e-0dca-4f6d-97ff-21006c346e8e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Air Force 1'07",
        price: "₹4,565",
        mrp: 4565,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b89c9e48-d1bf-4d72-afd5-18ac97a4c072/air-force-1-07-shoes-hr5tH4.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Pegasus 39",
        price: "₹9,875",
        mrp: 9875,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/471bffe8-9757-4b0e-8416-8ed1a9e5c7d0/pegasus-39-road-running-shoes-kmZSD6.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Air Force LV08",
        price: "₹9,345",
        mrp: 9345,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b05de1c-b694-48b1-9855-f8494f99e0b3/air-force-1-07-lv8-shoes-Blj3sx.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Air Force 1'07 LV08",
        price: "₹12,475",
        mrp: 12475,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ded12e4f-902e-4d03-aeff-e5582635f78d/air-force-1-07-lv8-shoes-GwvjTM.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Air force 1",
        price: "₹13,232",
        mrp: 13232,
        quantity: 1,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6a095e1-d80b-4a28-b0d4-fdc3c098c95c/air-force-1-07-shoes-7rsrjR.png",
        category: "Men's Shoes"

    },
    {
        name: "Air Jordan 1 Mid",
        price: "₹14,765",
        mrp: 14765,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc9efa13-9572-490e-afa9-4c5b8e25187a/air-jordan-1-mid-se-shoes-pZbfP8.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Air Max 97 SE",
        price: "₹6000",
        mrp: 6000,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f379719b-d67c-433d-a741-155b5cdcedcc/air-max-97-se-shoes-fQ43hn.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Alphaphy 2",
        price: "₹25,095",
        mrp: 25095,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c0e5a3d-e70e-4a29-b470-d880239b84da/alphafly-2-road-racing-shoes-pTSZRk.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Tempo",
        price: "₹10,096",
        mrp: 10096,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f6e3bd8-568b-46e5-bf45-bb4f8fd07e4a/tempo-road-running-shoes-chNfdw.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Jordan I High G",
        price: "₹13,875",
        mrp: 13875,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de76cec1-ad70-423d-9d0f-28bd3a19f6e4/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
        category: "Men's Shoes"
    }, {
        name: "Nike SB Force 58",
        price: "₹6,095",
        mrp: 6095,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae07b5f1-8847-4f07-957b-6bc625b9b308/sb-force-58-skate-shoes-LJNW5L.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Jordan Retro High OG",
        price: "₹15,995",
        mrp: 15995,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a229b012-c62d-4f89-9ed2-3fca4bbe274a/air-jordan-1-retro-high-og-shoes-G8hcQx.png",
        category: "Men's Shoes"
    }, {
        name: "Jordan Stay Loyal 2",
        price: "₹10,295",
        mrp: 10295,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/037939bd-e08f-4c28-a3d2-b89c1578f7fc/jordan-stay-loyal-2-shoes-sDkgDk.png",
        category: "Men's Shoes"
    }, {
        name: "Jordan Series ES",
        price: "₹13,095",
        mrp: 13095,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f588e7d1-a22e-4642-9042-3eb3de7562d6/jordan-series-es-shoes-FDtg9v.png",
        category: "Men's Shoes"
    }, {
        name: "Air Jordan 1 Zoom CMFT",
        price: "₹12,495",
        mrp: 12495,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30b29f29-321d-4360-a03a-611188bc0cfc/air-jordan-1-zoom-cmft-shoes-mDxHSk.png",
        category: "Men's Shoes"
    }, {
        name: "Nike Phantom GX Academy",
        price: "₹22,0355",
        mrp: 220355,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/269e4c0e-70d7-411e-920e-ddf393b7a2c6/phantom-gx-academy-tf-football-shoes-zQ5w1x.png",
        category: "Men's Shoes"
    }, {
        name: "Air Jordan Legacy 312",
        price: "₹32,085",
        mrp: 32085,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a44e41a-f17a-4036-b06b-b17e641d073f/air-jordan-legacy-312-shoes-8j5LzH.png",
        category: "Men's Shoes"
    }, {
        name: "Air Jordan XXXVII Tatum PF",
        price: "₹18,585",
        mrp: 18585,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e22afce-5887-4874-99a5-d2bdb8b8a199/air-jordan-xxxvii-tatum-pf-basketball-shoes-mNftLD.png",
        category: "Men's Shoes"
    }, {
        name: "Nike ISPA Sense Flykit",
        price: "₹18,395",
        mrp: 18395,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18da11c3-2e6b-4280-b546-765b37ff8f29/ispa-sense-flyknit-shoes-CzhcwB.png",
        category: "Men's Shoes"
    }, {
        name: "Air Jordan XXXIV RUI",
        price: "₹14.055",
        mrp: 14055,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/875b2ac6-0161-4d86-af23-df785e51f999/air-jordan-xxxvi-rui-basketball-shoes-JL99LQ.png",
        category: "Men's Shoes"
    }, {
        name: "Nike AirForce 1 Mid React",
        price: "₹14,195",
        mrp: 14195,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70b257d2-e16a-4e2c-9c64-45af16ede378/air-force-1-mid-react-shoes-9Tkx21.png",
        category: "Men's Shoes"
    },
    {
        name: "Nike Air force 1",
        price: "₹13,232",
        mrp: 13232,
        quantity: "1",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6a095e1-d80b-4a28-b0d4-fdc3c098c95c/air-force-1-07-shoes-7rsrjR.png",
        category: "Men's Shoes"

    },
    {
        name: "Nike Air Force 1'07 LV08",
        price: "₹12,475",
        mrp: 12475,
        quantity: 6,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ded12e4f-902e-4d03-aeff-e5582635f78d/air-force-1-07-lv8-shoes-GwvjTM.png",
        category: "Men's Shoes"
    },
]

export { products } 