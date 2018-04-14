var React = require('react');
var ReactDOM =require('react-dom');


var ProjectPage = React.createClass({


    render:function(){
        return(
            <div id="project-page" className={this.props.flashClass} style={{display:this.props.fifthDisplay}}>
                <div className="project-content">
                    <table className="project-list">
                        <tbody>
                            <tr>
                                <td className="project-img project-img_1"><img src="./www/img/project/project_1.png" alt="项目1"/></td>
                                <td className="project-des project-des_1">
                                    <h3>2048游戏</h3>
                                    <p>采用JQuery框架开发2048游戏</p>
                                    <p><a href="./www/project/2048/2048.html" target="_blank" className="btn btn-primary btn-xs" role="button">2048</a></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="project-img project-img_2"><img src="./www/img/project/project_2.png" alt="项目2"/></td>
                                <td className="project-des project-des_2">                
                                    <h3>React开发Todo List</h3>
                                    <p>根据React组件化思想和MVC开发模式，实现任务列表的增删查改</p>
                                    <p><a href="./www/project/TodoList/TodoList.html" target="_blank" className="btn btn-primary btn-xs" role="button">TodoList</a></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="project-img project-img_3"><img src="./www/img/project/project_3.png" alt="项目3"/></td>
                                <td className="project-des project-des_3">
                                    <h3>个人简历</h3>
                                    <p>采用React开发框架，搭建个人简历网页，实现不同方式的页面切换和简单的动画效果，
                                        可在不同分辨率客户端上显示，并在服务器上正常运行。
                                    </p>
                                    <p><a href="https://github.com/Jashime" target="_blank" className="btn btn-primary btn-xs" role="button">更多</a></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
})

module.exports = ProjectPage;