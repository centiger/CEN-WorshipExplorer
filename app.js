const DATA = {
  festivals: [
    {id:'passover', emoji:'🐑', title:'유월절', group:'🟢 봄 절기', desc:'구원의 시작, 어린양의 피', ready:true,
      badges:['🟢 봄 절기','⭐ 7대 절기','📖 출애굽 시대','✝️ 십자가 예표'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','유월절'],['영어','Passover'],['히브리어','페사흐(Pesach)'],['뜻','넘어가다'],['관련','무교절과 함께 언급되는 경우가 많음']]},
        {key:'definition', title:'📖 유월절이란?', body:['유월절은 하나님께서 이스라엘 백성을 애굽의 종살이에서 구원하신 사건을 기념하기 위해 제정하신 절기입니다.', '‘유월’은 심판이 넘어갔다는 뜻입니다. 어린양의 피가 발라진 집은 마지막 재앙의 심판을 피했습니다.', '이스라엘에게 유월절은 하나님의 백성으로 새롭게 시작한 구원의 출발점입니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'니산월 14일 저녁에 지켰습니다.', items:['🐑 흠 없는 어린양 준비','🩸 어린양을 잡음','🚪 피를 문설주와 인방에 바름','🍞 무교병과 쓴 나물을 먹음','🎒 급히 식사','🙏 하나님의 구원을 기념']},
        {key:'why', title:'✨ 왜 중요할까?', body:['유월절은 구원의 시작을 선포하는 절기입니다.', '하나님께서는 어린양의 피를 통해 이스라엘을 심판에서 보호하시고 애굽에서 해방시키셨습니다.', '구원은 인간의 능력이 아니라 하나님의 은혜와 어린양의 희생으로 이루어진다는 사실을 보여 줍니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 니산월 14일 저녁', '오늘날: 3월 말 ~ 4월 중순', '유대력을 사용하므로 매년 날짜가 조금씩 달라집니다.', '계절: 봄 절기']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['👨‍👩‍👧‍👦 애굽의 종살이','⚖️ 열 가지 재앙','🐑 유월절 어린양','🩸 어린양의 피','🚪 문설주와 인방','🛡️ 심판이 넘어감','🚶 출애굽','🎉 하나님의 백성이 됨']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🐑 어린양','🩸 희생의 피','🛡️ 하나님의 구원','🙏 믿음으로 순종','❤️ 감사하는 삶'], outro:'유월절은 구원이 하나님의 은혜로 주어지며, 믿음으로 그 은혜를 받아들이는 자에게 생명이 주어진다는 사실을 가르쳐 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🐑 유월절','🚶 출애굽','🏜️ 광야','⛺ 성막','🏛️ 성전','🍷 마지막 만찬','✝️ 십자가','⛪ 교회'], outro:'유월절은 출애굽에서 시작되어 예수 그리스도의 십자가에서 완성되고, 성만찬을 통해 계속 기억됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🐑 유월절 어린양','🍷 마지막 만찬','✝️ 십자가','❤️ 새 언약','⛪ 성만찬'], outro:'예수님은 유월절 절기에 십자가를 지심으로 참된 유월절 어린양이 되셨습니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 출애굽기 12장, 레위기 23:4~8, 민수기 9:1~14, 신명기 16:1~8', '신약: 마태복음 26:17~29, 누가복음 22:7~20, 요한복음 1:29, 고린도전서 5:7']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['유월절은 어린양의 피로 하나님의 심판을 면하고 구원을 얻은 사건을 기념하는 절기이며, 예수 그리스도의 십자가를 가장 선명하게 보여 주는 구속사의 출발점입니다.']}
      ]
    },
    {id:'unleavened', emoji:'🍞', title:'무교절', group:'🟢 봄 절기', desc:'누룩 없는 떡, 거룩한 삶', ready:true,
      badges:['🟢 봄 절기','⭐ 7대 절기','📖 출애굽 시대','✨ 거룩한 삶'],
      sections:[
        {key:'names', title:'📛 다른 이름', type:'names', rows:[['개역개정','무교절'],['다른 명칭','무교병의 절기'],['영어','Feast of Unleavened Bread'],['히브리어','하그 하마초트(Hag HaMatzot)'],['관계','유월절 다음 날부터 7일 동안 이어지는 절기']]},
        {key:'definition', title:'📖 무교절이란?', body:['무교절은 누룩을 넣지 않은 빵, 곧 무교병을 먹으며 출애굽의 급박했던 순간을 기억하는 절기입니다.', '이스라엘은 애굽을 급히 떠나야 했기 때문에 빵을 부풀릴 시간이 없었습니다.', '또한 누룩은 죄와 부패를 상징하기도 하므로, 무교절은 구원받은 백성이 죄를 버리고 거룩하게 살아야 함을 가르칩니다.']},
        {key:'practice', title:'🏛 어떻게 지켰을까?', type:'flow', intro:'니산월 15일부터 21일까지 7일 동안 지켰습니다.', items:['🍞 무교병을 준비함','🧹 집 안의 누룩 제거','🥖 7일 동안 무교병을 먹음','🙏 거룩함을 기억','🎉 하나님의 구원을 감사']},
        {key:'why', title:'✨ 왜 중요할까?', body:['무교절은 단순히 빵의 종류를 바꾸는 절기가 아닙니다.', '하나님께서는 이 절기를 통해 구원받은 백성이 옛 삶을 버리고 거룩한 삶으로 응답해야 함을 가르치셨습니다.', '유월절이 구원의 시작이라면, 무교절은 구원받은 백성이 살아가야 할 삶의 방향을 보여 줍니다.']},
        {key:'date', title:'📅 언제 지켰을까?', body:['유대력: 니산월 15~21일', '오늘날: 3월 말 ~ 4월 중순', '기간: 7일', '계절: 봄 절기']},
        {key:'flow', title:'➡ Flow', type:'flow', items:['🐑 유월절','🍞 무교병','🧹 누룩 제거','✨ 거룩함','🙏 순종','🌿 새로운 삶']},
        {key:'meaning', title:'💭 Meaning', type:'flow', items:['🍞 무교병','❌ 죄를 버림','❤️ 깨끗한 삶','🙏 하나님께 순종'], outro:'무교절은 구원받은 백성이 옛 죄와 부패를 버리고 하나님 앞에서 깨끗하고 진실하게 살아야 함을 가르쳐 줍니다.'},
        {key:'panorama', title:'🌍 Panorama', type:'flow', items:['🐑 유월절','🍞 무교절','🌾 초실절','🌾 칠칠절','✝️ 예수님의 죽음','⛪ 성도의 거룩한 삶'], outro:'무교절은 유월절의 구원 사건과 이어지며, 신약에서는 그리스도 안에서 새롭게 살아가는 성도의 삶으로 연결됩니다.'},
        {key:'jesus', title:'✝️ 예수님과의 연결', type:'flow', items:['🍞 무교병','✨ 죄 없으심','✝️ 십자가','❤️ 진실함과 순결','⛪ 성도의 새 삶'], outro:'예수님은 죄가 없으신 참된 무교병과 같은 분입니다. 신약은 성도에게 묵은 누룩을 버리고 순전함과 진실함으로 살아가라고 가르칩니다.'},
        {key:'verses', title:'📚 관련 성경', body:['구약: 출애굽기 12:15~20, 레위기 23:6~8, 신명기 16:3~8', '신약: 고린도전서 5:6~8']},
        {key:'summary', title:'💎 이것만 기억하세요', body:['무교절은 누룩 없는 빵을 먹으며 출애굽을 기억하고, 죄를 버리고 거룩한 삶을 살아가야 함을 배우는 절기입니다.']}
      ]
    },
    {id:'firstfruits', emoji:'🌾', title:'초실절', group:'🟢 봄 절기', desc:'첫 열매를 하나님께'},
    {id:'weeks', emoji:'🌾', title:'칠칠절', group:'🟢 봄 절기', desc:'오순절, 맥추 감사'},
    {id:'trumpets', emoji:'📯', title:'나팔절', group:'🟠 가을 절기', desc:'나팔 소리와 새 시작'},
    {id:'atonement', emoji:'🙏', title:'속죄일', group:'🟠 가을 절기', desc:'죄를 속하고 회복'},
    {id:'tabernacles', emoji:'⛺', title:'초막절', group:'🟠 가을 절기', desc:'광야 기억과 추수 감사'},
    {id:'sabbath-year', emoji:'🌱', title:'안식년', group:'⭐ 특별', desc:'일곱째 해의 쉼'},
    {id:'jubilee', emoji:'👑', title:'희년', group:'⭐ 특별', desc:'회복과 자유의 해'}
  ],
  sacrifices: [
    {id:'burnt', emoji:'🔥', title:'번제', group:'🔥 5대 제사', desc:'전부 드리는 제사'},
    {id:'grain', emoji:'🌾', title:'소제', group:'🔥 5대 제사', desc:'곡식으로 드리는 감사'},
    {id:'peace', emoji:'🤝', title:'화목제', group:'🔥 5대 제사', desc:'하나님과의 교제'},
    {id:'sin', emoji:'🩸', title:'속죄제', group:'🔥 5대 제사', desc:'죄 사함과 정결'},
    {id:'guilt', emoji:'💰', title:'속건제', group:'🔥 5대 제사', desc:'배상과 회복'}
  ]
};

let state = {view:'home', category:null, itemId:null, sectionIndex:0, modal:null, transition:''};
const app = document.getElementById('app');
function setState(p){ state={...state,...p}; render(); }
function home(){return `<main class="screen"><section class="hero"><div class="eyebrow">CEN BIBLE 2.0</div><h1>절기와 제사</h1><p class="subtitle">하나님께서 주신 예배의 시간과 방법을 이해하는 탐험</p></section><div class="grid"><button class="home-card" onclick="setState({view:'list',category:'festivals'})"><div class="icon">🎉</div><div><h2>절기 Explorer</h2><p>봄 절기, 가을 절기, 특별한 해를 따라갑니다.</p></div></button><button class="home-card" onclick="setState({view:'list',category:'sacrifices'})"><div class="icon">🔥</div><div><h2>제사 Explorer</h2><p>번제, 소제, 화목제, 속죄제, 속건제를 이해합니다.</p></div></button><button class="home-card" onclick="alert('v0.1에서는 유월절 카드부터 확인합니다.')"><div class="icon">📊</div><div><h2>한눈에 비교</h2><p>절기와 제사의 차이를 표와 흐름으로 정리합니다.</p></div></button></div><p class="small-note">v0.5 Prototype · 유월절 + 무교절 카드</p></main>`}
function list(){const arr=DATA[state.category]; let groups=[...new Set(arr.map(x=>x.group))]; return `<main class="screen"><div class="topbar"><button onclick="setState({view:'home'})">🏠 홈</button><span>› ${state.category==='festivals'?'절기 Explorer':'제사 Explorer'}</span></div><section class="page-title"><h1>${state.category==='festivals'?'🎉 절기 Explorer':'🔥 제사 Explorer'}</h1><p>전체 구조를 먼저 보고, 하나씩 탐험합니다.</p></section>${groups.map(g=>`<div class="group-title">${g}</div>${arr.filter(x=>x.group===g).map(x=>`<button class="list-card" onclick="openItem('${x.id}')"><div class="left"><div class="emoji">${x.emoji}</div><div><strong>${x.title}</strong><span>${x.desc}</span></div></div><div>${x.ready?'▶':'준비중'}</div></button>`).join('')}`).join('')}</main>`}
function openItem(id){ const item=DATA[state.category].find(x=>x.id===id); if(!item.ready){alert('아직 준비중입니다. 유월절 카드로 구조를 먼저 검토합니다.'); return;} setState({view:'card',itemId:id,sectionIndex:0}); }
function currentItem(){return DATA[state.category].find(x=>x.id===state.itemId)}
function card(){const item=currentItem(); const sec=item.sections[state.sectionIndex]; const dir=state.transition||''; return `<main class="screen card-view"><div class="card-shell ${dir}"><section class="card-head"><div class="crumb"><button onclick="setState({view:'home',modal:null})">🏠 홈</button> › ${state.category==='festivals'?'절기':'제사'} › ${item.group} › ${item.emoji} ${item.title}</div><h1><span class="title-emoji">${item.emoji}</span><span class="title-text">${item.title}</span></h1><div class="badges">${item.badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div></section><div class="swipe-hint">좌우로 넘기거나 아래 버튼을 누르세요</div><section class="section-card">${renderSection(sec)}</section><div class="progress">${item.sections.map((_,i)=>`<span class="dot ${i===state.sectionIndex?'active':''}"></span>`).join('')} <span>${state.sectionIndex+1}/${item.sections.length}</span></div></div></main>${bottomNav(item)}`}
function renderSection(sec){let html=`<h2>${sec.title}</h2>`; if(sec.type==='names'){html+=`<div class="names">${sec.rows.map(r=>`<div class="name-row"><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>`} else if(sec.type==='flow'){ if(sec.intro) html+=`<p class="muted">${sec.intro}</p>`; html+=`<div class="timeline">${sec.items.map((x,i)=>`<div class="tl-row"><div class="tl-line"><span class="tl-dot"></span></div><div class="tl-text">${x}</div></div>`).join('')}</div>`; if(sec.outro) html+=`<p>${sec.outro}</p>`;} else {html+=sec.body.map(p=>`<p>${p}</p>`).join('')} return html;}
function bottomNav(item){return `<nav class="bottom-nav"><div class="bottom-nav-inner"><button class="nav-btn" onclick="prevSection()" ${state.sectionIndex===0?'disabled':''}>◀ 이전</button><button class="nav-btn" onclick="setState({view:'home',modal:null})">🏠 홈</button><button class="nav-btn" onclick="setState({modal:'explorer'})">☰ 전체</button><button class="nav-btn" onclick="setState({modal:'sections'})">📑 목차</button><button class="nav-btn primary" onclick="nextSection()" ${state.sectionIndex===item.sections.length-1?'disabled':''}>다음 ▶</button></div></nav>`}
function prevSection(){ if(state.sectionIndex>0) setState({sectionIndex:state.sectionIndex-1,transition:'prev'}); }
function nextSection(){ const item=currentItem(); if(state.sectionIndex<item.sections.length-1) setState({sectionIndex:state.sectionIndex+1,transition:'next'}); }
function modal(){ if(!state.modal) return ''; const item=currentItem(); if(state.modal==='explorer'){const arr=DATA[state.category]; const groups=[...new Set(arr.map(x=>x.group))]; return `<div class="modal" onclick="setState({modal:null})"><div class="sheet" onclick="event.stopPropagation()"><button class="close" onclick="setState({modal:null})">닫기</button><h2>${state.category==='festivals'?'🎉 절기 전체':'🔥 제사 전체'}</h2>${groups.map(g=>`<div class="group-title">${g}</div>${arr.filter(x=>x.group===g).map(x=>`<button class="item ${x.id===state.itemId?'active':''}" onclick="${x.ready?`setState({itemId:'${x.id}',sectionIndex:0,modal:null})`:`alert('준비중입니다.')`}">${x.id===state.itemId?'▶ ':''}${x.emoji} ${x.title}<br><span class="muted">${x.desc}</span></button>`).join('')}`).join('')}</div></div>`}
return `<div class="modal" onclick="setState({modal:null})"><div class="sheet" onclick="event.stopPropagation()"><button class="close" onclick="setState({modal:null})">닫기</button><h2>📑 ${item.title} 목차</h2>${item.sections.map((s,i)=>`<button class="item ${i===state.sectionIndex?'active':''}" onclick="setState({sectionIndex:${i},modal:null})">${i===state.sectionIndex?'▶ ':''}${s.title}</button>`).join('')}</div></div>`}
function render(){app.innerHTML = state.view==='home'?home():state.view==='list'?list():card(); app.insertAdjacentHTML('beforeend', modal());}

let touchStartX=0, touchStartY=0;
app.addEventListener('touchstart', e=>{
  if(state.view!=='card' || state.modal) return;
  const t=e.changedTouches[0]; touchStartX=t.clientX; touchStartY=t.clientY;
},{passive:true});
app.addEventListener('touchend', e=>{
  if(state.view!=='card' || state.modal) return;
  const t=e.changedTouches[0];
  const dx=t.clientX-touchStartX, dy=t.clientY-touchStartY;
  if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.35){
    if(dx<0) nextSection(); else prevSection();
  }
},{passive:true});

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
render();
