let btn = document.querySelector('#other');
        let menu = document.querySelector('#menu-toggle');

        btn.addEventListener('click', function(e) {
            e.preventDefault(); 
            menu.classList.toggle('menu-toggle');
        });