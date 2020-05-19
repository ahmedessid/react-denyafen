import React, { Component } from 'react';
import CategoriePageSearch from '../components/CategoriePage/CategoriePageSearch';
import CategoriePageElements from '../components/CategoriePage/CategoriePageElements';

export default class CategoriePage extends Component {
    render() {
        return (
        <main>
            <div className="container">
            <div className="abouthome">
                <CategoriePageSearch/>
                <div className="homeCategories">
                <CategoriePageElements/>
                <button className="btn btn-primary homeSeeMore" type="button">زيد شوف حاجات أخرى...</button>
                </div>
            </div>
            </div>
        </main>
        )
    }
}
