webpackJsonp([17],{"+/w8":function(t,e){},LZep:function(t,e){},ZM1j:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{hasorder:!1,expresspopup:!1,list:[{id:0,status:0},{id:1,status:1},{id:2,status:2},{id:3,status:3}]}},created:function(){1==this.hasorder&&document.querySelector("body").setAttribute("style","background-color: #FFF")},methods:{togo:function(){this.$router.push({name:"orderDetails"})},actions:function(t){3==t&&(this.expresspopup=!0)}},computed:{statusText:function(){return function(t){return 0==t?"待付款":1==t?"待发货":2==t?"已完成":3==t?"待收货":void 0}},btnText:function(){return function(t){return 0==t?"取消订单":1==t?"提醒发货":2==t?"删除订单":3==t?"查看物流":void 0}}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[t.hasorder?s("div",{staticClass:"nolist"}):s("div",{staticClass:"list"},t._l(t.list,function(e){return s("div",{key:e.id,staticClass:"listitem",on:{click:function(e){return t.togo()}}},[s("header",[t._v("\n        订单编号：54515431231231221210\n        "),s("span",[t._v(t._s(t.statusText(e.status)))])]),t._v(" "),t._m(0,!0),t._v(" "),s("footer",[t._m(1,!0),t._v(" "),s("div",{on:{click:function(s){return s.stopPropagation(),t.actions(e.status)}}},[t._v(t._s(t.btnText(e.status)))]),t._v(" "),s("div",{staticClass:"notpaid"},[t._v("去付款")])])])}),0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("img",{attrs:{src:s("lmQn"),alt:""}}),t._v(" "),n("div",[n("div",[t._v("自由人系列TEEMO一次性小烟象牙芒果自由人系列")]),t._v(" "),n("div",[t._v("\n            规格： 默认\n            "),n("span",[t._v("x1")])]),t._v(" "),n("div",[n("span",[t._v("￥99.00")]),n("del",[t._v("￥199.00")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("合计："),e("span",[this._v("￥99.00")])])}]};var r={components:{listOrder:s("C7Lr")(n,i,!1,function(t){s("+/w8")},"data-v-13f476b2",null).exports},data:function(){return{active:0}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("van-tabs",{attrs:{sticky:"",color:"#FF4A54","title-active-color":"#FF4A54","line-height":2},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tab",{attrs:{title:"全部"}},[s("list-order")],1),t._v(" "),s("van-tab",{attrs:{title:"待付款"}},[s("list-order")],1),t._v(" "),s("van-tab",{attrs:{title:"待收货"}},[s("list-order")],1),t._v(" "),s("van-tab",{attrs:{title:"已完成"}},[s("list-order")],1)],1)],1)},staticRenderFns:[]};var o=s("C7Lr")(r,a,!1,function(t){s("LZep")},"data-v-06adc238",null);e.default=o.exports}});
//# sourceMappingURL=17.93ed73c224a21b63ffd5.js.map