let router = new Navigo(null,true)
let $app = document.getElementById('app');

router.on('/signinsignup', function(){
    $app.innerHTML = '<signin-signup></signin-signup>'
}).resolve();

router.on('/homepage', function(){
    $app.innerHTML = '<home-page></home-page>'
}).resolve();

router.on('/aboutus', function(){
    $app.innerHTML = '<about-us-screen></about-us-screen>'
}).resolve();

router.on('/advisory', function(){
    $app.innerHTML = '<advisory-screen></advisory-screen>'
}).resolve();

router.on('/factandinfo', function(){
    $app.innerHTML = '<fact-and-info-screen><fact-and-info-screen>'
}).resolve();

router.on('/stories', function(){
    $app.innerHTML = '<stories-screen></stories-screen>'
}).resolve();

router.on('/druglibrary', function(){
    $app.innerHTML = '<drug-library-screen></drug-library-screen>'
}).resolve();

router.on('/fact/sevenfactsaboutparacetamol', function(){
    $app.innerHTML = '<seven-facts-about-paracetamol></seven-facts-about-paracetamol>'
}).resolve();

// router.on(function(){
//     router.navigate('/homepage')
// }).resolve();

window.router = router;
