import React, { Component } from 'react';
import styled from 'styled-components';
import { NewsLetterDiv, Shapeliness } from '../components/InAllPages/NewsLetter';

const FormNews = styled.div`
  width: 100%;
  input{
  margin-bottom: 1rem!important;
  width: 100%!important;}

`;
export default class News extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="abouthome">
            <NewsLetterDiv><img src="https://toppng.com/uploads/preview/mark-orange-audiomack-logo-transparent-background-11563164647mucca5uyeo.png" />
              <h2>الدنيا فن..</h2>
              <p>باش تعرف جديدنا و &nbsp;توصلك آخر المراجعات، الكتابات و الإبداعات متاع التوانسة مع الكتب، الأفلام، السيريات، الآنمي و المانجا و برشا حاجات مزيانة أخرى تخليك تعيش الفن بنكهة تونسية إشترك معانا في الـ Platforme.<br /><strong>الدنيا فن.. للتوانسة الي يتنفسوا فن.</strong><br /></p>
              <FormNews><input className="form-control" type="email" placeholder="البريد الالكتروني" /><button className="btn btn-primary" type="button">إشترك معانا</button></FormNews>
              <Shapeliness />
            </NewsLetterDiv>
          </div>
        </div>
      </main>
    )
  }
}
