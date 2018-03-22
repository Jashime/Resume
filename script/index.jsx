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
                {Pageid:0,PageDisplay:'block'},
                {Pageid:1,PageDisplay:"none"},
                {Pageid:2,PageDisplay:"none"},
                {Pageid:3,PageDisplay:"none"}
            ], 
            startX:'',
            endX:'',
            
                
            
        }
    },

    nextPage:function(evt){
        evt.stopPropagation();
        console.log("点击下一页")
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
                return;
            }    
        }
               
    },

    previousPage:function(){
        console.log("点击上一页")
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
        if(this.state.startX-this.state.endX<0){
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
        this.setState({
            startX:'',
            endX:'',
        })
    },

    render:function(){

        // var firstDisplay = this.state.display[0].PageDisplay;
        // var secondDisplay = this.state.display[1].PageDisplay;
        // var thirdDisplay = this.state.display[2].PageDisplay;
        // var fourthDisplay = this.state.display[3].PageDisplay;
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
                    />
                    <InfoPage
                        secondDisplay={this.state.display[1].PageDisplay}
                    />
                    <ExperiencePage
                        thirdDisplay={this.state.display[2].PageDisplay}  
                    />
                    <SkillsPage
                        fourthDisplay={this.state.display[3].PageDisplay}
                    />
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Main/>,document.getElementById('bigbox'));

// var navlist = document.getElementById("navlist");
// var navlis = navlist.children;


// console.log(navlis)