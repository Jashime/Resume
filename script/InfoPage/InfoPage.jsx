var React = require('react');
var ReactDOM =require('react-dom');

var MyInfo = require('./MyInfo.jsx');

var InfoPage = React.createClass({

    render:function(){
        return(
            
            <div className="common" id="Info-page">
                <h2>基本信息</h2>
                <table className="Info-content">
                    <MyInfo/> 
                </table>
            </div>
            
        )
    }
})

module.exports = InfoPage;