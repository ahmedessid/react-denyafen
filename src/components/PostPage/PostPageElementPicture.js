import React, { Component } from 'react';
import styled from 'styled-components';
import numeral from "numeral";
import {ProductImg, ProductImgViewNumbersDiv} from '../InAllPages/ProductElement';

export default class PostPageElementPicture extends React.Component {
    render() {
        return (
        <div className="postPageElementPicture">
            <ProductImg><img src="https://fr.web.img4.acsta.net/pictures/17/11/10/12/18/2448823.jpg" /><ProductImgViewNumbersDiv><p>{numeral(17000).format('0,0')} مشاهدة</p></ProductImgViewNumbersDiv></ProductImg>
            <div className="postPageFavorisDiv"><div className="FavorisFacebookReportDiv"><button class="btn btn-primary FavorisFacebookReportDivBtn" type="button" data-toggle="modal" data-target="#exampleModalCenter"><img src="assets/img/threedots.svg"/></button>
           
                      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              إذا الـ Post هاذا فيه كلام خايب ولا أي حاجة خارجة عن نطاق الأخلاق أو نطاق ولا أي حاجة تنجم تضر تنجم تبلغ عليه توا.
                            </div>
                            <div className="modal-footer">
                              <button type="button" class="btn btn-primary">بلّغ الإدارة</button>
                            </div>
                          </div>
                        </div>
                      </div>

            <button className="btn btn-primary FavorisFacebookReportDivBtn" type="button"><img src="assets/img/bookmark.svg"/></button><a href="#"><img src="assets/img/facebook.svg"/></a></div></div>
            <div className="postPagePdfDiv"><button className="btn btn-primary postPagePdfBtn" type="button">PDF / Lien</button></div>
            <div className="postPageDateDiv">
                <p>Nov 24, 2020</p>
            </div>
            <div className="verticalAds"><a href="#"><img src="" /></a></div>
        </div>
        )
    }
}
