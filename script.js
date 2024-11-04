function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light") se contém, remove o light
  //} else {
  //  html.classList.add("light") se não contém, add o light
  //} simplificando o código:

  //selecionar a imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver sem light mode, manter a imgem padrão
    img.setAttribute("src", "./assets/avatar.png")
  }
}
