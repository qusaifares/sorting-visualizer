(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(7),o=n.n(s),i=(n(13),n(1)),u=n(2),c=n(4),b=n(3),m=n(5),l=(n(14),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(c.a)(this,Object(b.a)(e).call(this,t))).beginSort=function(){"bubble"===n.props.sortType?n.bubbleSort():"merge"===n.props.sortType||"quick"===n.props.sortType&&n.quickSort()},n.bubbleSort=function(t){for(var e=n.state.numbers,r=!0,a=function(){r=!1;var t=n.state.bubbleLimit,a=1,s=setInterval((function(){if((e=e.map((function(t){return{number:t.number,beingSorted:!1}})))[a].beingSorted=!0,e[a-1].beingSorted=!0,n.setState({numbers:e}),e[a-1].number>e[a].number){var o=[e[a-1],e[a]];e[a]=o[0],e[a-1]=o[1],r=!0}++a>t&&(r?(n.setState({bubbleLimit:n.state.bubbleLimit-1}),n.bubbleSort()):n.setState({done:!0}),clearInterval(s))}),n.state.time);n.setState({numbers:e})};r;)a()},n.quickSort=function(){},n.state={numbers:[],time:50,done:!1,bubbleLimit:0},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({numbers:this.props.numbers},(function(){return t.setState({bubbleLimit:t.state.numbers.length-1})}))}},{key:"componentDidUpdate",value:function(t,e){!1===t.startSort&&!0===this.props.startSort&&this.beginSort()}},{key:"render",value:function(){var t=this;return this.state.numbers?a.a.createElement("div",{className:"visual"},a.a.createElement("h2",{className:"visual-heading"},this.props.sortType," sort"),a.a.createElement("div",{className:"chart"},this.state.numbers.map((function(e,n){return a.a.createElement("div",{key:n,className:"bar ".concat(e.beingSorted&&"current-bar"," ").concat(t.state.done&&"done-bar"),style:{height:"".concat(2*e.number,"px")}})})))):a.a.createElement("h1",null,"Hold on")}}]),e}(r.Component)),h=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(c.a)(this,Object(b.a)(e).call(this,t))).generateNumbers=function(){for(var t=[],e=0;e<30;e++){var r=Math.floor(85*Math.random())+10;t.push({number:r,beingSorted:!1})}n.setState({numbers:t})},n.generateTest=function(){for(var t=[],e=30;e>0;e--)t.push({number:e,beingSorted:!1});n.setState({numbers:t})},n.setSort=function(){n.setState({sort:!0})},n.state={numbers:[],sort:!1},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.generateNumbers()}},{key:"render",value:function(){return this.state.numbers.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",null,a.a.createElement("button",{className:"visualize",onClick:this.setSort},"Visualize")),a.a.createElement("main",null,a.a.createElement(l,{sortType:"bubble",numbers:this.state.numbers,startSort:this.state.sort}),a.a.createElement(l,{sortType:"quick",numbers:this.state.numbers,startSort:this.state.sort}),a.a.createElement(l,{sortType:"merge",numbers:this.state.numbers,startSort:this.state.sort}),a.a.createElement(l,{sortType:"heap",numbers:this.state.numbers,startSort:this.state.sort}))):a.a.createElement("h1",null,"Hold on bro")}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ec952e11.chunk.js.map