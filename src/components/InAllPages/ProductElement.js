import React, { Component } from 'react';
import styled from 'styled-components';
import numeral from "numeral";

const HomeNewsThingsElement = styled.div`

  display: block;
  position: relative;
  padding: 0 8px;
  margin-bottom: calc(2% + 1.45rem);
  text-align: right;
  width: 50%;

  @media (min-width: 768px) {
    width: 25%!important;
  }

  .btn, .btn:focus, .btn:active {
  background-color: rgba(0,0,0,0.06)!important;
  border: none!important;
  color: #555555!important;
  margin: 0.4rem 0rem 0rem 0.2rem!important;
  padding: 0.2rem 0.6rem!important;
  font-weight: 500;
  border-radius: 6px;
  font-size: 0.9rem;
  box-shadow: none!important;
  }

`;
export const ProductImgViewNumbersDiv = styled.div`

  position: absolute;
  top: 0.2rem;
  right: 0.4rem;
  color: rgba(255,255,255,0.8);
  display: block;
  align-items: center;
  font-size: 1rem;
  @media (min-width: 1200px){
    display: none;
  }
`;
export const ProductImg = styled.div`

  max-width: 170px;
  height: 168px;
  position: relative;
  background-color: #eee;
  border-radius:0.2rem;
  
  @media (max-width: 575px) {
    margin: 0 auto!important;
  }
  @media (min-width: 360px) and (max-width: 399px) {
    height: 210px!important;
  }
  @media (min-width: 400px) and (max-width: 575px) {
    height: 230px!important;
  }
  @media (min-width: 576px) {
    height: 250px!important;
  }

  &:hover ${ProductImgViewNumbersDiv}{ 
    display: block!important;
  }
  
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0.2rem!important;
  }

  &:hover img{ 
    box-shadow: 0 2px 8px 2px rgba(180,180,180,0.5);
    filter: brightness(90%);
    transition: filter 0.2s ease;
  }

  
`;
const HomeCategorieProductCategorie = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const HomeCategorieProductTitle = styled.div`

    font-weight: bold;
    margin-bottom: -0.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;

`;
const HomeCategorieProductWriter = styled.div`

    font-size: 1rem;
    display: flex;

    img {
    width: 26px;
    height: 26px;
    }

    a {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    height: 26px;
    }

`;


export default class ProductElement extends React.Component {
  render() {
    const { articleTitle, authorName, imgUrl, visitorsNumber, categoryTag, genderTag } = this.props;

    return (
      <HomeNewsThingsElement>
        <ProductImg><a href="#"><img src={imgUrl} /><ProductImgViewNumbersDiv><p>{numeral(visitorsNumber).format('0,0')} مشاهدة</p></ProductImgViewNumbersDiv></a></ProductImg>
        <HomeCategorieProductCategorie><button className="btn btn-primary" type="button">{categoryTag}</button><button className="btn btn-primary" type="button">{genderTag}</button></HomeCategorieProductCategorie>
        <HomeCategorieProductTitle><a href="#">{articleTitle}</a></HomeCategorieProductTitle>
        <HomeCategorieProductWriter><img src="https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-1/512/Creative_Writing-512.png" /><a href="#">{authorName}</a></HomeCategorieProductWriter>
      </HomeNewsThingsElement>
    )
  }
}
