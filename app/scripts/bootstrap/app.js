/* Master app file. Contains global factories,routes and bootstrapping commands. */

var selectTeamNavigation = undefined;
var appModules =  undefined;
var  pageTitles = undefined;
var mockingDataLocations = undefined;
var serverDataLocations = undefined;
var isDevMode = undefined;
var cscContactNumber = undefined;

/* Configuration of the application with routes and templates to load for the routes. */
(function()
{
    crisisMgmtApp.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide,crisisMgmtConfig)
    {

        //Assign config values to global file
        selectTeamNavigation=crisisMgmtConfig.selectTeamNavigation;
        appModules=crisisMgmtConfig.appModules;
        pageTitles=crisisMgmtConfig.pageTitles;
        mockingDataLocations=crisisMgmtConfig.mockingDataLocations;
        serverDataLocations=crisisMgmtConfig.serverDataLocations;
        isDevMode=crisisMgmtConfig.isDevMode;
        cscContactNumber=crisisMgmtConfig.cscContactNumber;

        // Let's keep the older references.
        crisisMgmtApp._controller = crisisMgmtApp.controller;
        crisisMgmtApp._service = crisisMgmtApp.service;
        crisisMgmtApp._factory = crisisMgmtApp.factory;
        crisisMgmtApp._value = crisisMgmtApp.value;
        crisisMgmtApp._directive = crisisMgmtApp.directive;

        // Provider-based controller.
        crisisMgmtApp.controller = function( name, constructor ) {

            $controllerProvider.register( name, constructor );
            return( this );

        };

        // Provider-based service.
        crisisMgmtApp.service = function( name, constructor ) {

            $provide.service( name, constructor );
            return( this );

        };

        // Provider-based factory.
        crisisMgmtApp.factory = function( name, factory ) {

            $provide.factory( name, factory );
            return( this );

        };

        // Provider-based value.
        crisisMgmtApp.value = function( name, value ) {

            $provide.value( name, value );
            return( this );

        };

        // Provider-based directive.
        crisisMgmtApp.directive = function( name, factory ) {

            $compileProvider.directive( name, factory );
            return( this );
        };

        // Register routes with the $routeProvider

        if(config.routes !== undefined)
        {
            angular.forEach(config.routes, function(route, path)
            {
                $routeProvider.when(path, {templateUrl:route.templateUrl,css:route.styleSheet,controller:route.controller, resolve:{deps:function($q, $rootScope)
                {
                    var deferred = $q.defer();

                    $script(route.dependencies, function()
                    {
                        // all dependencies have now been loaded by $script.js so resolve the promise
                        $rootScope.$apply(function()
                        {
                            deferred.resolve();
                        });
                    });

                    return deferred.promise;
                }}});

            });
        }

        if(config.defaultRoutePaths !== undefined)
        {
            $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
        }

    });
})();

getUniqueAlphabetsToSort = function (itemsList,filterProperty) {
    var filteredAlphabetList=new Array();
    angular.forEach(itemsList, function(item) {
        var alphabet=item[filterProperty].charAt(0).toUpperCase();
        if(filteredAlphabetList.indexOf(alphabet)===-1){
            filteredAlphabetList.push(alphabet);
        }
    });
    return filteredAlphabetList.sort();
};


$(document).on('focus', 'input[type="text"],input[type="password"],textarea,select', function(e) {
    $('.cms-login-headerLabel').hide();
    $('.cms-login-headerLabelPart2').hide();
    $('.cms-footer').hide();
    $('.navbar.navbar-fixed-top').css('position', 'absolute');
    $('.cms-header-headerContainer').css('position','absolute');

    document.ontouchmove = function(event){ event.preventDefault(); }

})


$(document).on('blur', 'input[type="text"],input[type="password"], textarea,select', function() {
    $('.cms-login-headerLabel').show();
    $('.cms-login-headerLabelPart2').show();
    $('.cms-footer').show();
    $('.navbar.navbar-fixed-top').css('position', 'fixed');
    $('.cms-header-headerContainer').css('position','fixed');
    document.ontouchmove = function(event){ return true; }
});
