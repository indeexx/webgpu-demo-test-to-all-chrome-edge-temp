import{d as S,g as V,h as A,r as O,o as T,i as _,j as R,k as z,w as E,F as k,l as F}from"./vendor.84149af6.js";var B=1e-6,U=typeof Float32Array!="undefined"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,r=arguments.length;r--;)e+=arguments[r]*arguments[r];return Math.sqrt(e)});function b(){var e=new U(16);return U!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function I(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function u(e,r,n){var a=r[0],t=r[1],s=r[2],c=r[3],v=r[4],g=r[5],y=r[6],m=r[7],d=r[8],h=r[9],o=r[10],M=r[11],w=r[12],x=r[13],P=r[14],C=r[15],p=n[0],f=n[1],i=n[2],l=n[3];return e[0]=p*a+f*v+i*d+l*w,e[1]=p*t+f*g+i*h+l*x,e[2]=p*s+f*y+i*o+l*P,e[3]=p*c+f*m+i*M+l*C,p=n[4],f=n[5],i=n[6],l=n[7],e[4]=p*a+f*v+i*d+l*w,e[5]=p*t+f*g+i*h+l*x,e[6]=p*s+f*y+i*o+l*P,e[7]=p*c+f*m+i*M+l*C,p=n[8],f=n[9],i=n[10],l=n[11],e[8]=p*a+f*v+i*d+l*w,e[9]=p*t+f*g+i*h+l*x,e[10]=p*s+f*y+i*o+l*P,e[11]=p*c+f*m+i*M+l*C,p=n[12],f=n[13],i=n[14],l=n[15],e[12]=p*a+f*v+i*d+l*w,e[13]=p*t+f*g+i*h+l*x,e[14]=p*s+f*y+i*o+l*P,e[15]=p*c+f*m+i*M+l*C,e}function Y(e,r){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function j(e,r){return e[0]=r[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=r[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function D(e,r){var n=Math.sin(r),a=Math.cos(r);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function N(e,r){var n=Math.sin(r),a=Math.cos(r);return e[0]=a,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function W(e,r){var n=Math.sin(r),a=Math.cos(r);return e[0]=a,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function L(e,r,n,a,t){var s=1/Math.tan(r/2),c;return e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,t!=null&&t!==1/0?(c=1/(a-t),e[10]=(t+a)*c,e[14]=2*t*a*c):(e[10]=-1,e[14]=-2*a),e}var q=L;function X(e,r,n,a){var t,s,c,v,g,y,m,d,h,o,M=r[0],w=r[1],x=r[2],P=a[0],C=a[1],p=a[2],f=n[0],i=n[1],l=n[2];return Math.abs(M-f)<B&&Math.abs(w-i)<B&&Math.abs(x-l)<B?I(e):(m=M-f,d=w-i,h=x-l,o=1/Math.hypot(m,d,h),m*=o,d*=o,h*=o,t=C*h-p*d,s=p*m-P*h,c=P*d-C*m,o=Math.hypot(t,s,c),o?(o=1/o,t*=o,s*=o,c*=o):(t=0,s=0,c=0),v=d*c-h*s,g=h*t-m*c,y=m*s-d*t,o=Math.hypot(v,g,y),o?(o=1/o,v*=o,g*=o,y*=o):(v=0,g=0,y=0),e[0]=t,e[1]=v,e[2]=m,e[3]=0,e[4]=s,e[5]=g,e[6]=d,e[7]=0,e[8]=c,e[9]=y,e[10]=h,e[11]=0,e[12]=-(t*M+s*w+c*x),e[13]=-(v*M+g*w+y*x),e[14]=-(m*M+d*w+h*x),e[15]=1,e)}const Z=(e,r=[0,0,0],n=[0,0,0],a=[1,1,1])=>{const t=b(),s=b(),c=b(),v=b(),g=b();Y(v,r),D(t,n[0]),N(s,n[1]),W(c,n[2]),j(g,a),u(e,t,g),u(e,s,e),u(e,c,e),u(e,v,e)},H=(e=1,r=[2,2,4],n=[0,0,0],a=[0,1,0])=>{const t=b(),s=b(),c=b();return q(s,2*Math.PI/5,e,.1,100),X(t,r,n,a),u(c,s,t),{viewMatrix:t,projectionMatrix:s,viewProjectionMatrix:c,cameraOption:{eye:r,center:n,zoomMax:100,zoomSpeed:2}}},G=(e,r,n=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const a=e.createBuffer({size:r.byteLength,usage:n,mappedAtCreation:!0});return new Float32Array(a.getMappedRange()).set(r),a.unmap(),a},J=async()=>{var c;const e=K();if(e.includes("Your current browser does not support WebGPU!"))throw console.log(e),"Your current browser does not support WebGPU!";const r=document.getElementById("canvas"),n=await((c=navigator.gpu)==null?void 0:c.requestAdapter()),a=await(n==null?void 0:n.requestDevice()),t=r.getContext("webgpu"),s="bgra8unorm";return t.configure({device:a,format:s}),{device:a,canvas:r,format:s,context:t}},K=()=>{let e="Great, your current browser supports WebGPU!";return navigator.gpu||(e=`Your current browser does not support WebGPU! Make sure you are on a system 
                     with WebGPU enabled. Currently, SPIR-WebGPU is only supported in  
                     <a href="https://www.google.com/chrome/canary/">Chrome canary</a>
                     with the flag "enable-unsafe-webgpu" enabled. See the 
                     <a href="https://github.com/gpuweb/gpuweb/wiki/Implementation-Status"> 
                     Implementation Status</a> page for more details.                   
                    `),e},Q=()=>({vertex:`
        [[block]] struct Uniforms {
            mvpMatrix : mat4x4<f32>;
        };
        [[binding(0), group(0)]] var<uniform> uniforms : Uniforms;

        struct Output {
            [[builtin(position)]] Position : vec4<f32>;
            [[location(0)]] vColor : vec4<f32>;
        };

        [[stage(vertex)]]
        fn main([[location(0)]] pos: vec4<f32>, [[location(1)]] color: vec4<f32>) -> Output {
            var output: Output;
            output.Position = uniforms.mvpMatrix * pos;
            output.vColor = color;
            return output;
        }`,fragment:`
        [[stage(fragment)]]
        fn main([[location(0)]] vColor: vec4<f32>) -> [[location(0)]] vec4<f32> {
            return vColor;
        }`}),$=()=>{const e=new Float32Array([-1,-1,1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]),r=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1]);return{positions:e,colors:r}},ee=F("\u5185\u5BB9"),ne=S({setup(e){setTimeout(()=>{(async()=>{const a=await J(),t=a.device,s=$(),c=s.positions.length/3,v=G(t,s.positions),g=G(t,s.colors),y=Q(),m=t.createRenderPipeline({vertex:{module:t.createShaderModule({code:y.vertex}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:t.createShaderModule({code:y.fragment}),entryPoint:"main",targets:[{format:a.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),d=b(),h=b();let o=b();o=H(a.canvas.width/a.canvas.height).viewProjectionMatrix;const w=t.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),x=t.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:w,offset:0,size:64}}]}),P=a.context.getCurrentTexture().createView(),C=t.createTexture({size:[a.canvas.width,a.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),p={colorAttachments:[{view:P,loadValue:{r:.5,g:.5,b:.8,a:1},storeOp:"store"}],depthStencilAttachment:{view:C.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}};Z(d),u(h,o,d),t.queue.writeBuffer(w,0,h);const f=t.createCommandEncoder(),i=f.beginRenderPass(p);i.setPipeline(m),i.setVertexBuffer(0,v),i.setVertexBuffer(1,g),i.setBindGroup(0,x),i.draw(c),i.endPass(),t.queue.submit([f.finish()])})()},3e3);const r=V(!1);return A(()=>{}),(n,a)=>{const t=O("van-popup");return T(),_(k,null,[R("canvas",{id:"canvas",ref:(s,c)=>{c.canvas=s},width:"640",height:"480"},null,512),z(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s)},{default:E(()=>[ee]),_:1},8,["modelValue"])],64)}}});export{ne as default};
