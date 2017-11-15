!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(4),a=r(o),i=n(5),u=r(i),l=(0,a.default)(),c=process.env.PORT||5e3;l.use(a.default.static("public")),l.get("*",u.default),l.listen(c,function(){console.log("Server Running on",c)})},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=(0,u.renderToString)(i.default.createElement(l.StaticRouter,{location:e.path,context:{}},(0,p.renderRoutes)(f.default)));t.send((0,d.default)({body:n}))}var a=n(0),i=r(a),u=n(6),l=n(1),c=n(7),f=r(c),s=n(16),d=r(s),p=n(2);e.exports=o},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),a=r(o),i=n(11),u=r(i),l=n(12),c=r(l),f=n(13),s=r(f);t.default=[{path:"/",exact:!0,component:a.default},{path:"/example",component:s.default,routes:[{path:"/example",component:u.default,exact:!0},{path:"/example/episodes",component:c.default,exact:!0}]}]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(1);n(9);var f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"banner"},l.default.createElement("span",{className:"heading"},"react ssr"),l.default.createElement("a",{href:"https://github.com/rishabh09/react-ssr"},l.default.createElement("span",{className:"corner-ribbon"},"Fork me on Github")),l.default.createElement(c.Link,{className:"heading-button",to:"/example"},"Example")))}}]),t}(l.default.Component);t.default=f},function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n._1pflhDua-DqfxwwuHY-1he {\n  display: block;\n  height: 60vh;\n  width: 100%;\n  text-align: center;\n  background-color: #16a085;\n  background-image: linear-gradient(150deg, #2c3e50, #2980b9); }\n\n._2GNBGhvWNGFtAB-xeBpcA1 {\n  display: block;\n  position: relative;\n  top: 20vh;\n  font-size: 70px;\n  color: white; }\n\n._3aB0i9u9kfCV1e9n_iT7m2 {\n  font-size: 20px;\n  color: white;\n  text-decoration: none;\n  border-radius: 2%;\n  padding: 20px 30px;\n  border: 1px solid white;\n  position: relative;\n  top: 35vh; }\n\n._18b9udf4VJvvgjTRCfU01x {\n  display: block;\n  position: absolute;\n  text-align: center;\n  top: 75px;\n  right: -70px;\n  display: block;\n  background-color: white;\n  height: 20px;\n  width: 300px;\n  padding: 10px;\n  transform: rotate(45deg);\n  font-size: 20px;\n  color: #2980b9; }\n\n._2IWPjYtCw-ieFSUoKyM0lf {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 8vh;\n  background-color: #2980b9;\n  text-align: center; }\n  ._2IWPjYtCw-ieFSUoKyM0lf h1 {\n    margin-top: 8px;\n    font-size: 32px;\n    color: white;\n    display: inline-block; }\n\n._1jq_9uWmUSHQuVr4Wds7pR {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 8vh;\n  background-color: #2980b9; }\n\n.Pfz43yHsniHO9BTORynSV {\n  margin-top: 9vh; }\n\n._2OgI0AU4-mmvhvy1VOOcPX {\n  float: right;\n  text-decoration: none;\n  padding: 10px;\n  background-color: white;\n  color: #2980b9;\n  margin: 8px 16px; }\n",""]),t.locals={banner:"_1pflhDua-DqfxwwuHY-1he",heading:"_2GNBGhvWNGFtAB-xeBpcA1","heading-button":"_3aB0i9u9kfCV1e9n_iT7m2",headingButton:"_3aB0i9u9kfCV1e9n_iT7m2","corner-ribbon":"_18b9udf4VJvvgjTRCfU01x",cornerRibbon:"_18b9udf4VJvvgjTRCfU01x",header:"_2IWPjYtCw-ieFSUoKyM0lf",footer:"_1jq_9uWmUSHQuVr4Wds7pR",wrapper:"Pfz43yHsniHO9BTORynSV","github-star":"_2OgI0AU4-mmvhvy1VOOcPX",githubStar:"_2OgI0AU4-mmvhvy1VOOcPX"}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(1),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h1",null,"Example Using react-ssr Boilerplate"),l.default.createElement(c.Link,{to:"/example/episodes"},"List of Rick and Morty Episodes"))}}]),t}(l.default.Component);t.default=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h1",null,"Rick and Morty Episodes"))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(14),u=r(i),l=n(15),c=r(l),f=n(2);t.default=function(e){var t=e.route;return a.default.createElement("div",null,a.default.createElement(u.default,null),a.default.createElement("div",{className:"wrapper"},(0,f.renderRoutes)(t.routes)),a.default.createElement(c.default,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){return o.default.createElement("div",{className:"header"},o.default.createElement("h1",null,"React SSR Example"),o.default.createElement("a",{className:"github-star",href:"http://www.github.com/rishabh09/react-ssr"},"★ on GITHUB"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){return o.default.createElement("div",{className:"footer"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>React Server Side Rendering</title>\n        \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n        <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-41755939-7\"><\/script>\n        <script>\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n        \n          gtag('config', 'UA-41755939-7');\n        <\/script>        \n      </head>\n      <body>\n        <div id=\"app\">"+e.body+'</div>\n        <script src="vendor.js" defer><\/script>\n        <script src="bundle.js" defer><\/script>\n      </body>      \n    </html>\n  '}}]);