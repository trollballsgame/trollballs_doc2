
function gebid(id) {
    return document.getElementById(id);
  }
  
  function genrandstr(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
  }
  
  const codevalue = genrandstr(5)
  
  window.onload = function () {
    const code = gebid("code")
    const menu = gebid("menu")
  
    if (code) {
      code.textContent = `enter ${codevalue} to start`
    }  else {
      console.warn("Element with id='code' not found.")
    }
  
    if (menu) {
      menu.onclick = codeprompt
    }
};
  
  function codeprompt() {
    let codeinput = window.prompt("Enter code:")
    if (codeinput === codevalue) {
      window.location.href = "mainweb.html"
    } else {
      alert(`Error: wrong code!\nYou entered: ${codeinput === null ? "error" : codeinput}\nExpected: ${codevalue}`)

    }
}
