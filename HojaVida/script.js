let red = document.getElementById('btn-js');
red.addEventListener('click', function(e){
    e.preventDefault();


    red.innerHTML = (`
    <div class="js" id="js">
    <a href="https://es-la.facebook.com"><i class="fa-brands fa-facebook fa-3x face"></i></a>
    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram fa-3x"></i></a>
    </div>`)
})