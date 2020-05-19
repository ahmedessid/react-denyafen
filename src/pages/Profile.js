import React, { Component } from 'react'
import ProfileProductElements from '../components/Profile/ProfileProductElements'
import ProfileInformations from '../components/Profile/ProfileInformations'
import ProfilePictureElements from '../components/Profile/ProfilePictureElements'

export default class Profile extends Component {
    render() {
        return (
            <main>
            <div className="container">
                <div className="abouthome">
                <div className="tagPageCategories">
                    <div className="postPageTheBigPost">
                        <ProfilePictureElements/>
                    <div className="postPageLeftSide">
                        <ProfileInformations/>
                        <ProfileProductElements/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>

        )
    }
}
