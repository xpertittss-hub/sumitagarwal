
document.addEventListener("DOMContentLoaded",()=>{
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a=>{
    const target = a.getAttribute("href").split("/").pop();
    if(target === current || (current==="" && target==="index.html")) a.classList.add("active");
  });
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=year);
});
