(this.webpackJsonpcatalog=this.webpackJsonpcatalog||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t),c.d(t,"Context",(function(){return I}));var n=c(1),i=c(8),s=c.n(i),a=(c(31),c(32),c(5)),r=c(26),d=c(10),u=c(0),l=Object(n.memo)((function(e){var t=e.brand,c=e.checkedBrand;return Object(u.jsxs)("div",{className:"brand",children:[Object(u.jsx)("input",{onClick:function(e){return c(e,t.id)},type:"checkbox",id:"checkbox-id"}),Object(u.jsx)("label",{htmlFor:"checkbox-id"}),t.name]})})),j=Object(d.a)((function(){var e=Object(n.useContext)(I).device,t=Object(n.useState)(e.price),c=Object(r.a)(t,2),i=c[0],s=c[1],d=Object(n.useCallback)((function(t,c){t.target.checked?e.setSelectedBrandId(c):e.delSelectedBrandId(c)}),[]);return Object(u.jsxs)("div",{className:"typeBar",children:[Object(u.jsxs)("div",{className:"count_device",children:["\u0422\u043e\u0432\u0430\u0440\u043e\u0432 ",e.devices.length]}),Object(u.jsx)("h1",{className:"type_device",children:"\u041a\u0430\u043c\u0435\u0440\u044b"}),Object(u.jsx)("h2",{className:"price",children:"\u0426\u0435\u043d\u0430, \u20bd"}),Object(u.jsxs)("div",{className:"inputBlock",children:[Object(u.jsx)("input",{type:"text",value:i.min,onChange:function(e){return s(Object(a.a)(Object(a.a)({},i),{},{min:e.target.value}))},onBlur:function(){return e.setPrice(i)}}),Object(u.jsx)("input",{type:"text",value:i.max,onChange:function(e){return s(Object(a.a)(Object(a.a)({},i),{},{max:e.target.value}))},onBlur:function(){return e.setPrice(i)}})]}),Object(u.jsx)("h2",{className:"brand_name",children:"\u0411\u0440\u044d\u043d\u0434"}),e.brands.map((function(e){return Object(u.jsx)(l,{brand:e,checkedBrand:d},e.id)}))]})})),b=Object(n.memo)((function(e){var t=e.device;return Object(u.jsxs)("div",{className:"device",children:[Object(u.jsxs)("div",{className:"device_photo",children:[Object(u.jsx)("img",{src:t.image.desktop.x1,alt:""}),t.is_new&&Object(u.jsx)("span",{className:"device_newDevice",children:"\u043d\u043e\u0432\u0438\u043d\u043a\u0430"})]}),Object(u.jsxs)("div",{className:"device_wrapper",children:[Object(u.jsx)("div",{className:"device_name",children:t.title}),Object(u.jsxs)("div",{className:"device_priceBlock",children:[Object(u.jsx)("div",{className:"device_price",children:t.price+" \u20bd"}),t.is_new&&Object(u.jsx)("div",{className:"device_new",children:"\u041d\u043e\u0432\u043e\u0435"})]}),Object(u.jsxs)("div",{className:"device_groupBtn",children:[Object(u.jsx)("button",{className:"device_btn",children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(u.jsx)("div",{className:"heart"})]})]})]})})),o=c(12),v=c.n(o),h=c(22),O=c(23),m=c.n(O).a.create({baseURL:"https://getlens-master.stage.dev.family/api/pages/obektivy"}),x=function(){var e=Object(h.a)(v.a.mark((function e(t,c,n){var i,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("",{params:{"brands[]":t,"price[min]":c,"price[max]":n}});case 2:return i=e.sent,s=i.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),p=Object(d.a)((function(){var e=Object(n.useContext)(I).device;return Object(n.useEffect)((function(){x(e.selectedBrandId,e.price.min,e.price.max).then((function(t){return e.setDevices(t.products)}))}),[e.selectedBrandId,e.price.min,e.price.max]),Object(u.jsx)("div",{className:"devices",children:e.devices.map((function(e){return Object(u.jsx)(b,{device:e},e.id)}))})})),f=function(){return Object(u.jsxs)("div",{className:"catalog",children:[Object(u.jsx)(j,{}),Object(u.jsx)(p,{})]})},_=function(){return Object(u.jsx)(f,{})},k=c(13),B=c(24),g=c(25),N=c(2),y=function(){function e(){Object(B.a)(this,e),this._devices=[],this._brands=[{id:1,name:"Canon"},{id:9,name:"Nikon"}],this._selectedBrandId=[],this._price={min:"0",max:"0"},Object(N.d)(this)}return Object(g.a)(e,[{key:"setDevices",value:function(e){this._devices=e}},{key:"setBrands",value:function(e){this._brands=e}},{key:"setSelectedBrandId",value:function(e){this._selectedBrandId=[].concat(Object(k.a)(this.selectedBrandId),[e])}},{key:"delSelectedBrandId",value:function(e){this._selectedBrandId=Object(k.a)(this.selectedBrandId.filter((function(t){return t!==e})))}},{key:"setPrice",value:function(e){this._price=e}},{key:"devices",get:function(){return this._devices}},{key:"brands",get:function(){return this._brands}},{key:"selectedBrandId",get:function(){return this._selectedBrandId}},{key:"price",get:function(){return this._price}}]),e}(),I=Object(n.createContext)(null);s.a.render(Object(u.jsx)(I.Provider,{value:{device:new y},children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e128bfcd.chunk.js.map