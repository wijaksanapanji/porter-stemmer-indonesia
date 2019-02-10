// step 1
// remove particle
removeParticle = (word) => {
    if(word.endsWith("kah") || word.endsWith("lah") || word.endsWith("pun")) {
        word = word.slice(0,-3);
    }
    return word;
}
// step 2
// remove possesive pronoun
removePossesivePronoun = (word) => {
    if(word.length > 4) {
        if(word.endsWith("ku") || word.endsWith("mu")) {
            word  = word.slice(0,-2);
        } else if(word.endsWith("nya")) {
            word = word.slice(0,-3);
        }
    }
    return word;
}
// step 3
// remove first order prefix
removeFirstOrderPrefix = (word) => {
    if(word.startsWith("meng")) {
        if(word.charAt(4) == "e" || word.charAt(4) == "u") {
            word = "k" + word.slice(4, word.length);
        } else {
            word = word.slice(4, word.length);
        }
    } else if(word.startsWith("meny")) {
        word = "s" + word.slice(4, word.length);
    } else if(word.startsWith("men")) {
        word = word.slice(3, word.length);
    } else if(word.startsWith("mem")) {
        if(word.charAt(3) == "a") {
            word = "m" + word.slice(3, word.length);
        } else if(word.slice(3,5) == "in") {
            word = "m" + word.slice(3, word.length);
        } else if(word.charAt(3) == "i") {
            word = "p" + word.slice(3, word.length);
        } else {
            word = word.slice(3, word.length);
        }
    } else if(word.startsWith("me")) {
        word = word.slice(2, word.length);
    } else if(word.startsWith("peng")) {
        if(word.charAt(4) == "e" || word.charAt(4) == "a") {
            word = "k" + word.slice(4, word.length);
        } else {
            word = word.slice(4, word.length);
        }
    } else if(word.startsWith("peny")) {
        word = "s" + word.slice(4, word.length);
    } else if(word.startsWith("pen")) {
        if(word.charAt(3) == "a" || word.charAt(3) == "i" || word.charAt(3) == "e" || word.charAt(3) == "u" || word.charAt(3) == "o") {
            word = "t" + word.slice(3, word.length);
        } else {
            word = word.slice(3, word.length);
        }
    } else if(word.startsWith("pem")) {
        if(word.charAt(3) == "a" || word.charAt(3) == "i" || word.charAt(3) == "e" || word.charAt(3) == "u" || word.charAt(3) == "o") {
            word = "p" + word.slice(3, word.length);
        } else {
            word = word.slice(3, word.length);
        }
    } else if(word.startsWith("di")) {
        word = word.slice(2, word.length);
    } else if(word.startsWith("ter")) {
        word = word.slice(3, word.length);
    } else if(word.startsWith("ke")) {
        word = word.slice(2, word.length);
    }
    return word;
}
// step 4
// remove second order prefix
removeSecondOrderPrefix= (word) => {
    if(word.startsWith("ber") || word.startsWith("bel")) {
        word = word.slice(3, word.length);
    } else if(word.startsWith("be")) {
        word = word.slice(2, word.length);
    } else if(word.startsWith("per") && word.length > 5) {
        word = word.slice(3, word.length);
    } else if(word.startsWith("pe") && word.length > 5) {
        word = word.slice(2, word.length);
    } else if(word.startsWith("pel") && word.length > 5) {
        word = word.slice(3, word.length);
    } else if(word.startsWith("se") && word.length > 5) {
        word = word.slice(2, word.length);
    }
    return word;
}
// step 5
// remove suffix
removeSuffix = (word) => {
    if(word.endsWith("kan")) {
        word = word.slice(0,-3);
    } else if(word.endsWith("i")) {
        word = word.slice(0,-1);
    } else if(word.endsWith("an")) {
        word = word.slice(0,-2);
    }
    return word;
}
// stem
module.exports.stem = (word) => {
    // convert to lowercase
    word = word.toLowerCase();
    // step 1
    word = removeParticle(word);
    // step 2
    word = removePossesivePronoun(word);
    // step 3
    word = removeFirstOrderPrefix(word);
    // step 4
    word = removeSecondOrderPrefix(word);
    // step 5
    word = removeSuffix(word);
    // return stemmed word
    return word;
}