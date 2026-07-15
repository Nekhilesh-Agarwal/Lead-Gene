const WEBHOOK_URL='YOUR_N8N_WEBHOOK_URL';
async function generate(){
const btn=document.getElementById('btn');
const status=document.getElementById('status');
const bar=document.getElementById('bar');
btn.disabled=true;
bar.style.width='15%';
status.innerHTML='Starting workflow...';
const payload={
businessType:businessType.value,
pinCode:pinCode.value,
maxLeads:Number(maxLeads.value)
};
let t=20;
const timer=setInterval(()=>{if(t<90){t+=5;bar.style.width=t+'%';}},400);
try{
const r=await fetch(WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
clearInterval(timer);
bar.style.width='100%';
if(r.ok){
status.innerHTML='✅ Lead generation started. Open your Google Sheet in a few moments.';
}else{
status.innerHTML='❌ Request failed ('+r.status+')';
}
}catch(e){
clearInterval(timer);
status.innerHTML='❌ Unable to reach n8n. Replace YOUR_N8N_WEBHOOK_URL.';
}
btn.disabled=false;
}
