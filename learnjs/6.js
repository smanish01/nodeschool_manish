function countWords(inputWords) {
    return inputWords.reduce(function(obj,words) {
        if(words in obj)
            obj[words]++;
        else
            obj[words] = 1;
        
        return obj;
    },{});
  }

  module.exports = countWords