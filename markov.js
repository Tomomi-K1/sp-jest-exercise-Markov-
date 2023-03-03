/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = {};
    this.words.forEach((word) =>{

        // console.log(`forearch word:${word}`)
        let possibleWords = this.words.reduce((accum, curValue, curIdx, array)=>{
          
           if (curValue === word) {
            
              if(curIdx+1 == array.length){
                // console.log(`if array.lentgh: curValue:${curValue}, word: ${word}, accum:${accum}`)
                accum.push(null);
              } else {
              // console.log(`adding crr+1 word: curValue:${curValue}, word: ${word}, array[curIdx+1]:${array[curIdx+1]}`)
              accum.push(array[curIdx+1]) 
            }
          }

            return accum

        }, [])
       
        chain[word] = possibleWords;

      // }
    })
    return chain;
  }

 

  /** return random text from chains */

  makeText(numWords = 100) {
    let wordArray = [];
    let wordChoice = this.makeChains();
    let keys =Object.keys(wordChoice);
    // console.log(`keys: ${keys}`);
    
    // get first word
    let firstWord = keys[Math.floor(Math.random()* keys.length)]
    wordArray.push(firstWord);
    // console.log(`firstWord: ${firstWord}`);
  

    function findvalue (key){
      // console.log(`findvalue wordChoice[key]: ${wordChoice[key]}`)
      let randomValue =wordChoice[key][Math.floor(Math.random()*wordChoice[key].length)]
      // console.log(`findvalue randomevalue:${randomValue}`)
      wordArray.push(randomValue);
         let nextkey = randomValue;
         return nextkey;
    }

    let nextkey = findvalue(firstWord);

    for(let i = 0; i<numWords-1; i++){
      
      if(wordArray[wordArray.length-1] == null){
        break;
      } 
    
      nextkey =findvalue(nextkey)
      // console.log(`wordArray:${wordArray}`)
  
    }
    return wordArray.join(' ');
  }
}

module.exports= MarkovMachine ;