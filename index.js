function theBeatlesPlay(musicians,instruments) {
  var sentences = []
  var sentence = ''
  
  for (var i=0;i<=length(musicians);i++) {
    sentence=musicians[i]+ " plays " + instruments[i]
    sentences.push(sentence)
  }
  
  return sentences
}