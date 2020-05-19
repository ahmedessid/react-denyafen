import React, { Component } from 'react';
import OtherArtsPageSearch from '../components/InAllPages/OtherArtsPageSearch';
import CategoriePageElements from '../components/CategoriePage/CategoriePageElements';
import axios from 'axios';
import styled from 'styled-components';
import ProductElement from '../components/InAllPages/ProductElement';


const HomeSearchCategorie = styled.div`

    border-radius: 6px;
    background: rgba(255,255,255,255);
    box-shadow: 1px 2px 16px rgba(0,0,0,0.1)!important;
    margin: 0 auto 4rem auto!important;
    width: 100%!important;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    text-align: right!important;
    position: relative;

    h2{font-size:1.4rem;}
    p{font-size:1rem;}

    @media (min-width: 992px){
        padding-left: 3rem!important;
        padding-right: 3rem!important;
    }
    
`;
const SearchCategorieRightDiv = styled.div`

  display: none;
  max-height: 100%;
  max-width: 100%;
  position: relative;

  @media (min-width: 992px) {
    width: 30%;
    display: block!important;
  }

  img{
    max-height: 100%;
    max-width: 100%;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4rem;
    right: 0;
    margin: auto;
  }

`;
const SearchCategorieLeftDiv = styled.div`

    width: 100%;
    p {
      text-align: right!important;
      margin: 1.2rem 0 0.6rem 0;
    }
    
    .btn, .btn:focus{
      background-color: transparent;
      border-color: #222;
      color: #222;
      margin: 0.4rem 0rem 0.4rem 0.4rem;
      padding: 0.3rem 0.8rem;
      font-weight: 600;
      border-radius: 6px;
      border-style: dashed;
      box-shadow: none!important;
    }
    .btn.active:active, .btn.active:focus, .btn.active:hover, .btn:not(.disabled).active{
      background-color: #ff566b!important;
      border-color: #ff566b!important;
      color: #fff!important;
      box-shadow: none!important;
    }
    .btn:hover{
      background-color: rgba(0,0,0,0.06)!important;
      border-color: #999!important;
      color: #444!important;
    }

`;
const HomeBtnsFlex = styled.div`

  display: inline-table;

`;
const BeforeDiv = styled.div`
@media (min-width: 1200px) {
position: absolute;
bottom: -115px;
right: 0px!important;
z-index: -1;
content: url(../../assets/img/3.svg);
height: 250px;
transform: rotate(-90deg);
}
`;

const BUTTONS = [
    { id: 1, title: 'تونس' },
    { id: 2, title: 'ثقافات' },
    { id: 3, title: 'فنون' },
    { id: 4, title: 'خرافات' },
    { id: 5, title: 'عجائب' },
    { id: 6, title: 'المستقبل' },
    { id: 7, title: 'الطبيعة' },
    { id: 8, title: 'طاقة إيجابية' },
    { id: 9, title: 'نوستالجيا' },
    { id: 10, title: 'عالم الجريمة' },
    { id: 11, title: 'إحنا النساء' },
    { id: 12, title: 'أخرى' }
]

export default class CategoriePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            active: 0,
            elements: [],
            limit: 8,
            elementsExist: true
        }
    }

    componentDidMount(props) {
        axios.get(`https://api.jsonbin.io/b/5eb5f79547a2266b14753b6a/1`)
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

    setActive = (index, gender) => {
        var prevState = this.state.active;
        if (index !== prevState)
            this.setState({ active: index });
        else {
            this.setState({ active: 0 });
            gender = '';
        }
        this.changeFilter(gender);
    }

    changeFilter = (filter) => {
        this.setState({
            filter: filter
        });
    }

    getClass = (index, name) => {
        var current = this.state.active;
        if (index === current)
            return name + ' active';
        return name;
    }

    render() {
        var list = this.state.elements;

        if (this.state.filter !== '') {
            list = list.filter((i) => i.genderTag.indexOf(this.state.filter) !== -1);
        }
        list = list.slice(0, this.state.limit).map((element, index) => (
            <ProductElement {...element} key={index} category={element.categoryTag} />
        ));

        return (
            <main>
                <div className="container">
                    <div className="abouthome">
                        <HomeSearchCategorie>
                            <SearchCategorieRightDiv><img src="https://img.icons8.com/bubbles/240/cottage.png" /></SearchCategorieRightDiv>
                            <SearchCategorieLeftDiv>
                                <h2>حاجات أخرى.. كل شيء في حياتنا فن!</h2>
                                <form><input className="form-control" type="search" placeholder="لوج على أي حاجة تحبها..." /></form>
                                <p>تنجم زادة تلوّج حسب الـ Catégorie الي تحب عليها:<br /></p>
                                <HomeBtnsFlex>

                                    {BUTTONS.map((bt, index) => (
                                        <button
                                            key={index}
                                            onClick={() => this.setActive(bt.id, bt.title)}
                                            className={`btn ${this.getClass(bt.id, bt.title)}`}>
                                            {bt.title}
                                        </button>
                                    ))}

                                </HomeBtnsFlex>

                            </SearchCategorieLeftDiv>
                            <BeforeDiv />
                        </HomeSearchCategorie>
                        <div className="homeCategories">
                            <div className="homeNewsThings">
                                {this.state.elementsExist === true ?

                                    list :
                                    <div className="spinner-center">
                                        <div className="spinner-grow" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>}
                            </div>
                            <button className="btn btn-primary homeSeeMore" type="button" onClick={this.onLoadMore}>زيد شوف حاجات أخرى...</button>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}