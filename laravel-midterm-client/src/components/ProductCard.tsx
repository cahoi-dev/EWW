import React from "react";

interface ProductCardProps {
    image: string,
    name: string,
    price: number
}

export default function ProductCard(props: ProductCardProps)
{
    return (
        <div className="food__card">
            <img
                src={props.image}
                alt=""
                className="food__card__image"/>
            <div className="food_info">
                <div className="food__name">{props.name}</div>
                <div className="food__price">{props.price}</div>
                <a className="detail-btn">
                    learn more
                </a>
            </div>
        </div>
    );
}