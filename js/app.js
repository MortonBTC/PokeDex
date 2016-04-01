
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
    var generator = _.template(document.getElementById('poke-template').textContent);

    for (var i = 0; i < pokemon.length; i++) {
        var html = generator({
            pokemon: {
                name: pokemon[i].name,
                type: pokemon[i].type,
                form: pokemon[i].form,
            },
        });

        var element = document.createElement('div');
        element.classList.add('pokemon');
        // set the ID for this element.
        element.setAttribute('id', 'pokemon-' + pokemon[i].id);

        element.innerHTML = html;
        parent.appendChild(element);
    }//end for loop


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
            if (pattern.test(pokemon[i].name.toLowerCase())) {
                // Show it
                element.classList.remove('hidden');
            } else {
                // Hide it
                element.classList.add('hidden');
            }
        }
    });// end keyup function


    $('.pokemon').draggable({
        revert: true,
        cursor: "move", cursorAt: { top: 56, left: 56 },
    });
    $('#ball').droppable({
        drop: function (e, thud) {
            var elementId = thud.draggable.attr('id');
            var id = parseInt(elementId.substr(8));

            for (var i = 0; i < pokemon.length; i++) {
                // Find the item to change, then change it.
                if (pokemon[i].id === id) {
                    pokemon[i].name = 'I choose you!, ' + pokemon[i].name;
                }
            }//end for loop
            console.log(pokemon);
            // what element just got dropped?
            // change the element: change the name
        },
    });
        $('#grass').droppable({
        drop: function (e, thud) {
            var elementId = thud.draggable.attr('id');
            var id = parseInt(elementId.substr(8));

            for (var i = 0; i < pokemon.length; i++) {
                // Find the item to change, then change it.
                if (pokemon[i].id === id) {
                    pokemon[i].name = 'You\'re released!, ' + pokemon[i].name;
                }
            }//end for loop
            console.log(pokemon);
            // what element just got dropped?
            // change the element: change the name
        },
    });
    
});
