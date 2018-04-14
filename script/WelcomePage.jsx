var React = require('react');
var ReactDOM =require('react-dom');

var Obj = {
    myName:'何海锋',
    myGoal:'在前端的路上摸爬滚打中前进',
    myDet:'希望找一份web前端开发的工作',
};
var WelcomePage = React.createClass({
    
    render:function(){
        return(
            
            <div id="welcome-page" className={this.props.flashClass} style={{display:this.props.firstDisplay}}>
                <img className="photo" src="./www/img/photo/Hehaifeng_2.jpg" alt="photo"/>
                <h1>{Obj.myName}</h1>
                <h2>{Obj.myGoal}</h2>
                <h3>{Obj.myDet}</h3>
                <p>
                    <a href="https://github.com/Jashime" target="_blank" className="btn btn-primary btn-md" role="button">GitHub</a>
                </p>
            </div>
            
        )
    }
})

module.exports = WelcomePage;
