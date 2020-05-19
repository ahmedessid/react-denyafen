import React, { Component } from 'react'

export default class ProfileProductElements extends Component {
    render() {
        return (
            <div className="homeNewsThings">
            <div className="homeNewsThingsElement">
                <div className="ProductImg profileShowPageProductImg"><a href="#"><img src="https://lumiere-a.akamaihd.net/v1/images/p_disneyplus_disneynature_elephant_19046_1a6ea172.jpeg?region=0%2C0%2C540%2C810" /><div className="ProductImgViewNumbersDiv"><p>16K مشاهدة</p></div></a></div>
                <div className="homeCategorieProductCategorie profileShowPageProductCategorieBtns"><button className="btn btn-primary" type="button">أفلام</button><button className="btn btn-primary" type="button">أصناف أخرى</button></div>
                <div className="homeCategorieProductTitle profileShowPageTitle"><a href="#">Elephant</a></div>
                <div className="homeCategorieProductWriter"><img src="https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-1/512/Creative_Writing-512.png" /><a href="#">Fedi Meddeb</a></div>
            </div>
            </div>
        )
    }
}
