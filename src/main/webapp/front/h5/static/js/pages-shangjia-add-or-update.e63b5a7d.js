(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangjia-add-or-update"],{"1c78":function(r,e,t){"use strict";var a=t("7bca"),i=t.n(a);i.a},"229f":function(r,e,t){"use strict";var a=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var i=a(t("3b8d")),n=a(t("e2b1")),o={data:function(){return{cross:"",ruleForm:{shangjiaxingming:"",shangjiazhanghao:"",mima:"",xingbie:"",touxiang:"",dianhuahaoma:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{shangjiaxingming:!1,shangjiazhanghao:!1,mima:!1,xingbie:!1,touxiang:!1,dianhuahaoma:!1,money:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,i.default)(regeneratorRuntime.mark((function r(e){var t,a,i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(a=r.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("shangjia",this.ruleForm.id);case 12:a=r.sent,this.ruleForm=a.data;case 14:if(this.cross=e.cross,!e.cross){r.next=50;break}i=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(i);case 18:if((r.t1=r.t0()).done){r.next=50;break}if(n=r.t1.value,"shangjiaxingming"!=n){r.next=24;break}return this.ruleForm.shangjiaxingming=i[n],this.ro.shangjiaxingming=!0,r.abrupt("continue",18);case 24:if("shangjiazhanghao"!=n){r.next=28;break}return this.ruleForm.shangjiazhanghao=i[n],this.ro.shangjiazhanghao=!0,r.abrupt("continue",18);case 28:if("mima"!=n){r.next=32;break}return this.ruleForm.mima=i[n],this.ro.mima=!0,r.abrupt("continue",18);case 32:if("xingbie"!=n){r.next=36;break}return this.ruleForm.xingbie=i[n],this.ro.xingbie=!0,r.abrupt("continue",18);case 36:if("touxiang"!=n){r.next=40;break}return this.ruleForm.touxiang=i[n],this.ro.touxiang=!0,r.abrupt("continue",18);case 40:if("dianhuahaoma"!=n){r.next=44;break}return this.ruleForm.dianhuahaoma=i[n],this.ro.dianhuahaoma=!0,r.abrupt("continue",18);case 44:if("money"!=n){r.next=48;break}return this.ruleForm.money=i[n],this.ro.money=!0,r.abrupt("continue",18);case 48:r.next=18;break;case 50:this.styleChange();case 51:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,i.default)(regeneratorRuntime.mark((function r(){var e,t,a,i,n,o,s,d,u,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.shangjiaxingming){r.next=3;break}return this.$utils.msg("商家姓名不能为空"),r.abrupt("return");case 3:if(this.ruleForm.shangjiazhanghao){r.next=6;break}return this.$utils.msg("商家账号不能为空"),r.abrupt("return");case 6:if(this.ruleForm.mima){r.next=9;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.dianhuahaoma||this.$validate.isMobile(this.ruleForm.dianhuahaoma)){r.next=12;break}return this.$utils.msg("电话号码应输入手机格式"),r.abrupt("return");case 12:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){r.next=15;break}return this.$utils.msg("余额应输入数字"),r.abrupt("return");case 15:if(!this.cross){r.next=31;break}if(i=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==i){r.next=31;break}if(o=uni.getStorageSync("crossObj"),i.startsWith("[")){r.next=27;break}for(s in o)s==i&&(o[s]=n);return d=uni.getStorageSync("crossTable"),r.next=25,this.$api.update("".concat(d),o);case 25:r.next=31;break;case 27:e=Number(uni.getStorageSync("userid")),t=o["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 31:if(!t||!e){r.next=53;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=t,u={page:1,limit:10,crossuserid:e,crossrefid:t},r.next=37,this.$api.list("shangjia",u);case 37:if(c=r.sent,!(c.data.total>=a)){r.next=43;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 43:if(!this.ruleForm.id){r.next=48;break}return r.next=46,this.$api.update("shangjia",this.ruleForm);case 46:r.next=50;break;case 48:return r.next=50,this.$api.add("shangjia",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:r.next=61;break;case 53:if(!this.ruleForm.id){r.next=58;break}return r.next=56,this.$api.update("shangjia",this.ruleForm);case 56:r.next=60;break;case 58:return r.next=60,this.$api.add("shangjia",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(t,"-").concat(a,"-").concat(i)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},"7bca":function(r,e,t){var a=t("918f");"string"===typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);var i=t("4f06").default;i("5c2ab01d",a,!0,{sourceMap:!1,shadowMode:!1})},"918f":function(r,e,t){var a=t("24fb");e=a(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-7c8271a3]{padding:%?20?%}.content[data-v-7c8271a3]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220228/68c356bbe1634ec39168c0aacd022ed6.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-7c8271a3]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-7c8271a3]{width:%?180?%}.avator[data-v-7c8271a3]{width:%?150?%;height:%?60?%}.right-input[data-v-7c8271a3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-7c8271a3]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-7c8271a3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-7c8271a3]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-7c8271a3]{border:0}.cu-form-group uni-input[data-v-7c8271a3]{padding:0 %?30?%}.uni-input[data-v-7c8271a3]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-7c8271a3]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-7c8271a3]::after{line-height:%?80?%}.select .uni-input[data-v-7c8271a3]{line-height:%?80?%}.input .right-input[data-v-7c8271a3]{line-height:%?60?%}',""]),r.exports=e},a1f2:function(r,e,t){"use strict";t.r(e);var a=t("fff2"),i=t("d85f");for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);t("1c78");var o,s=t("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"7c8271a3",null,!1,a["a"],o);e["default"]=d.exports},d85f:function(r,e,t){"use strict";t.r(e);var a=t("229f"),i=t.n(a);for(var n in a)"default"!==n&&function(r){t.d(e,r,(function(){return a[r]}))}(n);e["default"]=i.a},fff2:function(r,e,t){"use strict";var a,i=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(251, 251, 251, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商家姓名")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangjiaxingming,placeholder:"商家姓名"},model:{value:r.ruleForm.shangjiaxingming,callback:function(e){r.$set(r.ruleForm,"shangjiaxingming",e)},expression:"ruleForm.shangjiaxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(251, 251, 251, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商家账号")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangjiazhanghao,placeholder:"商家账号"},model:{value:r.ruleForm.shangjiazhanghao,callback:function(e){r.$set(r.ruleForm,"shangjiazhanghao",e)},expression:"ruleForm.shangjiazhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(251, 251, 251, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(251, 251, 251, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),t("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(193, 193, 193, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(251, 251, 251, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("头像")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.touxiang,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(251, 251, 251, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("电话号码")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.dianhuahaoma,placeholder:"电话号码"},model:{value:r.ruleForm.dianhuahaoma,callback:function(e){r.$set(r.ruleForm,"dianhuahaoma",e)},expression:"ruleForm.dianhuahaoma"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 16rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(251, 251, 251, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("余额")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.money,placeholder:"余额"},model:{value:r.ruleForm.money,callback:function(e){r.$set(r.ruleForm,"money",e)},expression:"ruleForm.money"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"20rpx auto",backgroundColor:"rgba(255, 148, 77, 1)",borderColor:"#409EFF",borderRadius:"88rpx",color:"#fff",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return a}))}}]);