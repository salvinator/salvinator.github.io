sniff()
genera()
window.setInterval(genera, 10000)

//////////// F U N C T I O N S ////////////
function genera() {
fetch('tweets.txt')
  .then(response => response.text())
  .then((data) => {
    // stringo = data
    let tweets = data.split("\n\n")
    let tweet = tweets[Math.floor(Math.random()*tweets.length)];    
    tweet = tweet.parseHashtag()
    tweet = tweet.parseUsername()    
    document.getElementById("tweeto").innerHTML = tweet    
    document.getElementById("lcount").innerHTML = randInt(900)
    let h = randInt(12)
    let m = randInt(59)
    let d = 1 + randInt(29)
    let y = 2019 + randInt(3)
    document.getElementById("date").innerHTML = h+":"+m+" AM - Oct "+d+", "+y
  })
}

function randInt(max){
    return Math.round(Math.random() * max)
}

String.prototype.parseUsername = function() {
   return this.replace(/[@]+[A-Za-z0-9-_]+/g, function( u ) {            
   return '<span class="sandro">' + u + '</span>' 
  })
}
  
String.prototype.parseHashtag = function() {
  return this.replace(/[#]+[A-Za-z0-9-_]+/g, function( t ) {            
    return '<span class="sandro">' + t + '</span>' 
  })
}

function sniff() {
  console.log('%c "We feel free because we lack the very language to articulate our unfreedom"', "font-size: 16px;line-height:31px;")
  console.log("%c Slavoj Žižek", "font-size: 16px; font-style: italic;")
}
