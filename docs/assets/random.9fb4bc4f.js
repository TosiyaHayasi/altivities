function o(r,a){return Math.floor(Math.random()*(a-r+1)+r)}function n(r,a,t=3){return parseFloat((Math.random()*(a-r)+r).toFixed(t))}function e(){const r=o(0,2*Math.PI),a=n(.5,1);return{transform:`rotate(${r}rad) scale(${a}) `,WebkitFilter:"drop-shadow(0 0 10px rgba(255, 255, 255, 5))",filter:"drop-shadow(0 0 10px rgba(255, 255, 255, 5))"}}export{e as a,o as r};