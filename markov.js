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

        console.log(`forearch word:${word}`)
        let possibleWords = this.words.reduce((accum, curValue, curIdx, array)=>{
          
           if (curValue === word) {
            
              if(curIdx+1 == array.length){
                console.log(`if array.lentgh: curValue:${curValue}, word: ${word}, accum:${accum}`)
                accum.push(null);
              } else {
              console.log(`adding crr+1 word: curValue:${curValue}, word: ${word}, array[curIdx+1]:${array[curIdx+1]}`)
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
    // TODO
  }
}
