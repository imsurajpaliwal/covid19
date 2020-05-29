(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[4],{563:function(e,t,a){"use strict";a.r(t);var r=a(32),n=a(534),s=a(182),i=a.n(s),l=a(85),c=a.n(l),o=a(533),u=a(527),d=a.n(u),p=a(528),m=a(0),f=a.n(m),y=a(393),h=a(394),E=a(102);function v(e){return e.properties.priority}function g(e){return!e.properties.priority}function N(e,t){var a=e[0]*Math.PI/180,r=t[0]*Math.PI/180,n=(t[1]-e[1])*Math.PI/180,s=6371e3*Math.acos(Math.sin(a)*Math.sin(r)+Math.cos(a)*Math.cos(r)*Math.cos(n));return Number((s/1e3).toFixed(2))}var b=function(e){var t=e.userLocation,a=e.userState,s=Object(m.useState)([]),l=Object(r.a)(s,2),u=l[0],b=l[1],w=Object(m.useState)(),O=Object(r.a)(w,2),j=O[0],k=O[1],S=Object(m.useState)([]),x=Object(r.a)(S,2),I=x[0],M=x[1];Object(E.a)((function(){P()}),[]);var P=Object(m.useCallback)((function(){i.a.get("https://api.covid19india.org/resources/geoResources.json").then((function(e){b(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(m.useEffect)((function(){var e,r,n,s;t&&(e=new p(d.a.geoJSON(u,{filter:v})).nearestLayer([t[1],t[0]],5),r=new p(d.a.geoJSON(u,{filter:g})).nearestLayer([t[1],t[0]],100,1e4),n=null===u||void 0===u||null===(s=u.features)||void 0===s?void 0:s.filter((function(e){return"PAN India"===e.properties.state||e.properties.state.includes("PAN")&&e.properties.state.includes(a)})));var i={name:"NearestK-Essentials",type:"FeatureCollection",features:[]};if(e){var l=0;for(l=0;l<e.length;l++)i.features.push({type:"Feature",geometry:{type:"Point",coordinates:e[l].layer.feature.geometry.coordinates},properties:{name:e[l].layer.feature.properties.name,desc:e[l].layer.feature.properties.desc,addr:e[l].layer.feature.properties.addr,phone:e[l].layer.feature.properties.phone,contact:e[l].layer.feature.properties.contact,icon:e[l].layer.feature.properties.icon,recordid:e[l].layer.feature.properties.recordid,dist:N(t,e[l].layer.feature.geometry.coordinates.reverse())}})}if(r){var c=0;for(c=0;c<r.length;c++)i.features.push({type:"Feature",geometry:{type:"Point",coordinates:r[c].layer.feature.geometry.coordinates},properties:{name:r[c].layer.feature.properties.name,desc:r[c].layer.feature.properties.desc,addr:r[c].layer.feature.properties.addr,phone:r[c].layer.feature.properties.phone,contact:r[c].layer.feature.properties.contact,icon:r[c].layer.feature.properties.icon,recordid:r[c].layer.feature.properties.recordid,dist:N(t,r[c].layer.feature.geometry.coordinates.reverse())}})}if(n){var o=0;for(o=0;o<n.length;o++)i.features.push(n[o])}k(i)}),[u,t,a]),Object(m.useEffect)((function(){var e={};j&&j.features.map((function(e){var t;return null===e||void 0===e||null===(t=e.properties)||void 0===t?void 0:t.icon})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map).forEach((function(t,a,r){var n={count:t,isSelected:!0};e[a]=n})),M(e)}),[j]),j?f.a.createElement("div",{className:"results fadeInUp",style:{animationDelay:"0.5s"}},f.a.createElement("div",{className:"labels"},f.a.createElement(n.c,null,Object.keys(I).map((function(e){return f.a.createElement(n.b,{variant:"xl",key:e,className:c()("label-item",{"is-selected":I[e].isSelected}),onClick:function(){return function(e,t){M(Object(o.a)((function(a){a[e].isSelected=t})))}(e,!I[e].isSelected)}},e,f.a.createElement(n.a,{className:"counter"},I[e].count))})))),null===j||void 0===j?void 0:j.features.filter((function(e){return Object.keys(I).filter((function(e){return!0===I[e].isSelected})).includes(e.properties.icon)&&e.properties.dist})).map((function(e,t){return f.a.createElement("div",{key:e.properties.recordid?e.properties.recordid:t,className:"essential-result"},f.a.createElement("div",{className:"result-top"},f.a.createElement("div",{className:"result-top-left"},f.a.createElement("div",{className:"result-name"},e.properties.name),f.a.createElement("div",{className:"result-location"},e.properties.addr),e.properties.dist&&f.a.createElement("div",{className:"result-distance"},e.properties.dist+" km away")),f.a.createElement("a",{className:"result-category",href:e.properties.contact,target:"_noblank"},f.a.createElement("span",null,e.properties.icon),f.a.createElement(y.a,null))),f.a.createElement("div",{className:"result-description"},e.properties.desc),f.a.createElement("div",{className:"result-contacts"},e.properties.phone.split("\n").map((function(e){return f.a.createElement("div",{key:e,className:"result-contact"},f.a.createElement(h.a,null),f.a.createElement("a",{href:"tel:".concat(e)},e))}))))})),f.a.createElement("div",null,f.a.createElement("h3",{className:"pan-divider"},"Throughout ".concat(a," and India"))),null===j||void 0===j?void 0:j.features.filter((function(e){return Object.keys(I).filter((function(e){return!0===I[e].isSelected})).includes(e.properties.icon)&&!e.properties.dist})).map((function(e,t){return f.a.createElement("div",{key:e.properties.recordid?e.properties.recordid:t,className:"essential-result"},f.a.createElement("div",{className:"result-top"},f.a.createElement("div",{className:"result-top-left"},f.a.createElement("div",{className:"result-name"},e.properties.name),f.a.createElement("div",{className:"result-location"},e.properties.addr),e.properties.dist&&f.a.createElement("div",{className:"result-distance"},e.properties.dist+" km away")),f.a.createElement("a",{className:"result-category",href:e.properties.contact,target:"_noblank"},f.a.createElement("span",null,e.properties.icon),f.a.createElement(y.a,null))),f.a.createElement("div",{className:"result-description"},e.properties.desc),f.a.createElement("div",{className:"result-contacts"},e.properties.phone.split("\n").map((function(e){return f.a.createElement("div",{key:e,className:"result-contact"},f.a.createElement(h.a,null),f.a.createElement("a",{href:"tel:".concat(e)},e))}))))}))):null},w=a(217),O=a(521),j=a(551),k=a(505),S=a(544);function x(){var e=Object(S.a)(),t=Object(r.a)(e,2),a=t[0],n=t[1].width;return Object(m.useEffect)((function(){}),[n]),f.a.createElement(f.a.Fragment,null,f.a.createElement("span",{ref:a,style:{width:"100%"}}),n&&f.a.createElement(w.a,{speed:1.5,width:n,height:325,viewBox:"0 0 ".concat(n," 325"),position:"absolute",className:"fadeInUp"},f.a.createElement("rect",{x:n/2-60,y:"10",rx:"5",ry:"5",width:"120",height:"32"}),f.a.createElement("rect",{x:n/2+70,y:"18",rx:"100",ry:"100",width:"15",height:"15"}),f.a.createElement("rect",{x:"10",y:"80",rx:"5",ry:"5",width:"85",height:"32"}),f.a.createElement("rect",{x:"100",y:"80",rx:"5",ry:"5",width:"65",height:"32"}),f.a.createElement("rect",{x:"10",y:"130",rx:"5",ry:"5",width:n-20,height:"172"})))}t.default=function(e){var t=Object(m.useState)(null),a=Object(r.a)(t,2),n=a[0],s=a[1],l=Object(m.useState)(null),c=Object(r.a)(l,2),o=c[0],u=c[1],d=Object(m.useState)(null),p=Object(r.a)(d,2),y=p[0],h=p[1],E=function(e,t){try{i.a.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+e+"&longitude="+t+"&localityLanguage=en").then((function(e){u(e.data.locality),h(e.data.principalSubdivision)}))}catch(a){console.log(a),u("Error fetching name of your location"),h(null)}};return f.a.createElement("div",{className:"Essentials"},f.a.createElement("img",{src:"/essentials_1.svg",alt:"essentials platform",className:"fadeInUp",style:{animationDelay:"0.3s"}}),f.a.createElement("img",{src:"/essentials_2.svg",alt:"essentials woman pushing cart",className:"fadeInUp",style:{position:"absolute",animationDelay:"0.1s"}}),!n&&f.a.createElement(f.a.Fragment,null,f.a.createElement("button",{className:"button fadeInUp",style:{animationDelay:"0.6s"},onClick:function(){navigator.geolocation.getCurrentPosition((function(e){s([e.coords.latitude,e.coords.longitude]),E(e.coords.latitude,e.coords.longitude)}))}},f.a.createElement("span",null,"View Nearby Essentials"),f.a.createElement(O.a,{size:16})),f.a.createElement("div",{className:"alert fadeInUp",style:{animationDelay:"0.7s"}},f.a.createElement(j.a,{size:16}),f.a.createElement("div",{className:"alert-right is-full"},"We do not collect any location data; they're all stored \n              inside your browser and are inaccessible to us.")),f.a.createElement("div",{className:"alert fadeInUp",style:{animationDelay:"0.8s"}},f.a.createElement(j.a,{size:16}),f.a.createElement("div",{className:"alert-right is-full"},"We are a community sourced listing platform and are not associated\n              with any of the organizations listed below. Although we verify all\n              our listings, we request you to follow all the guidelines and take\n              the necessary precautions. We encourage you to report any error or\n              suspicious activity so that we can take immediate action."))),n&&!o&&f.a.createElement(x,null),o&&f.a.createElement("div",{className:"address fadeInUp"},f.a.createElement("h3",null,o+", "+y),f.a.createElement(k.a,{size:16,onClick:function(){s(null),u(null),h(null)}})),f.a.createElement("div",{className:"Search"},o&&f.a.createElement(b,{userLocation:n,userState:y})))}}}]);
//# sourceMappingURL=Essentials.04e1a0bf.chunk.js.map