
function filterPokemon(pokemon, category) {
    for (var i = 0; i < pokemon.length; i++) {
        // Show it.
        if (pokemon[i].type === category) {
            // get the element
            // remove the hidden class from it
            var hit = document.getElementById('Pokemon-' + pokemon[i].id);
            hit.classList.remove('hidden');
            // Hide it.
        } else {
            var miss = document.getElementById('Pokemon-' + pokemon[i].id);
            miss.classList.add('hidden');
        }
    }
}

window.addEventListener('load', function () {
    var pokemon = require('./pokemon');

    // Rendering foods at the beginning
    var parent = document.getElementById('results');
    var generator = _.template(document.getElementById('pokemon-template').textContent);

    for (var i = 0; i < foods.length; i++) {
        var html = generator({
            food: {
                name: pokemon[i].name,
                type: pokemon[i].type,
                form: pokemon[i].form,
            },
        });

        var el = document.createElement('div');
        el.classList.add('pokemon');
        // set the ID for this element.
        el.setAttribute('id', 'pokemon-' + pokemon[i].id);

        el.innerHTML = html;
        parent.appendChild(el);
    }
});

   // Filter on regular expressions
    var search = document.getElementById('search-box');
    search.addEventListener('keyup', function () {
        var word = search.value;
        var pattern = new RegExp(search.value);

        // search through `foods`
        // using a for loop
        // does this element's name match the regular expression?
        for (var i = 0; i < pokemon.length; i++) {
            var element = document.getElementById('pokemon-' + pokemon[i].id);
            if (pattern.test(pokemon[i].name)) {
                // Show it
                element.classList.remove('hidden');
            } else {
                // Hide it
                element.classList.add('hidden');
            }
        }
    });

    $('.pokemon').draggable();
    $('h1').droppable({
        drop: function (e, thud) {
            console.log(e);

            var elementId = thud.draggable.attr('id');
            var id = parseInt(elementId.substr(5));

            for (var i = 0; i < pokemon.length; i++) {
                // Find the item to change, then change it.
                if (foods[i].id === id) {
                    foods[i].name = 'OMG ITS ' + pokemon[i].name;
                }
            }
            console.log(pokemon);
            // what element just got dropped?
            // change the element: change the name

        },
    });
