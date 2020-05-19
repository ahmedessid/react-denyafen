import React, { Component } from 'react'
import styled from 'styled-components';

const BrandsDiv = styled.div`

    text-align: center;
    margin-top: 6%;
    margin-bottom: 4rem;

    img{
        width: auto;
        max-height: 36px;
        margin: 0.8rem 1.4rem;
    }
`;

export default class Brands extends Component {
    render() {
        return (
            <BrandsDiv><img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/homepage_foundation_partner/public/foundation-partners/movies-anywhere-logo-copy2x.png?itok=PmMQmyyq" /><img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/homepage_foundation_partner/public/foundation-partners/target-logo-copy2x.png?itok=4JvLn-E3" />
              <img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/homepage_foundation_partner/public/foundation-partners/directv-logo-copy2x.png?itok=ekaL2E93" /> 
            </BrandsDiv>
        )
    }
}
