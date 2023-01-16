let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.search("not")
let wordBad  = sentence.search("bad")

                        
if (wordNot === -1) {

    console.log(sentence)

} else if ( wordNot < wordBad) {

    console.log(wordNot)
    console.log(wordBad)


    let pullNot = sentence.slice(0, wordNot)
    let pullBad = sentence.slice(wordBad + 3)
    console.log(pullNot + "good" + pullBad)  

 
} else { 
  console.log(sentence)
}


////////////////////////////////////////////////
/**
  Correcteur: Yannick GOUGUIA 
  Merci de revoir ce code. 
     il n'ya aucun code dans les case

*/


// deuxieme methode avec les etapes

// let sentence = "The movie is not that bad, I like it";
// let wordNot = sentence.search("not")
// let wordBad  = sentence.search("bad")

                        
// if ( wordNot > 0 && (wordNot  < wordBad)){
// //    

//     let toReplace = sentence.slice(wordNot,wordBad+3)
//     let newSentence = sentence.replace(toReplace,"good" )
//     console.log(toReplace)  
//     console.log(sentence)  
//     console.log(newSentence)  
// }

// else {
//     console.log(sentence)
// }







