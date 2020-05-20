import React, { useState, useEffect } from 'react';
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
  { id: 1, title: 'تونس', link: '/other_topics/tounes' },
  { id: 2, title: 'ثقافات', link: '/other_topics/thakafet' },
  { id: 3, title: 'فنون', link: '/other_topics/founoun' },
  { id: 4, title: 'خرافات', link: '/other_topics/khourafet' },
  { id: 5, title: 'غرائب', link: '/other_topics/gharaeb' },
  { id: 6, title: 'المستقبل', link: '/other_topics/mostakbel' },
  { id: 7, title: 'الطبيعة', link: '/other_topics/tabiaa' },
  { id: 8, title: 'طاقة إيجابية', link: '/other_topics/taka-ijebia' },
  { id: 9, title: 'نوستالجيا', link: '/other_topics/nostalgia' },
  { id: 10, title: 'عالم الجريمة', link: '/other_topics/aalem-aljarima' },
  { id: 11, title: 'إحنا النساء', link: '/other_topics/ehna-nse' },
  { id: 12, title: 'أخرى', link: '/other_topics/okhra' }
]

function OtherArtsPageSearch(props) {
  const [active, setActive] = useState(0);

  const setBtnActive = (index) => {
    var prevState = active;
    if (index !== prevState)
      setActive(index);
    else {
      setActive(0);
    }
  }

  const setLink = (index, link) => {
    var prevState = active;
    if (index !== prevState)
      return link;
    else return "/other_topics";
  }

  const getClass = (index, name) => {
    var current = active;
    if (index === current)
      return name + ' active';
    return name;
  }

  return (
    <HomeSearchCategorie>
      <SearchCategorieRightDiv><img src="https://img.icons8.com/bubbles/240/cottage.png" /></SearchCategorieRightDiv>
      <SearchCategorieLeftDiv>
        <h2>حاجات أخرى.. كل شيء في حياتنا فن!</h2>
        <form><input className="form-control" type="search" placeholder="لوج على أي حاجة تحبها..." /></form>
        <p>تنجم زادة تلوّج حسب الـ Catégorie الي تحب عليها:<br /></p>
        <HomeBtnsFlex>
          {BUTTONS.map((bt, index) => (
            <Link to={() => setLink(bt.id, bt.link)} key={index}><button
              onClick={() => setBtnActive(bt.id)}
              className={`btn ${getClass(bt.id, bt.title)}`}>
              {bt.title}
            </button></Link>
          ))}

        </HomeBtnsFlex>

      </SearchCategorieLeftDiv>
      <BeforeDiv />
    </HomeSearchCategorie>
  )
}

export default OtherArtsPageSearch;