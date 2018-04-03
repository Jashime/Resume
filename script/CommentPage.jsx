var React = require('react');
var ReactDOM =require('react-dom');


var CommentPage = React.createClass({


    render:function(){
        return(
            <div id="comment-page" className={this.props.flashClass} style={{display:this.props.sixthDisplay}}>
                <div className="comment-content">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在步入职场的第四个年头，我选择了放弃我之前的行业，而毅然地投入前端开发中，这看起来可能是个疯狂的行为。我很清楚这中间的困难重重，可人这一生不就是在不断地克服困难从而实现自我价值嘛！</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之所以萌生对于前端开发的兴趣，这需要归结于互联网时代的高速发展。平时对于新鲜事物就比较感兴趣，在网络时代层出不穷的技术和产品中，总是能不断的吸引我。每当沉浸在浩瀚的网页信息中时，就会好奇这样的网页是怎么做出来呈现在我们面前，于是便开启了我的前端之路。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有身边老师和朋友的指导，只能通过从网络上找的学习资料，自己一点一点跟着学，这个过程可以说是痛并快乐着。痛，是因为每次遇到问题都只能是自己迎难而上；快乐，是因为通过自己不断的查询和思考后解决了问题，那种成就感所带来的快乐，也正是在一次次的遇见问题解决问题的过程中，慢慢强化自己的技能。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于刚接触到前端魅力的我来说，这才只是开始。需要找到一个学习和展示能力的平台，所以通过这份简历来自我举荐，希望能够得到贵公司的赏识，得到一份前端初级开发的工作。</p>
                </div>
            </div>
        )
    }
})

module.exports = CommentPage;