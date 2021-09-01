module.exports = (letterNumber) => {
    let rangeAlphabet = Array.from(('abcdefghijknlopqrstuvwxyz')),
        lastIndex = rangeAlphabet.length - 1,
        lastLetter = rangeAlphabet[lastIndex],
        firstLetter = rangeAlphabet[0],
        str = Array.from(letterNumber)
    
    const findIndex = (char) => {
        for(let index = 0 ; index < rangeAlphabet.length ; index++){
            if(rangeAlphabet[index] == char) return index
        }
        return null
    }    

    let done = false, 
        i = str.length - 1
    
    while(!done){
        let IndexLetterStr = str[i]
        let indexChar = findIndex(IndexLetterStr)
        if(str.every((val) => val == lastLetter)){
            letterNumber = ''
            let strLength = str.length + 1
            for(let o = 0 ; o < strLength; o++){
                str[o] = firstLetter
            }

            done = true
        }
        if(indexChar == rangeAlphabet.length - 1) {
            i -= 1
        }else{
            str[i] = rangeAlphabet[indexChar + 1]
            if(i < str.length - 1){
                for(i = i + 1 ; i < str.length; i++){
                    str[i] = firstLetter
                }
            }
            done = true
        }
    }
    
    letterNumber = ''
    str.map(y => {
        letterNumber += y
    })
    return letterNumber
}
//EXAMPLES

//1 -> 2 -> 3 -> 4
//ads -> adt -> adu -> adw -> ady -> adz -> afa -> afb 