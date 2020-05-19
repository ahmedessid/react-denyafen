import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditProfile extends Component {
    render() {
        return (
        <main className="EditProfileMain">
        <div className="container">
          <h2>بدل في المعطيات الشخصية</h2>
          <p>تنجم تعمل edit عالبروفيل.. تنجم تبدل تصويرتك، إسمك، الـ Pseudo، الـ Description..<br /></p>
          <div className="EditProfileBigDiv">
            <div>
              <div className="profilePageElementPicture EditProfileElementPicture">
                <div className="ElementPictureRightSide">
                  <div className="profilePageProfileImg">
                    <div className="profilePageProfileImg EditProfileProfileImgDiv"><button className="btn btn-primary" type="button">بدل التصويرة كان تحب<br /></button></div><img src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg" /></div>
                </div>
                <div className="ElementPictureLeftSide EditProfilePictureLeftSide">
                  <div className="EditProfileSkillsDiv"><input className="form-control input1" type="text" defaultValue="كاتب" placeholder="هوايتك الأولى"/><input className="form-control" type="text" defaultValue="Reviewer" placeholder="هوايتك الثانية"/></div>
                  <form className="EditProfileForm"><input className="form-control" type="text" defaultValue="Fedi Meddeb" placeholder="إسمك و اللقب متاعك" /><input className="form-control" type="text" defaultValue="fedi.meddeb" placeholder="Pseudo متاعك" /><textarea className="form-control" placeholder="أحكي شوية على روحك.." defaultValue={"أنا فادي المؤدب، قريت سينما و إخراج نحب برشة نحكي عالأفلام القدم و أي حاجة عندها علاقة بالـ Fantasy و Romance.."} />
                    <button className="btn btn-primary" type="button">Enregistrer</button>
                    <hr />
                  </form>
                  <div className="DésactiverCompteLinkDiv"><Link to="/desactivate_account">تنّجم زادة تعمل Désactivation temporaire للكونت متاعك..</Link></div>
                </div>
                <div className="before" />
              </div>
            </div>
          </div>
        </div>
      </main>
        )
    }
}
