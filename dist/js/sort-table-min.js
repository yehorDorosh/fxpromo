"use strict";var sortTable=function(e){function s(e,t){return this instanceof s?e&&"TABLE"===e.nodeName?(t=t||{},void this.init(e,t)):Error("Element should be table"):new s(e,t)}return s.prototype.init=function(s,t){var i=this;this.table=s,this.desc_class=t.desc_class||"sort-desc",this.asc_class=t.asc_class||"sort-asc",this.direction=e.localStorage.getItem("sort_direction")||"ASC",this.index=e.localStorage.getItem("sort_index"),s.addEventListener("click",function(e){var s,t=e.target;if("TH"===t.nodeName){s=t.parentNode.cells;for(var a=0;a<s.length;a++)s[a]===t?i.index=a:i.updateClassName(s[a],!0);-1!==t.className.indexOf(i.desc_class)?i.direction="ASC":i.direction="DESC",i.updateClassName(t),i.doSorting()}}),null!==this.index&&this.doSorting()},s.prototype.updateClassName=function(e,s=!1){if(s){var t=new RegExp(this.asc_class+"|"+this.desc_class,"g");e.className=e.className.replace(t,"")}else{t="ASC"===this.direction?this.desc_class:this.asc_class;var i="ASC"===this.direction?this.asc_class:this.desc_class;t=new RegExp(" ?"+t+" ?","g"),e.className=e.className.replace(t,"")+" "+i}},s.prototype.doSorting=function(){var s=this.table.tBodies[0],t=s.cloneNode(),i=[].slice.call(s.cloneNode(!0).rows,0),a="ASC"==this.direction,c=this.index;for(var o in i.sort(function(e,s){var t=e;return e=e.cells[c].innerText.replace(/[$\s-]/g,""),s=s.cells[c].innerText.replace(/[$\s-]/g,""),a&&(e=s,s=t),isNaN(e-s)?e.localeCompare(s):e-s}),i)t.appendChild(i[o]);this.table.replaceChild(t,s),e.localStorage.setItem("sort_index",c),e.localStorage.setItem("sort_direction",this.direction)},s}(window);