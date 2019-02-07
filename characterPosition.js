function characterPosition(string)  {
    var indices = {};
    string = string.split(' ').join('');
    for (let i = 0; i < string.length; i++) {
        var alphabet = string[i];
        if (indices[alphabet]) {
            indices[alphabet].push(i);

        } else {
            indices[alphabet] = [i]
        }
    }
    return indices;
}

console.log(characterPosition('lighthouse in the house'));