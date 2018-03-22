var React = require('react');
var ReactDOM =require('react-dom');


var ChangeBtn = React.createClass({
    render:function(){
        
        return(
            <div className="changeBtn">
                <div className="previousPage" onClick={this.props.previousPage}><img src="./img/icons/previous.png" alt="上一页"/></div>
                <div className="nextPage" onClick={this.props.nextPage}><img src="./img/icons/next.png" alt="下一页"/></div>
            </div>
        )
    }
})

module.exports = ChangeBtn;
