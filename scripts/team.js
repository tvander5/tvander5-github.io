let teamDivs = document.querySelectorAll(".team-card")

teamDivs = document.querySelectorAll(".team-card")
teamDivs.forEach(member => {
  let img = member.querySelector("img")
  img.addEventListener("click", () => {
    let link = member.getAttribute("path")
    window.open(link, "_blank")
  })
});