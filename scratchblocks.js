import scratchblocks from "scratchblocks.min.es.js" 
import loadTranslations from "translations-all-es.js"
loadTranslations(scratchblocks);

scratchblocks.renderMatching('pre.blocks', {
  languages: ["en", "ja"],
  style: "scratch3"
});
scratchblocks.renderMatching('code.b', {
  language:["en","ja"],
  style:"scratch3",
  inline:true
});