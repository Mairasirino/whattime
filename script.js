function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imgManha')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Now it's ${hora} hours.`
  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'https://images.pexels.com/photos/641038/pexels-photo-641038.jpeg'
    document.body.style.background = '#dcdcdc'
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src =
      'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg'
    document.body.style.background = '#d18118'
  } else {
    img.src =
      'https://images.pexels.com/photos/6735385/pexels-photo-6735385.jpeg'
    document.body.style.background = '#000000'
    // Boa noite
  }
}
