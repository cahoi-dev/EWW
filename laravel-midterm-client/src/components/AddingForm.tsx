import React, {Component} from "react";
import axios from "axios";

export default class AddingForm extends Component<any, any>
{
    constructor(props: any) {
        super(props);

        this.state = {
            name: "",
            price: -1,
            category: -1,
            image: null
        }

        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
    }


    onChangeFoodName(event: React.FormEvent<HTMLInputElement>)
    {
        this.setState({
            name: event.currentTarget.value
        });
    }

    onChangePrice(event: React.FormEvent<HTMLInputElement>)
    {
        console.log(event.currentTarget.value);
        this.setState({
            price: event.currentTarget.value
        });
    }

    onChangeCategory(event: React.FormEvent<HTMLInputElement>)
    {
        this.setState({
            category: event.currentTarget.value
        });
    }

    onChangeImage(event: React.FormEvent<HTMLInputElement>)
    {
        this.setState({
            // @ts-ignore
            image: event.currentTarget.files[0]
        });
    }

    onSubmit()
    {
        console.log(this.state);
        axios.postForm('http://127.0.0.1:8000/api/foods/post', this.state)
            .then(res => {
                console.log(res);
            })
    }


    render()
    {
        return (
            <div className={"form"}>
                <label htmlFor="">
                    <span>food name</span>
                    <input onChange={(event) => this.onChangeFoodName(event)} type="text"/>
                </label>
                <label htmlFor="">
                    <span>price</span>
                    <input onChange={(event) => this.onChangePrice(event)} type="number"/>
                </label>
                <label htmlFor="">
                    <span>category</span>
                    <input onChange={(event) => this.onChangeCategory(event)} type="number"/>
                </label>
                <label htmlFor="">
                    <span>image</span>
                    <input onChange={(event) => this.onChangeImage(event)} type="file"/>
                </label>
                <div onClick={(event) => this.onSubmit()} className={"button"}>
                    sumbit
                </div>
            </div>
        );
    }
}