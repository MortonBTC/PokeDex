window.addEventListener('load', function () {
    var pokemon = require('./pokemon');

    // Rendering pokemon at the beginning
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
        var pattern = new RegExp(word);

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
    var search2 = document.getElementById('search-box2');
    search2.addEventListener('keyup', function () {
        var word2 = search2.value;
        var pattern2 = new RegExp(word2);

        // search through `foods`
        // using a for loop
        // does this element's name match the regular expression?
        for (var i = 0; i < pokemon.length; i++) {
            var element2 = document.getElementById('pokemon-' + pokemon[i].id);
            if (pattern2.test(pokemon[i].type.toLowerCase())) {
                // Show it
                element2.classList.remove('hidden');
            } else {
                // Hide it
                element2.classList.add('hidden');
            }
        }
    });// end keyup function


    $('.pokemon').draggable({
        revert: true,
        cursor: "move", cursorAt: { top: 56, left: 56 },
    });
    $('#ball').droppable({
        tolerance: 'pointer',
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
            $('#pokemon-' + id + ' .got').find('p').remove(); // get #pokemon-... and find the p element that was created and remove()
            $('<p>').text('You caught it!').appendTo('#pokemon-' + id + ' .got');
        },
    });
        $('#grass').droppable({
            tolerance: 'pointer',
        drop: function (e, thud) {
            var elementId = thud.draggable.attr('id');
            var id = parseInt(elementId.substr(8));

            for (var i = 0; i < pokemon.length; i++) {
                if (pokemon[i].id === id) {
                    pokemon[i].name = 'You released it!, ' + pokemon[i].name;
                }
            }//end for loop
            console.log(pokemon);
            $('#pokemon-' + id + ' .got').find('p').remove();
            $('<p>').text('Now you released it!').appendTo('#pokemon-' + id + " .got");
        },
    });
    $('#bill').droppable({
        tolerance: 'pointer',
        drop: function (e, thud) {
            var elementId = thud.draggable.attr('id');
            var id = parseInt(elementId.substr(8));
            for (var i = 0; i < pokemon.length; i++) {
                if (pokemon[i].id === id) {
                    pokemon[i].name = 'You put it in Bill\'s PC!, ' + pokemon[i].name;
                }
            }//end for loop
            console.log(pokemon);
            $('#pokemon-' + id + ' .got').find('p').remove();
            $('<p>').text('You stored it in Bill\'s PC!').appendTo('#pokemon-' + id + " .got");
        },
    });
    
});

