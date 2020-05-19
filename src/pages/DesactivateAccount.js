import React, { Component } from 'react'

export default class DesactivateAccount extends React.Component {
    render() {
        return (
        <main className="EditProfileMain">
        <div className="container">
          <div className="DescativerCompteBigDiv">
            <h2>Désactivation temporaire</h2>
            <p>عسلامة، فادي المؤدب<br /></p>
            <p>تنجم تعمل&nbsp;désactivation temporaire للكونت متاعك في عوض ماتفسخو. و إكاك الكونت متاعك يرجع Activer كي ترجع انت تكونكتي مرة أخرى. لازمك تعرف الي انت باش تخلي علينا بلاصة كبيرة..<br /></p>
            <div className="DesactiverCompteFormBigDiv">
              <form className="DescativerCompteForm" method="post"><select className="form-control InputEditAll"><optgroup label="علاش تحب تتعمل Désactivation temporaire للكونت متاعك؟"><option value={1} selected>نحب نعمل Pause المدة هاذي..</option><option value={2}>قاعد نضيع في برشا وقت..</option><option value={3}>عندي مشكلة مع الـ Utilisation..</option><option value={4}>Autre chose</option></optgroup></select><input className="form-control InputEditAll" type="password" name="ConfirmDesactivate" placeholder="إكتب المودباس متاعك" /><button className="btn btn-outline-info btn-lg" type="button">Désactiver le compte</button></form>
            </div>
          </div>
        </div>
      </main>
        )
    }
}
