import React from "react";

import ProductCardList from 'containers/ProductCardList';
import Category from "components/Category";

export default function Products()
{
    return(
        <div>
            <Category/>
            <ProductCardList/>
        </div>
    );
}