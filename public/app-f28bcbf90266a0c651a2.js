webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o){"use strict";function n(e,o,n){var t=s.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function t(e,o,n){return s.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=n,o.apiRunnerAsync=t;var s=[]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-about-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-js!./src/pages/about.js"),"component---src-pages-contact-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-contact-js!./src/pages/contact.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),"component---src-pages-page-2-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js"),"component---src-pages-portfolio-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-portfolio-js!./src/pages/portfolio.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["about.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["contact.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---contact!./.cache/json/contact.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["page-2.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["portfolio.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---portfolio!./.cache/json/portfolio.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var i=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u=n("./node_modules/react/react.js"),d=t(u),l=n("./node_modules/prop-types/index.js"),c=t(l),m=n("./.cache/loader.js"),p=t(m),f=n("./.cache/emitter.js"),h=t(f),g=function(e){var o=e.children;return d.default.createElement("div",null,o())},b=function(e){function o(n){s(this,o);var t=a(this,e.call(this));return t.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},t}return r(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath)))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,u.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,u.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(d.default.Component);b.propTypes={page:c.default.bool,layout:c.default.bool,location:c.default.object},o.default=b,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),a=t(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=n.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xf927f8900006,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---contact!./.cache/json/contact.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa7f31e1aeaea,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/contact.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7b71d9db271c,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---portfolio!./.cache/json/portfolio.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xaeb581a62131,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/portfolio.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/react/react.js"),a=(t(s),n("./.cache/find-page.js")),r=t(a),i=n("./.cache/emitter.js"),u=t(i),d=void 0,l={},c={},m={},p={},f={},h=[],g=[],b={},j=[],y={},x=function(e){return e&&e.default||e},_=void 0,k=!0;_=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){j=j.filter(function(o){return o!==e}),_.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var v=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},R=function(e,o){return b[e]>b[o]?1:b[e]<b[o]?-1:0},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var t="component---"===e.slice(0,12)?c.components[e]||c.layouts[e]:c.json[e];t(function(o,t){p[e]=t,n(o,t)})}},P=function(e,n){f[e]?o.nextTick(function(){n(null,f[e])}):w(e,function(o,t){if(o)n(o);else{var s=x(t());f[e]=s,n(o,s)}})},E=1,C={empty:function(){g=[],b={},y={},j=[],h=[]},addPagesArray:function(e){h=e;var o="";o="/public",d=(0,r.default)(e,o)},addDevRequires:function(e){l=e},addProdRequires:function(e){c=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(o){return o.path===e}))return!1;var o=1/E;E+=1,b[e]?b[e]+=1:b[e]=1,C.has(e)||g.unshift(e),g.sort(R);var n=d(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,j.indexOf(n.jsonName)!==-1||p[n.jsonName]||j.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,j.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||j.unshift(n.componentChunkName)),j.sort(v),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:b}},getPage:function(e){return d(e)},has:function(e){return g.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var s;if(n){if(t>=o.length)break;s=o[t++]}else{if(t=o.next(),t.done)break;s=t.value}var a=s;a.unregister()}window.location.reload()})),k=!1;var t=d(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return o.nextTick(function(){n(m[e]),u.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];u.default.emit("onPreLoadPageResources",{path:e});var s=void 0,a=void 0,r=void 0,i=function(){if(s&&a&&(!t.layoutComponentChunkName||r)){m[e]={component:s,json:a,layout:r};var o={component:s,json:a,layout:r};n(o),u.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return P(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,i()}),P(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),a=o,i()}),void(t.layoutComponentChunkName&&P(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),r=o,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=C}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-contact-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-portfolio-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio.json",path:"/portfolio/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],a=function(){var e=o();e&&(s.push(e),n(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a=n("./.cache/api-runner-browser.js"),r=n("./node_modules/react/react.js"),i=t(r),u=n("./node_modules/react-dom/index.js"),d=t(u),l=n("./node_modules/react-router-dom/index.js"),c=n("./node_modules/react-router-scroll/lib/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=t(m),f=n("./node_modules/domready/ready.js"),h=t(f),g=n("./.cache/emitter.js"),b=t(g),j=n("./.cache/pages.json"),y=t(j),x=n("./.cache/component-renderer.js"),_=t(x),k=n("./.cache/async-requires.js"),v=t(k),R=n("./.cache/loader.js"),w=t(R);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=b.default,w.default.addPagesArray(y.default),w.default.addProdRequires(v.default),window.asyncRequires=v.default,window.___loader=w.default,window.matchPath=l.matchPath,(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,a.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===w.default.getPage(e).path&&(b.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){b.default.off("onPostLoadPageResources",o),b.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);w.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):b.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t;var u=(0,p.default)();(0,a.apiRunner)("onRouteUpdate",{location:u.location,action:u.action});var m=(0,a.apiRunner)("replaceRouterComponent",{history:u})[0],f=function(e){var o=e.children;return i.default.createElement(l.Router,{history:u},o)};w.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,r.createElement)(m?m:f,null,(0,r.createElement)(c.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)((0,l.withRouter)(_.default),{layout:!0,children:function(o){return(0,r.createElement)(l.Route,{render:function(n){e(n.history);var t=o?o:n;return w.default.getPage(t.location.pathname)?(0,r.createElement)(_.default,s({page:!0},t)):(0,r.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,h.default)(function(){return d.default.render(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),a=t(s),r="/";r="/public/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,s="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(s,e=function(){for(n.removeEventListener(s,e),a=1;e=o.shift();)e()}),function(e){a?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,a=n.s;n.e=function(t,r){var i=!1,u=!0,d=function(e){r&&(r(n,e),r=null)};return!a&&o&&o[t]?void d(!0):(s(t,function(){i||(i=!0,u?setTimeout(function(){d()}):d())}),void(i||(u=!1,e(function(){i||(i=!0,a?a[t]=void 0:(o||(o={}),o[t]=!0),d(!0))}))))}}t()},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(o){try{return l.call(null,e,0)}catch(o){return l.call(this,e,0)}}}function a(e){if(c===clearTimeout)return clearTimeout(e);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(o){try{return c.call(null,e)}catch(o){return c.call(this,e)}}}function r(){h&&p&&(h=!1,p.length?f=p.concat(f):g=-1,f.length&&i())}function i(){if(!h){var e=s(r);h=!0;for(var o=f.length;o;){for(p=f,f=[];++g<o;)p&&p[g].run();g=-1,o=f.length}p=null,h=!1,a(e)}}function u(e,o){this.fun=e,this.array=o}function d(){}var l,c,m=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{c="function"==typeof clearTimeout?clearTimeout:t}catch(e){c=t}}();var p,f=[],h=!1,g=-1;m.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];f.push(new u(e,o)),1!==f.length||h||s(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=d,m.addListener=d,m.once=d,m.off=d,m.removeListener=d,m.removeAllListeners=d,m.emit=d,m.prependListener=d,m.prependOnceListener=d,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-js!./src/pages/about.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xefeaa6d1881d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-contact-js!./src/pages/contact.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(70144966829960,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/contact.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xc6c285f8fd10,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-portfolio-js!./src/pages/portfolio.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe015e3200350,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dennis/Github/dkonieczek.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dennis/Github/dkonieczek.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/portfolio.js')})})}}});
//# sourceMappingURL=app-f28bcbf90266a0c651a2.js.map