var React = require('react');
var ReactDOM =require('react-dom');


var ExperienceItem = require('./ExperienceItem.jsx');

var ExperiencePage = React.createClass({

    render:function(){
        return(
            <div className="common" id="experience-page">
                <h2>工作经历</h2>
                <div className="timeline">
                    <ExperienceItem />
                </div>
            </div>
        )
    }
})

module.exports = ExperiencePage;