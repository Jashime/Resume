var React = require('react');
var ReactDOM =require('react-dom');

var Obj = {
    myName:'何海锋',
    myGoal:'在前端的路上摸爬滚打中前进',
    myDet:'开弓没有回头箭，选择的路就要好好的走下去',
};
var WelcomePage = React.createClass({
    render:function(){
        return(
            
            <div className="common" id="welcome-page">
                <img className="photo" src="./img/photo/Hehaifeng_2.jpg" alt="photo"/>
                <h1>{Obj.myName}</h1>
                <h2>{Obj.myGoal}</h2>
                <h3>{Obj.myDet}</h3>
                <p><a href="#" className="btn btn-primary btn-md" role="button">
                learn more</a>
                </p>
            </div>
            
        )
    }
})

module.exports = WelcomePage;