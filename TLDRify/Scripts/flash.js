var f = document.getElementById('blink');
setInterval(function() {
    f.style.display = (f.style.display == 'none' ? '' : 'none');
}, 1000); 
    