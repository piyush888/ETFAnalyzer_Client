(this.webpackJsonpwebapplication=this.webpackJsonpwebapplication||[]).push([[12],{832:function(e,t,a){},904:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a(48),o=a(94),s=a(95),m=a(97),i=a(96),d=a(406),E=a(100),u=(a(832),a(128)),f=a(18),p=a(37),g=a.n(p),h=a(833),x=a.n(h),b=a(870),F=a.n(b),v=a(283),N=(a(302),a(324),a(321),a(311),function(e){var t,a=Object(n.useState)([]),l=Object(f.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)([]),m=Object(f.a)(s,2),i=(m[0],m[1],Object(n.useState)(new Date)),d=Object(f.a)(i,2),E=d[0],p=d[1],h=Object(n.useState)(new Date),N=Object(f.a)(h,2),w=N[0],T=N[1],y=Object(n.useState)(new Date),O=Object(f.a)(y,2),C=O[0],S=O[1],j=Object(n.useState)(null),A=Object(f.a)(j,2),M=A[0],k=A[1];function L(){g.a.get("/api/ETfLiveArbitrage/AllTickers").then((function(e){var t=e.data;o(t),S(t[0].Timestamp)})).catch((function(e){console.log(e.response.status),k(e.response.status),console.log(e)}))}Object(n.useEffect)((function(){c.length<1&&L()}),[]),function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){8===(new Date).getSeconds()&&(L(),p(new Date)),T(new Date)}),1e3);var B={"Over Bought":"Over Bought",Balanced:"Balanced","Over Sold":"Over Sold"};function D(e,t){return"Over Sold"==t["Over Bought/Sold"]?r.a.createElement("span",null,r.a.createElement("strong",{style:{color:"green"}},e)):"Over Bought"==t["Over Bought/Sold"]?r.a.createElement("span",null,r.a.createElement("strong",{style:{color:"red"}},e)):r.a.createElement(r.a.Fragment,null,e)}var I=[{dataField:"symbol",text:"Ticker",sort:!0,filter:Object(b.textFilter)({style:{width:"100px",marginLeft:"10px"}}),sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},{dataField:"Arbitrage in $",text:"Arbitrage in $",sort:!0,filter:Object(b.numberFilter)({comparatorStyle:{padding:"5px"},numberStyle:{width:"100px",margin:"10px"}}),formatter:D,sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},{dataField:"ETF Trading Spread in $",text:"ETF Trading Spread in $",sort:!0,filter:Object(b.numberFilter)({comparatorStyle:{padding:"5px"},numberStyle:{width:"100px",margin:"10px"}}),formatter:D,sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},{dataField:"Absolute Arbitrage",text:"Absolute Arbitrage",sort:!0,filter:Object(b.numberFilter)({comparatorStyle:{padding:"5px"},numberStyle:{width:"100px",margin:"10px"}}),formatter:D,sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},{dataField:"ETF Price",text:"ETF Price",sort:!0,formatter:D,sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},{dataField:"ETF Change Price %",text:"ETF Change Price %",sort:!0,formatter:D,sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},{dataField:"Net Asset Value Change%",text:"Net Asset Value Change%",sort:!0,formatter:D,sortCaret:function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))}},(t={dataField:"Over Bought/Sold",text:"Over Bought/Sold",sort:!0,formatter:function(e){return B[e]},filter:Object(b.selectFilter)({options:B,style:{width:"100px",margin:"10px"}})},Object(u.a)(t,"formatter",D),Object(u.a)(t,"sortCaret",(function(e,t){return e?"asc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-down"}))):"desc"===e?r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("font",{color:"red"},r.a.createElement("i",{className:"fas fa-sort-up"}))):null:r.a.createElement("span",null,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-sort"}))})),t)],H={parentClassName:"table-primary",renderer:function(e){return r.a.createElement("div",null,r.a.createElement(v.a,{striped:!0,hover:!0,variant:"dark",bsPrefix:"innerTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"cursor-pointer"},"Top"),r.a.createElement("th",null,"ETF Mover"),r.a.createElement("th",null,"Moved By"),r.a.createElement("th",null,"Change in Holding"),r.a.createElement("th",null,"Changed by"))),r.a.createElement("tbody",null,r.a.createElement("tr",{key:"row-expanded-1-"+e.symbol},r.a.createElement("td",null," #1 "),r.a.createElement("td",null,e["ETFMover%1"][0]),r.a.createElement("td",{className:e["ETFMover%1"][1].toFixed(3)<0?"red":"green"},e["ETFMover%1"][1].toFixed(3)),r.a.createElement("td",null,e["Change%1"][0]),r.a.createElement("td",{className:e["ETFMover%1"][1].toFixed(3)<0?"red":"green"},e["Change%1"][1].toFixed(3))),r.a.createElement("tr",{key:"row-expanded-2-"+e.symbol},r.a.createElement("td",null," #2 "),r.a.createElement("td",null,e["ETFMover%2"][0]),r.a.createElement("td",{className:e["ETFMover%2"][1].toFixed(3)<0?"red":"green"},e["ETFMover%2"][1].toFixed(3)),r.a.createElement("td",null,e["Change%2"][0]),r.a.createElement("td",{className:e["Change%2"][1].toFixed(3)<0?"red":"green"},e["Change%2"][1].toFixed(3))),r.a.createElement("tr",{key:"row-expanded-3-"+e.symbol},r.a.createElement("td",null," #3 "),r.a.createElement("td",null,e["ETFMover%3"][0]),r.a.createElement("td",{className:e["ETFMover%3"][1].toFixed(3)<0?"red":"green"},e["ETFMover%3"][1].toFixed(3)),r.a.createElement("td",null,e["Change%3"][0]),r.a.createElement("td",{className:e["Change%3"][1].toFixed(3)<0?"red":"green"},e["Change%3"][1].toFixed(3))),r.a.createElement("tr",{key:"row-expanded-4-"+e.symbol},r.a.createElement("td",null," #4 "),r.a.createElement("td",null,e["ETFMover%4"][0]),r.a.createElement("td",{className:e["ETFMover%4"][1].toFixed(3)<0?"red":"green"},e["ETFMover%4"][1].toFixed(3)),r.a.createElement("td",null,e["Change%4"][0]),r.a.createElement("td",{className:e["Change%4"][1].toFixed(3)<0?"red":"green"},e["Change%4"][1].toFixed(3))),r.a.createElement("tr",{key:"row-expanded-5-"+e.symbol},r.a.createElement("td",null," #5 "),r.a.createElement("td",null,e["ETFMover%5"][0]),r.a.createElement("td",{className:e["ETFMover%5"][1].toFixed(3)<0?"red":"green"},e["ETFMover%5"][1].toFixed(3)),r.a.createElement("td",null,e["Change%5"][0]),r.a.createElement("td",{className:e["Change%5"][1].toFixed(3)<0?"red":"green"},e["Change%5"][1].toFixed(3))))))},showExpandColumn:!0,onExpand:function(e,t,a,n){console.log(e.id),console.log(t),console.log(a),console.log(n)},onExpandAll:function(e,t,a){console.log(e),console.log(t),console.log(a)},expandHeaderColumnRenderer:function(e){return e.isAnyExpands?r.a.createElement("i",{className:"fas fa-caret-down",style:{width:"10px"}}):r.a.createElement("i",{className:"fas fa-caret-right",style:{width:"10px"}})},expandColumnRenderer:function(e){return e.expanded?r.a.createElement("i",{className:"fas fa-caret-down",style:{width:"10px"}}):r.a.createElement("i",{className:"fas fa-caret-right",style:{width:"10px"}})}};return M>=500?r.a.createElement("h3",{style:{color:"red",alignContent:"center"}},"DATA FOR THIS MINUTE WILL BE AVAILABLE AT 8TH SECOND OF THIS MINUTE"):r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("strong",{className:"App-clock text-white"},"Showing Data for : "),r.a.createElement("strong",{style:{color:"red"}},new Date(C).toLocaleTimeString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("strong",{className:"text-white"}," Local Time")),r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("strong",{className:"App-clock text-white"},"Data Fetched at: "),r.a.createElement("strong",{style:{color:"red"}},E.toLocaleString()),r.a.createElement("strong",{className:"text-white"}," Local Time")),r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("strong",{className:"App-clock text-white"},"Current Local time: "),r.a.createElement("strong",{style:{color:"red"}},w.toLocaleString()),r.a.createElement("strong",{className:"text-white"}," Local Time")))),r.a.createElement(x.a,{keyField:"symbol",data:c,bootstrap4:!0,columns:I,striped:!0,hover:!0,size:"lg",classes:"table-dark font-size-sm",expandRow:H,filter:F()()}))}),w=a(40),T=a(99),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={LiveArbitrageAllEtf:""},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement(d.a,null,r.a.createElement(E.a,{xs:12,md:12,lg:12},r.a.createElement(N,{data:this.state.LiveArbitrageAllEtf||[]}))))}}]),a}(r.a.Component),O=Object(w.b)((function(e){return{ETF:e.navbar.ETF}}),null)(y);t.default=function(){return r.a.createElement(l.d,null,r.a.createElement(c.a,{path:"/Live-Arbitrage",component:O}))}}}]);
//# sourceMappingURL=12.f5c87e02.chunk.js.map