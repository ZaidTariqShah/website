let head = document.getElementById('header');   // head => <header> </header>
let div1 = document.createElement('div');       // div1 => <div> </div>
let imglogo = document.createElement('img');    // imglogo => <img> </img>
imglogo.src = 'gta.png';                        // <img src = 'gta.png'>
imglogo.id = 'imgl'                             // <img id = 'imgl' src = 'gta.png' >
let img = document.createElement('img');        // img => <img> </img>
img.id = 'img';                                 // <img id = img > </img>
img.src = 'img.png';                            // <img id = img src = 'img.png' > </img>
div1.append(img);                               // <div> <img id = img src = 'img.png' > </img> </div>
div1.append(imglogo);                           //  <div> <img src = 'gta.png' id = 'imgl'> </img> <img id = img src = 'img.png' > </img> </div>
head.append(div1);                              //  <header> <div> <img src = 'gta.png' id = 'imgl'> <img id = img src = 'img.png' > </img> </div> </header>



let nav = document.getElementById('nav');
nav.innerHTML = `zaid tariq shah`;