(()=>{function t(e,t,a){Array.from(e).forEach(e=>{e.addEventListener(t,a)})}function e(e){let n=e.querySelector(".section__tab_active").dataset.id;const i=e.querySelectorAll(".section__tab"),c=Array.from(i).map(e=>e.dataset.id),s=e.querySelectorAll(".section__panel"),l=e.querySelector(".section__select");let d=e.querySelector(".section__tab_active"),o=e.querySelector(".section__panel:not(.section__panel_hidden)");function a(e){var t=c.indexOf(e);const a=i[t],r=s[t];n=e,d.classList.remove("section__tab_active"),d.setAttribute("aria-selected","false"),d.removeAttribute("tabindex"),a.classList.add("section__tab_active"),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0"),a.focus({preventScroll:!0}),o.classList.add("section__panel_hidden"),o.setAttribute("aria-hidden","true"),r.classList.remove("section__panel_hidden"),r.setAttribute("aria-hidden","false"),d=a,o=r,l.value=e}l.addEventListener("input",()=>{a(l.value)}),t(i,"click",e=>{a(e.target.dataset.id)}),t(i,"keydown",t=>{if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)){let e=c.indexOf(n);switch(t.which){case 37:--e;break;case 39:++e;break;case 36:e=0;break;case 35:e=c.length-1;break;default:return}e>=c.length?a(c[0]):e<0&&a(c.at(-1)),t.preventDefault()}})}function a(e){let t=!1;const a=document.querySelector(".header__links"),r=e.querySelector(".header__menu-text");e.addEventListener("click",()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),r.textContent=t?"Закрыть меню":"Открыть меню",a.classList.toggle("header__links_opened",t),a.classList.add("header__links-toggled")})}document.addEventListener("DOMContentLoaded",()=>{Array.from(document.querySelectorAll(".main__devices")).forEach(e),Array.from(document.querySelectorAll(".header__menu")).forEach(a)})})();