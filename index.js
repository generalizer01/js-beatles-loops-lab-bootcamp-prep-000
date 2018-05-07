function theBeatlesPlay(musicians,instruments) {
  var sentences = []
  var sentence = ''
  
  for (var i=0;i<musicians.length;i++) {
    sentence=musicians[i]+ " plays " + instruments[i]
    sentences.push(sentence)
  }
  
  return sentences
}

function johnLennonFacts(facts) {
  var x = 0
  while (x<facts.length) {
    console.log(facts[x]+"!!!")
    x+=1
  }
}