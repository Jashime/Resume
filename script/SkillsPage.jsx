var React = require('react');
var ReactDOM =require('react-dom');


var SkillsItem = React.createClass({
    getInitialState:function(){
        return{
            dataBase:[
                {id:1,iconsrc:"../www/img/skills/html5.png",title:"HTML"},
                {id:2,iconsrc:"../www/img/skills/css3.png",title:"CSS"},
                {id:3,iconsrc:"../www/img/skills/javascript.png",title:"Javascript"},
                {id:4,iconsrc:"../www/img/skills/jquery.png",title:"JQuery"},
                {id:5,iconsrc:"../www/img/skills/Bootstrap.png",title:"Bootstrap"},
                {id:6,iconsrc:"../www/img/skills/react.png",title:"React"},
                {id:7,iconsrc:"../www/img/skills/nodejs.png",title:"Nodejs"},
                {id:8,iconsrc:"../www/img/skills/git.png",title:"Git"},
                {id:9,iconsrc:"../www/img/skills/gulp.png",title:"Gulp"}
            ]
        }
    },

    render:function(){
        var skills = null;
        for(var i = 0;i<this.state.dataBase.length;i++){
            skills = this.state.dataBase.map(function(item){
                return(
                    <li key={item.id}>
                        <img className="skills-icon" src={item.iconsrc} alt={item.title}/>
                        <p className="skills-title">{item.title}</p> 
                    </li> 
                )
            })
        }
        return(
            <ul className="skills-name">
                {skills}
            </ul>
        )
    }
})

var SkillsPage = React.createClass({
    render:function(){
        return(
            <div id="skills-page" className={this.props.flashClass} style={{display:this.props.fourthDisplay}}>
                
               <div className="skills-content">
                    <SkillsItem/>    
                </div>
            </div>
            
        )
    }
})

module.exports = SkillsPage;
