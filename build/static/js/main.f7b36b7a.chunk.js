(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(t,e,n){},122:function(t,e,n){},168:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(23),l=n.n(s),r=(n(100),n(1)),c=n(2),o=n(5),u=n(3),h=n(4),p=(a.Component,n(12)),d=n(8),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={inputValue:"",list:[]},n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(d.a)(n)),n.handleGetItem=n.handleGetItem.bind(Object(d.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginBottom:"20px"}},i.a.createElement("label",{style:{color:this.state.n1+this.state.n2>10?"red":"green",fontSize:50},htmlFor:"inp"},"ToDoList "),i.a.createElement("input",{id:"inputArea",className:"test",value:this.state.inputValue,onChange:this.handleInput,onKeyDown:this.handleKeyDown,style:{width:"300px",height:"45px"},autoFocus:!0}))}},{key:"handleInput",value:function(t){var e=t.target.value;this.setState((function(){return{inputValue:e}}))}},{key:"handleKeyDown",value:function(t){13===t.keyCode&&this.handleGetItem()}},{key:"handleGetItem",value:function(){this.props.parent.getChildrenMsg(this,this.state.inputValue),this.setState((function(t){return{list:[].concat(Object(p.a)(t.list),[t.inputValue]),inputValue:""}}))}}]),e}(a.Component),f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={checked:!1},n.tranfDown=n.tranfDown.bind(Object(d.a)(n)),n.delete=n.delete.bind(Object(d.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.item;return i.a.createElement("div",{style:{border:"1px solid black",width:"300px",height:"40px",marginBottom:"10px",borderRadius:"5px",lineHeight:"40px",fontSize:"30px",paddingLeft:"10px"}},i.a.createElement("input",{style:{width:"20px",height:"20px"},type:"checkbox",value:"",onClick:this.tranfDown,checked:this.state.checked}),t,i.a.createElement("button",{style:{float:"right",marginRight:"10px",marginTop:"10px",width:"20px",height:"20px",borderRadius:"10px",border:"1px solid red"},onClick:this.delete}))}},{key:"tranfDown",value:function(){var t=this.props,e=t.tranfItem,n=t.index;this.setState({checked:!1}),e(n)}},{key:"delete",value:function(){var t=this.props;(0,t.del)(t.index)}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).tranfUp=n.tranfUp.bind(Object(d.a)(n)),n.delete=n.delete.bind(Object(d.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.item;return i.a.createElement("div",{style:{border:"1px solid black",width:"300px",height:"40px",marginBottom:"10px",borderRadius:"5px",lineHeight:"40px",fontSize:"30px",paddingLeft:"10px"}},i.a.createElement("input",{style:{width:"20px",height:"20px"},type:"checkbox",value:"",onClick:this.tranfUp,checked:!0}),t,i.a.createElement("button",{style:{float:"right",marginRight:"10px",marginTop:"10px",width:"20px",height:"20px",borderRadius:"10px",border:"1px solid red"},onClick:this.delete}))}},{key:"tranfUp",value:function(){var t=this.props;(0,t.tranfItem)(t.index)}},{key:"delete",value:function(){var t=this.props;(0,t.del)(t.index)}}]),e}(a.Component),O=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).getChildrenMsg=function(t,e){for(var a=n.state.storage,i=a.getItem("todo"),s=JSON.parse(i),l=Object(p.a)(n.state.list),r=Object(p.a)(n.state.fnslist),c=0,o=0,u=0;u<s.length;u++)0==s[u].done?(l[u]=s[u].titie,c++):(r[u-l.length]=s[u].titie,o++);var h=c+1;l.unshift(e),n.setState({list:l,sizeing:h,fnslist:r,sizefns:o});var d=new Object;d.titie=e,d.done=!1,s.unshift(d);var m=JSON.stringify(s);a.setItem("todo",m)},n.state={inputValue:"",sizeing:0,sizefns:0,list:[],fnslist:[],storage:window.localStorage},n.handleTranfDown=n.handleTranfDown.bind(Object(d.a)(n)),n.handleTranfUp=n.handleTranfUp.bind(Object(d.a)(n)),n.delItemUp=n.delItemUp.bind(Object(d.a)(n)),n.delItemDown=n.delItemDown.bind(Object(d.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement(a.Fragment,null,this.getLocalStorage(),i.a.createElement("div",null,i.a.createElement(m,{parent:this}),i.a.createElement("h1",null,"\u6b63\u5728\u8fdb\u884c\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",this.state.sizeing)),i.a.createElement("ul",null,this.state.list.map((function(e,n){return i.a.createElement(f,{key:n,item:e,index:n,tranfItem:t.handleTranfDown,del:t.delItemUp})}))),i.a.createElement("h1",null,"\u5df2\u7ecf\u5b8c\u6210\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",this.state.sizefns),i.a.createElement("ul",null,this.state.fnslist.map((function(e,n){return i.a.createElement(b,{key:n,item:e,index:n,tranfItem:t.handleTranfUp,del:t.delItemDown})}))))}},{key:"handleTranfDown",value:function(t){var e=this.state.sizeing-1,n=this.state.sizefns+1,a=Object(p.a)(this.state.list),i=a[t],s=Object(p.a)(this.state.fnslist);s.push(i),a.splice(t,1),this.setState({list:a,fnslist:s,sizeing:e,sizefns:n});var l=this.state.storage,r=l.getItem("todo"),c=JSON.parse(r);c[t].done=!0;var o=new Object;o=c[t],c.splice(t,1),c.push(o);var u=JSON.stringify(c);l.setItem("todo",u)}},{key:"handleTranfUp",value:function(t){var e=this.state.sizeing+1,n=this.state.sizefns-1,a=Object(p.a)(this.state.fnslist);console.log(t,a[t]);var i=a[t],s=Object(p.a)(this.state.list);s.push(i),a.splice(t,1),this.setState({list:s,fnslist:a,sizeing:e,sizefns:n});var l=this.state.storage,r=l.getItem("todo"),c=JSON.parse(r);c[t+this.state.list.length].done=!1;var o=new Object;o=c[t+this.state.list.length],c.splice(t+this.state.list.length,1),c.splice(this.state.list.length,0,o);var u=JSON.stringify(c);l.setItem("todo",u)}},{key:"delItemUp",value:function(t){var e=this.state.sizeing-1,n=Object(p.a)(this.state.list);n.splice(t,1),this.setState({list:n,sizeing:e});var a=this.state.storage,i=a.getItem("todo"),s=JSON.parse(i);s.splice(t,1);var l=JSON.stringify(s);a.setItem("todo",l)}},{key:"delItemDown",value:function(t){var e=this.state.sizefns-1,n=Object(p.a)(this.state.fnslist);n.splice(t,1),this.setState({fnslist:n,sizefns:e});var a=this.state.storage,i=a.getItem("todo"),s=JSON.parse(i);s.splice(t+this.state.list.length,1);var l=JSON.stringify(s);a.setItem("todo",l)}},{key:"getLocalStorage",value:function(){for(var t=this.state.storage,e=this.state.list,n=this.state.fnslist,a=t.getItem("todo"),i=JSON.parse(a),s=0,l=0,r=0;r<i.length;r++)0==i[r].done?(e[r]=i[r].titie,s++):(n[r-e.length]=i[r].titie,l++);this.state.sizeing=s,this.state.sizefns=l}}]),e}(a.Component),j=(n(101),function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(o.a)(this,Object(u.a)(e).call(this))).state={data:[]},t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.apiopen.top/musicRankingsDetails?type=1").then((function(t){return t.json()})).then((function(e){t.setState({data:e.result}),console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"\u8bf7\u6c42\u63a5\u53e3"),i.a.createElement("ul",null,this.state.data.map((function(t,e){return i.a.createElement("li",{key:e},i.a.createElement("h2",null,t.album_title),i.a.createElement("p",null,t.author))}))))}}]),e}(a.Component)),v=i.a.createContext(),g=(i.a.createContext(),function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return console.log(this),i.a.createElement("div",null,i.a.createElement("h1",null,"Context"),i.a.createElement("div",null,this.context))}}]),e}(a.Component));g.contextType=v;a.Component;var y="https://api.apiopen.top/musicRankingsDetails?type=1";function E(t,e,n){var s=function(a){function s(){var t;return Object(r.a)(this,s),(t=Object(o.a)(this,Object(u.a)(s).call(this))).state={data:[]},t}return Object(h.a)(s,a),Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch(e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.result})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,n),i.a.createElement(t,Object.assign({},this.props,{data:this.state.data})))}}]),s}(a.Component);return s.displayName="A(".concat(function(t){return t.displayName||t.name||"Component"}(t),")"),s}var k=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("ul",null,i.a.createElement("div",null,this.props.name),this.props.data.map((function(t,e){return i.a.createElement("li",{key:e},t.title)})))}}]),e}(a.Component),x=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("ul",null,this.props.data.map((function(t,e){return i.a.createElement("div",{key:e},i.a.createElement("p",null,t.title),i.a.createElement("p",null,t.author))})))}}]),e}(a.Component),w=E(k,y,"\u7b2c\u4e00\u4e2a"),I=E(x,y,"\u7b2c\u4e8c\u4e2a"),C=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(w,{name:"aa"}),i.a.createElement(I,null))}}]),e}(a.Component),S=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).cli=function(){console.log("portals click")},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return l.a.createPortal(i.a.createElement("div",{onClick:this.cli},this.props.children),document.body)}}]),e}(a.Component),z=(a.Component,n(31)),D=n(19),N=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("ul",{style:{float:"left"}},i.a.createElement("li",null,i.a.createElement(z.b,{to:"/"},"Todolist")),i.a.createElement("li",null,i.a.createElement(z.b,{to:"/hoc"},"Hoc")),i.a.createElement("li",null,i.a.createElement(z.b,{to:"/request"},"Request")))}}]),e}(a.Component),J=n(170);n(122),a.Component;l.a.render(i.a.createElement(O,null),document.getElementById("root"));i.a.createElement("div",{id:"box"},"hello",i.a.createElement("h1",{id:"h"},"react"))},95:function(t,e,n){t.exports=n(168)}},[[95,1,2]]]);
//# sourceMappingURL=main.f7b36b7a.chunk.js.map