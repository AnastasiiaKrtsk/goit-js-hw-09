const e=document.querySelector(".form"),t=e.querySelector('input[name="delay"]'),n=e.querySelector('input[name="step"]'),o=e.querySelector('input[name="amount"]');function a(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(async e=>{e.preventDefault();const s=parseInt(t.value),i=parseInt(n.value),r=parseInt(o.value);for(let e=0;e<r;e++){const t=e+1,n=s+i*e;try{const e=await a(t,n);console.log(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)}catch(e){console.log(`❌ Rejected promise ${e.position} in ${e.delay}ms`)}}}));
//# sourceMappingURL=03-promises.9f8d9ce1.js.map