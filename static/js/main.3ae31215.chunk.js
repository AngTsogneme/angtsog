(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.96138be7.png"},32:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Profile.45a3cc2d.jpeg"},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(15),m=a.n(s),i=a(3),o=a(4),r=a(6),c=a(5),u=a(8),h=a(2),d=a(10),E=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={firstName:"",showName:!1},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"handleClick",value:function(e){e.preventDefault(),this.setState({showName:!0})}},{key:"render",value:function(){return l.a.createElement("div",{id:"mainpage",className:"main_page"},l.a.createElement("h1",{className:"h1_main_page"},l.a.createElement("img",{className:"profile_pic",src:a(32),alt:"Profile"}),"Hi! I'm ",l.a.createElement("p",{className:"name"},"Ang Tsog")),l.a.createElement("div",{className:"first_name_form"},l.a.createElement("h2",{className:"h2_main_page"}," Please enter your first name"),l.a.createElement("form",null,l.a.createElement("input",{className:"input_first_name",type:"text",placeholder:"First Name",value:this.state.firstName,name:"firstName",onChange:this.handleChange}),l.a.createElement("button",{className:"enter_button",onClick:this.handleClick},"Enter"))),this.state.showName&&""!==this.state.firstName?l.a.createElement("h2",{className:"first_name_message"},"Nice to meet you ",this.state.firstName,"! "):null,l.a.createElement("h2",{className:"contact_info"},"Feel free to contact me via: "),l.a.createElement("div",{className:"links"},l.a.createElement("a",{className:"linkedin_link",href:"https://www.linkedin.com/in/ang-tsog",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(d.a,null)),l.a.createElement("a",{className:"email_link",href:"mailto:angarag97@gmail.com"},l.a.createElement(d.b,null))))}}]),n}(n.Component);var v=function(){return l.a.createElement("div",{id:"education",className:"education"},l.a.createElement("img",{className:"uoft_logo",src:a(23),alt:"logo"}),l.a.createElement("img",{className:"uoft_logo2",src:a(23),alt:"logo"}),l.a.createElement("div",{className:"education_name"},l.a.createElement("h1",null,"University of Toronto from 2015 - 2020"),l.a.createElement("h2",null,"Honours Bachelor of Science"),l.a.createElement("h2",null,"Computer Science, Mathematics and Philosophy")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"education_description"},l.a.createElement("li",null,"   Developed a paint program using Java and Git "),l.a.createElement("br",null),l.a.createElement("li",null,"   Created and designed a personal website, technology involved HTML, CSS and JavaScript"),l.a.createElement("br",null),l.a.createElement("li",null,"   Implemented a puzzle game in Java/Java beans, cross platform desktop application"),l.a.createElement("br",null),l.a.createElement("li",null,"   Taking 4 \u2013 6 courses has forced me to be highly organized, become an efficient learner, and made me effective at managing my time"),l.a.createElement("br",null),l.a.createElement("li",null,"   Through Computer Science and Math courses, I have improved my problem-solving skills and learned to think abstractly "),l.a.createElement("br",null),l.a.createElement("li",null,"   Philosophy courses have taught me to think critically and articulate my thoughts "),l.a.createElement("br",null),l.a.createElement("li",null,"   My experience has also taught me to be an effective communicator and an overall friendly and passionate person")))},p=a(11),j=a(20);var g=function(){return l.a.createElement("div",{id:"skills",className:"skills"},l.a.createElement("div",{className:"icons_list"},l.a.createElement("h1",null,"Experienced with: ",l.a.createElement("br",null)," ",l.a.createElement("p",{className:"icons"}," ",l.a.createElement(p.c,null),", ",l.a.createElement(p.d,null),", ",l.a.createElement(p.b,null),", ",l.a.createElement(p.a,null),", ",l.a.createElement(j.b,null),", ",l.a.createElement(p.e,null),", ",l.a.createElement(j.a,null),", ",l.a.createElement(d.c,null),", ",l.a.createElement(d.d,null)))),l.a.createElement("div",{className:"others_list"},l.a.createElement("h2",null,"Here are some other skills:"),l.a.createElement("li",null,"Experienced with Objected Orientated Programming, working in an Agile (Scrum) environment, implementing Design Patterns "),l.a.createElement("br",null),l.a.createElement("li",null,"Efficient with command lines "),l.a.createElement("br",null),l.a.createElement("li",null,"Experienced in problem solving, complexity analysis, and linear programming"),l.a.createElement("br",null),l.a.createElement("li",null,"Diligent in everything I work on"),l.a.createElement("br",null),l.a.createElement("li",null,"Strong desire to learn"),l.a.createElement("br",null),l.a.createElement("li",null,"Friendly and positive, a great listener and a good team member. Loves to work in diverse team environments")))},b=a(9),f=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleScroll=function(){e.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e.state.scrollPos})},e.state={show:!0,scrollPos:0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:this.state.show?"active":"hidden"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.Link,{activeClass:"activeL",to:"mainpage",spy:!0,smooth:!0,offset:-80,duration:800},"Main Page")),l.a.createElement("li",null,l.a.createElement(b.Link,{activeClass:"activeL",to:"skills",spy:!0,smooth:!0,offset:-80,duration:800},"Skills")),l.a.createElement("li",null,l.a.createElement(b.Link,{activeClass:"activeL",to:"education",spy:!0,smooth:!0,offset:-80,duration:800},"Education")),l.a.createElement("li",null,l.a.createElement(b.Link,{activeClass:"activeL",to:"workexperience",spy:!0,smooth:!0,offset:-80,duration:800},"Work Experience")),l.a.createElement("li",null,l.a.createElement(b.Link,{activeClass:"activeL",to:"agendaproject",spy:!0,smooth:!0,offset:-80,duration:800},"Agenda Project")),l.a.createElement("li",null,l.a.createElement(b.Link,{activeClass:"activeL",to:"jugpuzzle",spy:!0,smooth:!0,offset:-80,duration:800},"Jug Puzzle")))))}}]),a}(n.Component),k=a(21);var y=function(){return l.a.createElement("div",{id:"workexperience",className:"work_experience"},l.a.createElement(k.a,{className:"swim_icon1"}),l.a.createElement(k.a,{className:"swim_icon2"}),l.a.createElement("div",{className:"work_name"},l.a.createElement("br",null),l.a.createElement("h1",null," Lifeguard and Swim Instructor from 2015 - 2017"),l.a.createElement("h2",null," At River Grove Community Centre ")),l.a.createElement("br",null),l.a.createElement("div",{className:"work_description"},l.a.createElement("li",null," Experienced with interacting and serving clients "),l.a.createElement("br",null),l.a.createElement("li",null," Taught children and adults how to swim "),l.a.createElement("br",null),l.a.createElement("li",null," Worked in a group to maintain the safety of the pool"),l.a.createElement("br",null),l.a.createElement("li",null," Handled issues and concerns of parents and facility users"),l.a.createElement("br",null),l.a.createElement("li",null," Improved my interpersonal skills")))},N=a(27),C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={time:"",task:"",list:[],id:1,isChecked:!1},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.handleClear=e.handleClear.bind(Object(h.a)(e)),e.handleOverflow=e.handleOverflow.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,l=t.type,s=t.checked;"checkbox"===l&&this.state.list.task===a?this.setState(Object(u.a)({},a,s)):this.setState(Object(u.a)({},a,n))}},{key:"handleSubmit",value:function(e){this.setState({id:this.state.id+1,list:this.state.list.concat([{id:this.state.id,value:this.state.time+": "+this.state.task,completed:this.state.isChecked}])}),e.preventDefault()}},{key:"handleClear",value:function(e){this.setState({time:"",task:"",list:[],id:1}),e.preventDefault()}},{key:"handleOverflow",value:function(){this.setState({list:[]})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"agendaproject",className:"agenda_project"},l.a.createElement("form",{className:"agenda-form",onSubmit:this.handleSubmit},l.a.createElement("h1",{className:"h1_agenda"},"Agenda ",l.a.createElement(N.a,null)),l.a.createElement("select",{className:"select_time",value:this.state.time,onChange:this.handleChange,name:"time"},l.a.createElement("option",{value:"Select"},"Select Time"),l.a.createElement("option",{value:"12am"},"12am"),l.a.createElement("option",{value:"1am"},"1am"),l.a.createElement("option",{value:"2am"},"2am"),l.a.createElement("option",{value:"3am"},"3am"),l.a.createElement("option",{value:"4am"},"4am"),l.a.createElement("option",{value:"5am"},"5am"),l.a.createElement("option",{value:"6am"},"6am"),l.a.createElement("option",{value:"7am"},"7am"),l.a.createElement("option",{value:"8am"},"8am"),l.a.createElement("option",{value:"9am"},"9am"),l.a.createElement("option",{value:"10am"},"10am"),l.a.createElement("option",{value:"11am"},"11pm"),l.a.createElement("option",{value:"12pm"},"12pm"),l.a.createElement("option",{value:"1pm"},"1pm"),l.a.createElement("option",{value:"2pm"},"2pm"),l.a.createElement("option",{value:"3pm"},"3pm"),l.a.createElement("option",{value:"4pm"},"4pm"),l.a.createElement("option",{value:"5pm"},"5pm"),l.a.createElement("option",{value:"6pm"},"6pm"),l.a.createElement("option",{value:"7pm"},"7pm"),l.a.createElement("option",{value:"8pm"},"8pm"),l.a.createElement("option",{value:"9pm"},"9pm"),l.a.createElement("option",{value:"10pm"},"10pm"),l.a.createElement("option",{value:"11pm"},"11pm")),l.a.createElement("input",{className:"task_input",type:"text",value:this.state.task,name:"task",placeholder:"Enter Task",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"button_add",type:"submit"}," Add "),l.a.createElement("br",null),l.a.createElement("button",{className:"button_clear",onClick:this.handleClear}," Clear ")),l.a.createElement("div",{className:"display_todo"},this.state.list.length<14?this.state.list.map((function(t){return l.a.createElement("label",{key:t.id},l.a.createElement("input",{type:"Checkbox",name:"isChecked",checked:e.state.list.completed,onChange:e.handleChange}),t.value,l.a.createElement("br",null))})):this.handleOverflow(),console.log(this.state.list)))}}]),a}(n.Component),S=a(7),_=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={j1amount:8,j2amount:0,j3amount:0,moves:0,select:""},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.Reset=e.Reset.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"handleClick",value:function(e){"1to2"===e.target.value&&(this.state.j1amount>=5?this.setState({j1amount:this.state.j1amount-(5-this.state.j2amount),j2amount:5,moves:this.state.moves+1}):this.state.j1amount+this.state.j2amount<=5?this.setState({j1amount:0,j2amount:this.state.j1amount+this.state.j2amount,moves:this.state.moves+1}):this.setState({j1amount:this.state.j1amount-(5-this.state.j2amount),j2amount:5})),"1to3"===e.target.value&&(this.state.j1amount>=3?this.setState({j1amount:this.state.j1amount-(3-this.state.j3amount),j3amount:3,moves:this.state.moves+1}):this.state.j1amount+this.state.j3amount<=3?this.setState({j1amount:0,j3amount:this.state.j1amount+this.state.j3amount,moves:this.state.moves+1}):this.setState({j1amount:this.state.j1amount-(3-this.state.j3amount),j3amount:3})),"2to1"===e.target.value&&this.setState({j2amount:0,j1amount:this.state.j1amount+this.state.j2amount,moves:this.state.moves+1}),"2to3"===e.target.value&&(this.state.j2amount>=3?this.setState({j2amount:this.state.j2amount-(3-this.state.j3amount),j3amount:3,moves:this.state.moves+1}):this.state.j2amount+this.state.j3amount<=3?this.setState({j2amount:0,j3amount:this.state.j2amount+this.state.j3amount,moves:this.state.moves+1}):this.setState({j2amount:this.state.j2amount-(3-this.state.j3amount),j3amount:3})),"3to1"===e.target.value&&this.setState({j3amount:0,j1amount:this.state.j1amount+this.state.j3amount,moves:this.state.moves+1}),"3to2"===e.target.value&&(this.state.j3amount>=5?this.setState({j3amount:this.state.j3amount-(5-this.state.j2amount),j2amount:5,moves:this.state.moves+1}):this.state.j3amount+this.state.j2amount<=5?this.setState({j3amount:0,j2amount:this.state.j2amount+this.state.j3amount,moves:this.state.moves+1}):this.setState({j3amount:this.state.j3amount-(5-this.state.j2amount),j2amount:5}));var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"Reset",value:function(e){e.preventDefault(),this.setState({j1amount:8,j2amount:0,j3amount:0,moves:0,select:""})}},{key:"render",value:function(){return l.a.createElement("div",{id:"jugpuzzle",className:"jug_puzzle"},l.a.createElement("h1",{className:"jug_instructions"}," To complete this puzzle, Jug 1 and  Jug 2 must have amounts both equal to 4/8.",l.a.createElement("br",null)," Lowest amount of moves you can finish in is 7."),l.a.createElement("div",{className:"jug_status"},l.a.createElement("h1",null,l.a.createElement(S.b,null)," 1: ",l.a.createElement(S.a,{className:"drop"}),this.state.j1amount,l.a.createElement(S.a,{className:"drop"})," / 8"),l.a.createElement("h1",null,l.a.createElement(S.b,null)," 2: ",l.a.createElement(S.a,{className:"drop"}),this.state.j2amount,l.a.createElement(S.a,{className:"drop"})," / 5 "),l.a.createElement("h1",null,l.a.createElement(S.b,null)," 3: ",l.a.createElement(S.a,{className:"drop"}),this.state.j3amount,l.a.createElement(S.a,{className:"drop"})," / 3 ")),l.a.createElement("form",{className:"form_jug"},l.a.createElement("select",{className:"select_move",onChange:this.handleClick,name:"select",value:this.state.select},l.a.createElement("option",{value:"Select"},"Select Move"),l.a.createElement("option",{value:"1to2"},"1 to 2"),l.a.createElement("option",{value:"1to3"},"1 to 3"),l.a.createElement("option",{value:"2to1"},"2 to 1"),l.a.createElement("option",{value:"2to3"},"2 to 3"),l.a.createElement("option",{value:"3to1"},"3 to 1"),l.a.createElement("option",{value:"3to2"},"3 to 2")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"reset_button",onClick:this.Reset},"Reset"),4===this.state.j1amount&4===this.state.j2amount?l.a.createElement("h2",null,"Congratulations, you won in ",this.state.moves," moves"):null))}}]),a}(n.Component),w=(a(43),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(C,null),l.a.createElement(_,null))," ")}}]),a}(n.Component));m.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3ae31215.chunk.js.map