(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aebd63d"],{"0fd3":function(e,t,a){},"1d33":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticStyle:{margin:"10px 0px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addTradeMark}},[e._v("添加")]),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.list}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80px",align:"center"}}),a("el-table-column",{attrs:{prop:"tmName",label:"品牌名称"}}),a("el-table-column",{attrs:{label:"品牌LOGO"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.logoUrl,alt:""}})]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(t){return e.updateTradeMark(r)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.deleteTradeMark(r)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":e.page,"page-sizes":[3,5,10],"page-size":e.limit,layout:"prev, pager, next, jumper,->, sizes,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:e.tmForm.id?"修改品牌":"添加品牌",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",staticStyle:{width:"80%"},attrs:{model:e.tmForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"品牌名称","label-width":"100px",prop:"tmName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tmForm.tmName,callback:function(t){e.$set(e.tmForm,"tmName",t)},expression:"tmForm.tmName"}})],1),a("el-form-item",{attrs:{label:"品牌Logo","label-width":"100px",prop:"logoUrl"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/dev-api/admin/product/fileUpload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.tmForm.logoUrl?a("img",{staticClass:"avatar",attrs:{src:e.tmForm.logoUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addOrUpdateTradeMark}},[e._v("确 定")])],1)],1)],1)},i=[],n=a("5530"),o=a("1da1"),l=(a("96cf"),{name:"tradeMark",data:function(){var e=function(e,t,a){t.length<2||t.length>10?a(new Error("品牌名称2-10位")):a()};return{page:1,limit:3,total:0,list:[],dialogFormVisible:!1,tmForm:{tmName:"",logoUrl:""},rules:{tmName:[{required:!0,message:"请输入品牌名称",trigger:"blur"},{validator:e,trigger:"change"}],logoUrl:[{required:!0,message:"请选择品牌的图片"}]}}},mounted:function(){this.getPageList()},methods:{getPageList:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,i,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,t.page=r,i=t.page,n=t.limit,a.next=5,t.$API.trademark.reqTradeMarkList(i,n);case 5:o=a.sent,200==o.code&&(t.total=o.data.total,t.list=o.data.records);case 7:case"end":return a.stop()}}),a)})))()},handleSizeChange:function(e){this.limit=e,this.page=1,this.getPageList()},handleCurrentChange:function(e){this.page=e,this.getPageList(e)},addTradeMark:function(){this.dialogFormVisible=!0,this.tmForm={tmName:"",logoUrl:""}},updateTradeMark:function(e){this.dialogFormVisible=!0,this.tmForm=Object(n["a"])({},e)},handleAvatarSuccess:function(e,t){this.tmForm.logoUrl=e.data},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},addOrUpdateTradeMark:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return e.dialogFormVisible=!1,t.next=4,e.$API.trademark.reqAddOrUpdateTradeMark(e.tmForm);case 4:r=t.sent,200==r.code&&(e.$message({type:"success",message:e.tmForm.id?"修改品牌成功":"添加品牌成功"}),e.getPageList(e.tmForm.id?e.page:1)),t.next=10;break;case 8:return console.log("error submit!!"),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},deleteTradeMark:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.tmName,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$API.trademark.reqDeleteTradeMark(e.id);case 2:r=a.sent,200==r.code&&(t.$message({type:"success",message:"删除成功!"}),t.getPageList(t.list.length>1?t.page:t.page-1));case 4:case"end":return a.stop()}}),a)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}}),s=l,c=(a("f64b"),a("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null);t["default"]=u.exports},f64b:function(e,t,a){"use strict";a("0fd3")}}]);