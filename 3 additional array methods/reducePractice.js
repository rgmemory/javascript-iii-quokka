var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum

//Use the sum to get an average


var handicapAverae = roundScores.map(score=>score-4)
                                .reduce((total, socre) => total+score, 0)
                                / roundScores.length

//Handicap is 4
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
//Use the sum to get an average

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together

var song = lyricWords.reduce((song, word) => `${song} ${word} ${word}`, '')