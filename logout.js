document.getElementById('logoutBtn').addEventListener('click', function(){
    window.location.href = 'index.html';
});

history.pushState(null, null, location.href);
window.onpopstate = function(){
    history.go(1);
};