import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBasic = styled.div`

    background-color: #ffffff;
    color: #4b4c4d;
    box-shadow: 1px 2px 18px rgba(0,0,0,.1);
    bottom: 0!important;
    width: 100%;
    position: relative;

    ul {
    padding: 0;
    list-style: none;
    text-align: center;
    font-size: 18px;
    line-height: 2!important;
    margin-bottom: 0;
    display: none;
    }
    
    li {
    padding: 0 10px;
    }

    ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    }

    .h6, h6 {
    line-height: 2.1;
    }

    ul a:hover {
    opacity: 1;
    }

    @media (min-width: 300px) {
        padding: 0.6rem 0rem;
    }
    
    @media (min-width: 576px) {
        padding: 0.6rem 1rem;
    }

    @media (min-width: 768px) {
    padding: 0.6rem 2rem;
    }

    @media (min-width: 992px) {
    padding: 0.6rem 6rem;
    }

    @media (min-width: 1200px) {
    padding: 0.6rem 14rem;
    }

`;
const FooterOrganisation = styled.div`

    position: relative;
    display: flex;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #fff;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;

`;
const Social = styled.div`

    text-align: center;
    height: 42px;
    line-height: 42px;
    display: inherit;

    @media (max-width: 575px) {
    margin-left: auto;
    margin-right: auto; 
    }

    &> a {
    font-size: 24px;
    width: 24px;
    height: 24px;
    display: inline-block;
    text-align: center;
    border: none;
    margin: 0 8px;
    color: inherit;
    opacity: 0.7;
    }

    &> a:hover {
    opacity: 1;
    }
`;
const Copyright = styled.div`

    vertical-align: middle!important;
    color: #737373!important;
`;

export default class Footer extends Component {
    render() {
        return (
            <FooterBasic>
                <FooterOrganisation>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="/about">الدنيا فن</Link></li>
                    <li className="list-inline-item"><Link to="/newsletter">جديدنا</Link></li>
                    <li className="list-inline-item"><Link to="/policy">سياسة الخصوصية</Link></li>
                </ul>
                <Social><a href="https://www.facebook.com/a7med.essid" target="_blank"><i className="icon ion-social-instagram" /></a><a href="https://www.facebook.com/a7med.essid" target="_blank"><i className="icon ion-social-facebook" /></a>
                    <Copyright>الفن 2020 ©<br /></Copyright>
                </Social>
                </FooterOrganisation>
            </FooterBasic>
        )
    }
}
