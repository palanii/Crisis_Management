var crisisMgmtApp = angular.module('crisisMgmtApp', ['ngRoute','ui.bootstrap']);

var serverAddressPrefix = "http://windows2012medium-281511.phx-os1.stratus.dev.ebay.com/";

var serverModes=
{
    "DEV":"DEV/",
    "QA":"QA/",
    "UAT":"UAT/",
    "PROD":"PROD/"
};

var currentServerMode = serverModes.DEV;

crisisMgmtApp.constant('crisisMgmtConfig', {

        isDevMode:false,

        selectTeamNavigation: {
            LANDING_SCREEN: 1,
            VIEW_WALLET_CARD: 2
        },

        appModules: {
            "ACTIVE_CRISIS_INFO": 0,
            "RESPOND_TO_CRISIS": 1,
            "CM_POLICIES": 2,
            "WALLET_INFORMATION": 3
        },

        pageTitles: {

            "LOGIN": "Log In",
            "LANDING_SCREEN": "Crisis Management",
            "ACTIVE_CRISIS_MAP_VIEW": "Active Crisis Map View",
            "ACTIVE_CRISIS_LIST_VIEW": "Active Crisis List View",
            "CRISIS_DETAIL_VIEW": "Detail View",
            "RESPOND_TO_CRISIS": "Respond To Crisis",
            "SELECT_TEAM": "Select Team",
            "SEND_ALERT": "Send Alert",
            "INITIATE_CONFERENCE": "Initiate Conference",
            "SCHEDULE_MEETING": "Schedule Meeting",
            "RESILIENCY_SUPPORT": "Request Resiliency Support",
            "LOG_IN": "Log In",
            "DOCUMENTS": "Documents",
            "WALLET_CARD": "View Wallet Card",
            "SCHEDULED_MEETING": "Scheduled Meeting",
            "NOTIFY_TEAM_LEADERSHIP": "Notify Team Leadership"

        },
    mockingDataLocations:
    {
        "LOGIN" : {"Path" : "data/login.json"},
        "ACTIVE_CRISIS_COUNT": {"Path": "data/activeCrisisCount.json"},
        "CRISIS_DETAIL":{"Path" : "data/crisisDetail.json"},
        "CRISIS_LIST_VIEW" : {"Path" : "data/crisisListView.json"},
        "RESPOND_TO_CRISIS" : {"Path" : "data/respondToCrisis.json"},
        "SELECT_TEAM":{"Path" : "data/selectTeam.json"},
        "SCHEDULED_MEETING" : {"Path" : "data/scheduledMeeting.json"},
        "SCHEDULE_A_MEETING" : {"Path" : "data/scheduleAMeeting.json"},
        "MEETING_FREQUENCY" : {"Path" :"data/scheduleAMeeting.json"},
        "REQUEST_RESILIENCY":{"Path" : "data/requestResiliency.json"},
        "NOTIFY_TEAM_LEADERSHIP_EVENT_TYPE":{"Path" : "data/notifyTeamLeadershipEventType.json"},
        "DOCUMENTS_LIST":{"Path" : "data/documentsList.json"},
        "WALLET_CARD":{"Path":"data/walletCard.json"}
    },
    serverDataLocations:
    {
        "LOGIN" : {"Path" : serverAddressPrefix + currentServerMode + "CrisisBase/Authenticate"},
        "CRISIS_LIST_VIEW" : {"Path" : serverAddressPrefix + currentServerMode + "CrisisBase/GetActiveOverview"},
        "CRISIS_DETAIL":{"Path" : serverAddressPrefix + currentServerMode + "CrisisBase/GetActiveCrisisDetail"},
        "ACTIVE_CRISIS_COUNT": {"Path": serverAddressPrefix + currentServerMode+"CrisisBase/GetActiveCount"},
        "DOCUMENTS_LIST":{"Path" : serverAddressPrefix + currentServerMode+"CrisisBase/ViewDocumentList"},
        "VIEW_DOCUMENT":{"Path":serverAddressPrefix + currentServerMode+ "CrisisBase/ViewDocument"},
        "SELECT_TEAM":{"Path":serverAddressPrefix + currentServerMode + "CrisisBase/GetTeamList"},
        "WALLET_CARD":{"Path":serverAddressPrefix + currentServerMode + "CrisisBase/GetWallet"},
        "MEETING_FREQUENCY" : {"Path":serverAddressPrefix + currentServerMode + "CrisisBase/GetMeetingFrequency"},
        "SEND_ALERT" : {"Path":serverAddressPrefix + currentServerMode + "CrisisBase/SendAlert"},
        "RECEIVE_MEETING" : {"Path":serverAddressPrefix + currentServerMode + "CrisisBase/ReceiveMeeting"},
        "SEND_MEETING" : {"Path":serverAddressPrefix + currentServerMode + "CrisisBase/SendMeeting"}
    },

    cscContactNumber:"+1(408) 967-7777",
    initiateConferenceNumber:"04444240000,9445567595",
    "localStorageKey":"WALLET_INFORMATION",

    "appResponseCodes":
    {
        "SUCCESS":{"Code":"0","Message":""},
        "WARNING":{"Code":"05","Message":""},
        "ERROR":{"Code":"","Message":"Something went wrong with your request.Please contact eBay support for further assistance."},
        "SESSION_TIME_OUT":{"Code":"99","Message":"Your session timed out. Please try logging in again."}

    },
    "sessionExpiryTime":20
});