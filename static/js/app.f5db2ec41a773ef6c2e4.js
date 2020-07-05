webpackJsonp([1],{"1Vhe":function(t,e,a){var s=a("mtWM"),i=a("QmSG");t.exports={getVideos:function(){return s.get(i.API_URL+"?req=videos").then(function(t){return 200===t.status?{errored:t.data.errored,message:t.data.message}:{errored:!0,message:"Unable to fetch videos. try again later"}}).catch(function(){return{errored:!0,message:"Unable to fetch videos at the moment. kindly check back in  a bit"}})},getDownloadLinks:function(t){return s.get(i.API_URL+"?req=downloadlink&url="+t).then(function(t){return 200===t.status?{errored:t.data.errored,message:t.data.message}:{errored:!1,message:"Download links unavailable at the moment"}}).catch(function(){return{errored:!0,message:"Unable to get video download links at the moment. kindly check back in  a bit"}})},pictureUrl:function(t){return""+i.API_URL+t}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("ZDsj")},null,null).exports,o=a("/ocq"),n=a("Xxa5"),l=a.n(n),c=a("pFYg"),d=a.n(c),v=a("exGp"),u=a.n(v),h=a("1Vhe"),m=a.n(h),f={name:"Home",data:function(){return{errored:!1,loading:!0,videos:[],selectedVideo:{},downloadLoading:!1,selectedVideoRaw:"",videosToDisplay:{count:10,category:""},images:[],categories:{}}},methods:{printRawHTML:function(t){return'<div\n            class="fb-video"\n            data-href="'+t.url+'"\n            data-width="500"\n            data-show-text="false">\n                <div class="fb-xfbml-parse-ignore">\n                <blockquote\n                cite="'+t.url+'">\n                  Video is Loading.....<br>\n                  <i class="fa fa-refresh fa-spin" aria-hidden="true"></i><br>\n                  <small><a href="#report">Video taking too long to load? </a></small>\n                </blockquote>\n                </div>\n            </div>'},shortenName:function(t){if(t.trim().length>=20)return t.substring(0,19)+" ...";for(var e="",a=0;a<31-t.length;a++)e+=" ";return t+e},picture:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m.a.pictureUrl(t)},convertToMB:function(t){return t?(t/1e6).toFixed(2)+"mb":null}},watch:{selectedVideo:function(){var t=u()(l.a.mark(function t(e){var a,s,i,r,o=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.downloadLoading=!0,void 0!==e.url){t.next=5;break}t.t0=null,t.next=8;break;case 5:return t.next=7,m.a.getDownloadLinks(e.url);case 7:t.t0=t.sent;case 8:a=t.t0,setTimeout(function(){o.downloadLoading=!a},2e3),a.errored||"object"!==d()(a.message)?this.selectedVideo.error=a.message:(this.selectedVideo.links=a.message,s=a.message,i=s.LQ_Link||{},r=s.HQ_Link||{},this.selectedVideoRaw=s.LQ_Link||s.HQ_Link?'<video width="100%" height="auto" controls>\n            <source src="'+(i.link||r.link)+'" type="video/mp4">\n            <source src="'+(i.link||r.link)+'" type="video/ogg">\n                Your browser does not support the video tag.\n            </video>\n            <div class="col-md-6 text-center" style="color:white">\n                <label class="form-check-label">\n                &nbsp;&nbsp;\n                <a class="btn-block btn btn-success" href="'+i.link+'" target="_blank">\n                Low quality ('+(this.convertToMB(i.size)||"-")+')\n                 <i class="fa fa-download" aria-hidden="true"></i>\n                </a>\n                </label>\n                <br>\n                <label class="form-check-label">\n                &nbsp;&nbsp;\n                <a class="btn-block btn btn-success" href="'+r.link+'" target="_blank">\n                High quality ('+(this.convertToMB(r.size)||"-")+')\n                 <i class="fa fa-download" aria-hidden="true"></i>\n                </a>\n                </label>\n            </div>':'<h1 class="text-center">An unknown error has occured</h1>');case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mounted:function(){var t=u()(l.a.mark(function t(){var e,a=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.getVideos();case 2:e=t.sent,this.loading=void 0===e,this.errored=e.errored,this.videos=e.message,"object"===d()(this.videos)&&this.videos.forEach(function(t){t.image_src.length>=5&&a.images.length<5&&a.images.push(t.image_src),t.sub_linked.length>=1?void 0===a.categories[t.category]?a.categories[t.category]=[t.sub_linked]:a.categories[t.category].push(t.sub_linked):void 0===a.categories[t.category]&&(a.categories[t.category]=[])});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("main",{staticClass:"page catalog-page"},[a("section",{staticClass:"clean-block clean-catalog dark"},[a("div",{staticClass:"container"},[a("div",{staticClass:"block-heading"},[a("div",{staticClass:"container"},[a("div",{staticClass:"carousel slide",attrs:{"data-ride":"carousel",id:"carousel-1"}},[a("div",{staticClass:"carousel-inner",staticStyle:{width:"100%",height:"400px"},attrs:{role:"listbox"}},[t._m(1),t._v(" "),t._l(t.images,function(e){return a("div",{key:e.id,staticClass:"carousel-item"},[a("img",{staticClass:"img-responsive",attrs:{src:t.picture(e),alt:t.picture(e)}})])})],2),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),a("div",{staticClass:"content",attrs:{id:"categories"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"d-none d-md-block"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter-item"},[a("h3",[t._v("Choose category")]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.videosToDisplay.category,expression:"videosToDisplay.category"}],staticClass:"form-control",attrs:{name:"Category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.videosToDisplay,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),t._l(Object.keys(t.categories),function(e){return a("option",{key:e.id},[t._v(t._s(e))])})],2)])]),t._v(" "),t.categories[t.videosToDisplay.category]?a("div",{staticClass:"form-check"},t._l(t.categories[t.videosToDisplay.category],function(e){return a("div",{key:e.id},[a("label",[a("input",{attrs:{type:"checkbox"}}),t._v("  "+t._s(e)+"\r\n                                                ")]),a("br")])}),0):a("div",{staticClass:"form-check"},[t._m(4)])])])]),t._v(" "),a("div",{staticClass:"d-md-none"},[t._m(5),t._v(" "),a("div",{staticClass:"collapse",attrs:{id:"filters"}},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter-item"},[a("h3",[t._v("Categories")]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.videosToDisplay.category,expression:"videosToDisplay.category"}],staticClass:"form-control",attrs:{name:"Category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.videosToDisplay,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All")]),t._v(" "),t._l(Object.keys(t.categories),function(e){return a("option",{key:e.id},[t._v(t._s(e))])})],2)])]),t._v(" "),t.categories[t.videosToDisplay.category]?a("div",{staticClass:"form-check"},t._l(t.categories[t.videosToDisplay.category],function(e){return a("div",{key:e.id},[a("label",[a("input",{attrs:{type:"checkbox"}}),t._v("  "+t._s(e)+"\r\n                                                    ")]),a("br")])}),0):t._e()])])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"products"},[t.errored?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-12"},[a("div",{staticClass:"text-center alert alert-danger",attrs:{role:"alert"}},[t._m(6),t._v(" "),a("strong",[t._v("Error:")]),t._v(" "+t._s(t.videos)+"\r\n                                        ")])])]):a("div",{staticClass:"row"},[t.loading?a("div",{staticClass:"col-sm-12 col-lg-12"},[t._m(7)]):t._l(t.videos,function(e,s){return a("div",{key:e.id,staticClass:"col-sm-6 col-lg-4"},[s<t.videosToDisplay.count?a("div",{staticClass:"card clean-card text-center"},[a("div",{domProps:{innerHTML:t._s(t.printRawHTML(e))}}),t._v(" "),a("div",{staticClass:"card-body info"},[a("h6",{staticClass:"card-title",attrs:{title:e.title}},[t._v(t._s(t.shortenName(e.title)))]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"button","data-toggle":"modal","data-target":"#modelId"},on:{click:function(a){t.selectedVideo=e}}},[t._v("\r\n                                                    Download "),a("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("br"),a("small",[t._v(t._s(t.convertToMB(e.lq_size)||t.convertToMB(e.hq_size)||"-"))]),t._v(" "),a("br"),t._v(" "),t._m(8,!0)])]):t._e()])})],2),t._v(" "),a("nav",[t.videos.length>t.videosToDisplay.count?a("ul",{directives:[{name:"show",rawName:"v-show",value:"object"==typeof t.videos,expression:"typeof(videos) === 'object'"}],staticClass:"pagination"},[a("li",{staticClass:"page-item active"},[a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:function(e){t.videosToDisplay.count+=5}}},[t._v("Show more")])])]):a("ul",{directives:[{name:"show",rawName:"v-show",value:"object"==typeof t.videos,expression:"typeof(videos) === 'object'"}],staticClass:"pagination"},[t._m(9)])])])])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"modelId",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.selectedVideo.title))]),t._v(" "),t._m(10)]),t._v(" "),a("div",{staticClass:"modal-body"},[t.selectedVideo.links?a("div",{staticClass:"form-check"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectedVideoRaw.length>10,expression:"selectedVideoRaw.length > 10"}],domProps:{innerHTML:t._s(t.selectedVideoRaw)}})]):a("div",[t.downloadLoading?a("div",{staticClass:"form-check"},[t._v("\r\n                            Fetching download links. Please wait....\r\n                            "),a("i",{staticClass:"fa fa-refresh fa-spin",attrs:{"aria-hidden":"true"}})]):a("div",{staticClass:"row form-check"},[a("div",{staticClass:"alert alert-danger text-center",attrs:{role:"alert"}},[a("i",{staticClass:"fa fa-exclamation-triangle",staticStyle:{color:"red","font-size":"20px"},attrs:{"aria-hidden":"true"}}),a("br"),t._v(" "),a("strong",[t._v("Error: ")]),t._v(" "+t._s(t.selectedVideo.error)+"\r\n                            ")])])])]),t._v(" "),t._m(11)])])]),t._v(" "),a("footer",{staticClass:"page-footer dark"},[t._m(12),t._v(" "),a("div",{staticClass:"footer-copyright"},[a("p",[t._v("© "+t._s((new Date).getFullYear()))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand logo",attrs:{href:"#"}},[this._v("Viral Videos")]),e("button",{staticClass:"navbar-toggler",attrs:{"data-toggle":"collapse","data-target":"#navcol-1"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),e("span",{staticClass:"navbar-toggler-icon"})]),this._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navcol-1"}},[e("ul",{staticClass:"nav navbar-nav ml-auto"},[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("a",{staticClass:"nav-link",attrs:{href:"#categories"}},[this._v("Categories")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"img-responsive",attrs:{src:a("ol+I"),alt:"Slide Image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-1",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon"}),e("span",{staticClass:"sr-only"},[this._v("Previous")])]),e("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-1",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon"}),e("span",{staticClass:"sr-only"},[this._v("Next")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carousel-1","data-slide-to":"0"}}),this._v(" "),e("li",{attrs:{"data-target":"#carousel-1","data-slide-to":"1"}}),this._v(" "),e("li",{attrs:{"data-target":"#carousel-1","data-slide-to":"2"}}),this._v(" "),e("li",{attrs:{"data-target":"#carousel-1","data-slide-to":"3"}}),this._v(" "),e("li",{attrs:{"data-target":"#carousel-1","data-slide-to":"4"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[this._v("⬆"),e("em",[this._v("Showing all videos. Select a category to view")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-link d-md-none filter-collapse",attrs:{"data-toggle":"collapse","aria-expanded":"false","aria-controls":"filters",href:"#filters",role:"button"}},[this._v("Filters"),e("i",{staticClass:"icon-arrow-down filter-caret"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-center",staticStyle:{"font-size":"100px"}},[e("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center",staticStyle:{"font-size":"50px"}},[this._v("\r\n                                            Please wait..."),e("br"),this._v(" "),e("i",{staticClass:"fa fa-refresh fa-spin",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{title:"share video with friends",href:"#share"}},[this._v("\r\n                                                    Share "),e("i",{staticClass:"fa fa-share",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"page-item active"},[e("em",[this._v("That's all we have. We're glad you came this far 😊...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("h5",[this._v("About me")]),this._v(" "),e("ul",[e("li",[e("h1",[e("i",{staticClass:"fa fa-male",attrs:{"aria-hidden":"true"}})]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("@tasiukwaplong")])])])])])])}]},_=a("VU/8")(f,g,!1,null,null,null).exports;s.a.use(o.a);var p=new o.a({routes:[{path:"*",name:"Home",component:_}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},QmSG:function(t,e){t.exports={API_URL:"https://nmwrrd.000webhostapp.com/facebook/"}},ZDsj:function(t,e){},"ol+I":function(t,e,a){t.exports=a.p+"static/img/1.728214e.jpg"}},["NHnr"]);
//# sourceMappingURL=app.f5db2ec41a773ef6c2e4.js.map