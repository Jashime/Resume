var React = require('react');
var ReactDOM =require('react-dom');

var ExperienceIcon = React.createClass({

    render:function(){
        var className = "experience-icon icon_" + this.props.count;
        return(
            <div className={className}>
                <img src="./img/icons/experience-icon.png" alt="图标"/>
            </div>   
        )
    }
})

var ExperienceItem = React.createClass({
    getInitialState:function(){
		return {
			db:[
                {id:1,time:'2014.02--2014.10',company:'厦门惠尔康食品有限公司',describe:'实习所在公司，担任品保一职，负责产品质量管控工作'},
                {id:2,time:'2014.12--2017.01',company:'上海都乐食品有限公司厦门分公司',describe:'担任生产物流助理，负责生鲜水果储存、配送、生产工作'},
                {id:3,time:'2017.01--2017.08',company:'淘宝创业',describe:'与同学一起经营淘宝店，后因经营不善加之资金不足而放弃'},
                {id:4,time:'2017.08--至今',company:'学习前端开发',describe:'帮忙打理自家超市，期间学习web前端开发知识'}  
            ]
		}
	},
    render:function(){
        var works = null;
        for(var i = 0;i<this.state.db.length;i++){
            works = this.state.db.map(function(item){
                var className="experience-"+item.id;
                // switch(item.id){
                //     case 1:
                //         className = 'experience-first'
                //         break;
                //     case 2:
                //         className = 'experience-second'
                //         break;
                //     case 3:
                //         className = 'experience-third'
                //         break;
                //     case 4:
                //         className = 'experience-fourth'
                //         break;

                // }
                return (
                    <div key={item.id}>
                        <ExperienceIcon 
                            count={item.id}
                        />
                        <div className={className}>
                            <h3 className="work-time">{item.time}</h3>
                            <h4 className="company-name">{item.company}</h4>
                            <p className="timeline-body">{item.describe}</p>
                        </div>
                    </div>
                )
            })
        }

        return(
            <div>
                {works}
            </div>
        )
    }
})

module.exports = ExperienceItem;