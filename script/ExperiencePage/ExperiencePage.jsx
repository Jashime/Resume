var React = require('react');
var ReactDOM =require('react-dom');


var ExperienceItem = require('./ExperienceItem.jsx');

var ExperiencePage = React.createClass({

    render:function(){
        return(
            <div id="experience-page" className={this.props.flashClass} style={{display:this.props.thirdDisplay}}> 
                <div className="timeline">
                    <ExperienceItem />
                </div>
            </div>
        )
    }
})

module.exports = ExperiencePage;