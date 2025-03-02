"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{1680:function(e,u,D){function t(){return(t=Object.assign?Object.assign.bind():function(e){for(var u=1;u<arguments.length;u++){var D=arguments[u];for(var t in D)({}).hasOwnProperty.call(D,t)&&(e[t]=D[t])}return e}).apply(null,arguments)}D.d(u,{z:function(){return b}});var n=D(9285),o=D(2265),a=D(1448),i=Object.defineProperty,r=(e,u,D)=>u in e?i(e,u,{enumerable:!0,configurable:!0,writable:!0,value:D}):e[u]=D,s=(e,u,D)=>(r(e,"symbol"!=typeof u?u+"":u,D),D);class l{constructor(){s(this,"_listeners")}addEventListener(e,u){void 0===this._listeners&&(this._listeners={});let D=this._listeners;void 0===D[e]&&(D[e]=[]),-1===D[e].indexOf(u)&&D[e].push(u)}hasEventListener(e,u){if(void 0===this._listeners)return!1;let D=this._listeners;return void 0!==D[e]&&-1!==D[e].indexOf(u)}removeEventListener(e,u){if(void 0===this._listeners)return;let D=this._listeners[e];if(void 0!==D){let e=D.indexOf(u);-1!==e&&D.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let u=this._listeners[e.type];if(void 0!==u){e.target=this;let D=u.slice(0);for(let u=0,t=D.length;u<t;u++)D[u].call(this,e);e.target=null}}}var c=Object.defineProperty,F=(e,u,D)=>u in e?c(e,u,{enumerable:!0,configurable:!0,writable:!0,value:D}):e[u]=D,E=(e,u,D)=>(F(e,"symbol"!=typeof u?u+"":u,D),D);let C=new a.Ray,h=new a.Plane,p=Math.cos(Math.PI/180*70),m=(e,u)=>(e%u+u)%u;class d extends l{constructor(e,u){super(),E(this,"object"),E(this,"domElement"),E(this,"enabled",!0),E(this,"target",new a.Vector3),E(this,"minDistance",0),E(this,"maxDistance",1/0),E(this,"minZoom",0),E(this,"maxZoom",1/0),E(this,"minPolarAngle",0),E(this,"maxPolarAngle",Math.PI),E(this,"minAzimuthAngle",-1/0),E(this,"maxAzimuthAngle",1/0),E(this,"enableDamping",!1),E(this,"dampingFactor",.05),E(this,"enableZoom",!0),E(this,"zoomSpeed",1),E(this,"enableRotate",!0),E(this,"rotateSpeed",1),E(this,"enablePan",!0),E(this,"panSpeed",1),E(this,"screenSpacePanning",!0),E(this,"keyPanSpeed",7),E(this,"zoomToCursor",!1),E(this,"autoRotate",!1),E(this,"autoRotateSpeed",2),E(this,"reverseOrbit",!1),E(this,"reverseHorizontalOrbit",!1),E(this,"reverseVerticalOrbit",!1),E(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),E(this,"mouseButtons",{LEFT:a.MOUSE.ROTATE,MIDDLE:a.MOUSE.DOLLY,RIGHT:a.MOUSE.PAN}),E(this,"touches",{ONE:a.TOUCH.ROTATE,TWO:a.TOUCH.DOLLY_PAN}),E(this,"target0"),E(this,"position0"),E(this,"zoom0"),E(this,"_domElementKeyEvents",null),E(this,"getPolarAngle"),E(this,"getAzimuthalAngle"),E(this,"setPolarAngle"),E(this,"setAzimuthalAngle"),E(this,"getDistance"),E(this,"getZoomScale"),E(this,"listenToKeyEvents"),E(this,"stopListenToKeyEvents"),E(this,"saveState"),E(this,"reset"),E(this,"update"),E(this,"connect"),E(this,"dispose"),E(this,"dollyIn"),E(this,"dollyOut"),E(this,"getScale"),E(this,"setScale"),this.object=e,this.domElement=u,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=e=>{let u=m(e,2*Math.PI),t=l.phi;t<0&&(t+=2*Math.PI),u<0&&(u+=2*Math.PI);let n=Math.abs(u-t);2*Math.PI-n<n&&(u<t?u+=2*Math.PI:t+=2*Math.PI),c.phi=u-t,D.update()},this.setAzimuthalAngle=e=>{let u=m(e,2*Math.PI),t=l.theta;t<0&&(t+=2*Math.PI),u<0&&(u+=2*Math.PI);let n=Math.abs(u-t);2*Math.PI-n<n&&(u<t?u+=2*Math.PI:t+=2*Math.PI),c.theta=u-t,D.update()},this.getDistance=()=>D.object.position.distanceTo(D.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{D.target0.copy(D.target),D.position0.copy(D.object.position),D.zoom0=D.object.zoom},this.reset=()=>{D.target.copy(D.target0),D.object.position.copy(D.position0),D.object.zoom=D.zoom0,D.object.updateProjectionMatrix(),D.dispatchEvent(t),D.update(),r=i.NONE},this.update=(()=>{let u=new a.Vector3,n=new a.Vector3(0,1,0),o=new a.Quaternion().setFromUnitVectors(e.up,n),E=o.clone().invert(),m=new a.Vector3,b=new a.Quaternion,f=2*Math.PI;return function(){let g=D.object.position;o.setFromUnitVectors(e.up,n),E.copy(o).invert(),u.copy(g).sub(D.target),u.applyQuaternion(o),l.setFromVector3(u),D.autoRotate&&r===i.NONE&&S(2*Math.PI/60/60*D.autoRotateSpeed),D.enableDamping?(l.theta+=c.theta*D.dampingFactor,l.phi+=c.phi*D.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let A=D.minAzimuthAngle,v=D.maxAzimuthAngle;isFinite(A)&&isFinite(v)&&(A<-Math.PI?A+=f:A>Math.PI&&(A-=f),v<-Math.PI?v+=f:v>Math.PI&&(v-=f),A<=v?l.theta=Math.max(A,Math.min(v,l.theta)):l.theta=l.theta>(A+v)/2?Math.max(A,l.theta):Math.min(v,l.theta)),l.phi=Math.max(D.minPolarAngle,Math.min(D.maxPolarAngle,l.phi)),l.makeSafe(),!0===D.enableDamping?D.target.addScaledVector(d,D.dampingFactor):D.target.add(d),D.zoomToCursor&&w||D.object.isOrthographicCamera?l.radius=V(l.radius):l.radius=V(l.radius*F),u.setFromSpherical(l),u.applyQuaternion(E),g.copy(D.target).add(u),D.object.matrixAutoUpdate||D.object.updateMatrix(),D.object.lookAt(D.target),!0===D.enableDamping?(c.theta*=1-D.dampingFactor,c.phi*=1-D.dampingFactor,d.multiplyScalar(1-D.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let B=!1;if(D.zoomToCursor&&w){let t=null;if(D.object instanceof a.PerspectiveCamera&&D.object.isPerspectiveCamera){let e=u.length();t=V(e*F);let n=e-t;D.object.position.addScaledVector(T,n),D.object.updateMatrixWorld()}else if(D.object.isOrthographicCamera){let e=new a.Vector3(j.x,j.y,0);e.unproject(D.object),D.object.zoom=Math.max(D.minZoom,Math.min(D.maxZoom,D.object.zoom/F)),D.object.updateProjectionMatrix(),B=!0;let n=new a.Vector3(j.x,j.y,0);n.unproject(D.object),D.object.position.sub(n).add(e),D.object.updateMatrixWorld(),t=u.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),D.zoomToCursor=!1;null!==t&&(D.screenSpacePanning?D.target.set(0,0,-1).transformDirection(D.object.matrix).multiplyScalar(t).add(D.object.position):(C.origin.copy(D.object.position),C.direction.set(0,0,-1).transformDirection(D.object.matrix),Math.abs(D.object.up.dot(C.direction))<p?e.lookAt(D.target):(h.setFromNormalAndCoplanarPoint(D.object.up,D.target),C.intersectPlane(h,D.target))))}else D.object instanceof a.OrthographicCamera&&D.object.isOrthographicCamera&&(B=1!==F)&&(D.object.zoom=Math.max(D.minZoom,Math.min(D.maxZoom,D.object.zoom/F)),D.object.updateProjectionMatrix());return F=1,w=!1,!!(B||m.distanceToSquared(D.object.position)>s||8*(1-b.dot(D.object.quaternion))>s)&&(D.dispatchEvent(t),m.copy(D.object.position),b.copy(D.object.quaternion),B=!1,!0)}})(),this.connect=e=>{D.domElement=e,D.domElement.style.touchAction="none",D.domElement.addEventListener("contextmenu",eu),D.domElement.addEventListener("pointerdown",q),D.domElement.addEventListener("pointercancel",$),D.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,u,t,n,o,a;D.domElement&&(D.domElement.style.touchAction="auto"),null==(e=D.domElement)||e.removeEventListener("contextmenu",eu),null==(u=D.domElement)||u.removeEventListener("pointerdown",q),null==(t=D.domElement)||t.removeEventListener("pointercancel",$),null==(n=D.domElement)||n.removeEventListener("wheel",J),null==(o=D.domElement)||o.ownerDocument.removeEventListener("pointermove",Q),null==(a=D.domElement)||a.ownerDocument.removeEventListener("pointerup",$),null!==D._domElementKeyEvents&&D._domElementKeyEvents.removeEventListener("keydown",ee)};let D=this,t={type:"change"},n={type:"start"},o={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,s=1e-6,l=new a.Spherical,c=new a.Spherical,F=1,d=new a.Vector3,b=new a.Vector2,f=new a.Vector2,g=new a.Vector2,A=new a.Vector2,v=new a.Vector2,B=new a.Vector2,y=new a.Vector2,O=new a.Vector2,P=new a.Vector2,T=new a.Vector3,j=new a.Vector2,w=!1,M=[],x={};function L(){return Math.pow(.95,D.zoomSpeed)}function S(e){D.reverseOrbit||D.reverseHorizontalOrbit?c.theta+=e:c.theta-=e}function N(e){D.reverseOrbit||D.reverseVerticalOrbit?c.phi+=e:c.phi-=e}let I=(()=>{let e=new a.Vector3;return function(u,D){e.setFromMatrixColumn(D,0),e.multiplyScalar(-u),d.add(e)}})(),_=(()=>{let e=new a.Vector3;return function(u,t){!0===D.screenSpacePanning?e.setFromMatrixColumn(t,1):(e.setFromMatrixColumn(t,0),e.crossVectors(D.object.up,e)),e.multiplyScalar(u),d.add(e)}})(),k=(()=>{let e=new a.Vector3;return function(u,t){let n=D.domElement;if(n&&D.object instanceof a.PerspectiveCamera&&D.object.isPerspectiveCamera){let o=D.object.position;e.copy(o).sub(D.target);let a=e.length();I(2*u*(a*=Math.tan(D.object.fov/2*Math.PI/180))/n.clientHeight,D.object.matrix),_(2*t*a/n.clientHeight,D.object.matrix)}else n&&D.object instanceof a.OrthographicCamera&&D.object.isOrthographicCamera?(I(u*(D.object.right-D.object.left)/D.object.zoom/n.clientWidth,D.object.matrix),_(t*(D.object.top-D.object.bottom)/D.object.zoom/n.clientHeight,D.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),D.enablePan=!1)}})();function R(e){D.object instanceof a.PerspectiveCamera&&D.object.isPerspectiveCamera||D.object instanceof a.OrthographicCamera&&D.object.isOrthographicCamera?F=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),D.enableZoom=!1)}function z(e){if(!D.zoomToCursor||!D.domElement)return;w=!0;let u=D.domElement.getBoundingClientRect(),t=e.clientX-u.left,n=e.clientY-u.top,o=u.width,a=u.height;j.x=t/o*2-1,j.y=-(n/a*2)+1,T.set(j.x,j.y,1).unproject(D.object).sub(D.object.position).normalize()}function V(e){return Math.max(D.minDistance,Math.min(D.maxDistance,e))}function H(e){b.set(e.clientX,e.clientY)}function Y(e){A.set(e.clientX,e.clientY)}function U(){if(1==M.length)b.set(M[0].pageX,M[0].pageY);else{let e=.5*(M[0].pageX+M[1].pageX),u=.5*(M[0].pageY+M[1].pageY);b.set(e,u)}}function X(){if(1==M.length)A.set(M[0].pageX,M[0].pageY);else{let e=.5*(M[0].pageX+M[1].pageX),u=.5*(M[0].pageY+M[1].pageY);A.set(e,u)}}function Z(){let e=M[0].pageX-M[1].pageX,u=M[0].pageY-M[1].pageY;y.set(0,Math.sqrt(e*e+u*u))}function K(e){if(1==M.length)f.set(e.pageX,e.pageY);else{let u=et(e),D=.5*(e.pageX+u.x),t=.5*(e.pageY+u.y);f.set(D,t)}g.subVectors(f,b).multiplyScalar(D.rotateSpeed);let u=D.domElement;u&&(S(2*Math.PI*g.x/u.clientHeight),N(2*Math.PI*g.y/u.clientHeight)),b.copy(f)}function W(e){if(1==M.length)v.set(e.pageX,e.pageY);else{let u=et(e),D=.5*(e.pageX+u.x),t=.5*(e.pageY+u.y);v.set(D,t)}B.subVectors(v,A).multiplyScalar(D.panSpeed),k(B.x,B.y),A.copy(v)}function G(e){var u;let t=et(e),n=e.pageX-t.x,o=e.pageY-t.y;O.set(0,Math.sqrt(n*n+o*o)),P.set(0,Math.pow(O.y/y.y,D.zoomSpeed)),u=P.y,R(F/u),y.copy(O)}function q(e){var u,t;!1!==D.enabled&&(0===M.length&&(null==(u=D.domElement)||u.ownerDocument.addEventListener("pointermove",Q),null==(t=D.domElement)||t.ownerDocument.addEventListener("pointerup",$)),M.push(e),"touch"===e.pointerType?function(e){switch(eD(e),M.length){case 1:switch(D.touches.ONE){case a.TOUCH.ROTATE:if(!1===D.enableRotate)return;U(),r=i.TOUCH_ROTATE;break;case a.TOUCH.PAN:if(!1===D.enablePan)return;X(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(D.touches.TWO){case a.TOUCH.DOLLY_PAN:if(!1===D.enableZoom&&!1===D.enablePan)return;D.enableZoom&&Z(),D.enablePan&&X(),r=i.TOUCH_DOLLY_PAN;break;case a.TOUCH.DOLLY_ROTATE:if(!1===D.enableZoom&&!1===D.enableRotate)return;D.enableZoom&&Z(),D.enableRotate&&U(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&D.dispatchEvent(n)}(e):function(e){let u;switch(e.button){case 0:u=D.mouseButtons.LEFT;break;case 1:u=D.mouseButtons.MIDDLE;break;case 2:u=D.mouseButtons.RIGHT;break;default:u=-1}switch(u){case a.MOUSE.DOLLY:if(!1===D.enableZoom)return;z(e),y.set(e.clientX,e.clientY),r=i.DOLLY;break;case a.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===D.enablePan)return;Y(e),r=i.PAN}else{if(!1===D.enableRotate)return;H(e),r=i.ROTATE}break;case a.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===D.enableRotate)return;H(e),r=i.ROTATE}else{if(!1===D.enablePan)return;Y(e),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&D.dispatchEvent(n)}(e))}function Q(e){!1!==D.enabled&&("touch"===e.pointerType?function(e){switch(eD(e),r){case i.TOUCH_ROTATE:if(!1===D.enableRotate)return;K(e),D.update();break;case i.TOUCH_PAN:if(!1===D.enablePan)return;W(e),D.update();break;case i.TOUCH_DOLLY_PAN:if(!1===D.enableZoom&&!1===D.enablePan)return;D.enableZoom&&G(e),D.enablePan&&W(e),D.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===D.enableZoom&&!1===D.enableRotate)return;D.enableZoom&&G(e),D.enableRotate&&K(e),D.update();break;default:r=i.NONE}}(e):function(e){if(!1!==D.enabled)switch(r){case i.ROTATE:if(!1===D.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),g.subVectors(f,b).multiplyScalar(D.rotateSpeed);let u=D.domElement;u&&(S(2*Math.PI*g.x/u.clientHeight),N(2*Math.PI*g.y/u.clientHeight)),b.copy(f),D.update()}(e);break;case i.DOLLY:var u,t;if(!1===D.enableZoom)return;(O.set(e.clientX,e.clientY),P.subVectors(O,y),P.y>0)?(u=L(),R(F/u)):P.y<0&&(t=L(),R(F*t)),y.copy(O),D.update();break;case i.PAN:if(!1===D.enablePan)return;v.set(e.clientX,e.clientY),B.subVectors(v,A).multiplyScalar(D.panSpeed),k(B.x,B.y),A.copy(v),D.update()}}(e))}function $(e){var u,t,n;(function(e){delete x[e.pointerId];for(let u=0;u<M.length;u++)if(M[u].pointerId==e.pointerId){M.splice(u,1);return}})(e),0===M.length&&(null==(u=D.domElement)||u.releasePointerCapture(e.pointerId),null==(t=D.domElement)||t.ownerDocument.removeEventListener("pointermove",Q),null==(n=D.domElement)||n.ownerDocument.removeEventListener("pointerup",$)),D.dispatchEvent(o),r=i.NONE}function J(e){if(!1!==D.enabled&&!1!==D.enableZoom&&(r===i.NONE||r===i.ROTATE)){var u,t;e.preventDefault(),D.dispatchEvent(n),(z(e),e.deltaY<0)?(u=L(),R(F*u)):e.deltaY>0&&(t=L(),R(F/t)),D.update(),D.dispatchEvent(o)}}function ee(e){!1!==D.enabled&&!1!==D.enablePan&&function(e){let u=!1;switch(e.code){case D.keys.UP:k(0,D.keyPanSpeed),u=!0;break;case D.keys.BOTTOM:k(0,-D.keyPanSpeed),u=!0;break;case D.keys.LEFT:k(D.keyPanSpeed,0),u=!0;break;case D.keys.RIGHT:k(-D.keyPanSpeed,0),u=!0}u&&(e.preventDefault(),D.update())}(e)}function eu(e){!1!==D.enabled&&e.preventDefault()}function eD(e){let u=x[e.pointerId];void 0===u&&(u=new a.Vector2,x[e.pointerId]=u),u.set(e.pageX,e.pageY)}function et(e){return x[(e.pointerId===M[0].pointerId?M[1]:M[0]).pointerId]}this.dollyIn=(e=L())=>{R(F*e),D.update()},this.dollyOut=(e=L())=>{R(F/e),D.update()},this.getScale=()=>F,this.setScale=e=>{R(e),D.update()},this.getZoomScale=()=>L(),void 0!==u&&this.connect(u),this.update()}}let b=o.forwardRef(({makeDefault:e,camera:u,regress:D,domElement:a,enableDamping:i=!0,keyEvents:r=!1,onChange:s,onStart:l,onEnd:c,...F},E)=>{let C=(0,n.D)(e=>e.invalidate),h=(0,n.D)(e=>e.camera),p=(0,n.D)(e=>e.gl),m=(0,n.D)(e=>e.events),b=(0,n.D)(e=>e.setEvents),f=(0,n.D)(e=>e.set),g=(0,n.D)(e=>e.get),A=(0,n.D)(e=>e.performance),v=u||h,B=a||m.connected||p.domElement,y=o.useMemo(()=>new d(v),[v]);return(0,n.F)(()=>{y.enabled&&y.update()},-1),o.useEffect(()=>(r&&y.connect(!0===r?B:r),y.connect(B),()=>void y.dispose()),[r,B,D,y,C]),o.useEffect(()=>{let e=e=>{C(),D&&A.regress(),s&&s(e)},u=e=>{l&&l(e)},t=e=>{c&&c(e)};return y.addEventListener("change",e),y.addEventListener("start",u),y.addEventListener("end",t),()=>{y.removeEventListener("start",u),y.removeEventListener("end",t),y.removeEventListener("change",e)}},[s,l,c,y,C,b]),o.useEffect(()=>{if(e){let e=g().controls;return f({controls:y}),()=>f({controls:e})}},[e,y]),o.createElement("primitive",t({ref:E,object:y,enableDamping:i},F))})},8909:function(e,u,D){D.d(u,{t:function(){return s}});var t=D(2265),n=D(9285),o=D(1448);let a=parseInt(o.REVISION.replace(/\D+/g,""));class i extends o.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${a>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let r=e=>new o.Vector3().setFromSpherical(new o.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),s=t.forwardRef(({radius:e=100,depth:u=50,count:D=5e3,saturation:a=0,factor:s=4,fade:l=!1,speed:c=1},F)=>{let E=t.useRef(),[C,h,p]=t.useMemo(()=>{let t=[],n=[],i=Array.from({length:D},()=>(.5+.5*Math.random())*s),l=new o.Color,c=e+u,F=u/D;for(let e=0;e<D;e++)c-=F*Math.random(),t.push(...r(c).toArray()),l.setHSL(e/D,a,.9),n.push(l.r,l.g,l.b);return[new Float32Array(t),new Float32Array(n),new Float32Array(i)]},[D,u,s,e,a]);(0,n.F)(e=>E.current&&(E.current.uniforms.time.value=e.clock.elapsedTime*c));let[m]=t.useState(()=>new i);return t.createElement("points",{ref:F},t.createElement("bufferGeometry",null,t.createElement("bufferAttribute",{attach:"attributes-position",args:[C,3]}),t.createElement("bufferAttribute",{attach:"attributes-color",args:[h,3]}),t.createElement("bufferAttribute",{attach:"attributes-size",args:[p,1]})),t.createElement("primitive",{ref:E,object:m,attach:"material",blending:o.AdditiveBlending,"uniforms-fade-value":l,depthWrite:!1,transparent:!0,vertexColors:!0}))})},8986:function(e,u,D){D.d(u,{z:function(){return s}});var t,n,o=/(?:^\s+|\s+$)/g,a=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function i(e,u,D,t,n){for(var o,a=e.firstChild,i=[];a;)3===a.nodeType?(o=(a.nodeValue+"").replace(/^\n+/g,""),t||(o=o.replace(/\s+/g," ")),i.push.apply(i,r(o,u,D,t,n))):"br"===(a.nodeName+"").toLowerCase()?i[i.length-1]+="<br>":i.push(a.outerHTML),a=a.nextSibling;if(!n)for(o=i.length;o--;)"&"===i[o]&&i.splice(o,1,"&amp;");return i}function r(e,u,D,t,n){if(e+="",D&&(e=e.trim?e.trim():e.replace(o,"")),u&&""!==u)return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(u);for(var i,r,s=[],l=e.length,c=0;c<l;c++)((r=e.charAt(c)).charCodeAt(0)>=55296&&56319>=r.charCodeAt(0)||e.charCodeAt(c+1)>=65024&&65039>=e.charCodeAt(c+1))&&(i=((e.substr(c,12).split(a)||[])[1]||"").length||2,r=e.substr(c,i),s.emoji=1,c+=i-1),s.push(n?r:">"===r?"&gt;":"<"===r?"&lt;":t&&" "===r&&(" "===e.charAt(c-1)||" "===e.charAt(c+1))?"&nbsp;":r);return s}var s={version:"3.12.7",name:"text",init:function(e,u,D){"object"!=typeof u&&(u={value:u});var t,o,a,r,s,l,c,F,E=e.nodeName.toUpperCase(),C=u,h=C.newClass,p=C.oldClass,m=C.preserveSpaces,d=C.rtl,b=this.delimiter=u.delimiter||"",f=this.fillChar=u.fillChar||(u.padSpace?"&nbsp;":"");if(this.svg=e.getBBox&&("TEXT"===E||"TSPAN"===E),!("innerHTML"in e)&&!this.svg)return!1;if(this.target=e,!("value"in u)){this.text=this.original=[""];return}for(a=i(e,b,!1,m,this.svg),n||(n=document.createElement("div")),n.innerHTML=u.value,o=i(n,b,!1,m,this.svg),this.from=D._from,(this.from||d)&&!(d&&this.from)&&(E=a,a=o,o=E),this.hasClass=!!(h||p),this.newClass=d?p:h,this.oldClass=d?h:p,t=(E=a.length-o.length)<0?a:o,E<0&&(E=-E);--E>-1;)t.push(f);if("diff"===u.type){for(E=0,r=0,s=[],l=[],c="";E<o.length;E++)(F=o[E])===a[E]?c+=F:(s[r]=c+F,l[r++]=c+a[E],c="");o=s,a=l,c&&(o.push(c),a.push(c))}u.speed&&D.duration(Math.min(.05/u.speed*t.length,u.maxDuration||9999)),this.rtl=d,this.original=a,this.text=o,this._props.push("text")},render:function(e,u){e>1?e=1:e<0&&(e=0),u.from&&(e=1-e);var D,t,n,o=u.text,a=u.hasClass,i=u.newClass,r=u.oldClass,s=u.delimiter,l=u.target,c=u.fillChar,F=u.original,E=u.rtl,C=o.length,h=(E?1-e:e)*C+.5|0;a&&e?(D=i&&h,t=r&&h!==C,n=(D?"<span class='"+i+"'>":"")+o.slice(0,h).join(s)+(D?"</span>":"")+(t?"<span class='"+r+"'>":"")+s+F.slice(h).join(s)+(t?"</span>":"")):n=o.slice(0,h).join(s)+s+F.slice(h).join(s),u.svg?l.textContent=n:l.innerHTML="&nbsp;"===c&&~n.indexOf("  ")?n.split("  ").join("&nbsp;&nbsp;"):n}};s.splitInnerHTML=i,s.emojiSafeSplit=r,s.getText=function e(u){var D=u.nodeType,t="";if(1===D||9===D||11===D){if("string"==typeof u.textContent)return u.textContent;for(u=u.firstChild;u;u=u.nextSibling)t+=e(u)}else if(3===D||4===D)return u.nodeValue;return t},(t||"undefined"!=typeof window&&(t=window.gsap)&&t.registerPlugin&&t)&&t.registerPlugin(s)}}]);