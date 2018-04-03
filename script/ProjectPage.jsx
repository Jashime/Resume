var React = require('react');
var ReactDOM =require('react-dom');


var ProjectPage = React.createClass({


    render:function(){
        return(
            <div id="project-page" className={this.props.flashClass} style={{display:this.props.fifthDisplay}}>
                <div className="project-content">
                    <h1>项目经验</h1>
                    
                </div>
            </div>
        )
    }
})

module.exports = ProjectPage;