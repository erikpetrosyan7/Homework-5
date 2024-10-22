// 1

function longestWord(str){
    let result = ''
    let eachWord = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            eachWord += str[i]
        }else {
            if (eachWord.length  > result.length ) {
                result = eachWord
            }
            eachWord = ''
            
        }
    }
    return result
    
}
longestWord('Which would be worse to live as a  monster or to die as a good man?')



// 2

// 3
function fn(str){
    let result = ''
    for (let i = 0; i < str.length; i+=3) {
        if (i + 2 < str.length) {
        result += str[i + 1] + str[i + 2] + str[i]
            
        }else {
            result += str[i] + str[i + 1]
        }
    }
    return result
}

fn('aweyoolp')