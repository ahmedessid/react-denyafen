import React, { Component } from 'react';
import CategoriePageElements from '../components/CategoriePage/CategoriePageElements';
import HomeSearch from '../components/InAllPages/HomeSearch';

export default class NewArticles extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="abouthome">
            <HomeSearch />
            <div className="homeCategories">
              <h2>آخر حاجات حكينا عليهم</h2>
              <p>آخر كتب، أفلام، سيريات، انمي و مانجا و برشا حاجات أخرى مزيانة عندها علاقة بالفن حكينا عليهم إحنا التوانسة.<br /></p>
              <CategoriePageElements filter="" axiosUrl="https://api.jsonbin.io/b/5eb19b6da47fdd6af15e02a8/5"/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
