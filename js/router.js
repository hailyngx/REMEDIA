let router = new Navigo(null,true)
let $app = document.getElementById('app');

router.on('/signinsignup', function(){
    $app.innerHTML = '<signin-signup></signin-signup>'
}).resolve();

router.on('/homepage', function(){
    $app.innerHTML = '<home-page></home-page>'
}).resolve();

// router.on(function(){
//     router.navigate('/homepage')
// }).resolve();

window.router = router;
