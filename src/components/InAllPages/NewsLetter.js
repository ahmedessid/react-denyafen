import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

export const NewsLetterDiv = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 6px;
    padding: 1.5rem;
    text-align: center;
    background: rgba(255,255,255,255);
    box-shadow: 1px 2px 16px rgba(0,0,0,0.1)!important;
    position: relative;
    margin: 0 auto 4rem auto;
    width: 100%;

    h2 {font-size: 1.4rem;}

    p {font-size: 1rem; text-align: center;}

    img {width: 75px;}

    .btn, .btn:focus, .btn:hover, .btn:active {
    background-color: #ff566b!important;
    border-color: #ff566b!important;
    box-shadow: none!important;
    }

    @media (min-width: 992px){
        width: 50%!important;
    }
`;
export const Shapeliness = styled.div`
    @media (min-width: 1200px) {
        position: absolute;
        bottom: 25px;
        right: 304px;
        z-index: -1;
        content: url(../../assets/img/3.svg);
        height: 250px;
    }
`;

export default class NewsLetter extends Component {
    render() {
        return (
            <NewsLetterDiv><img src="https://toppng.com/uploads/preview/mark-orange-audiomack-logo-transparent-background-11563164647mucca5uyeo.png" />
              <h2>الدنيا فن..</h2>
              <p>باش تعرف جديدنا و &nbsp;توصلك آخر المراجعات، الكتابات و الإبداعات متاع التوانسة مع الكتب، الأفلام، السيريات، الآنمي و المانجا و برشا حاجات مزيانة أخرى تخليك تعيش الفن بنكهة تونسية إشترك معانا في الـ Platforme.<br /><strong>الدنيا فن.. للتوانسة الي يتنفسوا فن.</strong><br /></p>
              <Link to="/newsletter"><button className="btn btn-primary" type="button">إشترك معانا</button></Link>
              <Shapeliness/>
            </NewsLetterDiv>
        )
    }
}
