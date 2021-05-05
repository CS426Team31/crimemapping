(this["webpackJsonpgo-maps"]=this["webpackJsonpgo-maps"]||[]).push([[0],{112:function(e,t,n){},202:function(e,t,n){},216:function(e,t){},335:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s,o,l=n(2),u=n.n(l),j=n(15),d=n.n(j),b=n(57),h=n(108),p=n.n(h),O=n(179),v=n(88),m=n(67),f=(n(200),n(4)),x=function(e){var t=e.panTo,n=Object(v.a)({requestoptions:{location:{lat:function(){return 39.529633},lng:function(){return-119.813805}},radius:1e5}}),a=n.ready,c=n.value,r=n.suggestions,i=r.status,s=r.data,o=n.setValue,l=n.clearSuggestions;return Object(f.jsx)("div",{className:"search",children:Object(f.jsxs)(m.a,{onSelect:function(){var e=Object(O.a)(p.a.mark((function e(n){var a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(n,!1),l(),e.prev=2,e.next=5,Object(v.b)({address:n});case 5:return a=e.sent,e.next=8,Object(v.c)(a[0]);case 8:c=e.sent,r=c.lat,i=c.lng,t({lat:r,lng:i}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("error!");case 17:console.log(n);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(f.jsx)(m.b,{value:c,onChange:function(e){o(e.target.value)},disabled:!a,placeholder:"Enter a city"}),Object(f.jsx)(m.e,{children:Object(f.jsx)(m.c,{children:"OK"===i&&s.map((function(e){var t=e.id,n=e.description;return Object(f.jsx)(m.d,{value:n},t)}))})})]})})},D=(n(112),n(31)),g=(n(202),function(){return Object(f.jsx)("header",{className:"header",children:Object(f.jsx)("h1",{children:"Crime Rate Mapping"})})}),_=n(50),y=n(51),A=n(86),E=n(181),C=n(106),k=[{title1:"Filters",icon1:Object(f.jsx)(C.a,{}),title2:"Date",icon2:Object(f.jsx)(E.a,{})}],T=n(36),S=n(37),N=n(43),I=n(42),L=(n(203),n(204),n(182)),w=function(e){Object(N.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={startDate:null,endDate:null},a}return Object(S.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{children:Object(f.jsx)(L.DateRangePicker,{startDate:this.state.startDate,startDateId:"your_unique_start_date_id",endDate:this.state.endDate,endDateId:"your_unique_end_date_id",onDatesChange:function(t){var n=t.startDate,a=t.endDate;return e.setState({startDate:n,endDate:a})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},orientation:"vertical",verticalHeight:450,block:!0,isOutsideRange:function(){return!1},daySize:60,showClearDates:!0,minimumNights:0,reopenPickerOnClearDates:!0})})}}]),n}(l.Component),R=n(191),P=[{label:"Arson",value:"arson"},{label:"Assault",value:"assault"},{label:"Burglary",value:"burglary"},{label:"Drug Violation",value:"drug_violation"},{label:"DUI",value:"dui"},{label:"Homicide",value:"homicide"},{label:"Robbery",value:"robbery"},{label:"Sex Crimes",value:"sex_crimes"},{label:"Shoplifting",value:"shoplifting"},{label:"Theft",value:"theft"},{label:"Traffic Incident",value:"traffic_incident"},{label:"Vandalism",value:"vandalism"},{label:"Weapons",value:"weapons"}],B=function(e){Object(N.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedOption:P},e.handleChange=function(t){e.setState({selectedOption:t}),console.log("Option selected:",t)},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state.selectedOption;return Object(f.jsx)(R.a,{value:e,onChange:this.handleChange,options:P,isMulti:!0,closeMenuOnSelect:!1})}}]),n}(l.Component),G=Object(y.a)(D.b)(a||(a=Object(_.a)(["\n  display: flex;\n  color: #e1e9fc;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  list-style: none;\n  height: 60px;\n  text-decoration: none;\n  font-size: 20px;\n  &:hover {\n    background: #252831;\n    border-left: 4px solid #632ce4;\n    cursor: pointer;\n  }\n"]))),F=y.a.span(c||(c=Object(_.a)(["\n  margin-left: 16px;\n"]))),M=function(e){var t=e.item,n=Object(l.useState)(!1),a=Object(b.a)(n,2),c=a[0],r=a[1],i=function(){return r(!c)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(G,{to:t,onClick:t.subNav&&i,children:Object(f.jsxs)("div",{children:[t.icon1,Object(f.jsx)(F,{children:t.title1})]})}),Object(f.jsx)(B,{}),Object(f.jsx)(G,{to:t,onClick:t.subNav&&i,children:Object(f.jsxs)("div",{children:[t.icon2,Object(f.jsx)(F,{children:t.title2})]})}),Object(f.jsx)(w,{})]})},z=n(0),Y=Object(y.a)(D.b)(r||(r=Object(_.a)(["\n  margin-left: 2rem;\n  font-size: 2rem;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]))),W=y.a.nav(i||(i=Object(_.a)(["\n  background: #15171c;\n  opacity: 0.9;\n  width: 350px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: 350ms;\n  z-index: 10;\n"])),(function(e){return e.sidebar?"0":"-100%"})),K=(y.a.button(s||(s=Object(_.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n  font-size: 1em;\n  margin: 2em;\n  margin-left: 4em;\n  padding: 0.25em 1em;\n  border: 2px solid #0096fa;\n  border-radius: 3px;\n"])),(function(e){return e.primary?"#0096FA":"#15171c"}),(function(e){return e.primary,"white"})),y.a.div(o||(o=Object(_.a)(["\n  width: 100%;\n"])))),U=function(){var e=Object(l.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=function(){return a(!n)};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(z.b.Provider,{value:{color:"#0096FA"},children:[Object(f.jsx)(Y,{to:"#",children:Object(f.jsx)(A.a,{onClick:c})}),Object(f.jsx)(W,{sidebar:n,children:Object(f.jsxs)(K,{children:[Object(f.jsx)(Y,{to:"#",children:Object(f.jsx)(A.b,{onClick:c})}),k.map((function(e,t){return Object(f.jsx)(M,{item:e},t)}))]})})]})})};var H=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("nav",{className:"navbar",children:[Object(f.jsx)(U,{}),Object(f.jsx)(g,{}),Object(f.jsxs)("ul",{className:"nav-menu",children:[Object(f.jsx)(D.b,{to:"/",className:"nav-links",children:Object(f.jsx)("li",{className:"nav-item",children:"Home"})}),Object(f.jsx)(D.b,{to:"/About",className:"nav-links",children:Object(f.jsx)("li",{className:"nav-item",children:"About"})}),Object(f.jsx)(D.b,{to:"/Charts",className:"nav-links",children:Object(f.jsx)("li",{className:"nav-item",children:"Charts"})}),Object(f.jsx)(D.b,{to:"/Data",className:"nav-links",children:Object(f.jsx)("li",{className:"nav-item",children:"Data"})})]})]})})},Z=n(19),V=n(185),J=n(186),q=n(89),Q=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(V.a,{children:Object(f.jsxs)(J.a,{children:[Object(f.jsxs)(q.a,{style:{margin:"80px"},children:["//list of team members",Object(f.jsx)("h2",{style:{marginBottom:"40px"},children:"Team 31"}),Object(f.jsx)("ul",{children:"Befiker Beksisa"}),Object(f.jsx)("ul",{children:"Ivan Samuel"}),Object(f.jsx)("ul",{children:"Steven Hernandez"}),Object(f.jsx)("ul",{children:"WaKit Lam"})]}),Object(f.jsxs)(q.a,{style:{margin:"80px"},children:["//list of instructors and advisor",Object(f.jsx)("h2",{style:{marginBottom:"80px"},children:"Instructors & Advisor"}),Object(f.jsx)("ul",{children:"Dr. David Feil-Seifer"}),Object(f.jsx)("ul",{children:"Dr. Devrin Lee"}),Object(f.jsx)("ul",{children:"Dr. Lei Yang"})]}),Object(f.jsxs)(q.a,{style:{margin:"80px"},children:["//a brief project description",Object(f.jsx)("h2",{children:"Project Desciption"}),Object(f.jsx)("p",{style:{margin:"80px"},children:"Avoiding areas that may have a higher possibility of a crime is one of the many concerns a person has when going to a new place. While word of mouth of what areas to avoid or actions not to do can give one a peace of mind, it is really not the same when comparing it to having actual data that can help the person decide if it is safe to go or not. Hence, the goal is a web application that will give the users the chance to look at a certain city to check the type of crimes that happen within. The website will show the type of crimes, when it happened and where it happened on a map. Along with various other filters to help the user get a better picture of the crime. This is intended to help those who are planning to visit a new city they have never been before, people looking at an area\u2019s safety for a potential home, or even help the local emergency service. The website will use information from the local or metropolitan police station to get the most recent data and keep users informed with the latest reports. The project is currently being worked on and is planned to be up and running around April of 2021."})]})]})})})},X=n(44),$=n(25),ee=n(192),te=(n(329),ee.a.initializeApp({apiKey:"AIzaSyCGzcG7VkEY2sDKbvCDrUdmIYrya0Z9GgQ",authDomain:"seniorproj3-bb891.firebaseapp.com",databaseURL:"https://seniorproj3-bb891-default-rtdb.firebaseio.com",projectId:"seniorproj3-bb891",storageBucket:"seniorproj3-bb891.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/crimemapping",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAWYCY1YAhPtTZz92K_biz_cuGwACrlNjU",REACT_APP_FIREBASE_API_KEY:"AIzaSyCGzcG7VkEY2sDKbvCDrUdmIYrya0Z9GgQ",REACT_APP_FIREBASE_AUTH_DOMAIN_KEY:"seniorproj3-bb891.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://seniorproj3-bb891-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"seniorproj3-bb891",REACT_APP_FIREBASE_STORAGE_BUCKET:"seniorproj3-bb891.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"269338562487",REACT_APP_FIREBASE_APP_ID:"1:269338562487:web:9912c7b5542ace3b4c2232",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-55SCE1Z8JN"}).EACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:"1:269338562487:web:9912c7b5542ace3b4c2232",measurementId:"G-55SCE1Z8JN"}).database()),ne=n(90),ae=n.n(ne),ce=n(187),re=n.n(ce),ie=n(188),se=n.n(ie),oe=n(189),le=n.n(oe);ae.a.fcRoot(re.a,se.a,le.a);var ue=[],je=[],de=[],be={type:"column2d",dataFormat:"json",width:"1100",height:"700",dataSource:{chart:{caption:"Crime types and occurrence",xAxisName:"Date",yAxisName:"Crime",theme:"fusion"},data:ue}},he={type:"column2d",dataFormat:"json",width:"1100",height:"700",dataSource:{chart:{caption:"Crime rate per day",xAxisName:"Date",yAxisName:"Rate",theme:"fusion"},data:je}},pe=function(e){Object(N.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).refreshList=a.refreshList.bind(Object($.a)(a)),a.setActiveData=a.setActiveData.bind(Object($.a)(a)),a.onDataChange=a.onDataChange.bind(Object($.a)(a)),a.state={datas:[],chartData:[],dateData:[]},a}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=99099,n=setInterval((function(){te.ref("/".concat(t)).on("value",e.onDataChange),++t>99300&&clearInterval(n)}),40)}},{key:"componentWillUnmount",value:function(){}},{key:"onDataChange",value:function(e){var t=e.val();de.push({key:t.ObjectId,Beat:t.Beat,Disposition:t.Disposition,Event_Date:t.Event_Date,Event_Number:t.Event_Number,General_Location:t.General_Location,LAT:t.LAT,LONG:t.LONG,Type:t.Type,Type_Description:t.Type_Description,WARD:t.WARD}),ue.length<1?ue.push({label:t.Type_Description,value:1}):ue.filter((function(e){return e.label===t.Type_Description})).length>0?ue.filter((function(e){return e.label===t.Type_Description&&(e.value=e.value+1),e})):ue.push({label:t.Type_Description,value:1});var n=t.Event_Date.split(":")[0];je.length<1?je.push({label:n,value:1}):je.filter((function(e){return e.label===n})).length>0?je.filter((function(e){return e.label===n&&(e.value=e.value+1),e})):je.push({label:n,value:1}),this.setState({datas:de,chartData:ue,dateData:je})}},{key:"refreshList",value:function(){this.setState({currentData:null,currentIndex:-1})}},{key:"setActiveData",value:function(e,t){this.setState({currentData:e,currentIndex:t})}},{key:"render",value:function(){var e;return e=this.state.datas.length>99?Object(f.jsxs)("div",{className:"container text-denter",children:[Object(f.jsx)(ae.a,Object(X.a)({},be)),Object(f.jsx)("hr",{}),Object(f.jsx)(ae.a,Object(X.a)({},he))]}):Object(f.jsx)("span",{children:"Loading map..."}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsx)("div",{className:"datamap",children:e})})})}}]),n}(l.Component),Oe=te.ref("/99099"),ve=new(function(){function e(){Object(T.a)(this,e)}return Object(S.a)(e,[{key:"getAll",value:function(){return Oe}},{key:"create",value:function(e){return Oe.push(e)}},{key:"update",value:function(e,t){return Oe.child(e).update(t)}},{key:"delete",value:function(e){return Oe.child(e).remove()}},{key:"deleteAll",value:function(){return Oe.remove()}}]),e}()),me=n(338),fe=function(e){Object(N.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).onChangeBeat=a.onChangeBeat.bind(Object($.a)(a)),a.onChangeEventNumber=a.onChangeEventNumber.bind(Object($.a)(a)),a.updateEventDate=a.updateEventDate.bind(Object($.a)(a)),a.updateData=a.updateData.bind(Object($.a)(a)),a.closeModal=a.closeModal.bind(Object($.a)(a)),a.state={currentData:{key:null,Beat:"",Disposition:"",Event_Date:"",Event_Number:"",General_Location:"",LAT:"",LONG:"",Type:"",Type_Description:"",WARD:0},message:"",visible:!0},a}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.setState({currentData:this.props.data,visible:!0})}},{key:"closeModal",value:function(){this.setState((function(e){return{visible:!1}}))}},{key:"onChangeBeat",value:function(e){var t=e.target.value;this.setState((function(e){return{currentData:Object(X.a)(Object(X.a)({},e.currentData),{},{Beat:t})}}))}},{key:"onChangeEventNumber",value:function(e){var t=e.target.value;this.setState((function(e){return{currentData:Object(X.a)(Object(X.a)({},e.currentData),{},{Event_Number:t})}}))}},{key:"updateEventDate",value:function(e){var t=this;ve.update(this.state.currentData.key,{Event_Date:e}).then((function(){t.setState((function(t){return{currentData:Object(X.a)(Object(X.a)({},t.currentData),{},{Event_Date:e}),message:"The status was updated successfully!"}}))})).catch((function(e){console.log(e)}))}},{key:"updateData",value:function(){var e=this,t={Beat:this.state.currentData.Beat,Event_Number:this.state.currentData.Event_Number};ve.update(this.state.currentData.key,t).then((function(){e.setState({message:"The data was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentData,a=t.visible;return Object(f.jsx)("div",{children:n?Object(f.jsxs)(me.a,{show:a,backdrop:"static",keyboard:!0,onClick:function(){return e.closeModal()},children:[Object(f.jsx)(me.a.Header,{closeButton:!0,children:Object(f.jsx)(me.a.Title,{children:"Crime Info"})}),Object(f.jsxs)(me.a.Body,{children:[Object(f.jsx)("p",{children:n.Type_Description}),Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:n.Event_Number})})]}),Object(f.jsxs)(me.a.Footer,{children:[Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:n.Event_Date})}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:Object(f.jsx)("em",{children:n.General_Location})})]})]}):Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Please click on a Data..."})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.data;return t.currentData.key!==n.key?{currentData:n,message:"",visible:!0}:t.currentData}}]),n}(l.Component),xe=[],De=[],ge=function(e){Object(N.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).refreshList=a.refreshList.bind(Object($.a)(a)),a.setActiveData=a.setActiveData.bind(Object($.a)(a)),a.onDataChange=a.onDataChange.bind(Object($.a)(a)),a.state={datas:[],markers:[],currentData:null,currentIndex:-1},a}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=99099,n=setInterval((function(){te.ref("/".concat(t)).on("value",e.onDataChange),++t>99300&&clearInterval(n)}),40)}},{key:"componentWillUnmount",value:function(){}},{key:"onDataChange",value:function(e){var t=e.val();xe.push({key:t.ObjectId,Beat:t.Beat,Disposition:t.Disposition,Event_Date:t.Event_Date,Event_Number:t.Event_Number,General_Location:t.General_Location,LAT:t.LAT,LONG:t.LONG,Map_X:t.Map_X,Map_Y:t.Map_Y,New_Y:t.New_Y,ObjectId:t.ObjectId,Type:t.Type,Type_Description:t.Type_Description,WARD:t.WARD}),De.push([t.LAT,t.LONG]),this.setState({datas:xe,markers:De})}},{key:"refreshList",value:function(){this.setState({currentData:null,currentIndex:-1})}},{key:"setActiveData",value:function(e,t){this.setState({currentData:e,currentIndex:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.datas,a=t.currentData,c=t.currentIndex;return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Beat "}),Object(f.jsx)("th",{children:"Disposition"}),Object(f.jsx)("th",{children:"Event_Date"}),Object(f.jsx)("th",{children:"Event_Number"}),Object(f.jsx)("th",{children:"General_Location"}),Object(f.jsx)("th",{children:"LAT"}),Object(f.jsx)("th",{children:"LONG"}),Object(f.jsx)("th",{children:"Type "}),Object(f.jsx)("th",{children:"Type_Description"}),Object(f.jsx)("th",{children:"WARD "})]})}),Object(f.jsx)("tbody",{children:n&&n.map((function(t,n){return Object(f.jsxs)("tr",{className:"item "+(n===c?"active":""),onClick:function(){return e.setActiveData(t,n)},children:[Object(f.jsx)("td",{children:t.Beat}),Object(f.jsx)("td",{children:t.Disposition}),Object(f.jsx)("td",{children:t.Event_Date}),Object(f.jsx)("td",{children:t.Event_Number}),Object(f.jsx)("td",{children:t.General_Location}),Object(f.jsx)("td",{children:t.LAT}),Object(f.jsx)("td",{children:t.LONG}),Object(f.jsx)("td",{children:t.Type}),Object(f.jsx)("td",{children:t.Type_Description}),Object(f.jsx)("td",{children:t.WARD})]},n)}))})]})})}),Object(f.jsx)("div",{className:"col-md-6",children:a?Object(f.jsx)(fe,{data:a,refreshList:this.refreshList}):Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Please click on a Data..."})]})})]})}}]),n}(l.Component),_e=n(74),ye=["places"],Ae={width:"100vw",height:"91vh"},Ee={lat:39.529633,lng:-119.813805},Ce={disableDefaultUI:!0,zoomControl:!0},ke=te.ref().limitToFirst(1e3),Te=function(){var e=Object(_e.d)({googleMapsApiKey:"AIzaSyAWYCY1YAhPtTZz92K_biz_cuGwACrlNjU",libraries:ye}),t=e.isLoaded,n=e.loadError,a=u.a.useRef(),c=u.a.useCallback((function(e){a.current=e}),[]),r=u.a.useCallback((function(e){var t=e.lat,n=e.lng;a.current.panTo({lat:t,lng:n}),a.current.setZoom(13)}),[]),i=Object(l.useState)([]),s=Object(b.a)(i,2),o=s[0],j=s[1];Object(l.useEffect)((function(){ke.on("value",(function(e){var t=e.val();j(t)}))}),[]);var d=Object(l.useState)({}),h=Object(b.a)(d,2),p=h[0],O=h[1];return n?"Error loading maps":t?Object(f.jsx)(D.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(H,{}),Object(f.jsxs)(Z.c,{children:[Object(f.jsxs)(Z.a,{exact:!0,path:"/",children:[Object(f.jsx)(x,{panTo:r}),Object(f.jsxs)(_e.a,{mapContainerStyle:Ae,zoom:13,center:Ee,options:Ce,onLoad:c,children:[o.map((function(e){return Object(f.jsx)(_e.c,{position:{lat:parseFloat(e.LAT),lng:parseFloat(e.LONG)},onClick:function(){O(e)}},e.ObjectId)})),p.markers&&Object(f.jsx)(_e.b,{position:p.markers,clickable:!0,onCloseClick:function(){return O({})},children:Object(f.jsxs)("p",{children:[o.Type_Description,o.General_Location]})})]})]}),Object(f.jsx)(Z.a,{exact:!0,path:"/About",component:Q}),Object(f.jsx)(Z.a,{exact:!0,path:"/Charts",component:pe}),Object(f.jsx)(Z.a,{exact:!0,path:"/Data",component:ge})]})]})}):"Loading Maps"},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,339)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};d.a.render(Object(f.jsx)(D.a,{children:Object(f.jsx)(Te,{})}),document.getElementById("root")),Se()}},[[335,1,2]]]);
//# sourceMappingURL=main.336010c3.chunk.js.map