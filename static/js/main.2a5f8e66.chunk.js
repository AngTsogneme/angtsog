(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(2),c=s.n(n),i=s(41),o=s.n(i),l=s(10),r=s(11),j=s(13),u=s(12),h=s(21),m=s(9),d=s(14),b=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={firstName:"",showName:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(r.a)(s,[{key:"handleChange",value:function(e){var t=e.target,s=t.name,a=t.value;this.setState(Object(h.a)({},s,a))}},{key:"handleClick",value:function(e){e.preventDefault(),this.setState({showName:!0})}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"mainpage",className:"main_page",children:[Object(a.jsxs)("h1",{className:"h1_main_page",children:[Object(a.jsx)("p",{className:"greeting",children:"Hi! I'm "}),Object(a.jsx)("p",{className:"name",children:"Ang Tsog"}),Object(a.jsx)("img",{className:"profile_pic",src:"/angtsog/Profile.jpeg",alt:"Profile"})]}),Object(a.jsxs)("div",{className:"first_name_form",children:[Object(a.jsx)("h2",{className:"h2_main_page",children:" Please enter your first name"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:"input_first_name",type:"text",placeholder:"First Name",value:this.state.firstName,name:"firstName",onChange:this.handleChange}),Object(a.jsx)("button",{className:"enter_button",onClick:this.handleClick,children:"Enter"})]})]}),this.state.showName&&""!==this.state.firstName?Object(a.jsxs)("h2",{className:"first_name_message",children:["Nice to meet you ",this.state.firstName,"! "]}):null,Object(a.jsx)("h2",{className:"contact_info",children:"Feel free to contact me via: "}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)("a",{className:"linkedin_link",href:"https://www.linkedin.com/in/ang-tsog",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(d.a,{})}),Object(a.jsx)("a",{className:"email_link",href:"mailto:angarag97@gmail.com",children:Object(a.jsx)(d.b,{})})]})]})}}]),s}(n.Component),O=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={showDescription:!1},e.show=e.show.bind(Object(m.a)(e)),e.hide=e.hide.bind(Object(m.a)(e)),e}return Object(r.a)(s,[{key:"show",value:function(e){e.preventDefault(),this.setState({show:!0})}},{key:"hide",value:function(e){e.preventDefault(),this.setState({show:!1})}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"education",className:"education",children:[Object(a.jsx)("img",{className:"uoft_logo",src:"/angtsog/logo.png",alt:"logo"}),Object(a.jsx)("img",{className:"uoft_logo2",src:"/angtsog/logo.png",alt:"logo"}),Object(a.jsxs)("div",{className:"education_name",children:[Object(a.jsx)("h1",{children:"University of Toronto from 2015 - 2020"}),Object(a.jsx)("h2",{children:"Honours Bachelor of Science"}),Object(a.jsx)("h2",{children:"Computer Science, Mathematics and Philosophy"})]}),Object(a.jsx)("button",{className:"desc_button",onClick:this.state.show?this.hide:this.show,children:this.state.show?"\u2212":"+"}),this.state.show?Object(a.jsxs)("div",{className:"education_description",children:[Object(a.jsx)("li",{children:"   Developed and implemented a puzzle game and a paint program using object orientated programming, design patterns, and git "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"   Through computer science courses, I have learned efficient coding practices, interacting with data structures, building algorithms, and writing clean, readable code"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"   Through Math courses, I have improved my problem-solving skills and learned to think abstractly "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"   Philosophy courses have taught me to think critically and articulate my thoughts "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"   Taking 4 \u2013 6 courses has made me highly organized, a fast learner, and effective at managing my time"})]}):""]})}}]),s}(c.a.Component),x=s(15),v=s(32);var p=function(){return Object(a.jsxs)("div",{id:"skills",className:"skills",children:[Object(a.jsx)("div",{className:"icons_list",children:Object(a.jsxs)("h1",{children:["Experienced with: ",Object(a.jsx)("br",{})," ",Object(a.jsxs)("p",{className:"icons",children:[" ",Object(a.jsx)(x.d,{})," ",Object(a.jsx)(x.e,{})," ",Object(a.jsx)(x.c,{})," ",Object(a.jsx)(x.a,{})," ",Object(a.jsx)(v.b,{})," ",Object(a.jsx)(x.f,{})," ",Object(a.jsx)(v.a,{})," ",Object(a.jsx)(d.d,{})," ",Object(a.jsx)(d.e,{})]})]})}),Object(a.jsxs)("div",{className:"others_list",children:[Object(a.jsx)("h2",{children:"Here are some other skills:"}),Object(a.jsx)("li",{children:"Objected Orientated Programming"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Working in a Scrum environment "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Implementing Design Patterns, and Algorithms "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Efficient with Git commands "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Problem Solver"}),Object(a.jsx)("br",{})]})]})},f=s(16),g=s(42),N=s(22),C=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).handleScroll=function(){e.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e.state.scrollPos})},e.state={show:!0,scrollPos:0},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:this.state.show?"active":"hidden",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(f.Link,{className:"nav_home",activeClass:"activeL",to:"mainpage",spy:!0,smooth:!0,offset:-120,duration:800,children:window.innerWidth<801?Object(a.jsx)(d.f,{}):"Main Page"})}),Object(a.jsx)("li",{children:Object(a.jsx)(f.Link,{className:"nav_skills",activeClass:"activeL",to:"skills",spy:!0,smooth:!0,offset:-120,duration:800,children:window.innerWidth<801?Object(a.jsx)(d.c,{}):"Skills"})}),Object(a.jsx)("li",{children:Object(a.jsx)(f.Link,{className:"nav_ed",activeClass:"activeL",to:"education",spy:!0,smooth:!0,offset:-120,duration:800,children:window.innerWidth<801?Object(a.jsx)(x.b,{}):"Education"})}),Object(a.jsx)("li",{children:Object(a.jsx)(f.Link,{className:"nav_we",activeClass:"activeL",to:"workexperience",spy:!0,smooth:!0,offset:-120,duration:800,children:window.innerWidth<801?Object(a.jsx)(g.a,{}):"Work Experience"})}),Object(a.jsx)("li",{children:Object(a.jsx)(f.Link,{className:"nav_ag",activeClass:"activeL",to:"agendaproject",spy:!0,smooth:!0,offset:-120,duration:800,children:window.innerWidth<801?Object(a.jsx)(N.a,{}):"Fun"})})]})})})}}]),s}(n.Component),y=s(33),k=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={showDescription:!1},e.show=e.show.bind(Object(m.a)(e)),e.hide=e.hide.bind(Object(m.a)(e)),e}return Object(r.a)(s,[{key:"show",value:function(e){e.preventDefault(),this.setState({show:!0})}},{key:"hide",value:function(e){e.preventDefault(),this.setState({show:!1})}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"workexperience",className:"work_experience",children:[Object(a.jsx)(y.a,{className:"swim_icon1"}),Object(a.jsx)(y.a,{className:"swim_icon2"}),Object(a.jsxs)("div",{className:"work_name",children:[Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:" Lifeguard and Swim Instructor from 2015 - 2017"}),Object(a.jsx)("h2",{children:" At River Grove Community Centre "})]}),Object(a.jsx)("button",{className:"desc_button_we",onClick:this.state.show?this.hide:this.show,children:this.state.show?"\u2212":"+"}),this.state.show?Object(a.jsxs)("div",{className:"work_description",children:[Object(a.jsx)("li",{children:" Experienced with interacting and serving clients "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:" Taught children and adults how to swim "}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:" Worked in a group to maintain the safety of the pool"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:" Handled issues and concerns of parents and facility users"}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:" Improved my interpersonal skills"})]}):""]})}}]),s}(c.a.Component),w=s(4),S=s(24),_=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={j1amount:8,j2amount:0,j3amount:0,moves:0,select:""},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e.Reset=e.Reset.bind(Object(m.a)(e)),e}return Object(r.a)(s,[{key:"handleClick",value:function(e){"1to2"===e.target.value&&(this.state.j1amount>=5?this.setState({j1amount:this.state.j1amount-(5-this.state.j2amount),j2amount:5,moves:this.state.moves+1}):this.state.j1amount+this.state.j2amount<=5?this.setState({j1amount:0,j2amount:this.state.j1amount+this.state.j2amount,moves:this.state.moves+1}):this.setState({j1amount:this.state.j1amount-(5-this.state.j2amount),j2amount:5})),"1to3"===e.target.value&&(this.state.j1amount>=3?this.setState({j1amount:this.state.j1amount-(3-this.state.j3amount),j3amount:3,moves:this.state.moves+1}):this.state.j1amount+this.state.j3amount<=3?this.setState({j1amount:0,j3amount:this.state.j1amount+this.state.j3amount,moves:this.state.moves+1}):this.setState({j1amount:this.state.j1amount-(3-this.state.j3amount),j3amount:3})),"2to1"===e.target.value&&this.setState({j2amount:0,j1amount:this.state.j1amount+this.state.j2amount,moves:this.state.moves+1}),"2to3"===e.target.value&&(this.state.j2amount>=3?this.setState({j2amount:this.state.j2amount-(3-this.state.j3amount),j3amount:3,moves:this.state.moves+1}):this.state.j2amount+this.state.j3amount<=3?this.setState({j2amount:0,j3amount:this.state.j2amount+this.state.j3amount,moves:this.state.moves+1}):this.setState({j2amount:this.state.j2amount-(3-this.state.j3amount),j3amount:3})),"3to1"===e.target.value&&this.setState({j3amount:0,j1amount:this.state.j1amount+this.state.j3amount,moves:this.state.moves+1}),"3to2"===e.target.value&&(this.state.j3amount>=5?this.setState({j3amount:this.state.j3amount-(5-this.state.j2amount),j2amount:5,moves:this.state.moves+1}):this.state.j3amount+this.state.j2amount<=5?this.setState({j3amount:0,j2amount:this.state.j2amount+this.state.j3amount,moves:this.state.moves+1}):this.setState({j3amount:this.state.j3amount-(5-this.state.j2amount),j2amount:5}));var t=e.target,s=t.name,a=t.value;this.setState(Object(h.a)({},s,a))}},{key:"Reset",value:function(e){e.preventDefault(),this.setState({j1amount:8,j2amount:0,j3amount:0,moves:0,select:""})}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"jugpuzzle",className:"jug_puzzle",children:[Object(a.jsxs)("h1",{className:"jug_instructions",children:[" To complete this puzzle, Jug 1 and  Jug 2 must have amounts both equal to 4/8.",Object(a.jsx)("br",{})," Lowest amount of moves you can finish in is 7."]}),Object(a.jsxs)("div",{className:"jug_status",children:[Object(a.jsxs)("h1",{children:[" Jug 1: ",Object(a.jsx)(S.a,{className:"jug_logo"})," ",this.state.j1amount," / 8"]}),Object(a.jsxs)("h1",{children:[" Jug 2: ",Object(a.jsx)(S.a,{className:"jug_logo"})," ",this.state.j2amount," / 5 "]}),Object(a.jsxs)("h1",{children:[" Jug 3: ",Object(a.jsx)(S.a,{className:"jug_logo"})," ",this.state.j3amount," / 3 "]}),Object(a.jsxs)("h2",{children:["Moves: ",this.state.moves]})]}),Object(a.jsxs)("form",{className:"form_jug",children:[Object(a.jsxs)("select",{className:"select_move",onChange:this.handleClick,name:"select",value:this.state.select,children:[Object(a.jsx)("option",{children:"Select Move"}),Object(a.jsx)("option",{value:"1to2",children:"1 to 2"}),Object(a.jsx)("option",{value:"1to3",children:"1 to 3"}),Object(a.jsx)("option",{value:"2to1",children:"2 to 1"}),Object(a.jsx)("option",{value:"2to3",children:"2 to 3"}),Object(a.jsx)("option",{value:"3to1",children:"3 to 1"}),Object(a.jsx)("option",{value:"3to2",children:"3 to 2"})]}),Object(a.jsx)("button",{className:"reset_button",onClick:this.Reset,children:"Reset"}),4===this.state.j1amount&4===this.state.j2amount?Object(a.jsxs)("h2",{children:["Congratulations, you won in ",this.state.moves," moves"]}):null]})]})}}]),s}(n.Component);var L=function(e){var t=Object(n.useState)([]),s=Object(w.a)(t,2),c=s[0],i=s[1],o=Object(n.useState)("+"),l=Object(w.a)(o,2),r=l[0],j=l[1],u=Object(n.useState)(),h=Object(w.a)(u,2),m=h[0],d=h[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"expand_button",onClick:function(){i(e.grades),j("+"===r?"\u2212":"+");var t=e.grades.map((function(t){return e.grades.indexOf(t,e.grades.indexOf(t)+1)})).filter((function(e){return-1!==e})).pop(),s=e.grades.map((function(t){return e.grades.indexOf(t)}));s[t]=t,d(s)},children:r}),Object(a.jsxs)("div",{className:"grades",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"\u2212"===r?m.map((function(e){return Object(a.jsxs)("p",{children:[" Test ",e+1,": ",c[e],"%"]},e)})):""]})]})},M=s(43);var I=function(e){var t=Object(n.useState)(""),s=Object(w.a)(t,2),c=s[0],i=s[1],o=Object(n.useState)([]),l=Object(w.a)(o,2),r=l[0],j=l[1],u=Object(n.useState)(!1),h=Object(w.a)(u,2),m=h[0],d=h[1],b=Object(n.useState)(e.index),O=Object(w.a)(b,1)[0];return Object(n.useEffect)((function(){e.handleTags(r,O)})),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"tag_display_container",children:m?r.map((function(e){return Object(a.jsx)("p",{className:"tag_display",children:e},e)})):""}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.includes(c)||""===c||j([].concat(Object(M.a)(r),[c])),d(!0),i("")},children:Object(a.jsx)("input",{className:"add_tag",type:"text",value:c,onChange:function(e){i(e.target.value)},placeholder:"Add a tag"})})]})};var F=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(""),o=Object(w.a)(i,2),l=o[0],r=o[1],j=Object(n.useState)(""),u=Object(w.a)(j,2),h=u[0],m=u[1];Object(n.useEffect)((function(){fetch("https://api.hatchways.io/assessment/students").then((function(e){return e.json()})).then((function(e){e.students.map((function(t){return e.students[e.students.indexOf(t)].tags=[""]})),c(e.students)}))}),[]);var d=function(e,t){s[t].tags=e};return Object(a.jsxs)("div",{className:"display_box",children:[Object(a.jsx)("input",{className:"name_search",type:"text",placeholder:"Search by name",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("input",{className:"tag_search",type:"text",placeholder:"Search by tag",onChange:function(e){return m(e.target.value)}}),s.filter((function(e){return e.tags.join().includes(h)&&(e.firstName.toLowerCase().includes(l)+e.lastName.toLowerCase().includes(l)||e.firstName.toLowerCase().concat(" "+e.lastName.toLowerCase()).includes(l))})).map((function(e){return Object(a.jsxs)("div",{className:"display_content",children:[Object(a.jsx)("img",{className:"profile_pic_student",src:e.pic,alt:"profile_pic"}),Object(a.jsxs)("h1",{className:"name_student",children:[e.firstName," ",e.lastName]}),Object(a.jsxs)("p",{className:"email",children:["Email: ",e.email]}),Object(a.jsxs)("p",{className:"company",children:["Company: ",e.company]}),Object(a.jsxs)("p",{className:"skill",children:["Skill: ",e.skill]}),Object(a.jsxs)("p",{className:"average",children:["Average: ",e.grades.reduce((function(e,t){return parseInt(e,10)+parseInt(t,10)}))/e.grades.length,"%"]}),Object(a.jsx)(L,{grades:e.grades,index:s.indexOf(e)}),Object(a.jsx)(I,{handleTags:d,index:s.indexOf(e),currenttag:e.tags})]},e.id)}))]})},D=s(69),E=s(70);s(39);var T=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)([]),o=Object(w.a)(i,2),l=o[0],r=o[1],j=Object(n.useState)(""),u=Object(w.a)(j,2),h=u[0],m=u[1],d=Object(n.useState)(""),b=Object(w.a)(d,2),O=b[0],x=b[1],v=Object(n.useState)(""),p=Object(w.a)(v,2),f=p[0],g=p[1],N=Object(n.useState)(""),C=Object(w.a)(N,2),y=C[0],k=C[1],S=Object(n.useState)(""),_=Object(w.a)(S,2),L=_[0],M=_[1];return Object(n.useEffect)((function(){""!==h?fetch("https://api.exchangeratesapi.io/latest".concat("?base="+h)).then((function(e){return e.json()})).then((function(e){c(e),r(e.rates)})):fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){c(e),r(e.rates),m(e.base),x("CAD")}))}),[h]),Object(a.jsxs)("div",{className:"currency_exchange",children:[Object(a.jsx)("h2",{className:"h2ce",children:"Currency Exchange"}),Object(a.jsxs)(D.a,{className:"custom-form",children:[Object(a.jsx)(D.a.Label,{children:"FROM:"}),Object(a.jsxs)(D.a.Control,{as:"select",className:"custom-select-from",value:h,onChange:function(e){return m(e.target.value)},children:[Object(a.jsx)("option",{value:h,children:h}),Object.keys(l).map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))]}),Object(a.jsxs)(D.a.Label,{children:["TO:",Object(a.jsxs)(D.a.Control,{as:"select",className:"custom-select-to",value:O,onChange:function(e){return x(e.target.value)},children:[Object(a.jsx)("option",{value:O,children:O}),Object.keys(l).map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))]})]}),Object(a.jsx)(D.a.Control,{className:"custom-enteramount",type:"number",placeholder:"Enter amount",value:f,onChange:function(e){return g(e.target.value)}}),Object(a.jsx)(E.a,{className:"custom-convert-button",onClick:function(e){""!==f?(M(""),k(parseFloat(f*l[O]).toFixed(2))):M("Enter amount to convert"),e.preventDefault()},children:"Convert"}),Object(a.jsx)(D.a.Control,{className:"custom-display",type:"text",placeholder:""===L?y+" as of "+s.date:L,readOnly:!0})]})]})};var R=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(""),o=Object(w.a)(i,2),l=o[0],r=o[1],j=Object(n.useState)(""),u=Object(w.a)(j,2),h=u[0],m=u[1],d=Object(n.useState)("Mile"),b=Object(w.a)(d,2),O=b[0],x=b[1],v=Object(n.useState)("Foot"),p=Object(w.a)(v,2),f=p[0],g=p[1],N=Object(n.useState)("Inches"),C=Object(w.a)(N,2),y=C[0],k=C[1],S=Object(n.useState)("Mile"),_=Object(w.a)(S,2),L=_[0],M=_[1],I=Object(n.useState)("Gallon"),F=Object(w.a)(I,2),T=F[0],R=F[1],P=function(e){e.preventDefault(),"MLFT"===s?m("Mile"===O?5280*l:l/5280):"FtIn"===s?m("Foot"===f?12*l:l/12):"InCm"===s?m("Inches"===y?2.54*l:l/2.54):"MKm"===s?m("Mile"===L?1.609*l:l/1.609):"GL"===s&&m("Gallon"===T?3.785*l:l/3.785)},G=function(e){e.preventDefault(),x("Mile"===O?"Foot":"Mile"),g("Foot"===f?"Inches":"Foot"),k("Inches"===y?"Centimeter":"Inches"),M("Mile"===L?"Kilometer":"Mile"),R("Gallon"===T?"Liter":"Gallon"),m(""),r("")};return Object(a.jsxs)("div",{className:"other_conversions",children:[Object(a.jsx)("h2",{className:"h2oc",children:"Other Conversions"}),Object(a.jsxs)("div",{className:"form-other-wrapper",children:[Object(a.jsx)(D.a,{className:"custom-form-other",children:Object(a.jsxs)(D.a.Control,{className:"custom-select-other",as:"select",multiple:!0,onChange:function(e){return c(e.target.value)+r("")+m("")},children:[Object(a.jsx)("option",{value:"MLFT",children:"Mile and Foot"}),Object(a.jsx)("option",{value:"FtIn",children:"Foot and Inches"}),Object(a.jsx)("option",{value:"InCm",children:"Inch and Centimeter"}),Object(a.jsx)("option",{value:"MKm",children:"Mile and Kilometer"}),Object(a.jsx)("option",{value:"GL",children:"Gallon and Liter"})]})}),"MLFT"===s?Object(a.jsxs)(D.a,{className:"mf-wrapper",children:[Object(a.jsx)(D.a.Control,{type:"number",value:l,className:"mf-input",placeholder:"Mile"===O?"Mile":"Foot",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)(E.a,{className:"mf-convert",onClick:P,children:"Convert"}),Object(a.jsx)(E.a,{className:"mf-reverse",onClick:G,children:"Reverse"}),Object(a.jsx)(D.a.Control,{className:"mf-readonly",type:"text",placeholder:h,readOnly:!0})]}):"","FtIn"===s?Object(a.jsxs)(D.a,{className:"mf-wrapper",children:[Object(a.jsx)(D.a.Control,{type:"number",value:l,className:"mf-input",placeholder:"Foot"===f?"Foot":"Inches",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)(E.a,{className:"mf-convert",onClick:P,children:"Convert"}),Object(a.jsx)(E.a,{className:"mf-reverse",onClick:G,children:"Reverse"}),Object(a.jsx)(D.a.Control,{className:"mf-readonly",type:"text",placeholder:h,readOnly:!0})]}):"","InCm"===s?Object(a.jsxs)(D.a,{className:"mf-wrapper",children:[Object(a.jsx)(D.a.Control,{type:"number",value:l,className:"mf-input",placeholder:"Inches"===y?"Inches":"Centimeter",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)(E.a,{className:"mf-convert",onClick:P,children:"Convert"}),Object(a.jsx)(E.a,{className:"mf-reverse",onClick:G,children:"Reverse"}),Object(a.jsx)(D.a.Control,{className:"mf-readonly",type:"text",placeholder:h,readOnly:!0})]}):"","MKm"===s?Object(a.jsxs)(D.a,{className:"mf-wrapper",children:[Object(a.jsx)(D.a.Control,{type:"number",value:l,className:"mf-input",placeholder:"Mile"===L?"Mile":"Kilometer",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)(E.a,{className:"mf-convert",onClick:P,children:"Convert"}),Object(a.jsx)(E.a,{className:"mf-reverse",onClick:G,children:"Reverse"}),Object(a.jsx)(D.a.Control,{className:"mf-readonly",type:"text",placeholder:h,readOnly:!0})]}):"","GL"===s?Object(a.jsxs)(D.a,{className:"mf-wrapper",children:[Object(a.jsx)(D.a.Control,{type:"number",value:l,className:"mf-input",placeholder:"Gallon"===T?"Gallon":"Liter",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)(E.a,{className:"mf-convert",onClick:P,children:"Convert"}),Object(a.jsx)(E.a,{className:"mf-reverse",onClick:G,children:"Reverse"}),Object(a.jsx)(D.a.Control,{className:"mf-readonly",type:"text",placeholder:h,readOnly:!0})]}):""]})]})};var P=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)([]),o=Object(w.a)(i,2),l=o[0],r=o[1],j=Object(n.useState)(""),u=Object(w.a)(j,2),h=u[0],m=u[1],d=Object(n.useState)(1),b=Object(w.a)(d,2),O=b[0],x=b[1],v=function(e){r(l.filter((function(t){return t.id+t.value!==e.target.value})))};return Object(a.jsxs)("div",{id:"agendaproject",className:"agenda_project",children:[Object(a.jsxs)("form",{className:"agenda-form",children:[Object(a.jsxs)("h1",{className:"h1_agenda",children:["Agenda ",Object(a.jsx)(N.a,{})]}),Object(a.jsx)("input",{className:"task_input",type:"text",value:s,placeholder:"Enter Task",onChange:function(e){return c(e.target.value)}}),Object(a.jsxs)("div",{className:"button-wrapper",children:[Object(a.jsx)("button",{className:"button_add",onClick:function(e){e.preventDefault(),""!==s?(x(O+1),r(l.concat({id:O,value:s})),c("")):m("Please enter a task")},children:" Add "}),Object(a.jsx)("button",{className:"button_clear",onClick:function(e){c(""),r([]),x(1),m(""),e.preventDefault()},children:" Clear "})]})]}),Object(a.jsxs)("div",{className:"display_todo",children:[Object(a.jsx)("p",{children:h}),l.length<14?l.map((function(e){return Object(a.jsxs)("ul",{children:[e.value,Object(a.jsx)("button",{className:"delete-task",onClick:v,value:e.id+e.value,children:"\u2716"})]},e.id)})):(r([]),void m(""))]}),Object(a.jsx)(_,{}),Object(a.jsx)(F,{}),Object(a.jsx)(T,{}),Object(a.jsx)(R,{})]})},G=(s(67),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{}),Object(a.jsx)(b,{}),Object(a.jsx)(p,{}),Object(a.jsx)(O,{}),Object(a.jsx)(k,{}),Object(a.jsx)(P,{})]})," "]})}}]),s}(n.Component));o.a.render(Object(a.jsx)(G,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2a5f8e66.chunk.js.map