var slider = document.querySelectorAll('.slider')
        var uparrow = document.querySelectorAll('.up-arrow')
        var downarrow = document.querySelector('.down-arrow')

        let x = 0;
        uparrow.onClick = function() {
            x = x - 300;
            slider.style.top = x + "px";
        }