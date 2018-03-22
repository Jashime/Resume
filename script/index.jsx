var React = require('react');
var ReactDOM =require('react-dom');

var WelcomePage = require('./WelcomePage.jsx');
var InfoPage = require('./InfoPage/InfoPage.jsx');
var ExperiencePage = require('./ExperiencePage/ExperiencePage.jsx');
var SkillsPage = require('./SkillsPage.jsx');

var Main = React.createClass({
    render:function(){
        return(
            <div className="content">
                <WelcomePage/>
                <InfoPage/>
                <ExperiencePage/>
                <SkillsPage/>
            </div>
        )
    }
})

ReactDOM.render(<Main/>,document.getElementById('box'));