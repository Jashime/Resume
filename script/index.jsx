var React = require('react');
var ReactDOM =require('react-dom');

var WelcomePage = require('./WelcomePage.jsx');
var InfoPage = require('./InfoPage/InfoPage.jsx');
var ExperiencePage = require('./ExperiencePage/ExperiencePage.jsx');
var SkillsPage = require('./SkillsPage.jsx');


var Main = React.createClass({
    getInitialState:function(){
        return{
            display:[
                {Pageid:0,PageDisplay:'block',block:"true"},
                {Pageid:1,PageDisplay:"none",block:"false"},
                {Pageid:2,PageDisplay:"none",block:"false"},
                {Pageid:3,PageDisplay:"none",block:"false"}
            ], 
        }
    },

    handleWheel:function(evt){
        if(evt.deltaY>0){
            for(var i=0;i<this.state.display.length;i++){
                if(this.state.display[i].PageDisplay == 'block'){
                    if(i == this.state.display.length-1){
                        this.state.display[i].PageDisplay = "none";
                        this.state.display[0].PageDisplay = "block";
                        this.setState(this.state);
                        return;
                    }else {
                        this.state.display[i].PageDisplay = "none";
                        this.state.display[i+1].PageDisplay = "block";
                        this.setState(this.state);
                        return;
                    }
                }    
            }    
        } 
        if(evt.deltaY<0){
            for(var i=0;i<this.state.display.length;i++){
                if(this.state.display[i].PageDisplay == 'block'){
                    if(i == 0){
                        this.state.display[i].PageDisplay = "none";
                        this.state.display[this.state.display.length-1].PageDisplay = "block";
                        this.setState(this.state);
                        return;
                    }else {
                        this.state.display[i].PageDisplay = "none";
                        this.state.display[i-1].PageDisplay = "block";
                        this.setState(this.state);
                        return;
                    }
                }    
            } 
        }
        
            
    },
    

    render:function(){
        var firstDisplay = this.state.display[0].PageDisplay;
        var secondDisplay = this.state.display[1].PageDisplay;
        var thirdDisplay = this.state.display[2].PageDisplay;
        var fourthDisplay = this.state.display[3].PageDisplay;
        return(
            <div className="box" id="box" onWheel={this.handleWheel}>
                <div className="content" >
                    <WelcomePage
                        firstDisplay={firstDisplay}    
                    />
                    <InfoPage
                        secondDisplay={secondDisplay}
                    />
                    <ExperiencePage
                        thirdDisplay={thirdDisplay}  
                    />
                    <SkillsPage
                        fourthDisplay={fourthDisplay}
                    />
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Main/>,document.getElementById('bigbox'));