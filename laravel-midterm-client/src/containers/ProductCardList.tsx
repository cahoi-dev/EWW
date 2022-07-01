import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import EventEmitter from 'utils/Emitter';

import ProductCard from 'components/ProductCard';

export default class ProductCardList extends Component<any, any>
{
    constructor(props: any)
    {
        super(props);

        this.state = {
            food_list: []
        };

        this.setFoodListState = this.setFoodListState.bind(this);
        this.getFoodListByCategory = this.getFoodListByCategory.bind(this);
    }


    async setFoodListState()
    {
        console.log('abc');
        try
        {
            const res = await axios.get(`http://127.0.0.1:8000/api/foods`);
            this.setState({
                food_list: res.data
            })
        }
        catch(error)
        {
            console.error(error);
        }
    }

    async getFoodListByCategory(event: any)
    {
        console.log('def');
        try
        {
            const res = await axios.get(`http://127.0.0.1:8000/api/foods-by-category?category_id=${event.category_id}`);
            this.setState({
                food_list: res.data
            })
        }
        catch(error)
        {
            console.error(error);
        }
    }


    async componentDidMount()
    {
        await this.setFoodListState();
        const listener = EventEmitter.addListener('select-category', this.getFoodListByCategory)
        return ()=>{
            listener.remove();
        }
    }


    async onSelectCategoryEvent()
    {
        try
        {
            const res = await axios.get(`http://127.0.0.1:8000/api/foods`);
            this.setState({
                food_list: res.data
            })
        }
        catch(error)
        {
            console.error(error);
        }
    }


    render()
    {
        return (
            <div className={"food__card__list"}>
                {
                    this.state.food_list.length === 0
                    ? <h1>no product</h1>
                    : this.state.food_list.map((value: any, index: any) => {
                        return <ProductCard
                            key={index}
                            image={value.image}
                            name={value.name}
                            price={value.price}/>
                    })
                }
            </div>
        );
    }
}