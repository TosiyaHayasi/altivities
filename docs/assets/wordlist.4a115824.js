import{br as y}from"./pinia.esm-browser.b39ed190.js";const S="https://altivities.earthiverse.ca/wordlists",j={General:{prefix:`${S}/General/`,lists:{colors:{name:"Colors",wordList:"colors.json"},sports:{name:"Sports",wordList:"sports.json"}}}},_=y({id:"word_list",state:()=>({selected:new Array,unselected:new Array,wordLists:new Array,numWords:0}),getters:{curatedWordLists:()=>j,getSelectedWordByIndex:o=>t=>{let s=0;for(const r of o.selected)for(const e of r){if(s==t)return e;s++}},getUnselectedWordByIndex:o=>t=>{let s=0;for(const r of o.unselected)for(const e of r){if(s==t)return e;s++}},getWordByIndex:o=>t=>{let s=0;for(const r of o.wordLists)for(const e of r){if(s==t)return e;s++}},words:o=>o.wordLists.flat()},actions:{async addWordsFromURLSearchParams(o="wordlist",t="wordlists",s="ignore",r="include"){const e=new URLSearchParams(window.location.search);let i=[];const p=e.get(o);if(p){const n=await(await fetch(p)).json();i.push(...n)}const g=e.get(t);if(g)for(const l of g.split(",")){const d=await(await fetch(l)).json();i.push(...d)}const L=e.get(s);if(L){const l=L.split(",");for(let n=0;n<i.length;n++){const d=i[n];for(const h of l)if(d.en==h||Array.isArray(d.en)&&d.en[0]==h){i.splice(n,1),n-=1;break}}}const W=e.get(r);if(W){const l=W.split(","),n=[];for(;l.length>0;){const d=l.shift();let h=!1;for(const c of i){if(c.en==d||Array.isArray(c.en)&&c.en[0]==d){n.push(c),h=!0;break}if(Array.isArray(c.en))for(let w=0;w<c.en.length;w++){const m=c.en[w];if(m===d){c.en=m,n.push(c),h=!0;break}}}h||n.push({en:d,ja:{hiragana:"???",kanji:"???"}})}i=n}for(const l of i)l.id=this.numWords,this.numWords++;this.wordLists.push(i),this.unselected.push([...i]),this.selected.push([]);let a=1,f=`${a}_wordlist`,u=`${a}_wordlists`;for(;e.has(f)||e.has(u);)this.addWordsFromURLSearchParams(f,u,`${a}_ignore`,`${a}_include`),a+=1,f=`${a}_wordlist`,u=`${a}_wordlists`;return this.words},resetStore(){this.selected.splice(0,this.selected.length),this.unselected.splice(0,this.unselected.length),this.wordLists.splice(0,this.wordLists.length),this.numWords=0},selectWord(o){for(let t=0;t<this.unselected.length;t++){const s=this.unselected[t];for(let r=0;r<s.length;r++){const e=s[r];if(e.id==o)return s.splice(r,1),this.selected[t].push(e),e}}},unselectWord(o){for(let t=0;t<this.selected.length;t++){const s=this.selected[t];for(let r=0;r<s.length;r++){const e=s[r];if(e.id==o)return s.splice(r,1),this.unselected[t].push(e),e}}}}});export{_ as u};
