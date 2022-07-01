import React, {Component} from "react";
import axios from "axios";
import EventEmitter from 'utils/Emitter';

export default class Category extends Component<any, any>
{
    constructor(props: any)
    {
        super(props);

        this.state = {
            categories: []
        }

        this.raiseSelectCategoryEvent = this.raiseSelectCategoryEvent.bind(this);
    }

    raiseSelectCategoryEvent(category_id: number)
    {
        EventEmitter.emit('select-category', {
            category_id: category_id
        })
    }

    async componentDidMount()
    {
        try
        {
            const res = await axios.get(`http://127.0.0.1:8000/api/categories`);
            console.log(res.data);
            this.setState({
                categories: res.data
            });
        }
        catch (error)
        {
            console.error(error)
        }
    }

    render()
    {
        return (
            <ul className="category">
            {
                this.state.categories.length === 0
                ? <></>
                : this.state.categories.map((value: any, index: any) => {
                    return (
                        <li onClick={() => this.raiseSelectCategoryEvent(value.id)} key={index} id={value.id} className="category__ele">
                            {value.category}
                        </li>
                    );
                })
            }
            </ul>
        );
    }
}