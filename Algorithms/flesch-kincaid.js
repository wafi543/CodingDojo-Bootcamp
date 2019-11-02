function readability(str) {
    // Part 1
    var sentences = str.split('.')
    // console.log(sentences)
    var avgW = 0
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(' ')
        avgW += words.length
        // console.log(words)
    }
    avgW = avgW / sentences.length
    // console.log(avgW)
    // --------------------------------------------
    function new_count(word) {
        word = word.toLowerCase();
        if (word.length <= 3) { return 1; }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        return word.match(/[aeiouy]{1,2}/g).length;
    }
    var words = str.split(' ')
    var avgS = 0
    for (var i = 0; i < words.length; i++) {
        var count = new_count(words[i])
        avgS += count
    }
    avgS = avgS / words.length
    
    var result = 0.39 * avgW + 11.8 * avgS - 15.59
    console.log(result)
}


readability('The turtle is leaving.')