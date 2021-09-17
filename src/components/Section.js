import React from 'react'
import Product from './Product';
import './Section.css';

export default function Section(props) {
    const productDetails = [
        {
            id: 1,
            isSale: false,
            productName: "Fancy Product",
            discountedPrice: "",
            isRating: false,
            price: "$40.00 - $80.00",
            buttonOption: "View Options"
        },
        {
            id: 2,
            isSale: true,
            productName: "Special Item",
            discountedPrice: "$20.00",
            isRating: true,
            price: "$18.00",
            buttonOption: "Add to cart"
        },
        {
            id: 3,
            isSale: true,
            productName: "Sale Item",
            discountedPrice: "$50.00",
            isRating: true,
            price: "$25.00",
            buttonOption: "Add to cart"
        },
        {
            id: 4,
            isSale: false,
            productName: "Popular Item",
            discountedPrice: "",
            isRating: true,
            price: "$40.00",
            buttonOption: "Add to cart"
        },
        {
            id: 5,
            isSale: true,
            productName: "Sale Item",
            discountedPrice: "$50.00",
            isRating: true,
            price: "$25.00",
            buttonOption: "Add to cart"
        },
        {
            id: 6,
            isSale: false,
            productName: "Fancy Product",
            discountedPrice: "",
            isRating: false,
            price: "$120.00 - $280.00",
            buttonOption: "View Options"
        },
        {
            id: 7,
            isSale: true,
            productName: "Special Item",
            discountedPrice: "$20.00",
            isRating: true,
            price: "$18.00",
            buttonOption: "Add to cart"
        },
        {
            id: 8,
            isSale: false,
            productName: "Popular Item",
            discountedPrice: "",
            isRating: true,
            price: "$40.00",
            buttonOption: "Add to cart"
        }
    ]
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    productDetails.map((product) =>{
                        return (<Product details={product} key={product.id} count={props.count} setCount={props.setCount} />)
                    })
                }
            </div>
        </div>
    </section>
    )
}
