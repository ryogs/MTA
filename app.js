/* META ERECTION — mobile store (standalone build) */
(function () {
'use strict';
var h = preact.h;
var S = function (x) { return x == null ? '' : String(x); };
var root = document.getElementById('app');

function DCLogic() {}
function makeBase() {
  return class DCLogic {
    constructor(props) { this.props = props || {}; this.state = {}; }
    setState(o) {
      if (typeof o === 'function') o = o(this.state);
      Object.assign(this.state, o);
      paint();
    }
  };
}
var DCLogicClass = makeBase();

var inst = null, painting = false, dirty = false;
function view(v) { return [h("div",{"ref":v.scRef,"onScroll":v.onMain,"style":"position: absolute; inset: 0; overflow-y: auto; overflow-x: hidden; scrollbar-width: none"},(v.isOpen ? [h("main",{"aria-label":"Opening page (to be designed)","style":"height: 844px; background: #FFFFFF"})] : null),(v.showHeader ? [h("header",{"style":"position: sticky; top: 0; z-index: 10; height: 66px; padding: 8px 16px 0; box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.86); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px)"},h("div",{"style":"display: flex; align-items: center; gap: 2px"}),h("div",{"style":"display: flex; align-items: center; gap: 8px"},(v.showCcyHeader ? [h("button",{"type":"button","onClick":v.openCur,"aria-haspopup":"listbox","aria-expanded":v.ccyExpanded,"aria-label":v.ccyAria,"style":"height: 44px; margin-right: -6px; padding: 0 6px; border: 0; background: none; display: flex; align-items: center; cursor: pointer"},h("span",{"style":"height: 28px; padding: 0 8px 0 11px; border-radius: 999px; border: 1px solid #CFCFCB; display: flex; align-items: center; gap: 5px; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.06em; color: #0E0E0E"},h("span",{"style":"color: #6A6A66"},v.sym),v.ccy,h("svg",{"width":"10","height":"10","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M6 9 L12 15 L18 9","fill":"none","stroke":"#0E0E0E","stroke-width":"1.8"}))))] : null),h("button",{"type":"button","onClick":v.starGo,"onPointerDown":v.pressDown,"onPointerUp":v.pressUp,"onPointerLeave":v.pressUp,"onPointerCancel":v.pressUp,"aria-label":v.starAria,"aria-current":v.mtaCurrent,"style":"height: 48px; margin-right: -6px; padding: 0 6px; border: 0; background: none; display: flex; align-items: center; justify-content: center; cursor: pointer; -webkit-tap-highlight-color: transparent"},h("span",{"ref":v.markRef,"aria-hidden":"true","style":"position: relative; display: block; width: 128px; height: 35px; pointer-events: none"},h("span",{"data-band":"1","style":"position: absolute; inset: 0; -webkit-mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 0px, #000 0px, #000 3px, transparent 3px, transparent 12px); mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 0px, #000 0px, #000 3px, transparent 3px, transparent 12px); will-change: transform, opacity"},h("img",{"src":"./mta-logo.png","alt":"","draggable":"false","style":"display: block; width: 128px; height: auto; pointer-events: none"})),h("span",{"data-band":"1","style":"position: absolute; inset: 0; -webkit-mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 3px, #000 3px, #000 6px, transparent 6px, transparent 12px); mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 3px, #000 3px, #000 6px, transparent 6px, transparent 12px); will-change: transform, opacity"},h("img",{"src":"./mta-logo.png","alt":"","draggable":"false","style":"display: block; width: 128px; height: auto; pointer-events: none"})),h("span",{"data-band":"1","style":"position: absolute; inset: 0; -webkit-mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 6px, #000 6px, #000 9px, transparent 9px, transparent 12px); mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 6px, #000 6px, #000 9px, transparent 9px, transparent 12px); will-change: transform, opacity"},h("img",{"src":"./mta-logo.png","alt":"","draggable":"false","style":"display: block; width: 128px; height: auto; pointer-events: none"})),h("span",{"data-band":"1","style":"position: absolute; inset: 0; -webkit-mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 9px, #000 9px, #000 12px, transparent 12px, transparent 12px); mask-image: repeating-linear-gradient(to bottom, transparent 0, transparent 9px, #000 9px, #000 12px, transparent 12px, transparent 12px); will-change: transform, opacity"},h("img",{"src":"./mta-logo.png","alt":"","draggable":"false","style":"display: block; width: 128px; height: auto; pointer-events: none"}))))))] : null),h("div",{"aria-hidden":"true","style":"display: "+S(v.mtaVidDisplay)+"; padding: 0 16px"},h("div",{"style":"height: calc(17vh - 66px); min-height: 50px"}),h("div",{"style":"height: 44px; margin-bottom: 10px"}),h("div",{"style":"position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; background: #0E0E0E; transform: translateZ(0); -webkit-touch-callout: none; user-select: none; -webkit-user-select: none"},h("video",{"ref":v.mtaVidRef,"src":"./mta.mp4","loop":true,"playsInline":true,"preload":"auto","disablePictureInPicture":true,"controlslist":"nodownload nofullscreen noremoteplayback","tabindex":"-1","onPause":v.mtaKeepPlaying,"style":"display: block; width: 100%; height: 100%; object-fit: cover; pointer-events: none"}),h("div",{"style":"position: absolute; inset: 0"}))),(v.isMta ? [h("main",{"style":"padding: 22px 16px 150px; display: flex; flex-direction: column; gap: 72px"},h("section",{"style":"display: flex; flex-direction: column; gap: 2px"},h("span",{"style":"font: 400 9px/1.4 'Geist', sans-serif; color: #6A6A66"},"Manifesto"),h("p",{"style":"margin: 0; font: 500 15px/1.15 'Geist', sans-serif; letter-spacing: -0.015em; white-space: pre-line"},"[Manifesto — a few lines on what META ERECTION stands for.]")),(v.mtaPosts || []).map(function(m){ return [h("article",{"data-post":"1","style":"display: flex; flex-direction: column; align-items: center; gap: 14px"},h("div",{"data-shot":"1","style":"width: 62%; aspect-ratio: 4 / 5; will-change: transform, opacity"},h("img",{"src":m.src,"alt":m.alt,"draggable":"false","style":"display: block; width: 100%; height: 100%; object-fit: cover"})),h("div",{"data-cap":"1","style":"display: flex; flex-direction: column; align-items: center; gap: 4px; font: 500 11px 'Geist', sans-serif; letter-spacing: 0.03em; text-transform: uppercase; text-align: center; will-change: opacity"},h("span",{},m.title),h("span",{"style":"color: #6A6A66"},m.date)))]; }),h("footer",{"style":"display: flex; flex-direction: column; align-items: flex-start"},(v.mtaInfo || []).map(function(f){ return [h("button",{"type":"button","onClick":f.toggle,"aria-expanded":f.expanded,"style":"height: 36px; padding: 0; border: 0; background: none; display: flex; align-items: center; gap: 6px; color: #0E0E0E; font: 500 15px/1.15 'Geist', sans-serif; letter-spacing: -0.015em; cursor: pointer"},f.title,h("svg",{"width":"8","height":"7","viewBox":"0 0 8 7","aria-hidden":"true","style":"transform: "+S(f.rot)+"; transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1)"},h("path",{"d":"M0 0 L8 0 L4 7 Z","fill":"#8A8A86"}))),(f.open ? [h("div",{"style":"padding: 6px 0 22px; display: flex; flex-direction: column; gap: 18px"},(f.parts || []).map(function(pt){ return [h("section",{"style":"display: flex; flex-direction: column; gap: 2px"},(pt.hasHead ? [h("h3",{"style":"margin: 0; font: 400 9px/1.4 'Geist', sans-serif; color: #6A6A66"},pt.head)] : null),h("p",{"style":"margin: 0; font: 400 13px/1.55 'Geist', 'Hiragino Sans', 'Noto Sans JP', sans-serif; color: #0E0E0E; white-space: pre-line"},pt.body))]; }))] : null)]; })))] : null),(v.isIndex ? [h("main",{"style":"padding-bottom: 140px"},h("div",{"aria-hidden":"true","style":"height: calc(17vh - 66px); min-height: 50px"}),h("div",{"style":"position: relative; z-index: 6; padding: 0 16px; margin-bottom: 10px; display: flex; align-items: center"},h("button",{"type":"button","onClick":v.toggleCat,"aria-haspopup":"listbox","aria-expanded":v.catExpanded,"aria-label":v.catAria,"style":"height: 44px; margin-left: -2px; margin-right: auto; padding: 0; border: 0; background: none; display: flex; align-items: center; cursor: pointer"},h("span",{"style":"height: 30px; padding: 0 10px 0 13px; border-radius: 999px; border: 1px solid "+S(v.catBd)+"; display: flex; align-items: center; gap: 8px; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #0E0E0E"},v.catNow,h("svg",{"width":"10","height":"10","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":v.catChev,"fill":"none","stroke":"#0E0E0E","stroke-width":"1.8"})))),(v.catOpen ? [h("button",{"type":"button","onClick":v.closeCat,"aria-label":"Close category menu","tabindex":"-1","style":"position: fixed; inset: 0; z-index: 5; width: 100%; height: 100%; border: 0; background: transparent; cursor: default"}),h("div",{"ref":v.catPopRef,"role":"listbox","aria-label":"Category","onPointerDown":v.gDown,"onPointerMove":v.gMove,"onPointerUp":v.gUp,"onPointerCancel":v.gUp,"style":"touch-action: none; position: absolute; left: 14px; bottom: 46px; z-index: 7; padding: 4px; box-sizing: border-box; border-radius: 18px; background: rgba(236, 236, 232, 0.55); backdrop-filter: blur(22px) saturate(180%); -webkit-backdrop-filter: blur(22px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.75); box-shadow: 0 14px 40px rgba(14, 14, 14, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(14, 14, 14, 0.05); display: flex; flex-direction: row; gap: 0; transform-origin: 8% 100%"},h("span",{"data-lens":"1","aria-hidden":"true","style":"position: absolute; left: 0; top: 0; width: 0; height: 0; border-radius: 999px; background: rgba(255, 255, 255, 0.92); box-shadow: 0 2px 10px rgba(14, 14, 14, 0.14), inset 0 0 0 1px #FFFFFF, inset 0 -2px 4px rgba(14, 14, 14, 0.05); pointer-events: none; will-change: transform, width, height"}),(v.cats || []).map(function(c){ return [h("button",{"type":"button","role":"option","aria-selected":c.pressed,"onClick":c.pick,"style":"position: relative; height: 32px; padding: 0 9px; border: 0; border-radius: 999px; background: "+S(c.bg)+"; color: "+S(c.fg)+"; display: flex; align-items: center; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; text-align: left; white-space: nowrap; cursor: pointer"},c.label)]; }))] : null),h("div",{"role":"group","aria-label":"View","style":"display: flex; align-items: center; margin-right: -6px"},(v.viewBtns || []).map(function(v){ return [h("button",{"type":"button","onClick":v.pick,"aria-pressed":v.pressed,"aria-label":v.aria,"style":"width: 28px; height: 44px; padding: 0; border: 0; background: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; cursor: pointer"},h("svg",{"width":"15","height":"15","viewBox":"0 0 16 16","aria-hidden":"true"},h("path",{"d":v.icon,"fill":"none","stroke":v.fg,"stroke-width":"1.2"})),h("span",{"aria-hidden":"true","style":"width: 12px; height: 1.5px; background: "+S(v.line)}))]; }))),(v.isScroll ? [h("div",{"style":"position: relative"},h("div",{"ref":v.rowRef,"onScroll":v.onRow,"aria-label":"Products","style":"display: flex; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; padding: 4px 19% 0; scrollbar-width: none"},(v.products || []).map(function(p){ return [h("button",{"type":"button","onClick":p.open,"aria-label":p.aria,"data-card":"1","style":"flex: 0 0 100%; scroll-snap-align: center; scroll-snap-stop: always; background: none; border: 0; padding: 0; margin: 0; text-align: center; color: inherit; font: inherit; cursor: pointer; display: flex; flex-direction: column; gap: 6px"},h("span",{"data-shot":"1","style":"display: flex; align-items: center; justify-content: center; width: 100%; height: 50vh; min-height: 300px; will-change: transform, opacity"},h("svg",{"viewBox":p.shot.vb,"aria-hidden":"true","style":"width: 100%; max-height: 92%; overflow: visible; filter: drop-shadow(0 8px 12px rgba(14, 14, 14, 0.10))"},h("g",{"transform":p.shot.tf},h("path",{"d":p.shot.d,"fill":p.shot.fill,"stroke":p.shot.stroke,"stroke-width":"1","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"})))),h("span",{"data-cap":"1","style":"display: flex; flex-direction: column; align-items: center; gap: 4px; font: 500 11px 'Geist', sans-serif; letter-spacing: 0.03em; text-transform: uppercase; white-space: nowrap; will-change: opacity"},h("span",{},p.name),h("span",{"style":"color: #6A6A66"},p.price)))]; })),h("div",{"style":"position: absolute; left: 0; right: 0; top: 4px; height: 50vh; min-height: 300px; display: flex; align-items: center; justify-content: space-between; pointer-events: none"},h("button",{"type":"button","data-press":"1","onClick":v.rowPrev,"aria-label":"Previous product","style":"width: 56px; height: 72px; padding: 0; border: 0; background: none; display: flex; align-items: center; justify-content: center; pointer-events: auto; cursor: pointer; -webkit-tap-highlight-color: transparent; margin-left: 4px; visibility: "+S(v.arrLVis)},h("svg",{"width":"22","height":"26","viewBox":"0 0 22 26","aria-hidden":"true","style":"overflow: visible; filter: drop-shadow(0 3px 6px rgba(14, 14, 14, 0.10))"},h("path",{"d":"M21 1 L1 13 L21 25 Z","fill":"#FFFFFF","stroke":"#BDBDB8","stroke-width":"1.5","stroke-linejoin":"round"}),h("path",{"d":"M16 8.5 L8.5 13 L16 17.5 Z","fill":"#E4E4E0"}))),h("button",{"type":"button","data-press":"1","onClick":v.rowNext,"aria-label":"Next product","style":"width: 56px; height: 72px; padding: 0; border: 0; background: none; display: flex; align-items: center; justify-content: center; pointer-events: auto; cursor: pointer; -webkit-tap-highlight-color: transparent; margin-right: 4px; visibility: "+S(v.arrRVis)},h("svg",{"width":"22","height":"26","viewBox":"0 0 22 26","aria-hidden":"true","style":"overflow: visible; filter: drop-shadow(0 3px 6px rgba(14, 14, 14, 0.10))"},h("path",{"d":"M1 1 L21 13 L1 25 Z","fill":"#FFFFFF","stroke":"#BDBDB8","stroke-width":"1.5","stroke-linejoin":"round"}),h("path",{"d":"M6 8.5 L13.5 13 L6 17.5 Z","fill":"#E4E4E0"}))))),h("div",{"style":"padding: 24px 16px 0; display: flex; align-items: center; gap: 14px"},h("span",{"aria-hidden":"true","style":"flex: 1; height: 1px; background: #DCDCD8; position: relative; opacity: 0; transition: opacity 500ms ease"},h("span",{"ref":v.barRef,"style":"position: absolute; left: 0; top: -0.5px; height: 2px; width: 100%; transform-origin: left center; will-change: transform; background: #0E0E0E"})))] : null),(v.isGrid ? [h("div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 6px; padding: 0 8px"},(v.products || []).map(function(p){ return [h("div",{"style":"min-width: 0; display: flex; flex-direction: column; background: #FFFFFF"},h("div",{"style":"position: relative; width: 100%; height: clamp(120px, calc(50vh - 214px), 240px); overflow: hidden; transform: translateZ(0)"},h("div",{"onScroll":v.onTile,"aria-label":p.aria,"style":"position: absolute; inset: 0; display: flex; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scrollbar-width: none; touch-action: pan-x pan-y; overscroll-behavior-x: contain"},(p.slides || []).map(function(sl){ return [h("button",{"type":"button","onClick":p.open,"aria-label":sl.alt,"style":"flex: 0 0 100%; height: 100%; padding: 0; margin: 0; border: 0; background: none; scroll-snap-align: start; scroll-snap-stop: always; cursor: pointer"},h("span",{"style":"display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; pointer-events: none"},h("svg",{"viewBox":sl.vb,"aria-hidden":"true","style":"width: 70%; height: 84%; overflow: visible; filter: drop-shadow(0 8px 12px rgba(14, 14, 14, 0.10))"},h("g",{"transform":sl.tf},h("path",{"d":sl.d,"fill":sl.fill,"stroke":sl.stroke,"stroke-width":"1","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"})))))]; })),(p.multi ? [h("div",{"data-dots":"1","aria-hidden":"true","style":"position: absolute; left: 50%; bottom: 10px; transform: translateX(-50%); display: flex; gap: 3px; padding: 5px 7px; border-radius: 8px; background: rgba(255, 255, 255, 0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); pointer-events: none"},(p.dots || []).map(function(dt){ return [h("span",{"style":"width: 10px; height: 2px; border-radius: 1px; background: "+S(dt.bg)+"; transition: background-color 0.2s"})]; }))] : null)),h("button",{"type":"button","onClick":p.open,"style":"padding: 6px 4px 18px; border: 0; background: none; text-align: center; color: #0E0E0E; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer"},h("span",{"style":"font-size: 13px; font-weight: 400; letter-spacing: -0.005em; line-height: 1.3"},p.name),h("span",{"style":"font-size: 13px; font-weight: 400; line-height: 1.3; color: #6A6A66; font-variant-numeric: tabular-nums"},p.priceCode)))]; }))] : null))] : null),(v.isProduct ? [h("main",{"style":"height: 100%; box-sizing: border-box; padding: 14px 16px 20px; display: flex; flex-direction: column"},h("div",{"style":"flex: none; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px"},h("h2",{"style":"margin: 0; padding-top: 4px; font: 500 15px/1.15 'Geist', sans-serif; letter-spacing: -0.015em"},v.prod.name),h("button",{"type":"button","onClick":v.openBag,"aria-label":v.bagAria,"style":"flex: none; height: 44px; min-width: 44px; margin: -4px -4px 0 0; padding: 0; border-radius: 22px; border: 0; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; align-items: center; justify-content: center; font: 500 11px 'Geist', sans-serif; font-variant-numeric: tabular-nums; color: #0E0E0E; cursor: pointer"},h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M5 8.5 H19 L18 21 H6 Z M9 8.5 V7 A3 3 0 0 1 15 7 V8.5","fill":"none","stroke":"#0E0E0E","stroke-width":"1.3","stroke-linejoin":"round"})))),h("div",{"onScroll":v.onGal,"aria-label":"Images","style":"flex: 1; min-height: 0; margin: 0 -16px; display: flex; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scrollbar-width: none"},(v.gallery || []).map(function(g){ return [h("div",{"role":"img","aria-label":g.alt,"style":"flex: 0 0 100%; height: 100%; scroll-snap-align: start; display: flex; align-items: center; justify-content: center"},h("svg",{"viewBox":g.vb,"aria-hidden":"true","style":"width: 74%; max-height: 92%; overflow: visible; filter: drop-shadow(0 8px 12px rgba(14, 14, 14, 0.10))"},h("g",{"transform":g.tf},h("path",{"d":g.d,"fill":g.fill,"stroke":g.stroke,"stroke-width":"1","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"}))))]; })),h("div",{"aria-hidden":"true","style":"flex: none; height: 18px; display: flex; align-items: center; justify-content: center; gap: 3px"},(v.segs || []).map(function(sg){ return [h("span",{"style":"width: 10px; height: 2px; border-radius: 1px; background: "+S(sg.bg)})]; })),h("div",{"style":"flex: none; display: flex; flex-direction: column; align-items: flex-start"},h("div",{"style":"align-self: stretch; height: 100px; display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start"},(v.showInfo ? [h("span",{"style":"font: 400 9px/1.4 'Geist', sans-serif; color: #6A6A66"},"Information"),h("p",{"tabindex":"0","style":"margin: 0 0 6px; width: 100%; max-height: 80px; overflow-y: auto; scrollbar-width: none; font: 500 13px/1.2 'Geist', sans-serif; letter-spacing: -0.01em; white-space: pre-line; -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent); mask-image: linear-gradient(to bottom, #000 70%, transparent); padding-bottom: 14px; box-sizing: border-box"},v.infoText)] : null),(v.ccyInline ? [h("div",{"ref":v.curRef,"data-inline":"1","role":"listbox","aria-label":"Currency","onPointerDown":v.gDown,"onPointerMove":v.gMove,"onPointerUp":v.gUp,"onPointerCancel":v.gUp,"style":"touch-action: none; position: relative; width: 100%; padding: 4px; box-sizing: border-box; border-radius: 20px; background: rgba(236, 236, 232, 0.55); backdrop-filter: blur(22px) saturate(180%); -webkit-backdrop-filter: blur(22px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.75); box-shadow: 0 6px 20px rgba(14, 14, 14, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(14, 14, 14, 0.05); display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 2px; transform-origin: 12% 100%"},h("span",{"data-lens":"1","aria-hidden":"true","style":"position: absolute; left: 0; top: 0; width: 0; height: 0; border-radius: 999px; background: rgba(255, 255, 255, 0.92); box-shadow: 0 2px 10px rgba(14, 14, 14, 0.14), inset 0 0 0 1px #FFFFFF, inset 0 -2px 4px rgba(14, 14, 14, 0.05); pointer-events: none; will-change: transform, width, height"}),(v.currencies || []).map(function(cy){ return [h("button",{"type":"button","role":"option","aria-selected":cy.pressed,"onClick":cy.pick,"style":"position: relative; height: 36px; padding: 0; border: 0; border-radius: 16px; background: none; color: #0E0E0E; font: 500 11px 'Geist', sans-serif; letter-spacing: 0.04em; cursor: pointer"},cy.code)]; })),h("div",{"aria-hidden":"true","style":"height: 6px; flex: none"})] : null)),h("div",{"style":"align-self: stretch; display: flex; align-items: center; gap: 2px; font: 500 15px/1.15 'Geist', sans-serif; letter-spacing: -0.015em"},h("span",{},v.prodPrice),h("button",{"type":"button","onClick":v.openCur,"aria-haspopup":"listbox","aria-expanded":v.ccyExpanded,"aria-label":v.ccyAria,"style":"height: 36px; padding: 0 6px; border: 0; background: none; display: flex; align-items: center; gap: 4px; font: inherit; letter-spacing: inherit; color: #8A8A86; cursor: pointer"},v.ccy,h("svg",{"width":"7","height":"8","viewBox":"0 0 7 8","aria-hidden":"true","style":"transform: "+S(v.ccyTri)+"; transition: transform 420ms cubic-bezier(0.3, 1.45, 0.45, 1)"},h("path",{"d":"M0 0 L7 4 L0 8 Z","fill":"#8A8A86"})))),h("button",{"type":"button","onClick":v.add,"style":"height: 36px; margin-top: 2px; padding: 0; border: 0; background: none; color: #0E0E0E; font: 500 15px/1.15 'Geist', sans-serif; letter-spacing: -0.015em; cursor: pointer"},v.addLabel),h("button",{"type":"button","onClick":v.goIndex,"style":"height: 36px; margin-bottom: -8px; padding: 0; border: 0; background: none; color: #0E0E0E; font: 500 15px/1.15 'Geist', sans-serif; letter-spacing: -0.015em; cursor: pointer"},"Close")))] : null),(v.isInfo ? [h("main",{"style":"padding: 24px 16px 140px"},h("h2",{"style":"margin: 0 0 24px; font-size: 34px; font-weight: 300; letter-spacing: -0.03em; line-height: 1"},v.page.title),(v.page.hasBody ? [h("p",{"style":"margin: 0; font-size: 15px; font-weight: 300; line-height: 1.75; color: #3A3A37; white-space: pre-line"},v.page.body)] : null),(v.page.isPolicies ? [h("div",{"style":"border-top: 1px solid #0E0E0E"},(v.policies || []).map(function(r){ return [h("div",{"style":"border-bottom: 1px solid #DCDCD8"},h("button",{"type":"button","onClick":r.toggle,"aria-expanded":r.expanded,"style":"width: 100%; min-height: 56px; background: none; border: 0; padding: 0; display: flex; align-items: center; gap: 16px; text-align: left; color: #0E0E0E; cursor: pointer"},h("span",{"style":"font: 500 10px 'Geist', sans-serif; color: #6A6A66; width: 20px"},r.num),h("span",{"style":"flex: 1; font-size: 15px; font-weight: 400"},r.title),h("span",{"aria-hidden":"true","style":"font: 400 14px 'Geist', sans-serif"},r.sign)),(r.open ? [h("p",{"style":"margin: 0; padding: 0 0 22px 36px; font-size: 14px; font-weight: 300; line-height: 1.75; color: #3A3A37; white-space: pre-line"},r.body)] : null))]; }))] : null))] : null),(v.isCheckout ? [h("main",{"style":"padding: 20px 16px 140px; display: flex; flex-direction: column; gap: 28px"},h("button",{"type":"button","onClick":v.goIndex,"style":"align-self: flex-start; background: none; border: 0; padding: 10px 0; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #6A6A66; cursor: pointer"},"← PRODUCTS"),h("h2",{"style":"margin: -12px 0 0; font-size: 34px; font-weight: 300; letter-spacing: -0.02em; line-height: 1"},"Checkout"),h("div",{"style":"display: flex; flex-direction: column; gap: 10px"},h("div",{"style":"height: 52px; border-radius: 999px; background: #0E0E0E; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em"},"EXPRESS — APPLE PAY / GOOGLE PAY"),h("span",{"style":"font: 500 10px 'Geist', sans-serif; color: #6A6A66; text-align: center"},"Express buttons are rendered by the payment provider.")),h("form",{"style":"display: flex; flex-direction: column; gap: 22px"},(v.fields || []).map(function(f){ return [h("div",{"style":"display: flex; flex-direction: column; gap: 4px"},h("label",{"for":f.id,"style":"font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #6A6A66"},f.label),h("input",{"id":f.id,"type":f.type,"autocomplete":f.ac,"style":"background: transparent; border: 0; border-bottom: 1px solid #0E0E0E; border-radius: 0; padding: 10px 0; font: 300 16px 'Geist', sans-serif; color: #0E0E0E; outline-offset: 4px"}))]; }),h("div",{"style":"display: flex; flex-direction: column; gap: 8px"},h("span",{"style":"font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #6A6A66"},"CARD"),h("div",{"style":"height: 52px; border: 1px solid #DCDCD8; border-radius: 14px; background: #FFFFFF; padding: 0 16px; display: flex; align-items: center; font: 400 12px 'Geist', sans-serif; color: #6A6A66"},"Card number · MM / YY · CVC"))),h("div",{"style":"display: flex; flex-direction: column; gap: 10px; padding-top: 4px; border-top: 1px solid #0E0E0E"},(v.bagItems || []).map(function(b){ return [h("div",{"style":"display: flex; justify-content: space-between; padding-top: 10px; font: 500 11px 'Geist', sans-serif"},h("span",{},b.meta),h("span",{},b.price))]; }),h("div",{"style":"display: flex; justify-content: space-between; font: 500 11px 'Geist', sans-serif; color: #6A6A66"},h("span",{},"SHIPPING"),h("span",{},v.shipping)),h("div",{"style":"display: flex; justify-content: space-between; font: 400 12px 'Geist', sans-serif; padding-top: 10px; border-top: 1px solid #DCDCD8"},h("span",{},"TOTAL"),h("span",{},S(v.total)+" "+S(v.ccy)))),h("section",{"style":"display: flex; flex-direction: column; gap: 8px"},h("h3",{"style":"margin: 0; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #6A6A66"},"BEFORE YOU ORDER / ご注文前の確認"),h("p",{"style":"margin: 0; font-size: 12px; font-weight: 300; line-height: 1.75; color: #3A3A37; white-space: pre-line"},v.coNote)))] : null),(v.isDone ? [h("main",{"style":"height: 792px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 0 24px; text-align: center"},h("h2",{"style":"margin: 0; font-size: 34px; font-weight: 300; letter-spacing: -0.02em"},"Thank you."),h("p",{"style":"margin: 0; font: 400 10px/1.9 'Geist', sans-serif; letter-spacing: 0.06em; color: #6A6A66"},"ORDER [NUMBER]",h("br",{}),"A confirmation has been sent to your email."))] : null)),(v.showVBar ? [h("div",{"aria-hidden":"true","style":"position: absolute; right: 5px; top: "+S(v.vTop)+"; bottom: 116px; width: 2px; z-index: 16; pointer-events: none; opacity: 0; transition: opacity 500ms ease"},h("span",{"style":"position: absolute; left: 0.5px; top: 0; bottom: 0; width: 1px; background: #DCDCD8"}),h("span",{"ref":v.vBarRef,"style":"position: absolute; left: 0; top: 0; width: 2px; height: 100%; transform-origin: center top; transform: scaleY(0); will-change: transform; background: #0E0E0E"}))] : null),(v.showFade ? [h("div",{"aria-hidden":"true","style":"position: absolute; left: 0; right: 0; bottom: 0; height: 150px; z-index: 15; pointer-events: none; background: linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); -webkit-mask-image: linear-gradient(to top, #000 30%, transparent); mask-image: linear-gradient(to top, #000 30%, transparent)"})] : null),(v.showDock ? [h("button",{"type":"button","onClick":v.openBag,"aria-label":v.bagAria,"style":"position: absolute; left: 50%; bottom: 44px; transform: translateX(-50%); z-index: 20; height: 44px; min-width: 72px; padding: 0 17px 0 15px; border: 0; border-radius: 22px; background: #0E0E0E; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 8px; font: 500 11px 'Geist', sans-serif; font-variant-numeric: tabular-nums; box-shadow: 0 6px 22px rgba(14, 14, 14, 0.16); cursor: pointer"},h("svg",{"width":"17","height":"17","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M5 8.5 H19 L18 21 H6 Z M9 8.5 V7 A3 3 0 0 1 15 7 V8.5","fill":"none","stroke":"#FFFFFF","stroke-width":"1.3","stroke-linejoin":"round"})),h("span",{},v.bagCount))] : null),(v.isCheckout ? [h("button",{"type":"button","onClick":v.placeOrder,"style":"position: absolute; left: 16px; right: 16px; bottom: 28px; z-index: 20; height: 56px; border-radius: 28px; border: 0; background: #0E0E0E; color: #FFFFFF; font: 500 11px 'Geist', sans-serif; letter-spacing: 0.22em; box-shadow: 0 8px 28px rgba(14, 14, 14, 0.18); cursor: pointer"},"PLACE ORDER")] : null),(v.isDone ? [h("button",{"type":"button","onClick":v.goIndex,"style":"position: absolute; left: 16px; right: 16px; bottom: 28px; z-index: 20; height: 56px; border-radius: 28px; border: 1px solid #0E0E0E; background: transparent; color: #0E0E0E; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; cursor: pointer"},"BACK TO PRODUCTS")] : null),(v.hasToast ? [h("div",{"role":"status","style":"position: absolute; left: 16px; right: 16px; bottom: 108px; z-index: 22; height: 48px; padding: 0 8px 0 18px; border-radius: 24px; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid #DCDCD8; display: flex; align-items: center; justify-content: space-between; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.06em"},h("span",{},v.toast),h("button",{"type":"button","onClick":v.openBag,"style":"height: 36px; padding: 0 14px; border-radius: 18px; border: 0; background: #0E0E0E; color: #FFFFFF; font: inherit; letter-spacing: inherit; cursor: pointer"},"VIEW BAG"))] : null),(v.hasSheet ? [h("button",{"type":"button","onClick":v.closeSheet,"aria-label":"Close","style":"position: absolute; inset: 0; z-index: 40; width: 100%; height: 100%; border: 0; background: rgba(14, 14, 14, 0.32); cursor: pointer"})] : null),(v.sizeSheet ? [h("div",{"role":"dialog","aria-label":"Select size","style":"position: absolute; left: 0; right: 0; bottom: 0; z-index: 41; background: #FFFFFF; border-radius: 22px 22px 0 0; padding: 10px 16px 36px; display: flex; flex-direction: column"},h("div",{"onPointerDown":v.dDown,"onPointerMove":v.dMove,"onPointerUp":v.dUp,"onPointerCancel":v.dUp,"aria-hidden":"true","style":"align-self: stretch; margin: -10px -16px -6px; height: 36px; display: flex; align-items: center; justify-content: center; touch-action: none; cursor: grab"},h("span",{"style":"width: 36px; height: 4px; border-radius: 2px; background: #CFCFCB"})),h("div",{"style":"display: flex; justify-content: space-between; align-items: baseline; padding: 20px 0 12px; border-bottom: 1px solid #0E0E0E"},h("span",{"style":"font-size: 20px; font-weight: 300; letter-spacing: -0.01em"},"Select size"),h("span",{"style":"font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #6A6A66"},v.prod.id)),(v.sizes || []).map(function(z){ return [h("button",{"type":"button","onClick":z.pick,"aria-pressed":z.pressed,"style":"height: 58px; background: none; border: 0; border-bottom: 1px solid #DCDCD8; padding: 0; display: flex; align-items: center; justify-content: space-between; color: #0E0E0E; cursor: pointer"},h("span",{"style":"font-size: 18px; font-weight: 300"},z.label),(z.on ? [h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M5 12 L10 17 L19 7","fill":"none","stroke":"#0E0E0E","stroke-width":"1.6"}))] : null))]; }),h("p",{"style":"margin: 16px 0 0; font: 400 10px/1.7 'Geist', sans-serif; color: #6A6A66"},"Measurements are listed under SIZE & FIT."))] : null),(v.ccyPop ? [h("button",{"type":"button","onClick":v.closeCur,"aria-label":"Close currency menu","tabindex":"-1","style":"position: absolute; inset: 0; z-index: 46; width: 100%; height: 100%; border: 0; background: transparent; cursor: default"}),h("div",{"ref":v.curRef,"role":"listbox","aria-label":"Currency","onPointerDown":v.gDown,"onPointerMove":v.gMove,"onPointerUp":v.gUp,"onPointerCancel":v.gUp,"style":"touch-action: none; position: absolute; "+S(v.curPos)+"; z-index: 47; width: 228px; padding: 6px; box-sizing: border-box; border-radius: 16px; background: rgba(236, 236, 232, 0.55); backdrop-filter: blur(22px) saturate(180%); -webkit-backdrop-filter: blur(22px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.75); box-shadow: 0 14px 40px rgba(14, 14, 14, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(14, 14, 14, 0.05); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px; transform-origin: "+S(v.curOrigin)},h("span",{"data-lens":"1","aria-hidden":"true","style":"position: absolute; left: 0; top: 0; width: 0; height: 0; border-radius: 999px; background: rgba(255, 255, 255, 0.92); box-shadow: 0 2px 10px rgba(14, 14, 14, 0.14), inset 0 0 0 1px #FFFFFF, inset 0 -2px 4px rgba(14, 14, 14, 0.05); pointer-events: none; will-change: transform, width, height"}),(v.currencies || []).map(function(cy){ return [h("button",{"type":"button","role":"option","aria-selected":cy.pressed,"onClick":cy.pick,"style":"position: relative; height: 44px; padding: 0 10px; border: 0; border-radius: 10px; background: "+S(cy.bg)+"; color: "+S(cy.fg)+"; display: flex; align-items: center; gap: 8px; text-align: left; font: 500 11px 'Geist', sans-serif; letter-spacing: 0.04em; cursor: pointer"},h("span",{"style":"min-width: 28px; color: "+S(cy.symFg)},cy.sym),h("span",{},cy.code))]; }))] : null),(v.bagSheet ? [h("div",{"role":"dialog","aria-label":"Bag","style":"position: absolute; left: 0; right: 0; bottom: 0; height: 88%; z-index: 41; background: #FFFFFF; border-radius: 22px 22px 0 0; padding: 10px 16px 28px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px"},h("div",{"onPointerDown":v.dDown,"onPointerMove":v.dMove,"onPointerUp":v.dUp,"onPointerCancel":v.dUp,"style":"align-self: stretch; margin: -10px -16px -14px; padding: 0 16px 14px; display: flex; flex-direction: column; touch-action: none; cursor: grab"},h("div",{"aria-hidden":"true","style":"height: 30px; display: flex; align-items: center; justify-content: center"},h("span",{"style":"width: 36px; height: 4px; border-radius: 2px; background: #CFCFCB"})),h("div",{"style":"display: flex; justify-content: space-between; align-items: center"},h("span",{"style":"font-size: 26px; font-weight: 300; letter-spacing: -0.02em"},"Bag ",h("span",{"style":"font: 500 11px 'Geist', sans-serif; color: #6A6A66; vertical-align: middle"},v.bagCountPad)),h("button",{"type":"button","onClick":v.closeSheet,"aria-label":"Close bag","style":"width: 44px; height: 44px; margin-right: -10px; background: none; border: 0; display: flex; align-items: center; justify-content: center; cursor: pointer"},h("svg",{"width":"14","height":"14","viewBox":"0 0 14 14","aria-hidden":"true"},h("path",{"d":"M1 1 L13 13 M13 1 L1 13","stroke":"#0E0E0E","stroke-width":"1.2","fill":"none"}))))),h("div",{"style":"flex: 1; overflow-y: auto; border-top: 1px solid #0E0E0E"},(v.bagEmpty ? [h("p",{"style":"margin: 0; padding: 32px 0; font-size: 15px; font-weight: 300; color: #6A6A66"},"Your bag is empty.")] : null),(v.bagItems || []).map(function(b){ return [h("div",{"style":"display: flex; gap: 14px; align-items: center; padding: 14px 0; border-bottom: 1px solid #DCDCD8"},h("span",{"style":"width: 66px; height: 88px; border-radius: 8px; overflow: hidden; background: transparent; flex: none; display: flex; align-items: center; justify-content: center"},h("svg",{"viewBox":b.shot.vb,"aria-hidden":"true","style":"width: 76%; height: auto; overflow: visible; filter: drop-shadow(0 8px 12px rgba(14, 14, 14, 0.10))"},h("g",{"transform":b.shot.tf},h("path",{"d":b.shot.d,"fill":b.shot.fill,"stroke":b.shot.stroke,"stroke-width":"1","stroke-linejoin":"round","vector-effect":"non-scaling-stroke"})))),h("span",{"style":"flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px"},h("span",{"style":"font-size: 15px; font-weight: 400"},b.name),h("span",{"style":"font: 500 10px 'Geist', sans-serif; color: #6A6A66"},b.meta),h("span",{"style":"font: 500 10px 'Geist', sans-serif"},b.price)),h("button",{"type":"button","onClick":b.remove,"aria-label":b.aria,"style":"width: 44px; height: 44px; background: none; border: 0; display: flex; align-items: center; justify-content: center; cursor: pointer"},h("svg",{"width":"12","height":"12","viewBox":"0 0 14 14","aria-hidden":"true"},h("path",{"d":"M1 1 L13 13 M13 1 L1 13","stroke":"#6A6A66","stroke-width":"1.2","fill":"none"}))))]; })),h("div",{"style":"display: flex; justify-content: space-between; font: 400 12px 'Geist', sans-serif"},h("span",{},"SUBTOTAL"),h("span",{},v.subtotal)),h("span",{"style":"font: 500 10px 'Geist', sans-serif; color: #6A6A66"},"Shipping is calculated at checkout."),h("button",{"type":"button","onClick":v.goCheckout,"disabled":v.bagEmpty,"style":"height: 56px; border-radius: 28px; border: 0; background: "+S(v.coBg)+"; color: #FFFFFF; font: 500 11px 'Geist', sans-serif; letter-spacing: 0.22em; cursor: pointer"},"CHECKOUT"))] : null),(v.menuOpen ? [h("button",{"ref":v.menuScrimRef,"type":"button","onClick":v.closeMenu,"aria-label":"Close menu","tabindex":"-1","style":"position: absolute; inset: 0; z-index: 44; width: 100%; height: 100%; border: 0; background: rgba(255, 255, 255, 0.35); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); cursor: pointer"}),h("div",{"ref":v.menuRef,"role":"dialog","aria-label":"Menu","style":"position: absolute; left: 12px; right: 12px; top: 10px; z-index: 45; background: #FFFFFF; border-radius: 20px; box-shadow: 0 18px 48px rgba(14, 14, 14, 0.16); padding: 4px 12px 14px; display: flex; flex-direction: column; max-height: calc(100% - 20px); box-sizing: border-box; transform-origin: calc(100% - 26px) 26px"},h("div",{"style":"height: 44px; margin-top: 4px; flex: none; display: flex; align-items: center; justify-content: space-between"},(v.menuAtList ? [h("button",{"type":"button","onClick":v.closeMenu,"aria-label":"Close menu","style":"width: 38px; height: 38px; margin-left: auto; margin-right: -1px; padding: 0; border: 0; border-radius: 19px; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 1px 4px rgba(14, 14, 14, 0.08); display: flex; align-items: center; justify-content: center; cursor: pointer"},h("svg",{"width":"14","height":"14","viewBox":"0 0 22 22","aria-hidden":"true"},h("path",{"d":"M3 3 L19 19 M19 3 L3 19","stroke":"#0E0E0E","stroke-width":"1.8"})))] : null),(v.menuInPage ? [h("button",{"type":"button","onClick":v.menuBack,"aria-label":"Back to menu","style":"width: 38px; height: 38px; margin-left: -1px; padding: 0; border: 0; border-radius: 19px; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 1px 4px rgba(14, 14, 14, 0.08); display: flex; align-items: center; justify-content: center; cursor: pointer"},h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M15 5 L8 12 L15 19","fill":"none","stroke":"#0E0E0E","stroke-width":"1.4"}))),h("button",{"type":"button","onClick":v.closeMenu,"aria-label":"Close menu","style":"width: 38px; height: 38px; margin-right: -1px; padding: 0; border: 0; border-radius: 19px; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 1px 4px rgba(14, 14, 14, 0.08); display: flex; align-items: center; justify-content: center; cursor: pointer"},h("svg",{"width":"14","height":"14","viewBox":"0 0 22 22","aria-hidden":"true"},h("path",{"d":"M3 3 L19 19 M19 3 L3 19","stroke":"#0E0E0E","stroke-width":"1.8"})))] : null)),h("div",{"aria-hidden":"true","style":"display: "+S(v.videoDisplay)+"; flex: none; margin: 12px 0 6px; position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: 12px; overflow: hidden; background: #0E0E0E; -webkit-touch-callout: none; user-select: none; -webkit-user-select: none"},h("video",{"ref":v.videoRef,"src":"./mta.mp4","loop":true,"playsInline":true,"preload":"auto","disablePictureInPicture":true,"controlslist":"nodownload nofullscreen noremoteplayback","tabindex":"-1","onPause":v.keepPlaying,"style":"display: block; width: 100%; height: 100%; object-fit: cover; pointer-events: none"}),h("div",{"style":"position: absolute; inset: 0"})),(v.menuInPage ? [h("div",{"ref":v.menuPageRef,"style":"flex: 1; min-height: 0; overflow-y: auto; scrollbar-width: none; padding: "+S(v.pagePad)},(v.mp.showTitle ? [h("h2",{"style":"margin: 4px 0 18px; font-size: 32px; font-weight: 300; letter-spacing: -0.03em; line-height: 1"},v.mp.title)] : null),(v.mp.hasBody ? [h("p",{"style":"margin: 0 0 8px; font-size: 15px; font-weight: 300; line-height: 1.75; color: #3A3A37; white-space: pre-line"},v.mp.body)] : null),(v.mp.isPolicies ? [h("div",{"style":"display: flex; flex-direction: column"},(v.policies || []).map(function(r){ return [h("section",{"style":"padding: 16px 0 20px; border-top: 1px solid #DCDCD8"},h("h3",{"style":"margin: 0 0 10px; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; text-transform: uppercase; color: #0E0E0E"},r.title),h("p",{"style":"margin: 0; font-size: 14px; font-weight: 300; line-height: 1.75; color: #3A3A37; white-space: pre-line"},r.body))]; }))] : null))] : null),(v.menuAtList ? [h("div",{"ref":v.menuListRef,"style":"padding: 6px 4px 0"},h("nav",{"aria-label":"Information","style":"border-top: 1px solid #0E0E0E"},(v.menuLinks || []).map(function(l){ return [h("button",{"type":"button","onClick":l.go,"aria-current":l.current,"style":"width: 100%; min-height: 60px; padding: 10px 0; border: 0; border-bottom: 1px solid #DCDCD8; background: none; display: flex; align-items: center; gap: 14px; text-align: left; color: #0E0E0E; cursor: pointer"},h("span",{"aria-hidden":"true","style":"width: 4px; height: 4px; margin: 0 3px; border-radius: 50%; background: #0E0E0E; flex: none"}),h("span",{"style":"flex: 1; display: flex; flex-direction: column; gap: 4px"},h("span",{"style":"font-size: 17px; font-weight: "+S(l.weight)+"; letter-spacing: -0.01em"},l.title),(l.hasSub ? [h("span",{"style":"font: 500 10px 'Geist', sans-serif; letter-spacing: 0.04em; color: #6A6A66"},l.sub)] : null)),h("svg",{"width":"12","height":"12","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M9 6 L15 12 L9 18","fill":"none","stroke":"#8A8A86","stroke-width":"1.6"})))]; })),h("button",{"type":"button","onClick":v.menuCur,"aria-haspopup":"listbox","aria-label":v.ccyAria,"style":"width: 100%; height: 52px; margin-top: 6px; padding: 0; border: 0; background: none; display: flex; align-items: center; justify-content: space-between; color: #0E0E0E; cursor: pointer"},h("span",{"style":"font: 500 10px 'Geist', sans-serif; letter-spacing: 0.08em; color: #6A6A66"},"CURRENCY"),h("span",{"style":"height: 30px; padding: 0 10px 0 13px; border-radius: 999px; border: 1px solid #CFCFCB; display: flex; align-items: center; gap: 6px; font: 500 10px 'Geist', sans-serif; letter-spacing: 0.06em"},h("span",{"style":"color: #6A6A66"},v.sym),v.ccy,h("svg",{"width":"10","height":"10","viewBox":"0 0 24 24","aria-hidden":"true"},h("path",{"d":"M6 9 L12 15 L18 9","fill":"none","stroke":"#0E0E0E","stroke-width":"1.8"})))))] : null))] : null)]; }
function paint() {
  if (!inst) return;
  if (painting) { dirty = true; return; }
  painting = true;
  try {
    do {
      dirty = false;
      preact.render(h('div', { style: ROOT_STYLE }, view(inst.renderVals())), root);
      if (inst.componentDidUpdate) inst.componentDidUpdate();
    } while (dirty);
  } finally { painting = false; }
}
var ROOT_STYLE = "width: 100%; height: 100%; position: relative; overflow: hidden; transform: translateZ(0); background: #FFFFFF; color: #0E0E0E; font-family: 'Geist', 'Hiragino Sans', 'Noto Sans JP', system-ui, sans-serif; -webkit-font-smoothing: antialiased";

var DCLogic_ = DCLogicClass;

class Component extends DCLogic_ {
  constructor(props) {
    super(props);
    var st = (props && props.start) || 'index';
    var demo = [{ key: 'd1', id: 'ME-02', size: 'M' }, { key: 'd2', id: 'ME-04', size: 'L' }];
    var screen = st === 'size' ? 'product' : (st === 'bag' || st === 'menu' || st === 'policies') ? 'index' : st === 'intro' ? 'open' : st;
    this.state = {
      screen: screen, ccy: 'JPY', saved: [], view: 'grid', cur: 0, cat: 'ALL', pid: 'ME-01', size: '', img: 0, acc: '', info: 'policies', pol: '01',
      sheet: st === 'size' ? 'size' : st === 'bag' ? 'bag' : '',
      menu: st === 'menu' || st === 'policies', menuPage: st === 'policies' ? 'policies' : '',
      bag: st === 'bag' || st === 'checkout' ? demo : [],
      toast: ''
    };
    var self = this;
    this._upd = function () {
      var r = self._row, b = self._bar;
      if (!r || !b) return;
      var max = r.scrollWidth - r.clientWidth;
      var p = max > 0 ? Math.min(1, Math.max(0, r.scrollLeft / max)) : 0;
      var n = self._n || 1;
      b.style.transform = 'scaleX(' + p + ')';
      // the centred product is full size; neighbours shrink and fade with their distance from the centre
      var cards = r.querySelectorAll('[data-card]');
      var mid = r.scrollLeft + r.clientWidth / 2;
      for (var i = 0; i < cards.length; i++) {
        var c = cards[i], w = c.offsetWidth || 1;
        var d = Math.abs(c.offsetLeft + w / 2 - mid) / w;
        var f = d >= 1 ? 0 : 1 - d;
        var e = f * f * (3 - 2 * f);
        var shot = c.querySelector('[data-shot]'), cap = c.querySelector('[data-cap]');
        if (shot) { shot.style.transform = 'scale(' + (0.46 + 0.54 * e).toFixed(4) + ')'; shot.style.opacity = (0.22 + 0.78 * e).toFixed(3); }
        if (cap) { cap.style.opacity = (e * e).toFixed(3); cap.style.transform = 'translateY(' + ((1 - e) * 10).toFixed(2) + 'px)'; }
      }
    };
    this._rowRef = function (el) {
      var fresh = el && el !== self._row;
      self._row = el; self._upd();
      if (fresh) {   // entering the scroll view: the row settles in slowly
        el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
        requestAnimationFrame(function () { requestAnimationFrame(function () {
          el.style.transition = 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1)';
          el.style.opacity = '1'; el.style.transform = 'none';
        }); });
      }
    };
    // arrow taps glide with their own timing instead of the browser's default smooth scroll
    this._glide = function (dir) {
      var r = self._row;
      if (!r) return;
      var first = r.querySelector('[data-card]');
      var step = first ? first.offsetWidth : r.clientWidth;
      var max = r.scrollWidth - r.clientWidth;
      var from = r.scrollLeft;
      var to = Math.max(0, Math.min(max, (Math.round(from / step) + dir) * step));
      if (to === from) return;
      cancelAnimationFrame(self._glideRaf);
      r.style.scrollSnapType = 'none';
      var t0 = null, D = 780;
      var frame = function (now) {
        if (t0 === null) t0 = now;
        var t = Math.min(1, (now - t0) / D);
        var k = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        r.scrollLeft = from + (to - from) * k;
        self._upd();
        if (t < 1) { self._glideRaf = requestAnimationFrame(frame); } else { r.style.scrollSnapType = 'x mandatory'; }
      };
      self._glideRaf = requestAnimationFrame(frame);
    };
    this._barRef = function (el) { self._bar = el; self._upd(); };

    this._vUpd = function () {
      var sc = self._sc, b = self._vbar;
      if (!sc || !b) return;
      var max = sc.scrollHeight - sc.clientHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, sc.scrollTop / max)) : 0;
      b.style.transform = 'scaleY(' + p + ')';
      // MTA posts: full size at the middle of the screen, smaller and fainter towards the edges
      var posts = sc.querySelectorAll('[data-post]');
      if (posts.length) {
        var box = sc.getBoundingClientRect(), midY = box.top + box.height / 2;
        for (var i = 0; i < posts.length; i++) {
          var shot = posts[i].querySelector('[data-shot]'), cap = posts[i].querySelector('[data-cap]');
          if (!shot) continue;
          var rr = shot.getBoundingClientRect();
          var d = Math.abs(rr.top + rr.height / 2 - midY) / (box.height * 0.62);
          var f = d >= 1 ? 0 : 1 - d, e = f * f * (3 - 2 * f);
          shot.style.transform = 'scale(' + (0.72 + 0.28 * e).toFixed(4) + ')';
          shot.style.opacity = (0.25 + 0.75 * e).toFixed(3);
          if (cap) cap.style.opacity = (e * e).toFixed(3);
        }
      }
    };
    // custom bars show only while in use and fade out about 2s after the last scroll
    this._flash = function (el, key) {
      if (!el) return;
      el.style.opacity = '1';
      clearTimeout(self['_ft' + key]);
      self['_ft' + key] = setTimeout(function () { el.style.opacity = '0'; }, 2000);
    };
    this._scRef = function (el) { self._sc = el; self._vUpd(); };
    this._vBarRef = function (el) { self._vbar = el; self._vUpd(); };
    this._onMain = function () {
      self._vUpd();
      var sc = self._sc, b = self._vbar;
      if (sc && b && sc.scrollHeight - sc.clientHeight > 8) self._flash(b.parentElement, 'v');
    };

    var EASE = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
    var enter = function (el, from) {
      el.style.transition = 'none';
      el.style.opacity = '0';
      if (from) el.style.transform = from;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.style.transition = 'opacity 240ms ' + EASE + (from ? ', transform 340ms ' + EASE : '');
          el.style.opacity = '1';
          if (from) el.style.transform = 'none';
        });
      });
    };
    this._menuRef = function (el) { self._menuEl = el; if (el) enter(el, 'translateY(-8px) scale(0.97)'); };
    this._menuScrimRef = function (el) { self._menuScrim = el; if (el) enter(el, ''); };
    this._closeMenu = function () {
      var m = self._menuEl, sc = self._menuScrim;
      if (!m) { self.setState({ menu: false }); return; }
      m.style.transition = 'opacity 160ms ease-in, transform 180ms ease-in';
      m.style.opacity = '0';
      m.style.transform = 'translateY(-6px) scale(0.98)';
      if (sc) { sc.style.transition = 'opacity 180ms ease-in'; sc.style.opacity = '0'; }
      setTimeout(function () { self.setState({ menu: false, menuPage: '' }); }, 170);
    };
    this._menuPageRef = function (el) { if (el) enter(el, 'translateX(14px)'); };
    this._menuListRef = function (el) { if (el && self._fromPage) { self._fromPage = false; enter(el, 'translateX(-14px)'); } };
    // About video: started inside the tap on "About", so browsers allow it to play with sound.
    var aboutOpen = function () { return !!(self.state.menu && self.state.menuPage === 'about'); };
    var tryPlay = function (v, withSound) {
      v.muted = !withSound;
      var p = v.play();
      if (p && p.catch) p.catch(function (err) {
        // only a real autoplay block falls back to silence; an interrupted play() is simply retried
        if (err && err.name === 'AbortError') { setTimeout(function () { if (v.paused && v.isConnected) tryPlay(v, withSound); }, 120); return; }
        if (!withSound) return;
        v.muted = true;
        var q = v.play(); if (q && q.catch) q.catch(function () {});
        var unmute = function () { document.removeEventListener('pointerdown', unmute); if (v.isConnected && !v.paused) v.muted = false; };
        document.addEventListener('pointerdown', unmute);
      });
    };
    this._videoRef = function (el) {
      self._video = el;
      if (el) {
        el.setAttribute('playsinline', '');
        el.setAttribute('webkit-playsinline', '');
        if (aboutOpen()) tryPlay(el, false);
      }
    };
    this._playAbout = function () {
      var v = self._video;
      if (!v) return;
      try { v.currentTime = 0; } catch (x) {}
      tryPlay(v, true);
    };
    this._keepPlaying = function (e) {
      var v = e.currentTarget;
      if (v && v.isConnected && aboutOpen()) setTimeout(function () { if (aboutOpen()) tryPlay(v, !v.muted); }, 0);
    };
    // MTA screen: its video lives in the page from the start, so the tap that opens MTA can start it with sound
    this._mtaVidRef = function (el) {
      self._mtaVid = el;
      if (el) { el.setAttribute('playsinline', ''); el.setAttribute('webkit-playsinline', ''); }
    };
    // fades the page content only — the sticky header (with the MTA button) never blinks
    var contentOf = function (sc) {
      var out = [];
      if (!sc) return out;
      for (var k = 0; k < sc.children.length; k++) { if (sc.children[k].tagName !== 'HEADER') out.push(sc.children[k]); }
      return out;
    };
    this._goMta = function () {
      var v = self._mtaVid, sc = self._sc;
      self._toMta = true;
      markIn();
      if (v) tryPlay(v, true);   // inside the tap, so sound is allowed; resumes where it left off
      self.setState({ sheet: '', toast: '', menu: false, menuPage: '', ccyOpen: false, catOpen: false });
      contentOf(sc).forEach(function (el) { el.style.transition = 'opacity 260ms ease-in'; el.style.opacity = '0'; });
      setTimeout(function () {
        self.setState({ screen: 'mta' });
        if (!sc) return;
        sc.scrollTop = 0;
        var els = contentOf(sc);
        els.forEach(function (el) { el.style.transition = 'none'; el.style.opacity = '0'; });
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            els.forEach(function (el) {
              el.style.transition = 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)';
              el.style.opacity = '1';
            });
          });
        });
      }, 260);
    };
    this._backToShop = function () {
      var sc = self._sc;
      self._toMta = false;
      markOut();
      contentOf(sc).forEach(function (el) { el.style.transition = 'opacity 260ms ease-in'; el.style.opacity = '0'; });
      setTimeout(function () {
        self.setState({ screen: 'index', sheet: '', toast: '', menu: false, menuPage: '', ccyOpen: false, catOpen: false });
        if (!sc) return;
        sc.scrollTop = 0;
        var els = contentOf(sc);
        els.forEach(function (el) { el.style.transition = 'none'; el.style.opacity = '0'; });
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            els.forEach(function (el) {
              el.style.transition = 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)';
              el.style.opacity = '1';
            });
          });
        });
      }, 260);
    };
    this._mtaKeepPlaying = function (e) {
      var v = e.currentTarget;
      if (v && v.isConnected && (self.state.screen === 'mta' || self._toMta)) setTimeout(function () { if ((self.state.screen === 'mta' || self._toMta) && v.paused) tryPlay(v, !v.muted); }, 0);
    };
    this._menuBack = function () { self._fromPage = true; self.setState({ menuPage: '' }); };

    var SPRING = 'cubic-bezier(0.3, 1.45, 0.45, 1)';
    // liquid-glass menus: a bright lens slides and swells under the finger
    var lensTo = function (pop, opt, how) {
      var l = pop && pop.querySelector('[data-lens]');
      if (!l || !opt) return;
      l.style.transition = how === 'jump' ? 'none' : 'transform 420ms ' + SPRING + ', width 420ms ' + SPRING + ', height 420ms ' + SPRING;
      l.style.borderRadius = getComputedStyle(opt).borderRadius;
      l.style.width = opt.offsetWidth + 'px';
      l.style.height = opt.offsetHeight + 'px';
      l.style.transform = 'translate(' + opt.offsetLeft + 'px, ' + opt.offsetTop + 'px) scale(' + (how === 'press' ? '1.07, 1.16' : '1, 1') + ')';
    };
    var optAt = function (pop, e) {
      var t = document.elementFromPoint(e.clientX, e.clientY);
      t = t && t.closest ? t.closest('[role="option"]') : null;
      return t && pop.contains(t) ? t : null;
    };
    var glassIn = function (el, from) {
      var sel = el.querySelector('[aria-selected="true"]');
      lensTo(el, sel, 'jump');
      el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = from; el.style.filter = 'blur(6px)';
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        el.style.transition = 'opacity 220ms ease, transform 560ms ' + SPRING + ', filter 320ms ease';
        el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none';
      }); });
    };
    this._gDown = function (e) {
      var pop = e.currentTarget, o = optAt(pop, e);
      self._gOn = true; self._gFrom = o; self._gCur = o;
      if (o) lensTo(pop, o, 'press');
    };
    this._gMove = function (e) {
      if (!self._gOn) return;
      var pop = e.currentTarget, o = optAt(pop, e);
      if (o && o !== self._gCur) { self._gCur = o; lensTo(pop, o, 'press'); }
    };
    this._gUp = function (e) {
      if (!self._gOn) return;
      self._gOn = false;
      var pop = e.currentTarget, o = e.type === 'pointercancel' ? null : optAt(pop, e);
      if (o) { lensTo(pop, o, 'rest'); if (o !== self._gFrom) o.click(); }
      else lensTo(pop, pop.querySelector('[aria-selected="true"]'), 'rest');
    };
    this._tapLens = function (e) {
      var o = e.target && e.target.closest ? e.target.closest('[role="option"]') : null;
      if (o) lensTo(e.currentTarget, o, 'rest');
    };
    this._catPopRef = function (el) { var fresh = el && el !== self._catPop; self._catPop = el; if (fresh) glassIn(el, 'scale(0.5, 0.3)'); };
    this._closeCat = function () {
      var c = self._catPop;
      if (!c) { self.setState({ catOpen: false }); return; }
      c.style.transition = 'opacity 200ms ease-in, transform 240ms cubic-bezier(0.5, 0, 0.9, 0.4), filter 200ms ease-in';
      c.style.opacity = '0'; c.style.filter = 'blur(4px)';
      c.style.transform = 'scale(0.7, 0.5)';
      setTimeout(function () { self.setState({ catOpen: false }); }, 230);
    };
    this._curRef = function (el) { var fresh = el && el !== self._curEl; self._curEl = el; if (fresh) glassIn(el, el.getAttribute('data-inline') ? 'scale(0.3, 0.2)' : 'scale(0.5, 0.3)'); };
    this._closeCur = function () {
      var c = self._curEl;
      if (!c) { self.setState({ ccyOpen: false }); return; }
      c.style.transition = 'opacity 200ms ease-in, transform 240ms cubic-bezier(0.5, 0, 0.9, 0.4), filter 200ms ease-in';
      c.style.opacity = '0'; c.style.filter = 'blur(4px)';
      c.style.transform = c.getAttribute('data-inline') ? 'scale(0.5, 0.3)' : 'scale(0.7, 0.5)';
      setTimeout(function () { self.setState({ ccyOpen: false }); }, 230);
    };

    this._catUpd = function () {
      var r = self._cat, t = self._catThumb;
      if (!r || !t) return;
      var max = r.scrollWidth - r.clientWidth;
      if (max <= 2) { t.style.opacity = '0'; return; }
      var track = t.parentElement.clientWidth;
      var ratio = r.clientWidth / r.scrollWidth;
      var w = Math.max(28, track * ratio);
      t.style.width = w + 'px';
      t.style.transform = 'translateX(' + ((track - w) * (r.scrollLeft / max)) + 'px)';
    };
    this._onTile = function (e) {
      var el = e.currentTarget;
      var dots = el.parentElement && el.parentElement.querySelector('[data-dots]');
      if (!dots) return;
      var i = Math.round(el.scrollLeft / el.clientWidth);
      var kids = dots.children;
      for (var k = 0; k < kids.length; k++) kids[k].style.backgroundColor = k === i ? '#0E0E0E' : 'rgba(14, 14, 14, 0.22)';
    };
    this._catRef = function (el) { self._cat = el; self._catUpd(); };
    this._catThumbRef = function (el) { self._catThumb = el; self._catUpd(); };
    this._onCat = function () {
      var t = self._catThumb;
      self._catUpd();
      if (!t || t.style.opacity === '0' && self._cat.scrollWidth - self._cat.clientWidth <= 2) return;
      t.style.transition = 'opacity 150ms ease-out';
      t.style.opacity = '1';
      clearTimeout(self._catT);
      self._catT = setTimeout(function () {
        t.style.transition = 'opacity 500ms ease-in';
        t.style.opacity = '0';
      }, 1400);
    };
    var SLOW = 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)';
    // MTA mark: the logo is cut into four sets of horizontal bands that move on their own
    var markSet = function (fn) {
      var b = self._mark ? self._mark.querySelectorAll('[data-band]') : [];
      for (var i = 0; i < b.length; i++) fn(b[i], i);
    };
    this._markRef = function (el) {
      var fresh = el && el !== self._mark;
      self._mark = el;
      if (fresh) markSet(function (b) { b.style.filter = self.state.screen === 'mta' ? 'brightness(0)' : 'none'; });
    };
    // into MTA: bands pull apart left and right, turn black while open, then lock shut hard
    var markIn = function () {
      self._markBusy = true;
      markSet(function (b, i) {
        var dir = i % 2 ? 1 : -1;
        b.style.transition = 'transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1) ' + (i * 35) + 'ms, filter 140ms linear 220ms, opacity 200ms ease';
        b.style.opacity = '1';
        b.style.transform = 'translateX(' + (dir * (12 + i * 5)) + 'px)';
        b.style.filter = 'brightness(0)';
      });
      clearTimeout(self._markT);
      self._markT = setTimeout(function () {
        markSet(function (b, i) {
          b.style.transition = 'transform 300ms cubic-bezier(0.85, 0, 0.15, 1) ' + ((3 - i) * 30) + 'ms';
          b.style.transform = 'none';
        });
        self._markBusy = false;
      }, 400);
    };
    // back to the shop: black bands leave to the right one after another, grey ones arrive from the left
    var markOut = function () {
      self._markBusy = true;
      markSet(function (b, i) {
        b.style.transition = 'transform 220ms cubic-bezier(0.6, 0, 0.9, 0.4) ' + (i * 45) + 'ms, opacity 220ms linear ' + (i * 45) + 'ms';
        b.style.transform = 'translateX(46px)';
        b.style.opacity = '0';
      });
      clearTimeout(self._markT);
      self._markT = setTimeout(function () {
        markSet(function (b) { b.style.transition = 'none'; b.style.transform = 'translateX(-46px)'; b.style.filter = 'none'; });
        requestAnimationFrame(function () { requestAnimationFrame(function () {
          markSet(function (b, i) {
            b.style.transition = 'transform 480ms cubic-bezier(0.16, 1, 0.3, 1) ' + (i * 55) + 'ms, opacity 300ms ease ' + (i * 55) + 'ms';
            b.style.transform = 'none';
            b.style.opacity = '1';
          });
          self._markBusy = false;
        }); });
      }, 380);
    };
    // press: the bands crack open a little under the finger
    var squares = function (e, merge, fast) {
      if (self._markBusy) return;
      markSet(function (b, i) {
        b.style.transition = fast ? 'transform 90ms ease-out' : 'transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)';
        b.style.transform = fast ? 'translateX(' + ((i % 2 ? 1 : -1) * 3) + 'px)' : 'none';
      });
    };
    this._pressDown = function (e) { squares(e, true, true); };
    this._pressUp = function (e) { squares(e, self.state.screen === 'mta', false); };

    // ---- opening motion B: logo -> photos flash through the letters -> video -> letters stretch open to full screen ----
    var clamp = function (x) { return x < 0 ? 0 : x > 1 ? 1 : x; };
    var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
    var easeInOut = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    var LOGO_RATIO = 298 / 1094;
    var ANCHOR = { x: 0.63, y: 0.15 }; // a point inside the solid top bar of the logo
    var T = { IN: 600, HOLD: 1000, SWAP: 150, PHOTO: 100, VIDEO_HOLD: 600, OPEN: 1100, FULL: 250, FADE: 420 };
    var finishIntro = function () {
      cancelAnimationFrame(self._introRaf);
      clearTimeout(self._introT);
      var loop = self.props && self.props.start === 'intro';
      var main = self._openMain;
      if (loop) {
        if (main) { main.style.transition = 'opacity 300ms ease'; main.style.opacity = '0'; }
        self._introT = setTimeout(function () { if (main) { main.style.transition = 'none'; main.style.opacity = '1'; } runIntro(); }, 700);
        return;
      }
      self.setState({ screen: 'index' });
      var sc = self._sc;
      if (sc) {
        sc.style.transition = 'none';
        sc.style.opacity = '0';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            sc.style.transition = 'opacity 520ms cubic-bezier(0.2, 0.8, 0.2, 1)';
            sc.style.opacity = '1';
          });
        });
      }
    };
    var runIntro = function () {
      var img = self._logo, mask = self._mask, main = self._openMain, vid = self._introVid;
      if (!img || !mask || !main) return;
      cancelAnimationFrame(self._introRaf);
      clearTimeout(self._introT);
      var photos = mask.querySelectorAll('img');
      var w = main.clientWidth, h = main.clientHeight;
      var W0 = w * 0.72, H0 = W0 * LOGO_RATIO;
      var cx = w / 2, cy = h / 2;
      var ax0 = cx - W0 / 2 + ANCHOR.x * W0, ay0 = cy - H0 / 2 + ANCHOR.y * H0;
      var setMask = function (W, H, ax, ay) {
        var px = (ax - ANCHOR.x * W) + 'px ' + (ay - ANCHOR.y * H) + 'px';
        var sz = W + 'px ' + H + 'px';
        mask.style.webkitMaskSize = sz; mask.style.maskSize = sz;
        mask.style.webkitMaskPosition = px; mask.style.maskPosition = px;
      };
      var showPhoto = function (i) { for (var k = 0; k < photos.length; k++) photos[k].style.opacity = k === i ? '1' : '0'; };
      // reset
      main.style.opacity = '1';
      img.style.opacity = '0';
      mask.style.opacity = '0';
      mask.style.webkitMaskImage = mask.style.maskImage = '';
      setMask(W0, H0, ax0, ay0);
      showPhoto(0);
      if (vid) { vid.style.opacity = '0'; vid.muted = true; try { vid.currentTime = 0; } catch (x) {} }
      var vidStarted = false;
      var tSwap = T.IN + T.HOLD;
      var tVideo = tSwap + photos.length * T.PHOTO;
      var tOpen = tVideo + T.VIDEO_HOLD;
      var tFull = tOpen + T.OPEN;
      var t0 = null;
      var frame = function (now) {
        if (!self._logo) return;
        if (t0 === null) t0 = now;
        var e = now - t0;
        // 1. logo appears
        if (e < T.IN) {
          var a = easeOut(clamp(e / T.IN));
          img.style.opacity = String(a);
          img.style.transform = 'scale(' + (0.94 + 0.06 * a) + ', 1)';
          if (self._blur) self._blur.setAttribute('stdDeviation', (10 * (1 - a)).toFixed(2) + ' 0');
          img.style.filter = a < 0.99 ? 'url(#me-hblur)' : 'none';
        } else if (e < tSwap) {
          img.style.opacity = '1'; img.style.transform = 'none'; img.style.filter = 'none';
        }
        // 2. letters become windows: photos flash through them
        if (e >= tSwap - 600 && !vidStarted && vid) { vidStarted = true; var p = vid.play(); if (p && p.catch) p.catch(function () {}); }
        if (e >= tSwap && e < tVideo) {
          var s = clamp((e - tSwap) / T.SWAP);
          img.style.opacity = String(1 - s);
          mask.style.opacity = String(s);
          showPhoto(Math.min(photos.length - 1, Math.floor((e - tSwap) / T.PHOTO)));
        }
        // 3. the video plays inside the letters
        if (e >= tVideo) {
          img.style.opacity = '0';
          mask.style.opacity = '1';
          showPhoto(-1);
          if (vid) vid.style.opacity = '1';
        }
        // 4. letters stretch open (wider than tall) until the video fills the screen
        if (e >= tOpen && e < tFull) {
          var o = easeInOut(clamp((e - tOpen) / T.OPEN));
          var W = W0 * (1 + 69 * o), H = H0 * (1 + 49 * o);
          setMask(W, H, ax0 + (cx - ax0) * o, ay0 + (cy - ay0) * o);
        }
        if (e >= tFull) {
          mask.style.webkitMaskImage = mask.style.maskImage = 'none';
        }
        if (e < tFull + T.FULL) { self._introRaf = requestAnimationFrame(frame); return; }
        // 5. fade into the shop
        main.style.transition = 'opacity ' + T.FADE + 'ms ease';
        main.style.opacity = '0';
        self._introT = setTimeout(finishIntro, T.FADE);
      };
      self._introRaf = requestAnimationFrame(frame);
    };
    this._skipIntro = function () {
      if (self.props && self.props.start === 'intro') return;
      cancelAnimationFrame(self._introRaf);
      clearTimeout(self._introT);
      finishIntro();
    };
    this._logoRef = function (el) {
      self._logo = el;
      if (el) { setTimeout(runIntro, 250); } else { cancelAnimationFrame(self._introRaf); clearTimeout(self._introT); }
    };
    this._maskRef = function (el) { self._mask = el; };
    this._openMainRef = function (el) { self._openMain = el; };
    this._introVidRef = function (el) {
      self._introVid = el;
      if (el) { el.muted = true; el.setAttribute('muted', ''); el.setAttribute('playsinline', ''); el.setAttribute('webkit-playsinline', ''); }
    };
    this._blurRef = function (el) { self._blur = el; };

    this._DW = 90;
    this._dockTo = function (i, smooth) {
      var el = self._dock;
      if (!el) return;
      var x = i * self._DW;
      if (Math.abs(el.scrollLeft - x) < 2) return;
      self._dockProg = true;
      clearTimeout(self._dpt);
      self._dpt = setTimeout(function () { self._dockProg = false; }, 450);
      if (smooth && el.scrollTo) el.scrollTo({ left: x, behavior: 'smooth' }); else el.scrollLeft = x;
    };
    this._dockRef = function (el) {
      self._dock = el;
      if (el) { el.scrollLeft = (self._dIdx || 0) * self._DW; self._lastD = self._dIdx; }
    };
    this._onDock = function (e) {
      if (self._dockProg) return;
      var el = e.currentTarget;
      clearTimeout(self._dt);
      self._dt = setTimeout(function () {
        var i = Math.round(el.scrollLeft / self._DW);
        var t = self._dockTargets && self._dockTargets[i];
        if (t && i !== self._dIdx && self._go) self._go(t)();
      }, 160);
    };
    this._onDockWheel = function (e) {
      var el = e.currentTarget;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) el.scrollLeft += e.deltaY;
    };

    this._dDown = function (e) {
      if (e.target && e.target.closest && e.target.closest('button')) return;
      var sheet = e.currentTarget.parentElement;
      self._drag = { y: e.clientY, el: sheet, dy: 0 };
      sheet.style.transition = 'none';
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (x) {}
    };
    this._dMove = function (e) {
      var d = self._drag;
      if (!d) return;
      d.dy = Math.max(0, e.clientY - d.y);
      d.el.style.transform = 'translateY(' + d.dy + 'px)';
    };
    this._dUp = function () {
      var d = self._drag;
      if (!d) return;
      self._drag = null;
      if (d.dy > 90) {
        d.el.style.transition = 'transform 180ms ease-in';
        d.el.style.transform = 'translateY(100%)';
        setTimeout(function () { self.setState({ sheet: '' }); }, 170);
      } else {
        d.el.style.transition = 'transform 200ms ease-out';
        d.el.style.transform = 'translateY(0)';
      }
    };
  }
  componentDidUpdate() {
    if (this._video && !(this.state.menu && this.state.menuPage === 'about') && !this._video.paused) this._video.pause();
    if (this._mtaVid && this.state.screen !== 'mta' && !this._toMta && !this._mtaVid.paused) this._mtaVid.pause();
    this._upd();
    this._catUpd();
    this._vUpd();
    if (this._dock && this._dIdx !== this._lastD) { this._lastD = this._dIdx; this._dockTo(this._dIdx, true); }
  }
  componentWillUnmount() { clearTimeout(this._t); }
  renderVals() {
    var self = this;
    var s = this.state;
    var set = function (o) { return function () { self.setState(o); }; };
    var go = function (screen, extra) {
      return function () {
        self.setState(Object.assign({ screen: screen, sheet: '', toast: '', menu: false, menuPage: '', ccyOpen: false, catOpen: false }, extra || {}));
        if (self._sc) self._sc.scrollTop = 0;
      };
    };
    var PATHS = {
      tee: 'M70 40 L55 45 L30 70 L45 88 L60 78 L60 165 L140 165 L140 78 L155 88 L170 70 L145 45 L130 40 Q100 58 70 40 Z',
      ls: 'M70 40 L55 45 L38 80 L26 152 L42 155 L58 96 L60 165 L140 165 L142 96 L158 155 L174 152 L162 80 L145 45 L130 40 Q100 58 70 40 Z',
      hoodie: 'M70 40 L55 45 L38 80 L26 152 L42 155 L58 96 L60 165 L140 165 L142 96 L158 155 L174 152 L162 80 L145 45 L130 40 Q100 58 70 40 Z M74 42 Q76 16 100 14 Q124 16 126 42 M78 125 L122 125 L128 148 L72 148 Z',
      track: 'M64 30 L136 30 L142 172 L112 172 L100 72 L88 172 L58 172 Z M64 40 L136 40',
      cargo: 'M64 30 L136 30 L142 172 L112 172 L100 72 L88 172 L58 172 Z M64 40 L136 40 M64 96 L80 96 L79 122 L63 122 Z M136 96 L120 96 L121 122 L137 122 Z',
      shell: 'M70 38 L55 45 L38 80 L26 152 L42 155 L58 96 L60 168 L140 168 L142 96 L158 155 L174 152 L162 80 L145 45 L130 38 L100 30 Z M100 30 L100 168 M80 38 L100 46 L120 38',
      cap: 'M46 122 Q48 62 100 58 Q152 62 154 122 Z M46 122 Q22 124 18 136 L104 136 M100 58 L100 122',
      tote: 'M52 82 L148 82 L154 176 L46 176 Z M76 82 Q76 34 100 34 Q124 34 124 82',
      knit: 'M70 40 L55 45 L38 80 L26 152 L42 155 L58 96 L60 165 L140 165 L142 96 L158 155 L174 152 L162 80 L145 45 L130 40 Q100 58 70 40 Z M60 152 L140 152 M30 140 L44 143 M156 143 L170 140 M74 44 Q100 60 126 44',
      jeans: 'M64 30 L136 30 L142 172 L112 172 L100 72 L88 172 L58 172 Z M64 40 L136 40 M100 30 L100 72 M70 42 Q82 58 66 66 M130 42 Q118 58 134 66',
      shorts: 'M58 56 L142 56 L150 136 L108 140 L100 96 L92 140 L50 136 Z M58 66 L142 66 M100 56 L100 96',
      vest: 'M72 36 L60 44 L58 80 Q72 92 72 110 L66 166 L134 166 L128 110 Q128 92 142 80 L140 44 L128 36 L100 62 Z M100 62 L100 166 M76 120 L92 120 M108 120 L124 120',
      coach: 'M70 38 L55 45 L38 80 L26 152 L42 155 L58 96 L60 160 L140 160 L142 96 L158 155 L174 152 L162 80 L145 45 L130 38 L116 34 L100 52 L84 34 Z M100 52 L100 160 M60 152 L140 152',
      beanie: 'M56 128 Q56 58 100 54 Q144 58 144 128 Z M50 128 L150 128 L150 156 L50 156 Z M64 128 L64 156 M78 128 L78 156 M92 128 L92 156 M108 128 L108 156 M122 128 L122 156 M136 128 L136 156'
    };
    // sample catalogue — product shots to come; drawn stand-ins until then
    var P = [
      { id: 'ME-01', name: 'Logo Tee', cat: 'TOPS', price: 14000, kind: 'tee', color: '#FFFFFF' },
      { id: 'ME-02', name: 'No Contract Tee', cat: 'TOPS', price: 16000, kind: 'tee', color: '#1A1A1A' },
      { id: 'ME-03', name: 'Long Sleeve Tee', cat: 'TOPS', price: 18000, kind: 'ls', color: '#9C9C98' },
      { id: 'ME-04', name: 'Hooded Sweat', cat: 'TOPS', price: 32000, kind: 'hoodie', color: '#202020' },
      { id: 'ME-05', name: 'Rib Knit', cat: 'TOPS', price: 38000, kind: 'knit', color: '#E6E0D2' },
      { id: 'ME-06', name: 'Hand-Drawn Denim', cat: 'BOTTOMS', price: 68000, kind: 'jeans', color: '#6F87A8' },
      { id: 'ME-07', name: 'Track Pant', cat: 'BOTTOMS', price: 28000, kind: 'track', color: '#1C1C1C' },
      { id: 'ME-08', name: 'Cargo Pant', cat: 'BOTTOMS', price: 42000, kind: 'cargo', color: '#5E604A' },
      { id: 'ME-09', name: 'Sweat Shorts', cat: 'BOTTOMS', price: 22000, kind: 'shorts', color: '#A3A39F' },
      { id: 'ME-10', name: 'Patchwork Field Jacket', cat: 'OUTER', price: 98000, kind: 'shell', color: '#6A694F' },
      { id: 'ME-11', name: 'Shell Jacket', cat: 'OUTER', price: 64000, kind: 'shell', color: '#181818' },
      { id: 'ME-12', name: 'Coach Jacket', cat: 'OUTER', price: 46000, kind: 'coach', color: '#2E3440' },
      { id: 'ME-13', name: 'Quilted Vest', cat: 'OUTER', price: 36000, kind: 'vest', color: '#3A3A37' },
      { id: 'ME-14', name: 'Cap', cat: 'ACC', price: 9000, kind: 'cap', color: '#1A1A1A' },
      { id: 'ME-15', name: 'Canvas Tote', cat: 'ACC', price: 8000, kind: 'tote', color: '#E8E2D4' },
      { id: 'ME-16', name: 'Rib Beanie', cat: 'ACC', price: 7000, kind: 'beanie', color: '#8E8E8A' }
    ];
    var VIEWS = [
      { label: 'Front', vb: '0 0 200 200', tf: '' },
      { label: 'Back', vb: '0 0 200 200', tf: 'translate(200 0) scale(-1 1)' },
      { label: 'Detail', vb: '50 40 100 100', tf: '' }
    ];
    var shots = function (p) {
      return VIEWS.map(function (v) {
        return { vb: v.vb, tf: v.tf, d: PATHS[p.kind], fill: p.color, stroke: 'rgba(14, 14, 14, 0.42)', alt: p.name + ', ' + v.label.toLowerCase() };
      });
    };
    // sample rates (per 1 JPY) — placeholders until a live multi-currency plugin is connected
    var CUR = [
      { code: 'JPY', sym: '¥', rate: 1 }, { code: 'USD', sym: '$', rate: 0.0066 },
      { code: 'EUR', sym: '€', rate: 0.0061 }, { code: 'GBP', sym: '£', rate: 0.0052 },
      { code: 'CNY', sym: 'CN¥', rate: 0.047 }, { code: 'HKD', sym: 'HK$', rate: 0.051 },
      { code: 'TWD', sym: 'NT$', rate: 0.21 }, { code: 'KRW', sym: '₩', rate: 9.2 },
      { code: 'SGD', sym: 'S$', rate: 0.0087 }, { code: 'AUD', sym: 'A$', rate: 0.010 },
      { code: 'CAD', sym: 'C$', rate: 0.0092 }, { code: 'CHF', sym: 'Fr.', rate: 0.0058 }
    ];
    var ccy = CUR.filter(function (c) { return c.code === s.ccy; })[0] || CUR[0];
    var money = function (jpy) {
      var v = Math.round(jpy * ccy.rate);
      return ccy.sym + v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    var currencies = CUR.map(function (c) {
      var on = c.code === ccy.code;
      return {
        code: c.code, sym: c.sym, pressed: on ? 'true' : 'false',
        bg: 'transparent', fg: '#0E0E0E', symFg: '#6A6A66',
        pick: function () { self.setState({ ccy: c.code }); clearTimeout(self._pickT); self._pickT = setTimeout(self._closeCur, 380); }
      };
    });
    var find = function (id) { for (var i = 0; i < P.length; i++) { if (P[i].id === id) return P[i]; } return P[0]; };
    var pad = function (x) { return (x < 10 ? '0' : '') + x; };

    var isSaved = function (id) { return s.saved.indexOf(id) !== -1; };
    var catNames = ['ALL'].concat(['TOPS', 'BOTTOMS', 'OUTER', 'ACC'].filter(function (c) { return P.some(function (p) { return p.cat === c; }); }));
    var match = function (p, c) { return c === 'ALL' || (c === 'SAVED' ? isSaved(p.id) : p.cat === c); };
    var cats = catNames.map(function (c) {
      var on = s.cat === c;
      var count = P.filter(function (p) { return match(p, c); }).length;
      return {
        label: c, count: pad(count), pressed: on ? 'true' : 'false',
        bg: 'transparent', fg: '#0E0E0E', countFg: '#8A8A86',
        pick: function () { self.setState({ cat: c, cur: 0 }); if (self._row) self._row.scrollLeft = 0; clearTimeout(self._pickT); self._pickT = setTimeout(self._closeCat, 380); }
      };
    });
    var curCat = s.cat === 'SAVED' && !s.saved.length ? 'ALL' : s.cat;
    var list = P.filter(function (p) { return match(p, curCat); });
    var viewBtns = [
      { id: 'grid', aria: 'Grid view', icon: 'M2 2.5 H7 V13.5 H2 Z M9 2.5 H14 V13.5 H9 Z' },
      { id: 'scroll', aria: 'Scroll view', icon: 'M4 2.5 H12 V13.5 H4 Z M1 4.5 V11.5 M15 4.5 V11.5' }
    ].map(function (v) {
      var on = s.view === v.id;
      return { aria: v.aria, icon: v.icon, pick: set({ view: v.id, cur: 0 }), pressed: on ? 'true' : 'false', fg: on ? '#0E0E0E' : '#8A8A86', line: on ? '#0E0E0E' : 'transparent' };
    });
    self._n = list.length;
    var onRow = function (e) {
      var el = e.currentTarget;
      self._upd();
      if (self._bar) self._flash(self._bar.parentElement, 'h');
      var first = el.firstElementChild;
      var step = first ? first.offsetWidth : el.clientWidth;
      var i = Math.max(0, Math.min(list.length - 1, Math.round(el.scrollLeft / step)));
      if (i !== self.state.cur) self.setState({ cur: i });
    };
    var cur = Math.min(s.cur, list.length - 1);
    var rowStep = function (dir) {
      return function () {
        var r = self._row;
        if (!r) return;
        var first = r.firstElementChild;
        var step = first ? first.offsetWidth : r.clientWidth;
        self._glide(dir);
      };
    };
    var products = list.map(function (p) {
      return { id: p.id, num: p.id.slice(3), saved: isSaved(p.id), name: p.name, price: money(p.price), d: PATHS[p.kind], shot: shots(p)[0], alt: p.name,
        priceCode: money(p.price).replace(ccy.sym, '') + ' ' + ccy.code,
        catLabel: p.cat ? p.cat.charAt(0) + p.cat.slice(1).toLowerCase() : '',
        slides: shots(p),
        multi: true,
        dots: VIEWS.map(function (v, i) { return { bg: i === 0 ? '#0E0E0E' : 'rgba(14, 14, 14, 0.22)' }; }), aria: p.id + ' ' + p.name, open: go('product', { pid: p.id, size: '', img: 0, acc: '', needSize: false, added: false }) };
    });

    var prod = find(s.pid);
    var gallery = shots(prod);
    var segs = gallery.map(function (g, i) { return { bg: i === s.img ? '#0E0E0E' : 'rgba(14, 14, 14, 0.18)' }; });
    var onGal = function (e) {
      var el = e.currentTarget;
      var i = Math.round(el.scrollLeft / el.clientWidth);
      if (i !== self.state.img) self.setState({ img: i });
    };
    var sizeList = prod.cat === 'ACC' ? ['ONE SIZE'] : ['S', 'M', 'L', 'XL'];
    var sizes = sizeList.map(function (z) {
      var on = s.size === z;
      return { label: z, on: on, pressed: on ? 'true' : 'false', fg: on ? '#0E0E0E' : (s.size ? '#B4B4B0' : '#8A8A86'), pick: set({ size: z, sheet: '', needSize: false }) };
    });
    var add = function () {
      var st = self.state;
            self.setState({ bag: st.bag.concat([{ key: String(Date.now()) + Math.random(), id: prod.id, size: st.size }]), added: true });
      clearTimeout(self._t);
      self._t = setTimeout(function () { self.setState({ added: false }); }, 1600);
    };
    var accData = [
      { key: 'MATERIAL', body: '[Composition]\n[Made in — country]' },
      { key: 'SIZE & FIT', body: '[Measurements per size: length / chest / sleeve]\n[Model height and size worn]' },
      { key: 'CARE', body: '[Care instructions]' },
      { key: 'SHIPPING', body: '[配送業者] · [送料]\nご注文から[日数]営業日以内に発送します。' }
    ];
    var acc = accData.map(function (a) {
      var open = s.acc === a.key;
      return { key: a.key, body: a.body, open: open, expanded: open ? 'true' : 'false', sign: open ? '−' : '+', toggle: set({ acc: open ? '' : a.key }) };
    });

    var PAGES = [
      { id: 'about', num: '01', title: 'MTA', body: '' },
      { id: 'policies', num: '02', title: 'Policies', sub: 'SHIPPING · RETURNS · PRIVACY · LEGAL' },
      { id: 'contact', num: '03', title: 'Contact', body: '[Email address]\n[Instagram]' }
    ];
    var POLICIES = [
      { num: '01', title: 'Shipping', body: '国内配送\n[配送業者]でお届けします。送料は全国一律[¥0,000]（税込）です。\nご注文確定後、[0]営業日以内に発送します。発送時に追跡番号をメールでお知らせします。\n予約商品・受注生産品は、各商品ページに記載の時期に発送します。\n\nInternational\nWe ship worldwide with [carrier]. Shipping is calculated at checkout.\nImport duties, taxes and customs fees are not included in the price and are paid by the recipient.\nDelivery times vary with destination and customs processing.' },
      { num: '02', title: 'Returns', body: 'お客様都合の返品・交換\n商品到着後[0]日以内にContactからご連絡ください。未使用・タグ付きの商品に限り承ります。返送料はお客様のご負担です。\nセール品・受注生産品は返品・交換できません。\n\n不良品・誤配送\n商品到着後[0]日以内にContactからご連絡ください。送料当店負担で交換または返金します。\n\nInternational orders\nUnworn items with tags attached can be returned within [0] days of delivery. Return shipping, duties and taxes are not refunded.\n\nRefunds go to the original payment method after the return has been received and checked.' },
      { num: '03', title: 'Privacy Policy', body: '[事業者名]（以下「当店」）は、お客様の個人情報を以下のとおり取り扱います。\n\n取得する情報\n氏名、住所、電話番号、メールアドレス、注文内容、閲覧情報（Cookie等）。カード情報は決済代行会社が処理し、当店は保持しません。\n\n利用目的\n商品の発送、ご注文に関する連絡、お問い合わせへの対応、サービスの改善。ご希望の方へのお知らせの配信。\n\n第三者提供\n配送業者・決済代行会社など業務に必要な委託先を除き、法令に基づく場合のほか、同意なく第三者に提供しません。\n\n開示・訂正・削除\nご本人からの請求には、Contactの窓口で速やかに対応します。\n\nEnglish summary\nWe collect the details needed to process and ship your order and to answer enquiries. Card details are handled by our payment processor and never stored by us. We share data only with the carriers and processors needed to fulfil an order, or where the law requires. To access, correct or delete your data, write to us via Contact.' },
      { num: '04', title: 'Legal Notice', body: '特定商取引法に基づく表記\nNotice under the Act on Specified Commercial Transactions\n\n販売業者 / Seller：[名称]\n運営統括責任者 / Representative：[氏名]\n所在地 / Address：[住所]\n電話番号 / Phone：[電話番号]\nメール / Email：[メールアドレス]\n販売価格 / Prices：各商品ページに税込で表示\n商品代金以外の料金 / Other charges：送料（Shipping参照）。海外発送は関税・輸入税が別途かかります。\n支払方法 / Payment：クレジットカード、Apple Pay、Google Pay\n支払時期 / Payment timing：ご注文確定時\n引渡時期 / Delivery：ご注文確定後[0]営業日以内に発送\n返品・交換 / Returns：Returns参照' }
    ];
    var pageData = PAGES.filter(function (p) { return p.id === s.info; })[0] || PAGES[1];
    var page = { title: pageData.title, body: pageData.body || '', hasBody: !!pageData.body, isPolicies: pageData.id === 'policies' };
    var policies = POLICIES.map(function (r) {
      var open = s.pol === r.num;
      return { num: r.num, title: r.title, body: r.body, open: open, expanded: open ? 'true' : 'false', sign: open ? '−' : '+', toggle: set({ pol: open ? '' : r.num }) };
    });

    var bagItems = s.bag.map(function (b) {
      var q = find(b.id);
      return { id: q.id, name: q.name, size: b.size, meta: q.id + (b.size ? ' / ' + b.size : ''), price: money(q.price), d: PATHS[q.kind], shot: shots(q)[0], aria: 'Remove ' + q.name, remove: function () { self.setState({ bag: self.state.bag.filter(function (x) { return x.key !== b.key; }) }); } };
    });
    var fields = [
      { id: 'm-email', label: 'EMAIL', type: 'email', ac: 'email' },
      { id: 'm-name', label: 'NAME / 氏名', type: 'text', ac: 'name' },
      { id: 'm-country', label: 'COUNTRY / 国', type: 'text', ac: 'country-name' },
      { id: 'm-zip', label: 'POSTAL CODE / 郵便番号', type: 'text', ac: 'postal-code' },
      { id: 'm-addr', label: 'ADDRESS / 住所', type: 'text', ac: 'street-address' },
      { id: 'm-tel', label: 'PHONE / 電話番号', type: 'tel', ac: 'tel' }
    ];

    var screen = s.screen;
    var openBag = function () { self.setState({ sheet: 'bag', toast: '' }); };
    var DOCK = [{ label: 'TOP', to: 'open' }, { label: 'PRODUCTS', to: 'index' }, { label: 'INFO', to: 'info' }];
    var dIdx = screen === 'info' ? 2 : screen === 'open' ? 0 : 1;
    self._dIdx = dIdx;
    self._dockTargets = DOCK.map(function (d) { return d.to; });
    self._go = go;
    var dock = DOCK.map(function (d, i) {
      var on = i === dIdx;
      return { label: d.label, current: on ? 'page' : 'false', fg: on ? '#FFFFFF' : '#8A8A86', go: function () { self._dockTo(i, true); go(d.to)(); } };
    });
    var bagEmpty = s.bag.length === 0;
    return {
      scRef: this._scRef, vBarRef: this._vBarRef, onMain: this._onMain,
      showVBar: (screen === 'index' && s.view === 'grid') || screen === 'info' || screen === 'checkout' || screen === 'mta',
      vTop: screen === 'product' ? '72px' : '76px',
      dockRef: this._dockRef, onDock: this._onDock, onDockWheel: this._onDockWheel,
      dDown: this._dDown, dMove: this._dMove, dUp: this._dUp,
      isOpen: screen === 'open', isIndex: screen === 'index', isProduct: screen === 'product', isInfo: screen === 'info', isCheckout: screen === 'checkout', isDone: screen === 'done',
      showHeader: screen === 'index' || screen === 'info' || screen === 'checkout' || screen === 'mta',
      showDock: screen === 'index' || screen === 'info' || screen === 'mta',
      isMta: screen === 'mta', goMta: this._goMta, mtaVidRef: this._mtaVidRef, mtaKeepPlaying: this._mtaKeepPlaying,
      mtaVidDisplay: screen === 'mta' ? 'block' : 'none',
      mtaCurrent: screen === 'mta' ? 'page' : 'false', mtaMarkFill: screen === 'mta' ? '#0E0E0E' : '#A3A39F',
      showCcyHeader: false,
      markRef: this._markRef,
      sqA: screen === 'mta' ? 'translate(2px, 2px)' : 'none', sqB: screen === 'mta' ? 'translate(-2px, 2px)' : 'none',
      sqC: screen === 'mta' ? 'translate(2px, -2px)' : 'none', sqD: screen === 'mta' ? 'translate(-2px, -2px)' : 'none',
      mtaInfo: [
        { id: 'policies', title: 'Policies', parts: POLICIES.map(function (r) { return { head: r.title, hasHead: true, body: r.body }; }) },
        { id: 'contact', title: 'Contact', parts: [{ head: '', hasHead: false, body: '[Email address]\n[Instagram]' }] }
      ].map(function (f) {
        var open = s.mtaOpen === f.id;
        return { title: f.title, parts: f.parts, open: open, expanded: open ? 'true' : 'false', sign: open ? '−' : '+', rot: open ? 'rotate(180deg)' : 'none', toggle: set({ mtaOpen: open ? '' : f.id }) };
      }),
      menuCur: function () { self.setState({ menu: false, menuPage: '', ccyOpen: true }); },
      mtaPosts: [
        { src: './post-1.jpg', alt: 'MTA post', title: '[Post title — studio]', date: '[Date]' },
        { src: './post-2.jpg', alt: 'MTA post', title: '[Post title — night shoot]', date: '[Date]' },
        { src: './post-3.jpg', alt: 'MTA post', title: '[Post title — reference]', date: '[Date]' }
      ],
      headerRight: screen === 'checkout' ? 'SECURE' : '',
      goOpen: go('open'), goIndex: go('index'), goInfo: go('info'), goCheckout: go('checkout'),
      placeOrder: go('done', { bag: [] }),
      openBag: openBag, openSize: set({ sheet: 'size' }), closeSheet: set({ sheet: '' }),
      hasSheet: s.sheet !== '', sizeSheet: s.sheet === 'size', bagSheet: s.sheet === 'bag', curSheet: s.sheet === 'cur',
      menuOpen: !!s.menu, openMenu: set({ menu: true, menuPage: '', sheet: '', toast: '', ccyOpen: false }), closeMenu: this._closeMenu,
      menuRef: this._menuRef, menuScrimRef: this._menuScrimRef,
      shopGo: go('index', { cat: 'ALL', cur: 0 }), shopCount: pad(P.length),
      shopCurrent: screen === 'index' ? 'page' : 'false',
      shopBg: screen === 'index' ? '#0E0E0E' : '#FFFFFF', shopFg: screen === 'index' ? '#FFFFFF' : '#0E0E0E', shopSub: screen === 'index' ? '#A3A39F' : '#6A6A66',
      starGo: screen === 'mta' ? this._backToShop : this._goMta,
      starAria: screen === 'mta' ? 'Back to shop' : 'MTA',
      menuLinks: PAGES.filter(function (r) { return r.id !== 'about'; }).map(function (r) {
        var open = r.id === 'about' ? self._goMta : function () { self.setState({ menuPage: r.id, pol: '01' }); };
        return { num: r.num, title: r.title, sub: r.sub || '', hasSub: !!r.sub, current: 'false', weight: '400', go: open };
      }),
      catRef: this._catRef, catThumbRef: this._catThumbRef, onCat: this._onCat, onTile: this._onTile,
      catOpen: !!s.catOpen, toggleCat: s.catOpen ? this._closeCat : set({ catOpen: true, ccyOpen: false }), closeCat: this._closeCat, catPopRef: this._catPopRef,
      catExpanded: s.catOpen ? 'true' : 'false', catBd: s.catOpen ? '#0E0E0E' : '#CFCFCB',
      catChev: s.catOpen ? 'M6 15 L12 9 L18 15' : 'M6 9 L12 15 L18 9',
      catNow: curCat, catNowCount: pad(list.length), catAria: 'Category: ' + curCat + '. Change category',
      logoRef: this._logoRef, blurRef: this._blurRef, maskRef: this._maskRef, openMainRef: this._openMainRef,
      introVidRef: this._introVidRef, skipIntro: this._skipIntro,
      introPhotos: [],
      pressDown: this._pressDown, pressUp: this._pressUp,
      menuAtList: !s.menuPage, menuInPage: !!s.menuPage, menuBack: this._menuBack,
      menuPageRef: this._menuPageRef, menuListRef: this._menuListRef,
      videoRef: this._videoRef, keepPlaying: this._keepPlaying,
      mp: (function () {
        var d = PAGES.filter(function (p) { return p.id === s.menuPage; })[0] || PAGES[0];
        return { num: d.num, title: d.title, body: d.body || '', hasBody: !!d.body, isPolicies: d.id === 'policies', isAbout: d.id === 'about', showTitle: d.id !== 'about' };
      })(),
      videoDisplay: s.menuPage === 'about' ? 'block' : 'none',
      pagePad: s.menuPage === 'about' ? '0' : '10px 4px 4px',
      page: page, policies: policies, showCcy: screen !== 'info',
      showFade: screen === 'index' || screen === 'info' || screen === 'checkout' || screen === 'mta',
      toggleSave: function () {
        var sv = self.state.saved;
        self.setState({ saved: isSaved(prod.id) ? sv.filter(function (x) { return x !== prod.id; }) : sv.concat([prod.id]) });
      },
      starFill: isSaved(prod.id) ? '#0E0E0E' : 'none', savedPressed: isSaved(prod.id) ? 'true' : 'false',
      openCur: screen === 'product' && s.ccyOpen ? this._closeCur : set({ ccyOpen: true, sheet: '', toast: '', ccyAt: '' }),
      ccyPop: !!s.ccyOpen && screen !== 'product', ccyInline: !!s.ccyOpen && screen === 'product', showInfo: !(s.ccyOpen && screen === 'product'), ccyTri: s.ccyOpen ? 'rotate(180deg)' : 'none',
      gDown: this._gDown, gMove: this._gMove, gUp: this._gUp, tapLens: this._tapLens, closeCur: this._closeCur, curRef: this._curRef,
      ccyOpen: !!s.ccyOpen, ccyExpanded: s.ccyOpen ? 'true' : 'false', curPos: screen === 'product' ? 'bottom: 150px; left: 12px' : (s.ccyAt || 'top: 48px; right: 10px'), curOrigin: screen === 'product' ? 'bottom left' : (!s.ccyAt ? 'top right' : 'top left'),
      ccyBd: s.ccyOpen ? '#0E0E0E' : '#CFCFCB',
      openCurHere: function (e) {
        var r = e.currentTarget.getBoundingClientRect(), root = self._sc ? self._sc.getBoundingClientRect() : { top: 0, left: 0 };
        self.setState({ ccyOpen: true, catOpen: false, sheet: '', toast: '', ccyAt: 'top: ' + Math.round(r.bottom - root.top + 4) + 'px; left: ' + Math.round(r.left - root.left) + 'px' });
      }, currencies: currencies, ccy: ccy.code, sym: ccy.sym, ccyAria: 'Currency: ' + ccy.code + '. Change currency',
      cats: cats, products: products, dock: dock,
      viewBtns: viewBtns, isGrid: s.view === 'grid', isScroll: s.view === 'scroll', onRow: onRow,
      rowPrev: rowStep(-1), rowNext: rowStep(1),
      arrLVis: cur > 0 ? 'visible' : 'hidden', arrRVis: cur < list.length - 1 ? 'visible' : 'hidden',
      coNote: 'お支払い：ご注文確定時に決済されます（クレジットカード / Apple Pay / Google Pay）。\n発送：ご注文確定後[0]営業日以内に発送します。\n返品・キャンセル：ご注文確定後のキャンセルは承れません。返品条件はPoliciesのReturnsをご確認ください。\n\nPayment is taken when you place the order. Orders ship within [0] business days. Orders cannot be cancelled once placed; see Returns under Policies. International orders: duties and taxes are paid by the recipient.',
      curLabel: pad(cur + 1) + ' / ' + pad(list.length),
      rowRef: this._rowRef, barRef: this._barRef,
      prod: prod, prodD: PATHS[prod.kind], gallery: gallery, segs: segs, hasSegs: gallery.length > 1, onGal: onGal,
      prodPrice: money(prod.price), prodCat: prod.cat.charAt(0) + prod.cat.slice(1).toLowerCase(),
      sizeHint: s.needSize && !s.size ? 'Select size' : '', sizeHintFg: '#0E0E0E',
      addLabel: s.added ? 'Added' : 'Add to bag',
      infoText: '[Description — fabric, silhouette and intent, in two or three quiet sentences.]\n\n' + accData.map(function (a) { return a.key.charAt(0) + a.key.slice(1).toLowerCase() + '\n' + a.body; }).join('\n\n'),
      subtotal: money(s.bag.reduce(function (t, b) { return t + find(b.id).price; }, 0)),
      shipping: money(s.bag.length ? 1200 : 0),
      total: money(s.bag.reduce(function (t, b) { return t + find(b.id).price; }, 0) + (s.bag.length ? 1200 : 0)),
      sizes: sizes, sizeLabel: s.size ? 'SIZE — ' + s.size : 'SELECT SIZE', add: add,
      acc: acc, fields: fields,
      bagItems: bagItems, bagEmpty: bagEmpty, bagCount: s.bag.length, bagCountPad: pad(s.bag.length), bagAria: 'Bag, ' + s.bag.length + ' items',
      coBg: bagEmpty ? '#8A8A86' : '#0E0E0E',
      hasToast: !!s.toast, toast: s.toast
    };
  }
}


inst = new Component({ start: 'index' });
paint();
})();
