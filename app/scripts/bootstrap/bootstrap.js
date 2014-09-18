/* Manually bootstrap the angular app after all dependencies are loaded  */

//Dependency bundle
var dependencyList =
     ['scripts/bootstrap/routes.js', 'directives/routeStyles.js','directives/formValidation.js','directives/errorMessages.js', 'controllers/footer.js', 'controllers/header.js',
        'services/pageNavigationService.js', 'services/headerService.js', 'services/footerService.js', 'services/urlChangerService.js',
        'services/fetchDataService.js','services/loginDataService.js','services/errorMessagesService.js','filters/alphabeticalFilter.js'];

//Load the app.js first and then load other dependencies

$script("scripts/bootstrap/config.js",'configModule');


//Once the app.js is loaded load the other dependencies
$script.ready(['configModule'], function() {
    $script("scripts/bootstrap/app.js",'appModule');
});

//Once the app.js is loaded load the other dependencies
$script.ready(['appModule'], function() {
    $script(dependencyList, 'dependencies');
});

//After loading dependencies bootstrap the application.
$script.ready(['dependencies'], function() {
    angular.bootstrap(document, ['crisisMgmtApp'])
});