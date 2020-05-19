import React, { Component } from 'react'
import Brands from '../components/InAllPages/Brands'
import NewsLetter from '../components/InAllPages/NewsLetter'
import ProductElement from '../components/InAllPages/ProductElement'
import PostPageElementPicture from '../components/PostPage/PostPageElementPicture'
import PostPageProductDescription from '../components/PostPage/PostPageProductDescription'
import PostPageEditor from '../components/PostPage/PostPageEditor'
import Axios from 'axios'

export default class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            similarElements: []
        }
    }
    componentDidMount() {
        Axios.get(`https://api.jsonbin.io/b/5ebb30d28284f36af7ba2931`)
            .then(res => {
                const similarElements = res.data;
                this.setState({ similarElements });
            })
    }
    render() {
        return (
            <main>
                <div className="container">
                    <div className="abouthome">
                        <div className="tagPageCategories">
                            <div className="postPageTheBigPost">
                                <PostPageElementPicture />
                                <div className="horizontalAds"><a href="#"><img src="https://d3nuqriibqh3vw.cloudfront.net/coke_holiday_ooh_aotw.jpg" /></a></div>
                                <div className="postPageLeftSide">
                                    <PostPageProductDescription />
                                    <PostPageEditor />
                                </div>
                            </div>
                            <div className="homeCategories">
                                <h2>حاجات أخرى تنجم تعجبك</h2>
                                <p>مراجعات، كتابات، تجارب و إبداعات عندها علاقة بالموضوع هاذا..<br /></p>
                                <div className="homeNewsThings">
                                    {this.state.similarElements.map((element, index) => (
                                        <ProductElement {...element} key={index} />
                                    ))}
                                </div>
                            </div>
                            <Brands />
                            <NewsLetter />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
