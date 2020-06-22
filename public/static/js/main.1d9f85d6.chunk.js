(this["webpackJsonpreact-day-5"]=this["webpackJsonpreact-day-5"]||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),s=a.n(r),l=(a(36),a(30)),i=a(10),c=a(11),m=a(13),u=a(12),d=(a(37),a(38),a(1)),p=a(3);function h(e){return o.a.createElement(o.a.Fragment,null,e.todos.map((function(e,t){return o.a.createElement("p",{key:t},o.a.createElement(p.b,{to:"/todo/".concat(e._id)},e.name))})))}function g(e){return e.loggedInUser?o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:e.onAdd},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"description"},"Description"),o.a.createElement("input",{type:"text",className:"form-control",name:"description",id:"description"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create"))):o.a.createElement(d.a,{to:"/sign-in"})}function f(e){return o.a.createElement("ul",{className:"nav "},o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.b,{className:"nav-link active myContainer",to:"/"},"Todos")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.b,{className:"nav-link",to:"/add-form"},"Add Todo")),e.loggedInUser?o.a.createElement("li",{className:"nav-item"},o.a.createElement("button",{className:"nav-link",onClick:e.onLogout},"Logout")):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.b,{className:"nav-link",to:"/sign-in"},"SignIn")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.b,{className:"nav-link",to:"/sign-up"},"SignUp"))))}var E=a(7),v=a.n(E),b={API_URL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"http://localhost:5000/api"},y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todo:""},e.handleDeleteTodo=function(){var t=e.props.match.params.id;v.a.delete("".concat(b.API_URL,"/todos/").concat(t),{withCredentials:!0}).then((function(){e.props.afterDelete(t)})).catch((function(t){401===t.response.status&&e.props.history.push("/sign-in")}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("".concat(b.API_URL,"/todos/").concat(t),{withCredentials:!0}).then((function(t){e.setState({todo:t.data})})).catch((function(t){401===t.response.status&&e.props.history.push("/sign-in")}))}},{key:"render",value:function(){if(!this.props.loggedInUser)return o.a.createElement(d.a,{to:"/sign-in"});if(!this.state.todo)return o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")));var e=this.state.todo,t=e.name,a=e.description,n=this.props.match.params.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,t),o.a.createElement("p",null,a),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},o.a.createElement(p.b,{to:"/todo/".concat(n,"/edit")},"Edit")),o.a.createElement("button",{onClick:this.handleDeleteTodo,type:"submit",className:"btn btn-primary"},"Delete"))}}]),a}(o.a.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todo:""},e.handleEdit=function(t){t.preventDefault();var a=e.props.match.params.id;v.a.patch("".concat(b.API_URL,"/todos/").concat(a),{name:e.state.todo.name,description:e.state.todo.description},{withCredentials:!0}).then((function(e){}))},e.handleNameChange=function(t){var a=JSON.parse(JSON.stringify(e.state.todo));a.name=t.target.value,e.setState({todo:a})},e.handleDescChange=function(t){var a=JSON.parse(JSON.stringify(e.state.todo));a.description=t.target.value,e.setState({todo:a})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("".concat(b.API_URL,"/todos/").concat(t),{withCredentials:!0}).then((function(t){e.setState({todo:t.data})}))}},{key:"render",value:function(){if(!this.props.loggedInUser)return o.a.createElement(d.a,{to:"/sign-in"});if(!this.state.todo)return o.a.createElement("div",{class:"text-center"},o.a.createElement("div",{class:"spinner-border",role:"status"},o.a.createElement("span",{class:"sr-only"},"Loading...")));var e=this.state.todo,t=e.name,a=e.description;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",null,o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",class:"form-control",onChange:this.handleNameChange,name:"name",id:"name",value:t})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{htmlFor:"description"},"Description"),o.a.createElement("input",{type:"text",class:"form-control",onChange:this.handleDescChange,name:"description",id:"description",value:a})),o.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.handleEdit},"Submit")))}}]),a}(o.a.Component);function N(e){return o.a.createElement("form",{onSubmit:e.onSignIn},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),o.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}function U(e){return o.a.createElement("form",{onSubmit:e.onSignUp},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputUsername"},"Username"),o.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",name:"username"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),o.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"})),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}var S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],loggedInUser:null},e.getTodos=function(){v.a.get("".concat(b.API_URL,"/todos")).then((function(t){e.setState({todos:t.data})})).catch((function(t){401===t.response.status&&e.props.history.push("/sign-in")}))},e.handleAddTodo=function(t){t.preventDefault();var a=t.target.name.value,n=t.target.description.value;v.a.post("".concat(b.API_URL,"/create"),{name:a,description:n},{withCredentials:!0}).then((function(t){e.setState({todos:[].concat(Object(l.a)(e.state.todos),[t.data])},(function(){e.props.history.push("/")}))})).catch((function(t){401===t.response.status&&e.props.history.push("/sign-in")}))},e.handleDelete=function(t){var a=e.state.todos.filter((function(e){return e._id!==t}));e.setState({todos:a},(function(){e.props.history.push("/")})),console.log(e.state.todos)},e.handleLogout=function(){console.log(document.cookie),v.a.post("".concat(b.API_URL,"/logout"),{},{withCredentials:!0}).then((function(t){console.log(t),e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.handleSignIn=function(t){t.preventDefault();var a=t.target.email.value,n=t.target.password.value;v.a.post("".concat(b.API_URL,"/signin"),{email:a,password:n}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))}))},e.handleSignUp=function(t){t.preventDefault();var a=t.target.email.value,n=t.target.username.value,o=t.target.password.value;v.a.post("".concat(b.API_URL,"/signup"),{email:a,username:n,password:o},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))}))},e}return Object(c.a)(a,[{key:"getUser",value:function(){var e=this;v.a.get("".concat(b.API_URL,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(t){401===t.response.status&&e.props.history.push("/sign-in")}))}},{key:"componentDidMount",value:function(){this.getTodos(),this.state.loggedInUser||this.getUser()}},{key:"render",value:function(){var e=this,t=this.state.loggedInUser;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{loggedInUser:this.state.loggedInUser,onLogout:this.handleLogout}),o.a.createElement("h3",null,"My Shopping List"),o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/",render:function(){return o.a.createElement(h,{todos:e.state.todos,loggedInUser:t})}}),o.a.createElement(d.b,{path:"/add-form",render:function(a){return o.a.createElement(g,Object.assign({loggedInUser:t,onAdd:e.handleAddTodo},a))}}),o.a.createElement(d.b,{exact:!0,path:"/todo/:id",render:function(a){return o.a.createElement(y,Object.assign({loggedInUser:t,afterDelete:e.handleDelete},a))}}),o.a.createElement(d.b,{path:"/todo/:id/edit",render:function(e){return o.a.createElement(I,Object.assign({loggedInUser:t},e))}}),o.a.createElement(d.b,{path:"/sign-in",render:function(t){return o.a.createElement(N,Object.assign({onSignIn:e.handleSignIn},t))}}),o.a.createElement(d.b,{path:"/sign-up",render:function(t){return o.a.createElement(U,Object.assign({onSignUp:e.handleSignUp},t))}})))}}]),a}(o.a.Component),w=Object(d.g)(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p.a,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.1d9f85d6.chunk.js.map