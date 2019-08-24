import React, {Fragment, PureComponent} from 'react';
import './footer.scss';

export class Footer extends PureComponent{
render(){
    return(
        <Fragment>
        <div className="Footer">
            <div className="column">
       <strong>COMPANY</strong>
<ul><li>About Sharaf DG</li>
<li>About Sharaf Group</li>
<li>DG Help – Authorised Service Centres</li>
<li>Techbench</li>
<li>DG+ | Home Theatres & Audio</li>
<li>DG Member</li>
<li>Brand Promise</li>
<li>Best Price Guarantee (BPG)</li>
<li>Solution Bar</li>
<li>Join our team</li>
</ul>
</div>
<div className="column">
       <strong>ASSISTANCE</strong>
<ul><li>About Sharaf DG</li>
<li>About Sharaf Group</li>
<li>DG Member</li>
<li>Brand Promise</li>
<li>Best Price Guarantee (BPG)</li>
<li>Solution Bar</li>
<li>Join our team</li>
</ul>
</div>
<div className="column">
       <strong>PUBLICATIONS</strong>
<ul><li>About Sharaf DG</li>
<li>About Sharaf Group</li>
<li>DG Help – Authorised Service Centres</li>
<li>Techbench</li>
<li>Join our team</li>
</ul>
</div>
        </div>
        <div className="FooterBottm">
        COPYRIGHT © 2019 SHARAF DG LLC. ALL RIGHTS RESERVEDPrivacy policyTerms and conditions
        </div>
        </Fragment>
    )
}
}