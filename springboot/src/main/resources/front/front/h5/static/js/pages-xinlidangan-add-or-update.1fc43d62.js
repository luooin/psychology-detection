(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xinlidangan-add-or-update"],{"14fe":function(e,i,r){"use strict";var n={"xia-editor":r("064f").default,"w-picker":r("e2b1").default},t=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"0px",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221227/38bdf285653f4e2580978aa4e42be204.gif) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221227/981928ff5e8b4de0bd3f18588ef6cb0f.png) fixed repeat center top,#959bd9",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("学号")]),r("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xuehaoIndex,range:e.xuehaoOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xuehaoChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{color:"#333",width:"100%",fontSize:"28rpx"}},[e._v(e._s(e.xuehaoOptions[e.xuehaoIndex]))])],1)],1),r("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("学生姓名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(i){e.$set(e.ruleForm,"xueshengxingming",i)},expression:"ruleForm.xueshengxingming"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("性别")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.xingbie,placeholder:"性别"},model:{value:e.ruleForm.xingbie,callback:function(i){e.$set(e.ruleForm,"xingbie",i)},expression:"ruleForm.xingbie"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("年龄")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.nianling,placeholder:"年龄"},model:{value:e.ruleForm.nianling,callback:function(i){e.$set(e.ruleForm,"nianling",i)},expression:"ruleForm.nianling"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("手机号码")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shoujihaoma,placeholder:"手机号码"},model:{value:e.ruleForm.shoujihaoma,callback:function(i){e.$set(e.ruleForm,"shoujihaoma",i)},expression:"ruleForm.shoujihaoma"}})],1),r("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("心理等级")]),r("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xinlidengjiIndex,range:e.xinlidengjiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xinlidengjiChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{color:"#333",width:"100%",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.xinlidengji?e.ruleForm.xinlidengji:"请选择心理等级"))])],1)],1),r("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("登记时间")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"登记时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("dengjishijian")}},model:{value:e.ruleForm.dengjishijian,callback:function(i){e.$set(e.ruleForm,"dengjishijian",i)},expression:"ruleForm.dengjishijian"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#c8c8ef",borderRadius:"0px",borderWidth:"0px 0px 8rpx 0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"dotted dashed solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("备注")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.beizhu,placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(i){e.$set(e.ruleForm,"beizhu",i)},expression:"ruleForm.beizhu"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#c8c8ef",borderWidth:"0 0 8rpx 0",background:"linear-gradient(180deg, rgba(255,255,255,1) 31%, rgba(232,232,255,1) 100%)",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 24rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",fontWeight:"500"}},[e._v("心理评估")]),r("xia-editor",{style:{minHeight:"240rpx",padding:"24rpx 24rpx 64rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#c8c8ef",borderRadius:"0px",color:"#555",background:"none",borderWidth:"0px 0px 0px 0px",width:"100%",borderStyle:"dotted dashed solid",height:"auto"},attrs:{placeholder:"心理评估"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.xinlipingguChange.apply(void 0,arguments)}},model:{value:e.ruleForm.xinlipinggu,callback:function(i){e.$set(e.ruleForm,"xinlipinggu",i)},expression:"ruleForm.xinlipinggu"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"4rpx 8rpx 0px #cfcfe3",margin:"0 40rpx 0 0",borderColor:"#9F9FEC",color:"#333",display:"inline",minWidth:"212rpx",borderRadius:"40rpx",background:"#eaeafa",borderWidth:"2rpx 8rpx 2rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"dashed",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"dengjishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.dengjishijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];r.d(i,"b",(function(){return t})),r.d(i,"c",(function(){return a})),r.d(i,"a",(function(){return n}))},a532:function(e,i,r){"use strict";var n=r("ea81"),t=r.n(n);t.a},b80d:function(e,i,r){var n=r("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-71444ec7]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},bf2b:function(e,i,r){"use strict";r.r(i);var n=r("cc24"),t=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(i,e,(function(){return n[e]}))}(a);i["default"]=t.a},cc24:function(e,i,r){"use strict";var n=r("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var t=n(r("3b8d")),a=n(r("e2b1")),o=n(r("064f")),d={data:function(){return{cross:"",ruleForm:{xuehao:"",xueshengxingming:"",xingbie:"",nianling:"",shoujihaoma:"",xinlidengji:"",xinlipinggu:"",dengjishijian:"",beizhu:""},xuehaoOptions:[],xuehaoIndex:0,xinlidengjiOptions:[],xinlidengjiIndex:0,user:{},ro:{xuehao:!1,xueshengxingming:!1,xingbie:!1,nianling:!1,shoujihaoma:!1,xinlidengji:!1,xinlipinggu:!1,dengjishijian:!1,beizhu:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(i){var r,n,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.dengjishijian=this.$utils.getCurDateTime(),r=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:return n=e.sent,this.user=n.data,e.next=8,this.$api.option("xuesheng","xuehao",{});case 8:if(n=e.sent,this.xuehaoOptions=n.data,this.xinlidengjiOptions="普通人,轻度患者,中度患者,重度患者".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=19;break}return this.ruleForm.id=i.id,e.next=17,this.$api.info("xinlidangan",this.ruleForm.id);case 17:n=e.sent,this.ruleForm=n.data;case 19:if(this.cross=i.cross,!i.cross){e.next=63;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 23:if((e.t1=e.t0()).done){e.next=63;break}if(a=e.t1.value,"xuehao"!=a){e.next=29;break}return this.ruleForm.xuehao=t[a],this.ro.xuehao=!0,e.abrupt("continue",23);case 29:if("xueshengxingming"!=a){e.next=33;break}return this.ruleForm.xueshengxingming=t[a],this.ro.xueshengxingming=!0,e.abrupt("continue",23);case 33:if("xingbie"!=a){e.next=37;break}return this.ruleForm.xingbie=t[a],this.ro.xingbie=!0,e.abrupt("continue",23);case 37:if("nianling"!=a){e.next=41;break}return this.ruleForm.nianling=t[a],this.ro.nianling=!0,e.abrupt("continue",23);case 41:if("shoujihaoma"!=a){e.next=45;break}return this.ruleForm.shoujihaoma=t[a],this.ro.shoujihaoma=!0,e.abrupt("continue",23);case 45:if("xinlidengji"!=a){e.next=49;break}return this.ruleForm.xinlidengji=t[a],this.ro.xinlidengji=!0,e.abrupt("continue",23);case 49:if("xinlipinggu"!=a){e.next=53;break}return this.ruleForm.xinlipinggu=t[a],this.ro.xinlipinggu=!0,e.abrupt("continue",23);case 53:if("dengjishijian"!=a){e.next=57;break}return this.ruleForm.dengjishijian=t[a],this.ro.dengjishijian=!0,e.abrupt("continue",23);case 57:if("beizhu"!=a){e.next=61;break}return this.ruleForm.beizhu=t[a],this.ro.beizhu=!0,e.abrupt("continue",23);case 61:e.next=23;break;case 63:this.styleChange();case 64:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{xinlipingguChange:function(e){this.ruleForm.xinlipinggu=e},styleChange:function(){this.$nextTick((function(){}))},xuehaoChange:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(i){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.xuehaoIndex=i.target.value,this.ruleForm.xuehao=this.xuehaoOptions[this.xuehaoIndex],e.next=4,this.$api.follow("xuesheng","xuehao",{columnValue:this.ruleForm.xuehao});case 4:r=e.sent,r.data.xueshengxingming&&(this.ruleForm.xueshengxingming=r.data.xueshengxingming),r.data.xingbie&&(this.ruleForm.xingbie=r.data.xingbie),r.data.nianling&&(this.ruleForm.nianling=r.data.nianling),r.data.shoujihaoma&&(this.ruleForm.shoujihaoma=r.data.shoujihaoma);case 9:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),dengjishijianConfirm:function(e){console.log(e),this.ruleForm.dengjishijian=e.result,this.$forceUpdate()},xinlidengjiChange:function(e){this.xinlidengjiIndex=e.target.value,this.ruleForm.xinlidengji=this.xinlidengjiOptions[this.xinlidengjiIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var i,r,n,t,a,o,d,s,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xuehao){e.next=3;break}return this.$utils.msg("学号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.xinlidengji){e.next=6;break}return this.$utils.msg("心理等级不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xinlipinggu){e.next=9;break}return this.$utils.msg("心理评估不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=25;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=21;break}for(d in i)d==a&&(i[d]=o);return s=uni.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(s),i);case 19:e.next=25;break;case 21:r=Number(uni.getStorageSync("userid")),n=i["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 25:if(!n||!r){e.next=47;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,u={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=31,this.$api.list("xinlidangan",u);case 31:if(l=e.sent,!(l.data.total>=t)){e.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("xinlidangan",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("xinlidangan",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("xinlidangan",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("xinlidangan",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,r=i.getFullYear(),n=i.getMonth()+1,t=i.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(r,"-").concat(n,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};i.default=d},e3b1:function(e,i,r){"use strict";r.r(i);var n=r("14fe"),t=r("bf2b");for(var a in t)"default"!==a&&function(e){r.d(i,e,(function(){return t[e]}))}(a);r("a532");var o,d=r("f0c5"),s=Object(d["a"])(t["default"],n["b"],n["c"],!1,null,"71444ec7",null,!1,n["a"],o);i["default"]=s.exports},ea81:function(e,i,r){var n=r("b80d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var t=r("4f06").default;t("3393a47a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);