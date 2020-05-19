import React, { Component } from 'react';
import Brands from '../components/InAllPages/Brands';
import NewsLetter from '../components/InAllPages/NewsLetter';
import HomeSearch from '../components/InAllPages/HomeSearch';
import ProductElement from '../components/InAllPages/ProductElement';

export default class Home extends React.Component {
    render() {
        return (   
      <main>
        <div className="container">
          <div className="abouthome">
            <HomeSearch/>
            <div className="homeCategories">
              <h2>آخر حاجات حكينا عليهم</h2>
              <p>آخر كتب، أفلام، سيريات، انمي و مانجا و برشا حاجات أخرى مزيانة عندها علاقة بالفن حكينا عليهم إحنا التوانسة.<br /></p>
              <div className="homeNewsThings">
                <ProductElement/>
                <ProductElement/>
                <ProductElement/>
                <ProductElement/>
              </div><button className="btn btn-primary homeSeeMore" type="button">زيد شوف حاجات أخرى...</button></div>
            <div className="homeCategories">
              <h2>أكثر حاجات عجبتكم</h2>
              <p>أكثر كتابات و مراجعات عجبتكم متاع توانسة حكاو فيها على كتب، أفلام، سيريات، انمي و حاجات أخرى مزيانة ..<br /></p>
              <div className="homeNewsThings">
                <ProductElement/>
                <ProductElement/>
                <ProductElement/>
                <ProductElement/>
              </div>
            </div>
            <Brands/>
            <NewsLetter/>
          </div>
        </div>
      </main>
        )
    }
}