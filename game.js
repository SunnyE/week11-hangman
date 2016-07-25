function wordpicker() {
    var teams = ['yankes', 'mets', 'cardinals', 'reds', 'pirates'];
    var randomNumber = Math.floor(Math.random() * teams.length);
    return teams[randomNumber];
}

exports['wordpicker'] = wordpicker; 

