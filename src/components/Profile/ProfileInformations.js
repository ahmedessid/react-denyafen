import React, { Component } from 'react'

export default class ProfileInformations extends Component {
    render() {
        return (
            <div className="postPageProductDescription profileShowPageProductDescription"><a className="profileShowPageEditLink" href="#"><img src="https://img.icons8.com/android/18/000000/edit.png" /></a>
            <h4><strong>Fedi Meddeb</strong><img className="profileShowPageImg" src="https://i.ya-webdesign.com/images/instagram-verified-badge-png.png" title="Compte verifié"/><br /></h4>
            <div className="profileShowPageProductCategorie"><button className="btn btn-primary" type="button">كاتب</button><button className="btn btn-primary" type="button">Reviewer<br /></button></div>
            <p>أنا فادي المؤدب، قريت سينما و إخراج نحب برشة نحكي عالأفلام القدم و أي حاجة عندها علاقة بالـ Fantasy و Romance..<br /></p><a id="buttonPosts" className="ButtonClicked" href="#">Publications</a><a id="buttonFavoris" href="#">Favoris</a>
            <hr />
            </div>
        )
    }
}
