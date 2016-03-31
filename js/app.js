window.addEventListener('load', function () {
    
    var info = _.template(document.getElementById('poke-template').textContent);
    for (var i = 0; i < pokemon.length; i++) {
    var html = info({
        name: pokemon[i];
    });
    var el = document.createElement('div');
        el.classList.add('poke');
        el.setAttribute('id', 'pokemon-' + pokemon[i].id);
        el.innerHTML = html;
    var parent = document.getElementById('results');
        parent.appendChild(el);
    console.log(html);
    }// end for loop
});