(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1809],{89797:function(e,t,n){var r=n(15301).w_;e.exports.A=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z",clipRule:"evenodd"}}]})(e)}},87958:function(e,t,n){var r=n(15301).w_;e.exports.l=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z",clipRule:"evenodd"}}]})(e)}},44527:function(e,t,n){var r=n(15301).w_;e.exports.P=function(e){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"}}]})(e)}},32746:function(e,t,n){var r=n(15301).w_;e.exports.E=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(e)}},92102:function(e,t,n){var r=n(92632);e.exports={MDXRenderer:r}},92632:function(e,t,n){var r=n(3515),a=n(861),o=n(38416),i=n(7071),l=["scope","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(67294),m=n(64983).mdx,p=n(76948).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=i(e,l),s=p(t),d=u.useMemo((function(){if(!n)return null;var e=c({React:u,mdx:m},s),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return u.createElement(d,c({},o))}},30752:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r=n(67294),a=n(64423),o=n(26052),i=n(9357),l=n(63941),s=n(1597),c=n(92102),u=n(51500),m=n(37242),p=n(44527),d=function(e){return e.fields.slug.split("/")[4]},f=function(e){if(void 0!==e&&void 0!==e.href){var t=e.href.split("/");return""!=t[t.length-1]?t[t.length-1]:t[t.length-2]}},h=a.default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-1vys66-0"})(["\n\n    .chapter-back {\n        display:flex;\n        justify-content:space-between;\n        align-items:center; \n        a {\n            display: inline-flex;\n            svg {\n                align-self: center;\n                font-size: 1.5rem;\n                color: rgb(177, 182, 184);\n                width: 100%;\n                max-width: 1.5rem;\n            }\n            h4 {\n                font-weight: 500;\n                text-transform: capitalize;\n                font-size: 1.25rem;\n            }\n            &:hover {\n                svg, h4 {\n                    color: #3C494F;\n                }\n            }\n        }\n\n        .toc-toggle-btn{\n            display:none;\n        }\n\n        .toc-menu-icon{\n            width: 1.5rem; \n            height: 1.5rem; \n            cursor: pointer;\n            fill: ",';\n        }\n    }\n    \n\n    .toc-list {\n        ul {\n            position: relative;\n            padding-inline-start: 3.031rem;\n            -moz-padding-start: 2.78rem;\n            &::after {\n                position: absolute;\n                inset: 1rem auto 1rem 31px;\n                width: auto;\n                height: auto;\n                border-left: 1px solid rgba(177, 182, 184, 0.25);\n                content: "";\n                z-index: 0;\n            }\n            li {\n                width: fit-content;\n                margin: 1rem 0;\n                &::marker {\n                    color: rgba(177, 182, 184, 0.75);\n                }\n                p {\n                    margin: 0;\n                    font-size: 1rem;\n\n                    a {\n                        color: ',";\n                    }\n                }\n                &:hover {\n                    &::marker, p, a {\n                        color: ",";\n                    }\n                }\n\n            }\n            .active-link {\n                &::marker, p, a {\n                    color: ",";\n                }\n            }\n        }\n    }\n    \n    @media(max-width: 992px){\n        .toc-list{\n            ul{\n                &::after {\n                    inset: 1rem auto 1rem 32.4px;\n                }\n            }\n            \n        }\n    }\n\n    @media(max-width: 767px){\n        position: initial;\n        .toc-list{\n            ul{\n                display: flex;\n                flex-flow: wrap;\n                margin: 1.5rem 0;\n                flex-direction: column;\n                padding-inline-start: 0rem;\n                &::after{\n                    display: none;\n                }\n                li {\n                    list-style-type: none;\n                    margin: 0.5rem;\n                    display: none;\n                }\n            }\n\n            .toc-ul{\n                opacity:0;\n                height:0;\n                transition:none;\n                padding-left: 1rem;\n            }\n\n            .toc-ul-open{\n                height:auto;\n                opacity:1;\n                transition:all .4s;\n            }\n\n            .toc-ul-open li {\n                display: inline-block;\n            }\n        }\n\n        .chapter-back {\n            h4 {\n                margin: 0 1rem;\n            }\n\n            .toc-toggle-btn{\n                display: flex;\n            }\n        }\n    }\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.DarkTheme?"rgb(255, 255, 255, 0.65)":"rgba(0, 0, 0, 0.65)"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),g=n(35999),x=n(32746),v=function(e){var t=e.TOCData,n=e.courseData,a=e.chapterData,o=e.location,i=(0,r.useState)(""),l=i[0],c=i[1],u=(0,r.useState)(!1),m=u[0],v=u[1],b=t.filter((function(e){return e.fields.section===d(a)})).map((function(e){return e.fields.chapter}));return(0,r.useEffect)((function(){"learning-paths"===o.pathname.split("/")[2]&&c(f(o))}),[o.pathname]),r.createElement(h,null,r.createElement("div",{className:"chapter-back"},r.createElement(s.Link,{to:"/"+n.fields.slug},r.createElement(p.P,null),r.createElement("h4",null,n.frontmatter.courseTitle)),r.createElement("div",{className:"toc-toggle-btn"},m?r.createElement(g.Q,{className:"toc-menu-icon",onClick:function(){v(!m)}}):r.createElement(x.E,{className:"toc-menu-icon",onClick:function(){v(!m)}}))),r.createElement("div",{className:"toc-list"},r.createElement("ul",{className:"toc-ul "+(m?"toc-ul-open":"")},b.map((function(e){return r.createElement("li",{key:e,className:e===l?"active-link":""},r.createElement("p",{className:"toc-item",key:e},r.createElement(s.Link,{to:"/learn/learning-paths/"+a.fields.learnpath+"/"+a.fields.course+"/"+d(a)+"/"+e+"/"},(t=e.split("-").join(" "),""+t.charAt(0).toUpperCase()+t.slice(1)))));var t})))))},b=n(25679),y=a.default.div.withConfig({displayName:"chaptersstyle__ChapterWrapper",componentId:"sc-mw2rek-0"})(["\n\n    margin: 5rem auto;\n    h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n    }\n    .service-mesh-switcher {\n      display: flex;\n      padding: 0.75rem 1.5rem 1.5rem;;\n      align-items: center;\n    }\n\n    .service-mesh-image {\n        width: 2.75rem;\n        margin-right: 1rem;\n        border-radius: 5px;\n        a {\n            display: block;\n            padding: 0.1rem 0.35rem;\n            text-align: center;\n        }\n        .old-gatsby-image-wrapper {\n            img {\n                max-height: 2.15rem;\n                vertical-align: top;\n            }\n        }\n    }\n\n    .service-mesh-image-active {\n        border: 2px solid rgb(0, 179, 159);\n    }\n\n    .chapter-container {\n        @media (min-width: 576px) {\n            max-width: 100%;\n        }\n        @media (min-width: 1200px) {\n            max-width: 1270px; \n        }\n    }\n    .chapter-data {\n        border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);\n        padding-bottom: 3rem;\n        .chapter-heading {\n            margin-bottom: 1.5rem;\n        }\n    }\n    .toc-switcher-parent-div{\n        position: sticky;\n        top: 10rem;\n        left: 0;\n    }\n"]),w=n(42109),E=n(63689),_=a.default.div.withConfig({displayName:"paginatestyle__PaginationWrapper",componentId:"sc-1gpumwi-0"})(["\n    margin: 3rem auto;\n    padding: 1rem;\n    box-shadow: 0 5px 16px 1px rgba(0, 0, 0, 0.1);\n\n    .next-chapter {\n        filter: invert(0.5);\n        font-weight: 600;\n    }\n    .paginate-section {\n        margin-top: 0.5rem;\n        display: flex;\n\n        .next-chapter-heading {\n            flex: 0 0 70%;\n            align-self: center;\n            font-size: 1.6rem;\n        }\n        .chapter-link {\n            flex: 0 0 30%;\n            text-align: center;\n        }\n    }\n\n    @media (max-width: 850px) {\n        .next-chapter-btn {\n            min-width: 100%;\n        }\n    }\n\n    @media (max-width: 510px) {\n        .paginate-section {\n            .next-chapter-heading {\n                flex: 0 0 60%;\n            }\n            .chapter-link {\n                flex: 0 0 40%;\n                text-align: center;\n            }\n        }\n    }\n\n    @media (max-width: 425px) {\n        .paginate-section {\n            flex-direction: column;\n\n            .next-chapter-heading {\n                margin-bottom: 1rem;\n                margin-top: 1rem;\n            }\n        }\n    }\n"]),T=(a.default.div.withConfig({displayName:"paginatestyle__QuizWrapper",componentId:"sc-1gpumwi-1"})(["\n    display: flex;\n    justify-content: center;\n    padding-top: 2rem;\n"]),function(e){var t=e.TOCData,n=e.chapterData,a=e.location,o=(0,r.useState)(""),i=o[0],l=o[1],s=t.filter((function(e){return e.fields.section===d(n)})).map((function(e){return e.fields.chapter}));(0,r.useEffect)((function(){"learning-paths"===a.pathname.split("/")[2]&&l(f(a))}),[a.pathname]);var c=s.indexOf(i),u="",m="";if(c+1<=s.length-1){u=s[c+1];for(var p=0;p<t.length;p++)if(t[p].fields.chapter===u&&t[p].fields.section===d(n)){m=t[p].frontmatter.chapterTitle;break}}return""!==u?r.createElement(_,null,r.createElement("h4",{className:"next-chapter"},"NEXT CHAPTER"),r.createElement("div",{className:"paginate-section"},r.createElement("h3",{className:"next-chapter-heading"},m),r.createElement("div",{className:"chapter-link"},r.createElement(E.default,{secondary:!0,title:"Next Chapter",className:"next-chapter-btn",url:"/learn/learning-paths/"+n.fields.learnpath+"/"+n.fields.course+"/"+d(n)+"/"+u+"/",external:!1})))):null}),C=a.default.div.withConfig({displayName:"quizmodalstyle__QuizContainerWrapper",componentId:"sc-1gayzes-0"})(["\n    margin: 3rem auto;\n    padding: 1rem;\n\n    .login-form{\n        display:flex;\n        flex-direction: column;\n        width: 80%;\n        margin: 0 auto;\n    }\n\n    .title{\n        text-align: center;\n        margin-bottom: 2rem;\n    }\n\n    .form-name {\n        font-weight: 600;\n        margin: 20px 0px 5px 3px;\n        display: block;\n    }\n\n    .text-field {\n        width: 100%;\n        border: 1px solid black;\n        border-radius: 10px;\n        padding: 1rem .5rem;\n        font-size: .9rem;\n    }\n\n    .text-field:focus {\n      border: 2px solid #00B39F;\n    }\n\n    .btn {\n        margin: 40px 0;\n        align-self: center;\n        width: 6rem;\n    }\n\n    @media only screen and (max-width: 750px) {\n        .login-form {\n          width: 100%;\n        }\n    }\n"]),S=n(75708);function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return t&&z(e.prototype,t),n&&z(e,n),e}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return q(this,n)}}function A(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),a=r?r[1]:"",o=r?r[3]:"",i=r?r[2]:n,l=i.length>=t?i:(A(Array(t)).map((function(){return"0"})).join("")+i).slice(-1*t);return"".concat(a).concat(l).concat(o)}var R={daysInHours:!1,zeroPadTime:2};function L(e,t){var n=e.days,r=e.hours,a=e.minutes,o=e.seconds,i=Object.assign(Object.assign({},R),t),l=i.daysInHours,s=i.zeroPadTime,c=i.zeroPadDays,u=void 0===c?s:c,m=Math.min(2,s),p=l?j(r+24*n,s):j(r,m);return{days:l?"":j(n,u),hours:p,minutes:j(a,m),seconds:j(o,m)}}var Q=function(e){N(n,e);var t=M(n);function n(){var e;return k(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return D(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component),F=function(e){N(n,e);var t=M(n);function n(e){var a;if(k(this,n),(a=t.call(this,e)).mounted=!1,a.initialTimestamp=a.calcOffsetStartTimestamp(),a.offsetStartTimestamp=a.props.autoStart?0:a.initialTimestamp,a.offsetTime=0,a.legacyMode=!1,a.legacyCountdownRef=(0,r.createRef)(),a.tick=function(){var e=a.calcTimeDelta(),t=e.completed&&!a.props.overtime?void 0:a.props.onTick;a.setTimeDeltaState(e,void 0,t)},a.start=function(){if(!a.isStarted()){var e=a.offsetStartTimestamp;a.offsetStartTimestamp=0,a.offsetTime+=e?a.calcOffsetStartTimestamp()-e:0;var t=a.calcTimeDelta();a.setTimeDeltaState(t,"STARTED",a.props.onStart),a.props.controlled||t.completed&&!a.props.overtime||(a.clearTimer(),a.interval=window.setInterval(a.tick,a.props.intervalDelay))}},a.pause=function(){a.isPaused()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.setTimeDeltaState(a.state.timeDelta,"PAUSED",a.props.onPause))},a.stop=function(){a.isStopped()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.offsetTime=a.offsetStartTimestamp-a.initialTimestamp,a.setTimeDeltaState(a.calcTimeDelta(),"STOPPED",a.props.onStop))},a.isStarted=function(){return a.isStatus("STARTED")},a.isPaused=function(){return a.isStatus("PAUSED")},a.isStopped=function(){return a.isStatus("STOPPED")},a.isCompleted=function(){return a.isStatus("COMPLETED")},a.handleOnComplete=function(e){a.props.onComplete&&a.props.onComplete(e)},e.date){var o=a.calcTimeDelta();a.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else a.legacyMode=!0;return a}return D(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,a=e.controlled,o=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,a=void 0===r?Date.now:r,o=n.precision,i=void 0===o?0:o,l=n.controlled,s=n.offsetTime,c=void 0===s?0:s,u=n.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,l||(t+=c);var m=l?t:t-a(),p=Math.min(20,Math.max(0,i)),d=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(p))),f=Math.abs(d)/1e3;return{total:d,days:Math.floor(f/86400),hours:Math.floor(f/3600%24),minutes:Math.floor(f/60%60),seconds:Math.floor(f%60),milliseconds:Number((f%1*1e3).toFixed()),completed:d<=0}}(t,{now:n,precision:r,controlled:a,offsetTime:this.offsetTime,overtime:o})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var a;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),a=this.handleOnComplete);return this.setState((function(n){var a=t||n.status;return e.completed&&!r.props.overtime?a="COMPLETED":t||"COMPLETED"!==a||(a="STOPPED"),{timeDelta:e,status:a}}),(function(){n&&n(r.state.timeDelta),a&&a(r.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,r=e.zeroPadDays,a=this.state.timeDelta;return Object.assign(Object.assign({},a),{api:this.getApi(),props:this.props,formatted:L(a,{daysInHours:t,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,a=e.onComplete;return(0,r.createElement)(Q,{ref:this.legacyCountdownRef,count:t,onComplete:a},n)}var o=this.props,i=o.className,l=o.overtime,s=o.children,c=o.renderer,u=this.getRenderProps();if(c)return c(u);if(s&&this.state.timeDelta.completed&&!l)return(0,r.cloneElement)(s,{countdown:u});var m=u.formatted,p=m.days,d=m.hours,f=m.minutes,h=m.seconds;return(0,r.createElement)("span",{className:i},u.total<0?"-":"",p,p?":":"",d,":",f,":",h)}}]),n}(r.Component);F.defaultProps=Object.assign(Object.assign({},R),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});var W=F,Z=a.default.div.withConfig({displayName:"quiz-componentstyle__QuizComponentWrapper",componentId:"sc-151vegu-0"})(["\n    .instruction__container{\n        padding: 7.5rem;\n    }\n\n    .ins__main{\n        margin: 0 auto;\n        background-color: ",";\n        padding: 2rem;\n        max-width: 60rem;\n        display: flex;\n        flex-direction: column;\n        border-radius: 10px;\n    }\n\n    .ins__list{\n        padding-left: 1rem;\n        margin: 0 0 1rem 0;\n    }\n\n    .ins__list li{\n        color: white;\n        font-size: 1rem;\n        margin: 1rem;\n        font-weight: bold;\n        line-height: 2.5rem;\n    }\n\n    .ins__btn{\n        background-color: white;\n        color: ",";\n        font-weight: bold;\n        padding: 1rem;\n        border: none;\n        cursor: pointer;\n        transition: all .4s;\n        border-radius: 5px;\n        width: 15rem;\n        align-self: center;\n    }\n\n    .ins__btn:hover{\n        background-color: #f1f1f1;\n    }\n\n    .resultbox__container {        \n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 7.5rem 10rem;\n        padding-bottom: 10rem;\n    }\n    \n    .resultbox__main {\n        padding: 3rem 0;\n        box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);\n        border-radius: 5px;\n        min-width: 40rem;\n        background-color: ",";\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .resultbox__main h1 {\n        text-align: center;\n        color: white;\n        margin: 2rem 3rem;\n        font-size: 2.5rem;\n        margin-top: 0rem;\n    }\n    \n    .resultbox__main p {\n        text-align: center;\n        font-size: 1.25rem;\n        font-weight: bold;\n        color: white;\n        margin-bottom: 1.5rem;\n    }\n    \n    .resultbox__main button {\n        margin-top: 2rem;\n        // width: 12rem;\n        padding: 1rem;\n        font-size: 1rem;\n        border: 2px solid white;\n        border-radius: 5px;\n        background-color: white;\n        color: ",";\n        font-weight: bold;\n        cursor: pointer;\n    }\n\n    .quizbox__container {\n        padding: 7rem 5rem;\n        padding-top: 5rem;\n        flex-direction: column;\n      }\n      \n      .quizbox__head--container{\n        display: flex;\n        margin: 0 auto;\n        width: 50rem;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 2rem;\n\n        .timer__text{\n          color: ",";\n          border: 2px solid ",";\n          padding: 5px 8px;\n          border-radius: 10px;\n        }\n      }\n      \n      .quizbox__progress{\n        display: flex;\n        justify-content: space-between;\n        text-align: center;\n        padding: 0 .25rem;\n        padding-bottom: 0;\n      }\n\n      .quizbox__control {\n        display: flex;\n        text-align: center;\n        padding: 0 .25rem;\n        padding-bottom: 0;\n        \n        & > div {\n          flex: 1;\n          &:first-child {\n            margin-right: 1.5rem;\n          }\n        }\n      }\n      \n      .quizbox__progress--score{\n        padding: .6rem;\n        margin-top: 1.5rem;\n        background-color: ",";\n        font-size: 1rem;\n        color: white;\n        font-weight: bold;\n        border-radius: 5px;\n      }\n\n      .quizbox__progress--control {\n        cursor: pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        .quizbox__progress-control__icon {\n          width: 1.5rem;\n          height: 1.5rem;\n        }\n\n        label {\n          margin: 0 0.5rem;\n          cursor: pointer;\n        }\n      }\n      \n      .quizbox__head {\n        color: ",";\n        text-transform: uppercase;\n        letter-spacing: 3px;\n      }\n      \n      .quizbox__main {\n        width: 50rem;\n        margin: 0 auto;\n        padding: 2rem 3rem;\n        padding-bottom: 1.5rem;\n        box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);\n        border-radius: 5px;\n      }\n      \n      .quizbox__main ul {\n        display: flex;\n        flex-direction: column;\n        list-style: none;\n        padding: 1rem 0;\n        margin-top: 2rem;\n    }\n    \n    .quizbox__main li {\n        padding: .5rem 1rem;\n        border-radius: 5px;\n        border: 1px solid rgb(189, 189, 189);\n        margin-bottom: 2rem;\n        font-weight: 600;\n        font-size: 1rem;\n        text-transform: capitalize;\n        cursor: pointer;\n      }\n      \n      .quizbox__main li:hover {\n        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);\n      }\n      \n      .quizbox__main li:last-of-type {\n        margin-bottom: 0;\n      }\n      .no-ans{\n        background:transparent;\n        color: #222;\n      }\n      .ans {\n        background-color:#00b39f;\n        color:white;\n      }\n\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),V=n(89797),H=n(87958),U=function(e){var t=e.closeInstruction;return r.createElement("section",{className:"instruction__container"},r.createElement("div",{className:"ins__main"},r.createElement("ul",{className:"ins__list"},r.createElement("li",null,"The Time Limit for the quiz is 3 minutes."),r.createElement("li",null,"If you want to choose an answer, simply click on the option of your choice."),r.createElement("li",null,"The total score for the quiz is based on your responses to all questions."),r.createElement("li",null,"In case you are not satisfied with the results, you can retake the quiz until you get the best results.")),r.createElement("button",{className:"ins__btn",onClick:t},"Start")))},B=function(e){var t=e.score,n=e.resetQuiz,a=e.correct,o=e.incorrect,i=e.total;return r.createElement("div",{className:"resultbox__container"},r.createElement("div",{className:"resultbox__main"},r.createElement("h1",null,"Quiz Finished!"),r.createElement("p",null,"Your Score : ",r.createElement("span",null,t.toFixed(2),"%")),r.createElement("p",null,"Correct Answers : ",r.createElement("span",null,a)),r.createElement("p",null,"Incorrect Answers : ",r.createElement("span",null,o)),r.createElement("p",null,"Total Question : ",r.createElement("span",null,i)),r.createElement("div",{onClick:n},r.createElement(E.default,{secondary:!0,title:"Go to Learning Paths",url:"/learn/learning-paths",external:!1}))))},X=function(e){var t;return r.createElement("li",{className:(null===(t=e.pquestionToAns)||void 0===t?void 0:t.aIndex)===e.index?"ans":"no-ans",onClick:function(){setTimeout((function(){e.answerCallback(e.index)}),300),e.attemptQuestion(e.index)}},e.answerItem)},J=function(e){return r.createElement(W,{date:e.time,renderer:function(e){var t=e.minutes,n=e.seconds;return r.createElement("h3",{className:"timer__text"},t,":",n)}})},Y=function(e){var t=(0,r.useState)(null),n=t[0],a=t[1];return r.createElement("div",{className:"quizbox__container"},r.createElement("div",{className:"quizbox__head--container"},r.createElement("h2",{className:"quizbox__head"},e.title),r.createElement(J,{time:e.time})),r.createElement("div",{className:"quizbox__main"},r.createElement("h4",null,e.questionIndex,". ",e.questionDatum.prompt),r.createElement("ul",null,e.answers.map((function(t,o){return r.createElement(X,{isSelected:n===o,onClick:function(){return a(o)},answerItem:t,answerCallback:e.answerCallback,index:o,attemptQuestion:e.attemptQuestion,key:o,pquestionToAns:e.pquestionToAns})}),undefined)),r.createElement("div",{className:"quizbox__progress"},r.createElement("div",null,r.createElement("h4",null,"Attempted"),r.createElement("p",{className:"quizbox__progress--score"},e.attempted)),r.createElement("div",null,r.createElement("h4",null,"Not Attempted"),r.createElement("p",{className:"quizbox__progress--score"},e.notattempted))),r.createElement("div",{className:"quizbox__control"},r.createElement("div",null,r.createElement("div",{className:"quizbox__progress--score quizbox__progress--control",onClick:function(){e.prevQuestion(),a(null)}},r.createElement(V.A,{className:"quizbox__progress-control__icon"}),r.createElement("label",null,"Previous"))),r.createElement("div",null,r.createElement("div",{className:"quizbox__progress--score quizbox__progress--control",onClick:function(){e.nextQuestion(),a(null)}},r.createElement("label",null,e.answers.length===e.questionIndex?"Finish":"Next"," "),r.createElement(H.l,{className:"quizbox__progress-control__icon"}))))))},$=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],a=(0,r.useState)(""),o=a[0],i=a[1],l=(0,r.useState)(0),s=l[0],c=l[1],u=(0,r.useState)(0),m=u[0],p=u[1],d=(0,r.useState)(0),f=d[0],h=d[1],g=(0,r.useState)(Date.now()+18e4),x=g[0],v=g[1],b=(0,r.useState)(!0),y=b[0],w=b[1],E=(0,r.useState)([]),_=E[0],T=E[1],C=function(){setTimeout((function(){c(5)}),18e4)};(0,r.useEffect)((function(){S()}),[]);var S=function(){i("Test Quiz"),n([{prompt:"Question 1",answers:["Answer 1","Answer 2","Answer 3","Answer 4"],correct:1},{prompt:"Question 2",answers:["Answer 1","Answer 2","Answer 3","Answer 4"],correct:1},{prompt:"Question 3",answers:["Answer 1","Answer 2","Answer 3","Answer 4"],correct:1},{prompt:"Question 4",answers:["Answer 1","Answer 2","Answer 3","Answer 4"],correct:1}])},k=t[s],z=_.find((function(e){return e.qIndex==s}));if(y)return r.createElement(Z,null,r.createElement(U,{closeInstruction:function(){w(!1),v(Date.now()+18e4),C()}}));return t.length>s?r.createElement(Z,null,r.createElement(Y,{title:o,questionIndex:s+1,answers:k.answers,answerCallback:function(e){t[s]&&t[s].correct===e&&h(f+1)},questionDatum:k,pquestionToAns:z||null,time:x,attempted:m,notattempted:t.length-m,attemptQuestion:function(e){var t=s,n={qIndex:t,aIndex:e},r=_.findIndex((function(e){return e.qIndex===t}));if(r>=0){var a=[..._];a[r]=n,T(a)}else{var o=[..._];o.push(n),T(o),p(m+1)}},prevQuestion:function(){var e=s-1;0<=e&&c(e);var t=f-1;0<=t&&h(t)},nextQuestion:function(){var e=s,n=s+1;n<t.length?c(n):c(e+1)}})):r.createElement(Z,null,r.createElement(B,{resetQuiz:function(){h(0),c(0),v(Date.now()+18e4),C()},correct:f,incorrect:t.length-f,total:t.length,score:f/t.length*100}))},G=function(){var e=(0,r.useState)({}),t=(e[0],e[1]),n=(0,r.useState)(!1),a=n[0],o=n[1];return a?r.createElement($,null):r.createElement(C,null,r.createElement(m.W2,null,r.createElement("h2",{className:"title"},"Login Form"),r.createElement(S.J9,{initialValues:{firstname:"",lastname:"",email:"",password:""},onSubmit:function(e){t(e),e.email&&o(!0)}},r.createElement(S.l0,{className:"login-form",method:"post"},r.createElement("label",{htmlFor:"fname",className:"form-name"},"First Name ",r.createElement("span",{className:"required-sign"},"*")),r.createElement(S.gN,{type:"text",className:"text-field",id:"firstname",name:"firstname",maxLength:"32",pattern:"[A-Za-z]{1,32}",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),r.createElement("label",{htmlFor:"lname",className:"form-name"},"Last Name ",r.createElement("span",{className:"required-sign"},"*")),r.createElement(S.gN,{type:"text",className:"text-field",id:"lastname",name:"lastname",maxLength:"32",pattern:"[A-Za-z]{1,32}",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),r.createElement("label",{htmlFor:"email",className:"form-name"},"Email ",r.createElement("span",{className:"required-sign"},"*")),r.createElement(S.gN,{type:"email",className:"text-field",id:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),r.createElement("label",{htmlFor:"password",className:"form-name"},"Password ",r.createElement("span",{className:"required-sign"},"*")),r.createElement(S.gN,{type:"password",className:"text-field",id:"password",name:"password",minLength:"8",pattern:"[A-Za-z]{1,32}",required:!0,onInvalid:function(e){return e.target.setCustomValidity("Please fill-in this field")},onInput:function(e){return e.target.setCustomValidity("")}}),r.createElement(E.default,{secondary:!0,type:"submit",className:"btn",title:"Log In"})," ",r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null)))))},K=function(e){var t=e.chapterData,n=e.courseData,a=e.location,o=e.serviceMeshesList,i=e.TOCData,l=t.frontmatter,p=t.body,d=(0,r.useState)(!1),f=d[0],h=d[1],g=n.frontmatter.meshesYouLearn,x=i.filter((function(e){return!!e.fields.section})).map((function(e){return{section:e.fields.section,chapter:e.fields.chapter}})),E=function(e){return function(t){return function(n){var r=t.split("/");return r[e]=n,r.join("/")}}},_=E(4)(t.fields.slug);(0,r.useEffect)((function(){localStorage.setItem("bookmarkpath-"+a.pathname.split("/")[4],a.pathname)}),[]);var C,S=function(e){return t.fields.slug.split("/")[4]===e},k=function(e){return e.serviceMeshes.map((function(e,t){return r.createElement(r.Fragment,null,r.createElement("div",{className:"service-mesh-image "+(S(e.section)?"service-mesh-image-active":""),key:t},r.createElement(s.Link,{to:"/"+e.slug,"data-for":"mesh-name","data-tip":(o=e.section,o.charAt(0).toUpperCase()+o.slice(1)),className:"course",key:t},r.createElement(b.Z,Object.assign({},(n=g,a=e.section,n.find((function(e){return e.name.toLowerCase()==a}))).imagepath,{className:"docker",alt:e.section})))),r.createElement(w.Z,{id:"mesh-name",place:"bottom",effect:"solid",backgroundColor:"rgb(60,73,79)",className:"mesh-tooltip"}));var n,a,o}))};return f?r.createElement(G,null):r.createElement(y,null,r.createElement(m.W2,{className:"chapter-container"},r.createElement(m.X2,null,r.createElement(m.JX,{sm:12,md:3},r.createElement("div",{className:"toc-switcher-parent-div"},r.createElement(v,{courseData:n,TOCData:i,chapterData:t,location:a}),r.createElement("div",null,r.createElement("h4",null,"Service Meshes Available"),r.createElement("div",{className:"service-mesh-switcher"},r.createElement(k,{serviceMeshes:(C=[],o.forEach((function(e){!function(e,n){var r,a=!1;x.forEach((function(n){n.section===e.fields.section&&n.chapter===t.fields.slug.split("/")[5]&&(a=!0)})),n.map((function(e){return e.section})).includes(e.fields.section)||n.push({section:e.fields.section,slug:a?_(e.fields.section):(r=_(e.fields.section),E(5)(r))(x[0].chapter)})}(e,C)})),C)}))))),r.createElement(m.JX,{sm:12,md:9},r.createElement("div",{className:"chapter-data"},r.createElement("h1",{className:"chapter-heading"},l.chapterTitle),r.createElement(u.Iv,null,r.createElement(c.MDXRenderer,null,p))),r.createElement(T,{TOCData:i,chapterData:t,location:a,showQuizModal:function(){return h(!0)}})))))},ee=n(42308),te=n(35085),ne=n(38001),re=function(e){var t=e.data,n=e.location,s=t.TOC.nodes.sort((function(e,t){var n,r;return(null!==(n=e.frontmatter)&&void 0!==n&&n.order?e.frontmatter.order:100)-(null!==(r=t.frontmatter)&&void 0!==r&&r.order?t.frontmatter.order:100)})),c=(0,r.useState)(),m=c[0],p=c[1];return r.createElement(a.ThemeProvider,{theme:"dark"===m?ne.k:ne.Z},r.createElement(o.Z,null,r.createElement(te.Z,null),r.createElement(i.Z,{title:t.chapter.frontmatter.chapterTitle,canonical:"https://layer5.io/learn/learning-paths"}),r.createElement(l.Z,{theme:m,themeSetter:function(e){p(e)}}),r.createElement(u.ZP,null,r.createElement(K,{chapterData:t.chapter,TOCData:s,courseData:t.course.nodes[0],location:n,serviceMeshesList:t.serviceMeshesList.nodes})),r.createElement(ee.default,null)))}},63405:function(e,t,n){var r=n(73897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,n){var r=n(6015),a=n(69617);function o(t,n,i){return a()?(e.exports=o=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},38416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},69617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(63405),a=n(79498),o=n(86116),i=n(42281);e.exports=function(e){return r(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-learn-chapter-js-2573fb3b62b81d897478.js.map