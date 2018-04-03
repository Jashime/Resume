var React = require('react');
var ReactDOM =require('react-dom');


var ContactPage = React.createClass({


    render:function(){
        return(
            <div id="Contact-page" className={this.props.flashClass} style={{display:this.props.seventhDisplay}}>
                <div className="contact-content">
                    <h1>联系方式</h1>
                    <ul>
                        <li><img src="" alt=""/></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
})

module.exports = ContactPage;