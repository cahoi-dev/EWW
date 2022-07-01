import React, {Component} from "react";

export default class AddingForm extends Component<any, any>
{
    constructor(props: any) {
        super(props);

        this.state = {
            foodName: "",
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
            foodName: event.currentTarget.value
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
        let data = event.currentTarget as HTMLInputElement;
        // @ts-ignore
        console.log(data.files[0])
        this.setState({
            // @ts-ignore
            image: data.files[0]
        });
    }

    onSubmit()
    {
        console.log("test")
    }

    render()
    {
        return (
            <form className={"form"} action="">
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
            </form>
        );
    }
}