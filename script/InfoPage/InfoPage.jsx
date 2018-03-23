var React = require('react');
var ReactDOM =require('react-dom');

var MyInfo = require('./MyInfo.jsx');

var InfoPage = React.createClass({

    render:function(){
        return(
            
            <div className={this.props.flashClass} id="Info-page" style={{display:this.props.secondDisplay}}>
                
                <table className="Info-content">
                    <MyInfo/> 
                </table>
            </div>
            
        )
    }
})

module.exports = InfoPage;