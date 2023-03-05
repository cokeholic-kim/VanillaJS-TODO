const background = document.querySelector("#background")
const imgs = ['bg1','bg2','bg3','bg4','bg5','bg6','bg7','bg8']
const random = Math.floor(Math.random()*imgs.length)
background.style.background = `url(./imgs/${imgs[random]}.jpg)`
background.style.backgroundSize =  'cover'