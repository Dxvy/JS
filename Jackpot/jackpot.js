var slotMachine = (function() {
    let tkn =0;
    let total = 500;

    var maxTime = 2000, // time measured in milliseconds
        height = 400, // height of reels
        speeds = [], // reel arry speed
        r = [], // reel arry values
        reelArry = [
            ['🍋', '🍒', '💎', '7️⃣'],
            ['🍋', '🍒', '💎', '7️⃣'],
            ['🍋', '🍒', '💎', '7️⃣']
        ],
        slotReels, txt, begin;

    function init() {

        slotReels = document.querySelectorAll('.slots__reel');
        for (i = 0; i < slotReels.length; i++) {
            slotReels[i].innerHTML = '<ul class="items"><li>' + reelArry[i].join('</li><li>') + '</li></ul><ul class="items"><li>' + reelArry[i].join('</li><li>') + '</li></ul>';
            console.log(slotReels.innerHTML);
        }

        txt = document.querySelector('.txt');

        document.querySelector('.tk10').addEventListener('click', daMagic10);
        document.querySelector('.tk50').addEventListener('click', daMagic50);
        document.querySelector('.tk200').addEventListener('click', daMagic200);

    }

    function endgame() {
        if (total === 0){
            alert('Vous ne pouvez plus jouer, vous n\'avez plus de jetons');
        }
    }

    function token10() {
        document.getElementById('token').innerHTML = document.getElementById('token').value;
        var price = Number(document.getElementById('prix-1').value);
        total -= price;
        document.getElementById('token').innerHTML = "JETONS : " + total;
    }
    function token50() {
        document.getElementById('token').innerHTML = document.getElementById('token').value;
        var price = Number(document.getElementById('prix-2').value);
        total -= price;
        document.getElementById('token').innerHTML = "JETONS : " + total;
    }

    function token200() {
        document.getElementById('token').innerHTML = document.getElementById('token').value;
        var price = Number(document.getElementById('prix-3').value);
        total -= price;
        document.getElementById('token').innerHTML = "JETONS : " + total;
    }


    function daMagic10() {
        if (begin !== undefined) {
            return;
        }

        for (var i = 0; i < 3; ++i) {
            speeds[i] = Math.random() + .5;
            r[i] = (Math.random() * 4 | 0) * height / 4;
        }
        r[3] = (Math.random() * 8 | 0) * height / 4;

        txt.innerHTML = 'Spinning...';
        if (total < 10) {
            alert('Vos jetons ne sont pas assez pour jouer');
        } else {
            tkn = 10;
            animate();
            token10();
            return tkn;
        }
    }
    function daMagic50() {

        if (begin !== undefined) {
            return;
        }

        for (var i = 0; i < 3; ++i) {
            speeds[i] = Math.random() + .5;
            r[i] = (Math.random() * 4 | 0) * height / 4;
        }
        r[3] = (Math.random() * 8 | 0) * height / 4;

        txt.innerHTML = 'Spinning...';
        if (total < 50) {
            alert('Vos jetons ne sont pas assez pour jouer');
        } else {
            tkn = 50;
            animate();
            token50();
            return tkn;}
    }
    function daMagic200() {
        if (begin !== undefined) {
            return;
        }

        for (var i = 0; i < 3; ++i) {
            speeds[i] = Math.random() + .5;
            r[i] = (Math.random() * 4 | 0) * height / 4;
        }
        r[3] = (Math.random() * 8 | 0) * height / 4;

        txt.innerHTML = 'Spinning...';
        if (total < 200) {
            alert('Vos jetons ne sont pas assez pour jouer');
        } else {
            tkn = 200;
            animate();
            token200();
            return tkn;
        }
    }

    function animate(now) {
        if (!begin) {
            begin = now;
        }

        var t = now - begin || 0;

        for (var i = 0; i < 3; ++i) {
            slotReels[i].scrollTop = (speeds[i] / maxTime / 2 * (maxTime - t) * (maxTime - t) + r[i]) % height | 0;
            // console.log(slotReels[i]);
        }

        if (t < maxTime) {
            requestAnimationFrame(animate); // animate callback
            // console.log('animate?');
        } else {
            begin = undefined;
            checkWinner();
            endgame();
            // console.log('check');
        }

    }

    function checkWinner() {
        // console.log(r[0], r[1], r[2]);
        if (r[0]  === 300 && r[1] === 300 && r[2] === 300) {
            txt.innerHTML = '<span class="winner">You\'ve won! Enjoy your 🍋!</span>';
            if (tkn === 10) {
                gain = 1.25 * Number(document.getElementById('prix-1').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 50) {
                gain = 1.25 * Number(document.getElementById('prix-2').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 200) {
                gain = 1.25 * Number(document.getElementById('prix-3').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            }
        }
        else {
            txt.innerHTML = '<span class="loser">Try again...</span>';
        }
        if (r[0] === 0 && r[1] === 0 && r[2] === 0) {
            txt.innerHTML = '<span class="winner">You\'ve won! Enjoy your 🍒!</span>';
            if (tkn === 10) {
                gain = 1.5 * Number(document.getElementById('prix-1').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 50) {
                gain = 1.5 * Number(document.getElementById('prix-2').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 200) {
                gain = 1.5 * Number(document.getElementById('prix-3').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            }
        }

        if (r[0] === 100 && r[1] === 100 && r[2] === 100) {
            txt.innerHTML = '<span class="winner">You\'ve won! Enjoy your 💎 !</span>';
            if (tkn === 10) {
                gain = 2.5 * Number(document.getElementById('prix-1').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 50) {
                gain = 2.5 * Number(document.getElementById('prix-2').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 200) {
                gain = 2.5 * Number(document.getElementById('prix-3').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            }
        } else if(r[0] === 100 && r[1] === 100 || r[0] === 100 && r[2] === 100 || r[1] === 100 && r[2] === 100){
            txt.innerHTML = '<span class="winner">You\'ve won! Enjoy your 💎 !</span>';
            if (tkn === 10) {
                gain = Number(document.getElementById('prix-1').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 50) {
                gain = Number(document.getElementById('prix-2').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 200) {
                gain = Number(document.getElementById('prix-3').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            }
        } else if(r[0] === 100 || r[1] === 100 || r[2] === 100){
            txt.innerHTML = '<span class="winner">You\'ve won! Enjoy your 💎 !</span>';
            if (tkn === 10) {
                gain = 0.5 * Number(document.getElementById('prix-1').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 50) {
                gain = 0.5 * Number(document.getElementById('prix-2').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 200) {
                gain = 0.5 * Number(document.getElementById('prix-3').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            }

        }

        if (r[0] === 200 && r[1] === 200 && r[2] === 200) {
            txt.innerHTML = '<span class="winner">You\'ve won! Enjoy your 7️⃣!</span>';
            if (tkn === 10) {
                gain = 10 * Number(document.getElementById('prix-1').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 50) {
                gain = 10 * Number(document.getElementById('prix-2').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            } else if (tkn === 200) {
                gain = 10 * Number(document.getElementById('prix-3').value);
                total += gain;
                document.getElementById('token').innerHTML = "JETONS : " + total;
                alert('Vous avez gagné '+ gain + ' jetons !');

            }

        }


    }

    return {
        init: init
    }

})();
slotMachine.init();