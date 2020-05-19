import React, { Component } from 'react'

export default class CategoriePageSearch extends React.Component {
    render() {
        return (
               <div className="newsletterpart homeSearchCategorie">
                <div className="searchCategorieRightDiv"><img className="SearchPicture" src="assets/img/books.svg" /></div>
                <div className="searchCategorieLeftDiv specificCategoriePage">
                    <h2>حكاياتنا إحنا التوانسة مع الكتب و الروايات</h2>
                    <form><input className="form-control" type="search" placeholder="لوّج على كتاب، فيلم، انمي ولا حاجات أخرى ..." /></form>
                    <p>تنجم زادة تلوّج حسب الـ Genre الي تحب عليه:<br /></p>
                    <div className="homeBtnsFlex"><button className="btn btn-primary" type="button">رومانسية</button><button className="btn btn-primary" type="button">مغامرات</button><button className="btn btn-primary" type="button">فانتازي</button><button className="btn btn-primary" type="button">تشويق</button>
                    <button className="btn btn-primary" type="button">رعب</button><button className="btn btn-primary" type="button">وثائقي</button><button className="btn btn-primary" type="button">أخرى</button></div>
                </div>
                <div className="before" />
                </div>
        )
    }
}
