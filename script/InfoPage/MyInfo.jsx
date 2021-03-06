var React = require('react');
var ReactDOM =require('react-dom');


var MyInfo = React.createClass({
    getInitialState:function(){
		return {
			db:[
                {id:1,icon:'./www/img/icons/person.png',InfoName:'姓名',Info:'何海锋'},
                {id:2,icon:'./www/img/icons/birthday.png',InfoName:'出生年月',Info:'1990.12'},
                {id:3,icon:'./www/img/icons/region.png',InfoName:'户籍',Info:'福建 宁德'},
                {id:4,icon:'./www/img/icons/school.png',InfoName:'毕业院校',Info:'湖南文理学院'},
                {id:5,icon:'./www/img/icons/education.png',InfoName:'学历',Info:'本科 学士'},
                {id:6,icon:'./www/img/icons/phone.png',InfoName:'电话/微信',Info:'18559026885'},
                {id:7,icon:'./www/img/icons/email.png',InfoName:'邮箱',Info:'hhf0804@163.com'}
            ]
		}
	},
    render:function(){
        var InfoArr = null;
        for(var i = 0;i<this.state.db.length;i++){
            InfoArr = this.state.db.map(function(item){
                return (
                    <tr key={item.id}>
                        <td><img src={item.icon}/></td>
                        <td>{item.InfoName}</td>
                        <td>{item.Info}</td>
                    </tr>
                )
            })
        }
        return (
            <tbody>
                {InfoArr}
            </tbody>
            
        )
    }
})

module.exports = MyInfo;