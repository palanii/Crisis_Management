/* Contains route configurations for the various pages to be traversed.
 * Following properties are needed
 * templateURl: The html template to feed to the main view
 * css: the stylesheet for the template
 * dependencies: controller files and any other files to be loaded by the $script loader*/
var config = (function() {
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/login.html',
                dependencies: [
                    'controllers/login.js'
                ]
            },
            '/login': {
                templateUrl: 'views/login.html',
                dependencies: [
                    'controllers/login.js'
                ]
            },
            '/home': {
                templateUrl: 'views/home.html',
                dependencies: [
                    'controllers/home.js',
                    'services/activeCrisisService.js',
                    'services/teamService.js'
                ]
            },
            '/mapView': {
                templateUrl: 'views/mapView.html',
                styleSheet: [
                    'styles/css/leaflet.css'
                ],
                dependencies: [
                    'services/activeCrisisService.js',
                    'scripts/vendors/leaflet.js',
                    'controllers/mapController.js'

                ]
            },
            '/crisisDetail': {
                templateUrl: 'views/crisisDetailView.html',
                dependencies: [
                    'controllers/crisisDetail.js'
                ]
            },
            '/crisisListView': {
                templateUrl: 'views/crisisListView.html',
                dependencies: [
                    'controllers/crisisListView.js'
                ]
            },
            '/selectTeam': {
                templateUrl: 'views/selectTeam.html',
                styleSheet: 'styles/css/selectTeam.css',
                dependencies: [
                    'controllers/selectTeam.js',
                    'services/teamService.js'
                ]
            },
            '/respondToCrisis': {
                templateUrl: 'views/respondToCrisis.html',
                styleSheet: 'styles/css/respondToCrisis.css',
                dependencies: [
                    'controllers/respondToCrisis.js'
                ]
            },

            '/respondToCrisisLeadership': {
                templateUrl: 'views/respondToCrisisLeadership.html',
                styleSheet: 'styles/css/respondToCrisisLeadership.css',
                dependencies: [
                    'controllers/respondToCrisisLeadership.js'
                ]
            },

            '/notifyTeamLeadership': {
                templateUrl: 'views/notifyTeamLeadership.html',
                dependencies: [
                    'controllers/notifyTeamLeadership.js',
                    'services/notifyTeamLeadershipService.js'
                ]
            },

            '/sendAlert': {
                templateUrl: 'views/sendAlert.html',
                styleSheet: 'styles/css/sendAlert.css',
                dependencies: [
                    'controllers/sendAlert.js',
                    'services/sendAlertService.js'
                ]
            },
            '/initiateConference': {
                templateUrl: 'views/initiateConference.html',
               // styleSheet: 'styles/css/initiateConference.css',
                dependencies: [
                    'controllers/initiateConference.js'
                ]
            },
            '/walletCardList': {
                templateUrl: 'views/walletCardList.html',
                dependencies: [
                    'controllers/walletCardList.js'
                ]
            },
            '/viewWalletCard': {
                templateUrl: 'views/viewWalletCard.html',
                styleSheet: 'styles/css/viewWalletCard.css',
                dependencies: [
                    'controllers/viewWalletCard.js'
                ]
            },
            '/selectTeamForWalletCard': {
                templateUrl: 'views/selectTeamForWalletCard.html',
                styleSheet: 'styles/css/selectTeam.css',
                dependencies: [
                    'controllers/selectTeam.js',
                    'services/teamService.js'
                ]
            },
            '/requestResiliencySupport': {
                templateUrl: 'views/requestResiliencySupport.html',
                dependencies: [
                    'controllers/requestResiliencySupport.js',
                    'services/requestResiliencyService.js'
                ]
            },

            '/viewDocumentsList': {
                templateUrl: 'views/viewDocumentsList.html',
                styleSheet: 'styles/css/viewDocumentsList.css',
                dependencies: [
                    'controllers/viewDocumentsList.js',
                    'services/policiesService.js'
                ]
            },


            '/scheduleAMeeting': {
                templateUrl: 'views/scheduleAMeeting.html',
                //styleSheet: 'styles/css/scheduleAMeeting.css',
                dependencies: [
                    'controllers/scheduleAMeeting.js',
                    'services/meetingService.js'
                ]
            },

            '/scheduledMeeting': {
                templateUrl: 'views/scheduledMeeting.html',
                styleSheet: 'styles/css/scheduledMeeting.css',
                dependencies: [
                    'controllers/scheduledMeeting.js',
                    'services/meetingService.js'
                ]
            }
        }
    };
})();