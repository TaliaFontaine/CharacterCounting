function countLetters(string)  {
    var count = {};
    string = string.split(' ').join('');
    for (var i = 0; i < string.length; i++){
        var alphabet = string[i];
        if (count[alphabet]) {
            count[alphabet]++;
        } else {
            count[alphabet] = 1;
        }
    }
    return count;
};

console.log(countLetters('lighthouse in the house'));