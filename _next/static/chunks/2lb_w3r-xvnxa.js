(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},18967,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return R},MissingStaticPage:function(){return T},NormalizeError:function(){return p},PageNotFoundError:function(){return E},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return n},execOnce:function(){return a},getDisplayName:function(){return s},getLocationOrigin:function(){return l},getURL:function(){return f},isAbsoluteUrl:function(){return c},isResSent:function(){return v},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return y}};for(var o in i)Object.defineProperty(t,o,{enumerable:!0,get:i[o]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let r,t=!1;return(...i)=>(t||(t=!0,r=e(...i)),r)}let u=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>u.test(e);function l(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function f(){let{href:e}=window.location,r=l();return e.substring(r.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function v(e){return e.finished||e.headersSent}function m(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function d(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await d(r.Component,r.ctx)}:{};let i=await e.getInitialProps(r);if(t&&v(t))return i;if(!i)throw Object.defineProperty(Error(`"${s(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return i}let h="u">typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class p extends Error{}class E extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class T extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class R extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},98183,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={assign:function(){return c},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return u}};for(var o in i)Object.defineProperty(t,o,{enumerable:!0,get:i[o]});function n(e){let r={};for(let[t,i]of e.entries()){let e=r[t];void 0===e?r[t]=i:Array.isArray(e)?e.push(i):r[t]=[e,i]}return r}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function u(e){let r=new URLSearchParams;for(let[t,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)r.append(t,a(e));else r.set(t,a(i));return r}function c(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,i]of t.entries())e.append(r,i)}return e}},87779,e=>{"use strict";var r=e.i(43476),t=e.i(71645);e.s(["default",0,function({SIM_RESOLUTION:e=128,DYE_RESOLUTION:i=1440,CAPTURE_RESOLUTION:o=512,DENSITY_DISSIPATION:n=3.5,VELOCITY_DISSIPATION:a=2,PRESSURE:u=.1,PRESSURE_ITERATIONS:c=20,CURL:l=3,SPLAT_RADIUS:f=.2,SPLAT_FORCE:s=6e3,SHADING:v=!0,COLOR_UPDATE_SPEED:m=10,BACK_COLOR:d={r:.5,g:0,b:0},TRANSPARENT:h=!0,RAINBOW_MODE:g=!0,COLOR:x="#ff0000"}){let p=(0,t.useRef)(null),E=(0,t.useRef)(null);return(0,t.useEffect)(()=>{var r;let t,o,d,h,T,R,y,S,D,_,A,w,F,b,U,L=p.current;if(!L)return;let P=!0,B={SIM_RESOLUTION:e,DYE_RESOLUTION:i,DENSITY_DISSIPATION:n,VELOCITY_DISSIPATION:a,PRESSURE:u,PRESSURE_ITERATIONS:c,CURL:l,SPLAT_RADIUS:f,SPLAT_FORCE:s,SHADING:v,COLOR_UPDATE_SPEED:m,RAINBOW_MODE:g,COLOR:x},N=[{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:[0,0,0]}],{gl:C,ext:O}=(R={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},(S=!!(y=(r=L).getContext("webgl2",R)))||(y=r.getContext("webgl",R)||r.getContext("experimental-webgl",R)),S?(y.getExtension("EXT_color_buffer_float"),o=y.getExtension("OES_texture_float_linear")):(t=y.getExtension("OES_texture_half_float"),o=y.getExtension("OES_texture_half_float_linear")),y.clearColor(0,0,0,1),D=S?y.HALF_FLOAT:t&&t.HALF_FLOAT_OES,S?(d=X(y,y.RGBA16F,y.RGBA,D),h=X(y,y.RG16F,y.RG,D),T=X(y,y.R16F,y.RED,D)):(d=X(y,y.RGBA,y.RGBA,D),h=X(y,y.RGBA,y.RGBA,D),T=X(y,y.RGBA,y.RGBA,D)),{gl:y,ext:{formatRGBA:d,formatRG:h,formatR:T,halfFloatTexType:D,supportLinearFiltering:o}});function X(e,r,t,i){var o,n,a,u;let c,l;if(o=e,n=r,a=t,u=i,c=o.createTexture(),o.bindTexture(o.TEXTURE_2D,c),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,n,4,4,0,a,u,null),l=o.createFramebuffer(),o.bindFramebuffer(o.FRAMEBUFFER,l),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,c,0),o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE)switch(r){case e.R16F:return X(e,e.RG16F,e.RG,i);case e.RG16F:return X(e,e.RGBA16F,e.RGBA,i);default:return null}return{internalFormat:r,format:t}}O.supportLinearFiltering||(B.DYE_RESOLUTION=256,B.SHADING=!1);class I{constructor(e,r){this.uniforms={},this.program=z(e,r),this.uniforms=M(this.program)}bind(){C.useProgram(this.program)}}function z(e,r){let t=C.createProgram();return C.attachShader(t,e),C.attachShader(t,r),C.linkProgram(t),C.getProgramParameter(t,C.LINK_STATUS)||console.trace(C.getProgramInfoLog(t)),t}function M(e){let r=[],t=C.getProgramParameter(e,C.ACTIVE_UNIFORMS);for(let i=0;i<t;i++){let t=C.getActiveUniform(e,i).name;r[t]=C.getUniformLocation(e,t)}return r}function G(e,r,t){r=function(e,r){if(!r)return e;let t="";return r.forEach(e=>{t+="#define "+e+"\n"}),t+e}(r,t);let i=C.createShader(e);return C.shaderSource(i,r),C.compileShader(i),C.getShaderParameter(i,C.COMPILE_STATUS)||console.trace(C.getShaderInfoLog(i)),i}let Y=G(C.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),V=G(C.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),H=G(C.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),j=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,k=G(C.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),W=G(C.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,O.supportLinearFiltering?null:["MANUAL_FILTERING"]),$=G(C.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),K=G(C.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),Q=G(C.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),Z=G(C.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),q=G(C.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),J=(C.bindBuffer(C.ARRAY_BUFFER,C.createBuffer()),C.bufferData(C.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),C.STATIC_DRAW),C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,C.createBuffer()),C.bufferData(C.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),C.STATIC_DRAW),C.vertexAttribPointer(0,2,C.FLOAT,!1,0,0),C.enableVertexAttribArray(0),(e,r=!1)=>{null==e?(C.viewport(0,0,C.drawingBufferWidth,C.drawingBufferHeight),C.bindFramebuffer(C.FRAMEBUFFER,null)):(C.viewport(0,0,e.width,e.height),C.bindFramebuffer(C.FRAMEBUFFER,e.fbo)),r&&(C.clearColor(0,0,0,1),C.clear(C.COLOR_BUFFER_BIT)),C.drawElements(C.TRIANGLES,6,C.UNSIGNED_SHORT,0)}),ee=new I(Y,V),er=new I(Y,H),et=new I(Y,k),ei=new I(Y,W),eo=new I(Y,$),en=new I(Y,K),ea=new I(Y,Q),eu=new I(Y,Z),ec=new I(Y,q),el=new class{constructor(e,r){this.vertexShader=e,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let r=0;for(let t=0;t<e.length;t++)r+=function(e){if(0===e.length)return 0;let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t)|0;return r}(e[t]);let t=this.programs[r];if(null==t){let i=G(C.FRAGMENT_SHADER,this.fragmentShaderSource,e);t=z(this.vertexShader,i),this.programs[r]=t}t!==this.activeProgram&&(this.uniforms=M(t),this.activeProgram=t)}bind(){C.useProgram(this.activeProgram)}}(Y,j);function ef(){let e=eT(B.SIM_RESOLUTION),r=eT(B.DYE_RESOLUTION),t=O.halfFloatTexType,i=O.formatRGBA,o=O.formatRG,n=O.formatR,a=O.supportLinearFiltering?C.LINEAR:C.NEAREST;C.disable(C.BLEND),_=_?em(_,r.width,r.height,i.internalFormat,i.format,t,a):ev(r.width,r.height,i.internalFormat,i.format,t,a),A=A?em(A,e.width,e.height,o.internalFormat,o.format,t,a):ev(e.width,e.height,o.internalFormat,o.format,t,a),w=es(e.width,e.height,n.internalFormat,n.format,t,C.NEAREST),F=es(e.width,e.height,n.internalFormat,n.format,t,C.NEAREST),b=ev(e.width,e.height,n.internalFormat,n.format,t,C.NEAREST)}function es(e,r,t,i,o,n){C.activeTexture(C.TEXTURE0);let a=C.createTexture();C.bindTexture(C.TEXTURE_2D,a),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,n),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MAG_FILTER,n),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE),C.texImage2D(C.TEXTURE_2D,0,t,e,r,0,i,o,null);let u=C.createFramebuffer();C.bindFramebuffer(C.FRAMEBUFFER,u),C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,a,0),C.viewport(0,0,e,r),C.clear(C.COLOR_BUFFER_BIT);let c=1/e,l=1/r;return{texture:a,fbo:u,width:e,height:r,texelSizeX:c,texelSizeY:l,attach:e=>(C.activeTexture(C.TEXTURE0+e),C.bindTexture(C.TEXTURE_2D,a),e)}}function ev(e,r,t,i,o,n){let a=es(e,r,t,i,o,n),u=es(e,r,t,i,o,n);return{width:e,height:r,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(value){a=value},get write(){return u},set write(value){u=value},swap(){let e=a;a=u,u=e}}}function em(e,r,t,i,o,n,a){var u;let c;return e.width===r&&e.height===t?e:(u=e.read,c=es(r,t,i,o,n,a),ee.bind(),C.uniform1i(ee.uniforms.uTexture,u.attach(0)),J(c),e.read=c,e.write=es(r,t,i,o,n,a),e.width=r,e.height=t,e.texelSizeX=1/r,e.texelSizeY=1/t,e)}U=[],B.SHADING&&U.push("SHADING"),el.setKeywords(U),ef();let ed=Date.now(),eh=0;function eg(e,r,t,i,o){var n;let a;et.bind(),C.uniform1i(et.uniforms.uTarget,A.read.attach(0)),C.uniform1f(et.uniforms.aspectRatio,L.width/L.height),C.uniform2f(et.uniforms.point,e,r),C.uniform3f(et.uniforms.color,t,i,0),C.uniform1f(et.uniforms.radius,(n=B.SPLAT_RADIUS/100,(a=L.width/L.height)>1&&(n*=a),n)),J(A.write),A.swap(),C.uniform1i(et.uniforms.uTarget,_.read.attach(0)),C.uniform3f(et.uniforms.color,o.r,o.g,o.b),J(_.write),_.swap()}function ex(e,r,t,i){e.id=r,e.down=!0,e.moved=!1,e.texcoordX=t/L.width,e.texcoordY=1-i/L.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=eE()}function ep(e,r,t,i){var o,n;let a,u;e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=r/L.width,e.texcoordY=1-t/L.height,o=e.texcoordX-e.prevTexcoordX,(a=L.width/L.height)<1&&(o*=a),e.deltaX=o,n=e.texcoordY-e.prevTexcoordY,(u=L.width/L.height)>1&&(n/=u),e.deltaY=n,e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function eE(){if(!B.RAINBOW_MODE){let e,r;return 3===(e=B.COLOR.replace("#","")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),r=parseInt(e.slice(0,2),16)/255,{r:.15*r,g:.15*(parseInt(e.slice(2,4),16)/255),b:.15*(parseInt(e.slice(4,6),16)/255)}}let e=function(e){let r,t,i,o,n,a,u,c;switch(o=Math.floor(6*e),n=6*e-o,a=0,u=+(1-n),c=+(1-(1-n)*1),o%6){case 0:r=1,t=c,i=a;break;case 1:r=u,t=1,i=a;break;case 2:r=a,t=1,i=c;break;case 3:r=a,t=u,i=1;break;case 4:r=c,t=a,i=1;break;case 5:r=1,t=a,i=u}return{r,g:t,b:i}}(Math.random());return e.r*=.15,e.g*=.15,e.b*=.15,e}function eT(e){let r=C.drawingBufferWidth/C.drawingBufferHeight;r<1&&(r=1/r);let t=Math.round(e),i=Math.round(e*r);return C.drawingBufferWidth>C.drawingBufferHeight?{width:i,height:t}:{width:t,height:i}}function eR(e){return Math.floor(e*(window.devicePixelRatio||1))}function ey(e){let r,t,i,o=N[0];ex(o,-1,eR(e.clientX),eR(e.clientY)),r=eE(),r.r*=10,r.g*=10,r.b*=10,t=10*(Math.random()-.5),i=30*(Math.random()-.5),eg(o.texcoordX,o.texcoordY,t,i,r)}let eS=!1;function eD(e){let r=N[0],t=eR(e.clientX),i=eR(e.clientY);eS?ep(r,t,i,r.color):(ep(r,t,i,eE()),eS=!0)}function e_(e){let r=e.targetTouches,t=N[0];for(let e=0;e<r.length;e++){let i=eR(r[e].clientX),o=eR(r[e].clientY);ex(t,r[e].identifier,i,o)}}function eA(e){let r=e.targetTouches,t=N[0];for(let e=0;e<r.length;e++)ep(t,eR(r[e].clientX),eR(r[e].clientY),t.color)}function ew(e){let r=e.changedTouches,t=N[0];for(let e=0;e<r.length;e++)t.down=!1}return window.addEventListener("mousedown",ey),window.addEventListener("mousemove",eD),window.addEventListener("touchstart",e_),window.addEventListener("touchmove",eA,!1),window.addEventListener("touchend",ew),!function e(){var r,t;let i,o,n,a,u,c,l;if(!P)return;let f=(o=Math.min(o=((i=Date.now())-ed)/1e3,.016666),ed=i,o);n=eR(L.clientWidth),a=eR(L.clientHeight),(L.width!==n||L.height!==a)&&(L.width=n,L.height=a,1)&&ef(),(eh+=f*B.COLOR_UPDATE_SPEED)>=1&&(r=eh,eh=0==(u=1)?0:(r-0)%u+0,N.forEach(e=>{e.color=eE()})),N.forEach(e=>{var r;let t,i;e.moved&&(e.moved=!1,t=(r=e).deltaX*B.SPLAT_FORCE,i=r.deltaY*B.SPLAT_FORCE,eg(r.texcoordX,r.texcoordY,t,i,r.color))}),function(e){C.disable(C.BLEND),en.bind(),C.uniform2f(en.uniforms.texelSize,A.texelSizeX,A.texelSizeY),C.uniform1i(en.uniforms.uVelocity,A.read.attach(0)),J(F),ea.bind(),C.uniform2f(ea.uniforms.texelSize,A.texelSizeX,A.texelSizeY),C.uniform1i(ea.uniforms.uVelocity,A.read.attach(0)),C.uniform1i(ea.uniforms.uCurl,F.attach(1)),C.uniform1f(ea.uniforms.curl,B.CURL),C.uniform1f(ea.uniforms.dt,e),J(A.write),A.swap(),eo.bind(),C.uniform2f(eo.uniforms.texelSize,A.texelSizeX,A.texelSizeY),C.uniform1i(eo.uniforms.uVelocity,A.read.attach(0)),J(w),er.bind(),C.uniform1i(er.uniforms.uTexture,b.read.attach(0)),C.uniform1f(er.uniforms.value,B.PRESSURE),J(b.write),b.swap(),eu.bind(),C.uniform2f(eu.uniforms.texelSize,A.texelSizeX,A.texelSizeY),C.uniform1i(eu.uniforms.uDivergence,w.attach(0));for(let e=0;e<B.PRESSURE_ITERATIONS;e++)C.uniform1i(eu.uniforms.uPressure,b.read.attach(1)),J(b.write),b.swap();ec.bind(),C.uniform2f(ec.uniforms.texelSize,A.texelSizeX,A.texelSizeY),C.uniform1i(ec.uniforms.uPressure,b.read.attach(0)),C.uniform1i(ec.uniforms.uVelocity,A.read.attach(1)),J(A.write),A.swap(),ei.bind(),C.uniform2f(ei.uniforms.texelSize,A.texelSizeX,A.texelSizeY),O.supportLinearFiltering||C.uniform2f(ei.uniforms.dyeTexelSize,A.texelSizeX,A.texelSizeY);let r=A.read.attach(0);C.uniform1i(ei.uniforms.uVelocity,r),C.uniform1i(ei.uniforms.uSource,r),C.uniform1f(ei.uniforms.dt,e),C.uniform1f(ei.uniforms.dissipation,B.VELOCITY_DISSIPATION),J(A.write),A.swap(),O.supportLinearFiltering||C.uniform2f(ei.uniforms.dyeTexelSize,_.texelSizeX,_.texelSizeY),C.uniform1i(ei.uniforms.uVelocity,A.read.attach(0)),C.uniform1i(ei.uniforms.uSource,_.read.attach(1)),C.uniform1f(ei.uniforms.dissipation,B.DENSITY_DISSIPATION),J(_.write),_.swap()}(f),C.blendFunc(C.ONE,C.ONE_MINUS_SRC_ALPHA),C.enable(C.BLEND),c=(t=null,C.drawingBufferWidth),l=null==t?C.drawingBufferHeight:t.height,el.bind(),B.SHADING&&C.uniform2f(el.uniforms.texelSize,1/c,1/l),C.uniform1i(el.uniforms.uTexture,_.read.attach(0)),J(t),E.current=requestAnimationFrame(e)}(),()=>{P=!1,E.current&&(cancelAnimationFrame(E.current),E.current=null),window.removeEventListener("mousedown",ey),window.removeEventListener("mousemove",eD),window.removeEventListener("touchstart",e_),window.removeEventListener("touchmove",eA),window.removeEventListener("touchend",ew)}},[]),(0,r.jsx)("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:(0,r.jsx)("canvas",{ref:p,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}])}]);