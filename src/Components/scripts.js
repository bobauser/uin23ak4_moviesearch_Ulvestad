import React from 'react';
export default Functions;

function Functions() {

    
    function search() {
        
        const button = document.getElementById('search-button');
        const effect = createEffect();

        setTimeout(() => {
            button.removeChild(effect);
        }, 600);
    }


    function createEffect() {
        const effect = document.createElement('div');
        effect.className = 'effect';
        button.appendChild(effect);
        return effect;
    }


}