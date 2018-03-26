var React = require('react');
var ReactDOM =require('react-dom');
var Pubsub = require('pubsub-js');

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
    //无嵌套关系组件之间的传值
    componentDidMount: function () {  
        //通过PubSub库订阅一个信息  
        this.pubsub_token = PubSub.subscribe("getPageid", function (topic, Pageid) {  
            for(var i=0;i<this.state.display.length;i++){
                if(this.state.display[i].PageDisplay == 'block'){
                    if(Pageid == this.state.display[i].Pageid){  
                        // console.log("测试"+i);                  
                        return;
                    }
                    else{
                        this.state.display[Pageid].PageDisplay = "block";
                        this.state.display[Pageid].flashClass = "common flashClass_"+Pageid;
                        this.state.display[i].PageDisplay = "none";
                        this.state.display[i].flashClass = "common";
                        // console.log("测试"+i);
                        this.setState(this.state);
                        return;
                    }
                }
            }

        }.bind(this));  
      },  
      componentWillUnmount: function () {  
        //当组件将要卸载的时候，退订信息  
        PubSub.unsubscribe(this.pubsub_token);  
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
                        learnMorn={this.nextPage}
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


var NavPage = React.createClass({
    
    onfindPageid:function(Pageid){
        // console.log(Pageid)
        PubSub.publish("getPageid", Pageid);  
    },

    render:function(){  
        return(
            <div className="container"  >
                <div className="navbar-header">
                    <a href="#"><img id="myphoto" src="./www/img/photo/Hehaifeng_1.jpg" alt="我的照片"/></a>
                    <span className="myName">何海锋</span>
                    <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-right">
                    <NavBar onfindPageid={this.onfindPageid}/>
                </div>
                
            </div>       
        )
    }
})

var NavBar = React.createClass({
    getInitialState:function(){
        return{
            nav:[
                {Pageid:0,navlist:'首页'},
                {Pageid:1,navlist:'基本信息'},
                {Pageid:2,navlist:'工作经历'},
                {Pageid:3,navlist:'专业技能'},
                {Pageid:4,navlist:'项目经验'},
                {Pageid:5,navlist:'自我评价'},
                {Pageid:6,navlist:'联系方式'},
            ]
        }
    },
    render:function(){
        var navbar = null;
        for(var i=0;i<this.state.nav.length;i++){
            navbar = this.state.nav.map(function(item){
                return(
                    <li key={item.Pageid} 
                        // onClick={this.onClick.bind(this,item.Pageid)}
                        onClick={this.props.onfindPageid.bind(null,item.Pageid)}//this改成null
                    >
                        <a href="#">{item.navlist}</a>
                    </li>
                )
            }.bind(this))
        }
        return(
            <ul className="nav navbar-nav" id="myTab">
                {navbar}
            </ul>
        )
    }
})



ReactDOM.render(<NavPage/>,document.getElementById('nav-top'));
ReactDOM.render(<Main/>,document.getElementById('bigbox'));
