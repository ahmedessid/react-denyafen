import React, { Component } from 'react';
import OtherArtsPageSearch from '../components/InAllPages/OtherArtsPageSearch';
import CategoriePageElements from '../components/CategoriePage/CategoriePageElements';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class CategoriePage extends Component {

    render() {

        return (
            <main>
                <div className="container">
                    <div className="abouthome">
                        <Router>
                            <OtherArtsPageSearch/>
                            <div className="homeCategories">
                                <Route exact path="/other_topics" component={() => <CategoriePageElements axiosUrl="https://api.jsonbin.io/b/5eb5f79547a2266b14753b6a/2" />} />
                                <Route exact path="/other_topics/tounes" component={() => <CategoriePageElements axiosUrl="https://api.jsonbin.io/b/5eb5f79547a2266b14753b6a/1" />} />
                            </div>
                        </Router>
                    </div>
                </div>
            </main>
        )
    }
}