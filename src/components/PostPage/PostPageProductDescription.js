import React, { Component } from 'react'

export default class PostPageProductDescription extends Component {
    render() {
        return (
            <div className="postPageProductDescription">
            <h3><strong>حرق الموسم الأول - Dark</strong></h3>
            <p className="postPageAuthor">مراجعة، كتابة أو قصة: <a href="/profile"><strong>Fedi Meddeb</strong></a><img src="https://i.ya-webdesign.com/images/instagram-verified-badge-png.png" title="Compte verifié"/><br /></p>
            <div className="reviewStarsDiv"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /></div>
            <div className="postPageProductCategorie"><button className="btn btn-primary" type="button">سيريات</button><button className="btn btn-primary" type="button">إثارة و تشويق</button></div>
            <p>مراجعة، كتابة ولاّ قصة مراجعة، كتابة ولاّ قصة&nbsp;مراجعة، كتابة ولاّ قصة مراجعة، كتابة ولاّ قصة كتابة ولاّ قصة مراجعة، كتابة ولاّ قصة.<br /></p>
            <hr />
            </div>
        )
    }
}
