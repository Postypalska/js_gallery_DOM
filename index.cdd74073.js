var e=document.querySelector("#largeImg"),t=document.querySelector("#thumbs");t.addEventListener("click",function(r){var l=r.target.closest(".list-item__link");l&&t.contains(l)&&(r.preventDefault(),e.src=l.href,l.title&&(e.alt=l.title))});
//# sourceMappingURL=index.cdd74073.js.map
