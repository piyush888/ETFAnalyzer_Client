(this.webpackJsonpwebapplication=this.webpackJsonpwebapplication||[]).push([[8],{298:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i={fontSize:"14px"},c=function(){return r.a.createElement("div",{className:"loader center"},r.a.createElement("i",{className:"fa fa-spinner fa-spin",style:i}))}},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(25),r=a(93),i=a(94),c=a(96),l=a(95),s=a(18),o=a(0),d=a.n(o),u=a(301),m=function(e){var t=Math.PI/180,a=e.cx,n=e.cy,r=e.midAngle,i=e.innerRadius,c=e.outerRadius,l=e.startAngle,s=e.endAngle,o=e.fill,m=e.payload,h=e.value,E=Math.sin(-t*r),g=Math.cos(-t*r),p=a+(c+10)*g,f=n+(c+10)*E,v=a+(c+30)*g,b=n+(c+30)*E,y=v+22*(g>=0?1:-1),C=b,S=g>=0?"start":"end";return d.a.createElement("g",null,d.a.createElement("text",{x:a,y:n,dy:8,textAnchor:"middle",fill:o},m.name),d.a.createElement(u.l,{cx:a,cy:n,innerRadius:i,outerRadius:c,startAngle:l,endAngle:s,fill:o}),d.a.createElement(u.l,{cx:a,cy:n,startAngle:l,endAngle:s,innerRadius:c+6,outerRadius:c+10,fill:o}),d.a.createElement("path",{d:"M".concat(p,",").concat(f,"L").concat(v,",").concat(b,"L").concat(y,",").concat(C),stroke:o,fill:"none"}),d.a.createElement("circle",{cx:y,cy:C,r:2,fill:o,stroke:"none"}),d.a.createElement("text",{x:y+12*(g>=0?1:-1),y:C,textAnchor:S,fill:"#333"},"".concat(h)))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=[];return Object.entries(e).forEach((function(e){var n=Object(s.a)(e,2),r=n[0],i=n[1];return a.push({name:r,value:i[t]})})),a},E=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={data:[],chartname:"",activeIndex:0,COLORS:["#0088FE","#00C49F","#FFBB28","#FF8042"]},e.onPieEnter=function(t,a){e.setState({activeIndex:a})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.data,r=t.element;if(a!==e.data&&"object"===typeof a){var i=h(a,r);this.setState(Object(n.a)(Object(n.a)({},this.state),{},{data:i}))}}},{key:"componentDidMount",value:function(){if("object"===typeof this.props.data){var e=h(this.props.data,this.props.element);this.setState(Object(n.a)(Object(n.a)({},this.state),{},{data:e}))}}},{key:"render",value:function(){var e=this;return d.a.createElement(u.h,{width:350,height:300},d.a.createElement(u.g,{activeIndex:this.state.activeIndex,activeShape:m,data:this.state.data,cx:175,cy:150,innerRadius:25,outerRadius:90,fill:"#8884d8",dataKey:"value",onMouseEnter:this.onPieEnter},this.state.data.map((function(t,a){return d.a.createElement(u.c,{key:a,fill:e.state.COLORS[a%e.state.COLORS.length]})}))))}}]),a}(o.PureComponent)},413:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(282),c=(a(414),"test".constructor),l=[].constructor,s={}.constructor;function o(e){return null===e?"null":void 0===e?"undefined":e.constructor===c?"String":e.constructor===l?"Array":e.constructor===s?"Object":"don't know"}var d=function(e){return"Object"!==o(e.data)?r.a.createElement("tr",null,r.a.createElement("td",{className:"Main"},e.k),r.a.createElement("td",null,e.data)):r.a.createElement("tr",null,r.a.createElement("td",{className:"Main"},e.k),Object.keys(e.data).map((function(t,a){return r.a.createElement("td",{key:a},e.data[t])})))},u=function(e){return"Object"!==o(e.data)?r.a.createElement("tr",null,r.a.createElement("td",{className:"Main"},e.k),r.a.createElement("td",null,e.data)):r.a.createElement("tr",{onClick:function(){return e.submitFn(e.k)}},r.a.createElement("td",{className:"Main"},e.k),Object.keys(e.data).map((function(t,a){return r.a.createElement("td",{key:a},e.data[t])})))};t.a=function(e){var t=function(e){return Object.keys(e)},a=t(e.data);return r.a.createElement("div",{className:"Table"},r.a.createElement(i.a,{size:"sm",striped:!0,bordered:!0,hover:!0,variant:"dark",style:{fontSize:"13px"}},r.a.createElement("thead",{className:"TableHead"},r.a.createElement("tr",null,function(){var n="Object"===o(e.data[a[0]])?t(e.data[a[0]]):[];return n.unshift(""),n.map((function(e,t){return r.a.createElement("th",{key:e},e)}))}())),r.a.createElement("tbody",null,a.map((function(t,a){var n=typeof e.data[t]==Object?e.data[t].values():e.data[t];return"True"==e.clickableTable?r.a.createElement(u,{k:t,key:a,data:n,submitFn:e.submitFn}):r.a.createElement(d,{k:t,key:a,data:n})})))))}},414:function(e,t,a){},415:function(e,t,a){"use strict";var n=a(18),r=a(0),i=a.n(r),c=a(261),l=a(899),s=a(355),o=a(99),d=a(291),u=a(331);t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),m=a[0],h=a[1],E=function(){return h(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{variant:"warning",size:"sm",onClick:function(){return h(!0)}},"Etf Movers"),i.a.createElement(l.a,{dialogClassName:"my-modal",show:m,onHide:E},i.a.createElement(l.a.Header,{closeButton:!0},i.a.createElement(l.a.Title,null,"Underlying Holdings")),i.a.createElement(l.a.Body,null,i.a.createElement(s.a,null,i.a.createElement(o.a,{xs:12,md:12},i.a.createElement(d.a,null,i.a.createElement(d.a.Header,{className:"CustomCardHeader text-white CustomBackGroundColor"},"Holdings"),i.a.createElement(d.a.Body,{className:"CustomCardBody text-white"},i.a.createElement(s.a,null,i.a.createElement(o.a,{xs:12,md:6},i.a.createElement("center",null,i.a.createElement("h5",null,"Etf Movers")),i.a.createElement(u.a,{data:e.etfmoversDictCount,element:"Count"})),i.a.createElement(o.a,{xs:12,md:6},i.a.createElement("center",null,i.a.createElement("h5",null,"Market Movers")),i.a.createElement(u.a,{data:e.highestChangeDictCount,element:"Count"})))))))),i.a.createElement(l.a.Footer,null,i.a.createElement(c.a,{variant:"secondary",onClick:E},"Close"))))}},416:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(301);t.a=function(e){var t=e.data;return r.a.createElement(i.i,{width:"100%",height:280,padding:{top:0,right:0,left:0,bottom:0}},r.a.createElement(i.f,{data:t},r.a.createElement(i.n,{className:"recharts-cartesian-axis-tick",dataKey:"Time"}),r.a.createElement(i.o,{className:"recharts-cartesian-axis-tick"}),r.a.createElement(i.m,null),r.a.createElement(i.d,null),r.a.createElement(i.a,{dataKey:"Time",height:30,stroke:"#8884d8"}),r.a.createElement(i.e,{type:"monotone",dataKey:"Arbitrage in $",stroke:"#8884d8",dot:!1})))}},417:function(e,t,a){"use strict";var n=a(93),r=a(94),i=a(96),c=a(95),l=a(0),s=a.n(l),o=a(301),d=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(o.k,{width:550,height:260},s.a.createElement(o.b,null),s.a.createElement(o.n,{stroke:"#58FF33",dataKey:"Net Asset Value Change%",type:"number",name:"Net Asset Value Chage %",unit:"%"}),s.a.createElement(o.o,{stroke:"#58FF33",dataKey:"ETF Change Price %",type:"number",name:"ETF Change Price %",unit:"%"}),s.a.createElement(o.j,{name:"A school",data:this.props.data,fill:"#3336FF"}),s.a.createElement(o.m,{cursor:{strokeDasharray:"3 3"}}))}}]),a}(s.a.Component);t.a=d},423:function(e,t,a){"use strict";var n=a(93),r=a(94),i=a(96),c=a(95),l=a(0),s=a.n(l),o=(a(16),a(350)),d=a(294),u=a(525),m=a(500),h=a(506),E=a(508),g=a(509),p=a(512),f=a(513),v=a(362),b=a(516),y={stroke:{macd:"#FF0000",signal:"#00F300"},fill:{divergence:"#4682B4"}},C={textFill:"#542605",stroke:"#05233B",strokeOpacity:1,strokeWidth:3,arrowWidth:5,fill:"#BCDEFA"},S=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.data,n=e.width,r=e.ratio,i=Object(f.ema)().id(0).options({windowSize:26}).merge((function(e,t){e.ema26=t})).accessor((function(e){return e.ema26})),c=Object(f.ema)().id(1).options({windowSize:12}).merge((function(e,t){e.ema12=t})).accessor((function(e){return e.ema12})),l=Object(f.macd)().options({fast:12,slow:26,signal:9}).merge((function(e,t){e.macd=t})).accessor((function(e){return e.macd})),v=Object(f.sma)().id(3).options({windowSize:50,sourcePath:"volume"}).merge((function(e,t){e.smaVolume50=t})).accessor((function(e){return e.smaVolume50})),S=v(l(c(i(a)))),k=g.discontinuousTimeScaleProvider.inputDateAccessor((function(e){return e.date}))(S),A=k.data,O=k.xScale,F=k.xAccessor,x=k.displayXAccessor;return s.a.createElement(u.b,{height:600,width:n,ratio:r,margin:{left:70,right:70,top:20,bottom:30},type:t,seriesName:"MSFT",data:A,xScale:O,xAccessor:F,displayXAccessor:x},s.a.createElement(u.a,{id:1,height:400,yExtents:[function(e){return[e.high,e.low]},i.accessor(),c.accessor()],padding:{top:10,bottom:20}},s.a.createElement(h.XAxis,{axisAt:"bottom",orient:"bottom",showTicks:!1,outerTickSize:0}),s.a.createElement(h.YAxis,{axisAt:"right",orient:"right",ticks:5}),s.a.createElement(E.MouseCoordinateY,Object.assign({at:"right",orient:"right",displayFormat:Object(o.b)(".2f")},C)),s.a.createElement(m.CandlestickSeries,null),s.a.createElement(m.LineSeries,{yAccessor:i.accessor(),stroke:i.stroke()}),s.a.createElement(m.LineSeries,{yAccessor:c.accessor(),stroke:c.stroke()}),s.a.createElement(E.CurrentCoordinate,{yAccessor:i.accessor(),fill:i.stroke()}),s.a.createElement(E.CurrentCoordinate,{yAccessor:c.accessor(),fill:c.stroke()}),s.a.createElement(E.EdgeIndicator,{itemType:"last",orient:"right",edgeAt:"right",yAccessor:function(e){return e.close},fill:function(e){return e.close>e.open?"#A2F5BF":"#F9ACAA"},stroke:function(e){return e.close>e.open?"#0B4228":"#6A1B19"},textFill:function(e){return e.close>e.open?"#0B4228":"#420806"},strokeOpacity:1,strokeWidth:3,arrowWidth:2}),s.a.createElement(p.OHLCTooltip,{origin:[-40,0]}),s.a.createElement(p.MovingAverageTooltip,{onClick:function(e){return console.log(e)},origin:[-38,15],options:[{yAccessor:i.accessor(),type:"EMA",stroke:i.stroke(),windowSize:i.options().windowSize},{yAccessor:c.accessor(),type:"EMA",stroke:c.stroke(),windowSize:c.options().windowSize}]}),s.a.createElement(b.Annotate,{with:b.LabelAnnotation,when:function(e){return"Over Sold"===e["Over Bought/Sold"]},usingProps:{fontFamily:"Glyphicons Halflings",fontSize:22,fill:"green",opacity:.8,text:"\u21d1",y:function(e){return(0,e.yScale)(e.datum.low)}}}),s.a.createElement(b.Annotate,{with:b.LabelAnnotation,when:function(e){return"Over Bought"===e["Over Bought/Sold"]},usingProps:{fontFamily:"Glyphicons Halflings",fontSize:22,fill:"red",opacity:.8,text:"\u21d3",y:function(e){return(0,e.yScale)(e.datum.high)}}})),s.a.createElement(u.a,{id:2,height:150,yExtents:[function(e){return e.volume},v.accessor()],origin:function(e,t){return[0,t-300]}},s.a.createElement(h.YAxis,{axisAt:"left",orient:"left",ticks:5,tickFormat:Object(o.b)(".2s")}),s.a.createElement(E.MouseCoordinateY,Object.assign({at:"left",orient:"left",displayFormat:Object(o.b)(".4s")},C)),s.a.createElement(m.BarSeries,{yAccessor:function(e){return e.volume},fill:function(e){return e.close>e.open?"#6BA583":"#FF0000"}}),s.a.createElement(m.AreaSeries,{yAccessor:v.accessor(),stroke:v.stroke(),fill:v.fill()})),s.a.createElement(u.a,{id:3,height:150,yExtents:l.accessor(),origin:function(e,t){return[0,t-150]},padding:{top:10,bottom:10}},s.a.createElement(h.XAxis,{axisAt:"bottom",orient:"bottom"}),s.a.createElement(h.YAxis,{axisAt:"right",orient:"right",ticks:2}),s.a.createElement(E.MouseCoordinateX,Object.assign({at:"bottom",orient:"bottom",displayFormat:Object(d.b)("%Y-%m-%d"),rectRadius:5},C)),s.a.createElement(E.MouseCoordinateY,Object.assign({at:"right",orient:"right",displayFormat:Object(o.b)(".2f")},C)),s.a.createElement(m.MACDSeries,Object.assign({yAccessor:function(e){return e.macd}},y)),s.a.createElement(p.MACDTooltip,{origin:[-38,15],yAccessor:function(e){return e.macd},options:l.options(),appearance:y})),s.a.createElement(E.CrossHairCursor,{stroke:"#FFFFFF"}))}}]),a}(s.a.Component);S.defaultProps={type:"svg"};var k=S=Object(v.fitWidth)(S),A=a(101);!function(e){var t=function(t){Object(i.a)(l,t);var a=Object(c.a)(l);function l(e){var t;return Object(n.a)(this,l),(t=a.call(this,e)).state={length:130,data:t.props.data.slice(0,130)},t.speed=1e3,t.onKeyPress=t.onKeyPress.bind(Object(A.a)(t)),t}return Object(r.a)(l,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.onKeyPress)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval),document.removeEventListener("keyup",this.onKeyPress)}},{key:"onKeyPress",value:function(e){var t=this,a=e.which;switch(console.log(a),a){case 50:this.func=function(){t.state.length<t.props.data.length&&t.setState({length:t.state.length+1,data:t.props.data.slice(0,t.state.length+1)})};break;case 80:case 49:this.func=function(){t.state.length<t.props.data.length&&t.setState({length:t.state.length+1,data:t.props.data.slice(0,t.state.length+1)})};break;case 27:this.func=null,this.interval&&clearInterval(this.interval);break;case 107:this.speed=Math.max(this.speed/2,50);break;case 109:case 189:var n=Math.min(this.speed,1e3);this.speed=this.speed+n}this.func&&(this.interval&&clearInterval(this.interval),console.log("this.speed  = ",this.speed),this.interval=setInterval(this.func,this.speed))}},{key:"render",value:function(){var t=this.props.type,a=this.state.data;return s.a.createElement(e,{ref:"component",data:a,type:t})}}]),l}(s.a.Component);t.defaultProps={type:"svg"},t.displayName="updatingDataWrapper(".concat(function(e){return e.displayName||e.name||"ChartComponent"}(e),")")}(k);var O=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={data:e.props.data,didupdate:!1},e}return Object(r.a)(a,[{key:"shouldComponentUpdate",value:function(e){if(e.data.data!==this.state.data&&void 0!==e.data.data){var t=this.state.data;return t=e.data.data,this.setState({data:t,didupdate:!0}),!0}return!1}},{key:"render",value:function(){return""==this.state.data?s.a.createElement("div",null,"Loading..."):this.state.didupdate?(console.log(this.state.data),s.a.createElement(k,{data:this.state.data})):void 0}}]),a}(s.a.Component);t.a=O},518:function(e,t,a){},902:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),c=a(48),l=a(25),s=a(93),o=a(94),d=a(96),u=a(95),m=a(355),h=a(99),E=a(37),g=a.n(E),p=a(905),f=a(294),v=a(291),b=a(423),y=a(413),C=(a(518),function(e){return r.a.createElement(v.a,{className:"CustomCard"},r.a.createElement(v.a.Header,{className:"CustomCardHeader text-white"},r.a.createElement("span",{className:"h4 pull-left pr-2"}),"H: ",r.a.createElement("span",{className:"text-muted"},e.HighPrice," "),"O: ",r.a.createElement("span",{className:"text-muted"},e.OpenPrice," "),"C: ",r.a.createElement("span",{className:"text-muted"},e.ClosePrice," "),"L: ",r.a.createElement("span",{className:"text-muted"},e.LowPrice," "),r.a.createElement("div",null,"Time: ",r.a.createElement("span",{className:"text-muted"},e.CurrentTime))),r.a.createElement(v.a.Body,{className:"CustomCardBody text-white"},r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("span",{className:e.LiveColor},"ETF Status: ",e.ETFStatus))),r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("span",{className:e.LiveColor},"Signal: ",e.Signal))),r.a.createElement("div",null,r.a.createElement("span",{className:e.LiveColor},"Strength: ",e.SignalStrength)),r.a.createElement("div",null,r.a.createElement("span",{className:""},"$ Arbitrage: ",e.LiveArbitrage)),r.a.createElement("div",null,r.a.createElement("span",{className:""},"$ Spread: ",e.LiveSpread))))}),S=a(415),k=a(282),A={fontSize:"13px"},O=function(e){if(void 0==e.data["Arbitrage in $"])return"Loading";return r.a.createElement("div",{className:"Table"},r.a.createElement(k.a,{size:"sm",striped:!0,bordered:!0,hover:!0,variant:"dark",style:A},r.a.createElement("thead",{className:"TableHead"},r.a.createElement("tr",null,r.a.createElement("td",null,"Time"),r.a.createElement("td",null,"$Arbitrage"),r.a.createElement("td",null,"$Spread"),r.a.createElement("td",null,"$Absolute Arbitrage"),r.a.createElement("td",null,"Over Bought/Sold"),r.a.createElement("td",null,"Price"),r.a.createElement("td",null,"T"),r.a.createElement("td",null,"TickVolume"),r.a.createElement("th",null,"Etf Mover"),r.a.createElement("th",null,"Most Change%"))),r.a.createElement("tbody",null,function(){var t;return(t=e.data.Time,Object.keys(t)).reverse().map((function(t,a){var n="";return n="Over Bought"==e.data["Over Bought/Sold"][t]?"green":"Over Sold"==e.data["Over Bought/Sold"][t]?"red":"",r.a.createElement("tr",{key:a},r.a.createElement("td",{className:n},e.data.Time[t]),r.a.createElement("td",{className:n},e.data["Arbitrage in $"][t]),r.a.createElement("td",{className:n},e.data["ETF Trading Spread in $"][t]),r.a.createElement("td",{className:n},e.data["Magnitude of Arbitrage"][t]),r.a.createElement("td",{className:n},e.data["Over Bought/Sold"][t]),r.a.createElement("td",null,e.data.Price[t]),r.a.createElement("td",null,e.data["ETF Change Price %"][t]),r.a.createElement("td",null,e.data.TickVolume[t]),r.a.createElement("td",null,e.data["ETFMover%1_ticker"][t]),r.a.createElement("td",null,e.data["Change%1_ticker"][t]))}))}())))},F=a(416),x=a(298),j=a(417),T=a(98),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={Full_Day_Arbitrage_Data:{},Full_Day_Prices:"",scatterPlotData:"",LiveArbitrage:"",LiveSpread:"",LiveVWPrice:"",OpenPrice:"",ClosePrice:"",HighPrice:"",LowPrice:"",parseDate:Object(f.c)("%Y-%m-%d %H:%M:%S"),CurrentTime:"",ETFStatus:"",Signal:"",SignalStrength:"",pnlstatementforday:"",LiveColor:"",ArbitrageLineChart:"",etfmoversDictCount:"",highestChangeDictCount:"",isLoading:!0},e.dataFetchInterval=function(){return setInterval((function(){8==(new Date).getSeconds()&&(e.UpdateArbitragDataTables(!0),e.fetchETFLiveData())}),1e3)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.isLoading=!0,this.fetchETFLiveData(),this.UpdateArbitragDataTables(!1),this.intervalId=this.dataFetchInterval()}},{key:"componentDidUpdate",value:function(e){e.match.params.ETF!==this.props.match.params.ETF&&(this.state.isLoading=!0,clearInterval(this.intervalId),this.fetchETFLiveData(),this.UpdateArbitragDataTables(!1),this.intervalId=this.dataFetchInterval())}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"fetchETFLiveData",value:function(){var e=this,t=this.props.match.params.ETF;t&&g.a.get("/api/ETfLiveArbitrage/Single/".concat(t)).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{Full_Day_Arbitrage_Data:JSON.parse(t.data.Arbitrage),Full_Day_Prices:{data:Object(p.a)(t.data.Prices,e.parseData(e.state.parseDate))},pnlstatementforday:r.a.createElement(y.a,{data:JSON.parse(t.data.pnlstatementforday)}),SignalCategorization:r.a.createElement(y.a,{data:JSON.parse(t.data.SignalCategorization)}),scatterPlotData:r.a.createElement(j.a,{data:JSON.parse(t.data.scatterPlotData)}),ArbitrageLineChart:t.data.ArbitrageLineChart,etfmoversDictCount:JSON.parse(t.data.etfmoversDictCount),highestChangeDictCount:JSON.parse(t.data.highestChangeDictCount),isLoading:!1}))})).catch((function(e){return console.log(e)}))}},{key:"UpdateArbitragDataTables",value:function(){var e=this,t=this.props.match.params.ETF;t&&g.a.get("/api/ETfLiveArbitrage/Single/UpdateTable/".concat(t)).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{LiveArbitrage:t.data.Arbitrage["Arbitrage in $"][0],LiveSpread:t.data.Arbitrage["ETF Trading Spread in $"][0],CurrentTime:t.data.Arbitrage.Time[0],LiveVWPrice:t.data.Prices.VWPrice[0],OpenPrice:t.data.Prices.open[0],ClosePrice:t.data.Prices.close[0],HighPrice:t.data.Prices.high[0],LowPrice:t.data.Prices.low[0],ETFStatus:t.data.SignalInfo.ETFStatus,Signal:t.data.SignalInfo.Signal,SignalStrength:t.data.SignalInfo.Strength,LiveColor:t.data.Arbitrage["Arbitrage in $"][0]<0?"text-success":0==t.data.Arbitrage["Arbitrage in $"][0]?"text-muted":"text-danger"}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.match.params.ETF,t=this.state,a=t.HighPrice,n=t.OpenPrice,i=t.ClosePrice,c=t.LowPrice,l=t.SignalStrength,s=t.CurrentTime,o=t.ETFStatus,d=t.Signal,u=t.LiveArbitrage,E=t.LiveSpread,g=t.LiveColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement(m.a,null,r.a.createElement(h.a,{xs:12,md:5},r.a.createElement(v.a,null,r.a.createElement(v.a.Header,{className:"text-white bg-color-dark flex-row"},"Live Arbitrage ",e,r.a.createElement("div",{className:"margin-left-auto"},r.a.createElement(S.a,{etfmoversDictCount:this.state.etfmoversDictCount,highestChangeDictCount:this.state.highestChangeDictCount}))),r.a.createElement(v.a.Body,{className:"BlackHeaderForModal"},this.state.isLoading?r.a.createElement(x.a,null):r.a.createElement("div",{className:"FullPageDiv"},r.a.createElement(O,{data:this.state.Full_Day_Arbitrage_Data}))))),r.a.createElement(h.a,{xs:12,md:3},r.a.createElement(m.a,null,r.a.createElement(h.a,{xs:12,md:12},r.a.createElement(C,{HighPrice:a,OpenPrice:n,ClosePrice:i,LowPrice:c,SignalStrength:l,CurrentTime:s,ETFStatus:o,Signal:d,LiveArbitrage:u,LiveSpread:E,LiveColor:g})),r.a.createElement(h.a,{xs:12,md:12},r.a.createElement(v.a,{className:"CustomCard"},r.a.createElement(v.a.Header,{className:"CustomCardHeader text-white"},"Arb Time Series"),this.state.isLoading?r.a.createElement(x.a,null):r.a.createElement(v.a.Body,{className:"CustomCardBody text-white"},r.a.createElement(F.a,{data:this.state.ArbitrageLineChart})))),r.a.createElement(h.a,{xs:12,md:12},r.a.createElement(v.a,{className:"CustomCard"},r.a.createElement(v.a.Header,{className:"CustomCardHeader text-white"},"Signal Performace"),this.state.isLoading?r.a.createElement(x.a,null):r.a.createElement(v.a.Body,{className:"CustomCardBody text-white"},this.state.pnlstatementforday))),r.a.createElement(h.a,{xs:12,md:12},r.a.createElement(v.a,{className:"CustomCard"},r.a.createElement(v.a.Header,{className:"CustomCardHeader text-white"},"Signal Stats"),this.state.isLoading?r.a.createElement(x.a,null):r.a.createElement(v.a.Body,{className:"CustomCardBody text-white"},this.state.SignalCategorization))))),r.a.createElement(h.a,{xs:12,md:4},r.a.createElement("div",{className:"DescriptionTable3"},r.a.createElement(v.a,null,r.a.createElement(v.a.Header,{className:"modalCustomHeader text-white CustomBackGroundColor"},"Price Chart"),r.a.createElement(v.a.Body,{className:"BlackHeaderForModal"},r.a.createElement(b.a,{data:this.state.Full_Day_Prices})))),r.a.createElement(v.a,{className:"CustomCard"},r.a.createElement(v.a.Header,{className:"CustomCardHeader text-white"},"ETF Change % Vs NAV change %"),this.state.isLoading?r.a.createElement(x.a,null):r.a.createElement(v.a.Body,{className:"CustomCardBody text-white"},this.state.scatterPlotData)))))}},{key:"parseData",value:function(e){return function(t){return t.date=e(t.date),t.open=+parseFloat(t.open),t.high=+parseFloat(t.high),t.low=+parseFloat(t.low),t.close=+parseFloat(t.close),t.volume=+parseInt(t.TickVolume),t}}}]),a}(r.a.Component),N=a(40);t.default=function(){var e=Object(N.d)((function(e){return e.navbar})).ETF;return r.a.createElement(i.d,null,r.a.createElement(c.a,{path:"/live-arbitrage-single/:ETF",component:w}),r.a.createElement(i.a,{from:"/live-arbitrage-single",to:"/live-arbitrage-single/".concat(e)}))}}}]);
//# sourceMappingURL=8.a2d4f92d.chunk.js.map