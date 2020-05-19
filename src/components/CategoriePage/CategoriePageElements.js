import React, { Component } from 'react';
import ProductElement from '../InAllPages/ProductElement';
import axios from 'axios'

export default class CategoriePageElements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            elements: [],
            limit: 8,
            elementsExist: true
        };
    }

    componentDidMount(props) {
        axios.get(`${this.props.axiosUrl}`)
            .then(res => {
                const elements = res.data;
                this.setState({ elements });
            });

        this.setState({ elementsExist: false })
        setTimeout(() => {
            this.setState({ elementsExist: true })
        }, 1000);
    }

    onLoadMore = () => {
        this.setState({
            limit: this.state.limit + 8
        });
    }


    render() {
        return (
            <div>
                <div className="homeNewsThings">
                    {this.state.elementsExist === true ?

                        this.state.elements.slice(0, this.state.limit).map((element, index) => (
                            <ProductElement {...element} key={index} category={element.categoryTag} />
                        )) :
                        <div className="spinner-center">
                            <div className="spinner-grow" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>}
                </div>
                <button className="btn btn-primary homeSeeMore" type="button" onClick={this.onLoadMore}>زيد شوف حاجات أخرى...</button>
            </div>
        )
    }
}