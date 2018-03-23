var React = require('react');
var ReactDOM =require('react-dom');

var WelcomePage = require('./WelcomePage.jsx');
var InfoPage = require('./InfoPage/InfoPage.jsx');
var ExperiencePage = require('./ExperiencePage/ExperiencePage.jsx');
var SkillsPage = require('./SkillsPage.jsx');
var ChangeBtn = require('./ChangeBtn.jsx');

var Main = React.createClass({

    getInitialState:function(){
        return{
            display:[
                {Pageid:0,PageDisplay:'block',flashClass:'common flashClass_0'},
                {Pageid:1,PageDisplay:"none",flashClass:'common'},
                {Pageid:2,PageDisplay:"none",flashClass:'common'},
                {Pageid:3,PageDisplay:"none",flashClass:'common'}
            ], 
            startX:'',
            endX:'',                                       
        }
    },

    nextPage:function(evt){
        evt.stopPropagation();
        // console.log("点击下一页")
        for(var i=0;i<this.state.display.length;i++){
            if(this.state.display[i].PageDisplay == 'block'){
                if(i == this.state.display.length-1){
                    this.state.display[i].PageDisplay = "none";
                    this.state.display[i].flashClass = "common";
                    this.state.display[0].PageDisplay = "block";
                    this.state.display[0].flashClass = "common flashClass_0";
                    this.setState(this.state);
                    return;
                }else {
                    this.state.display[i].PageDisplay = "none";
                    this.state.display[i].flashClass = "common";
                    this.state.display[i+1].PageDisplay = "block";
                    this.state.display[i+1].flashClass = "common flashClass_"+this.state.display[i+1].Pageid;
                    this.setState(this.state);
                    return;
                }              
            }    
        }         
    },

    previousPage:function(evt){
        evt.stopPropagation();
        // console.log("点击上一页")
        for(var i=0;i<this.state.display.length;i++){
            if(this.state.display[i].PageDisplay == 'block'){
                if(i == 0){
                    this.state.display[i].PageDisplay = "none";
                    this.state.display[i].flashClass = "common";
                    this.state.display[this.state.display.length-1].PageDisplay = "block";
                    this.state.display[this.state.display.length-1].flashClass = "common flashClass_"+this.state.display[this.state.display.length-1].Pageid;
                    this.setState(this.state);
                    return;
                }else {
                    this.state.display[i].PageDisplay = "none";
                    this.state.display[i].flashClass = "common";
                    this.state.display[i-1].PageDisplay = "block";
                    this.state.display[i-1].flashClass = "common flashClass_"+this.state.display[i-1].Pageid;
                    this.setState(this.state);
                    return;
                }
            }    
        }
    },

    handleWheel:function(evt){
        if(evt.deltaY>0){
            {this.nextPage(evt)};
        } 
        if(evt.deltaY<0){
            {this.previousPage(evt)}
        }      
    },
    
    handleTouchStart:function(evt){
        this.setState({
            startX : evt.targetTouches[0].clientX,
        })
    },

    handleTouchMove:function(evt){
        this.setState({
            endX:evt.targetTouches[0].clientX,
        })
    },

    handleTouchEnd:function(evt){
        if(this.state.startX-this.state.endX>0){
            {this.nextPage(evt)};
        }
        if(this.state.startX-this.state.endX<0){
            {this.previousPage(evt)}
        }
        this.setState({
            startX:'',
            endX:'',
        })
    },

    render:function(){
        return(
            <div className="box" id="box" 
                onWheel={this.handleWheel}
                onTouchStart = {this.handleTouchStart}
                onTouchMove = {this.handleTouchMove}
                onTouchEnd = {this.handleTouchEnd}
            >
                <ChangeBtn 
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}   
                    />
                <div className="content" >
                    
                    <WelcomePage
                        firstDisplay={this.state.display[0].PageDisplay}
                        flashClass = {this.state.display[0].flashClass}    
                    />
                    <InfoPage
                        secondDisplay={this.state.display[1].PageDisplay}
                        flashClass = {this.state.display[1].flashClass}
                    />
                    <ExperiencePage
                        thirdDisplay={this.state.display[2].PageDisplay}
                        flashClass = {this.state.display[2].flashClass}  
                    />
                    <SkillsPage
                        fourthDisplay={this.state.display[3].PageDisplay}
                        flashClass = {this.state.display[3].flashClass}
                    />
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Main/>,document.getElementById('bigbox'));
