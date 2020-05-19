import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    .btn {
      background-color: transparent!important;
      border-color: #222!important;
      color: #222!important;
      margin: 0.4rem 0rem 0.4rem 0.4rem!important;
      padding: 0.3rem 0.8rem!important;
      font-weight: 600;
      border-radius: 6px;
      border-style: dashed;
    }
    .btn:focus, .btn:hover, .btn:active {
      background-color: #ff566b!important;
      border-color: #ff566b!important;
      color: #fff!important;
      box-shadow: none!important;
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

export default class HomeSearch extends Component {
  render() {
    return (
      <HomeSearchCategorie>
        <SearchCategorieRightDiv><img src="assets/img/books.png" /></SearchCategorieRightDiv>
        <SearchCategorieLeftDiv>
          <h2>الدنيا فن..</h2>
          <form><input className="form-control" type="search" placeholder="لوّج على كتاب، فيلم، انمي ولا حاجات أخرى ..." /></form>
          <p>تنجم زادة تلوّج حسب الـ Catégorie الي تحب عليها:<br /></p>
          <HomeBtnsFlex>
            <Link to="/books"><button className="btn btn-primary" type="button">كتب</button></Link><button className="btn btn-primary" type="button">أفلام</button><button className="btn btn-primary" type="button">سيريات</button><button className="btn btn-primary" type="button">انمي و مانجا</button>
            <button className="btn btn-primary" type="button">إبداعاتكم</button><Link to="/other_topics"><button className="btn btn-primary" type="button">حاجات أخرى</button></Link>
          </HomeBtnsFlex>
        </SearchCategorieLeftDiv>
        <BeforeDiv />
      </HomeSearchCategorie>
    )
  }
}