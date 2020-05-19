import React, { Component } from 'react';
import {NavLink, Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
        <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
          <div className="container scrollcontainer"><NavLink className="navbar-brand" to="/">Denya Fen | الدنيا فن &nbsp;<img className="favicon" src="https://styleguide.audiomack.com/styleguide/assets/dl/mark-black-large.png" /></NavLink><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation"><NavLink exact activeClassName="activeLink" className="nav-link" to="/all_articles">آخر Articles</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink exact activeClassName="activeLink" className="nav-link" to="/about">Podcasts</NavLink></li>
                <li className="nav-item NavItemLeftOne" role="presentation"><NavLink exact activeClassName="activeLink" className="nav-link" to="/contact">تحب تقولنا حاجة؟</NavLink></li>
              </ul><button className="btn btn-primary thememode" type="button" data-toggle="modal" data-target="#openLoginModal">أحكيلنا</button></div>
          </div>
        </nav>
        <div className="modal fade" id="openLoginModal" tabIndex="-1" role="dialog" aria-labelledby="openLoginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              <div className="loginModal modal-body">
                <div className="closeLoginModal">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="SingInHeading1Div">
                <h3>عسلامة.</h3>
                </div>
                <div className="SingInParagraph1Div">
                <p>كونكتي معانا باش تنجم تحكيلنا حكايتك مع كتاب، سيري، فيلم، تورينا إبداعاتك، كتاباتك، حاجات أخرى و باش تنجم زادة تتفاعل معنا..</p>
                </div>
                <div className="SignInSocialsMediaDiv">
                <div className="SignInGoogleDiv"><a href="#"><button className="btn btn-primary SignInGoogleBtn" type="button">Sign in with Google<svg width={25} height={25} className="SignInGoogleBtnSvg"><g fill="none" fillRule="evenodd"><path d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z" fill="#4285F4" /><path d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z" fill="#34A853" /><path d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z" fill="#FBBC05" /><path d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z" fill="#EA4335" /></g></svg></button></a></div>
                </div>
                <div className="SignInSocialsMediaDiv">
                <div className="SignInGoogleDiv"><a href="#"><button className="btn btn-primary SignInGoogleBtn" type="button">Sign in with Facebook<svg width={25} height={25} fill="#3B5998" className="SignInGoogleBtnSvg"><path d="M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7" fillRule="evenodd" /></svg></button></a></div>
                </div>
                <div className="SingInParagraph2Div"><p>أقرأ <a href="/policy">سياسة الخصوصية</a> باش تعرف شنية المعلومات الشخصية اللي نستعملوها ومباعد إنزل Sign in باش تكونكتي معانا.</p></div>
              </div>
              </div>
            </div>
        </div>
        </div>
        )
    }
}
