// API NOTIFICATION MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}


// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE", params: true/false, query: true/false }
export const SERVICE_URLS = {
    
    // college finder
    getAllCllg: { url: '/collegefinder', method: 'GET', params: true },
    getOneCllg: { url: 'collegeSpecific', method: 'GET', query: true},

    // campus explorer
    getAllExpByCllgName: { url: '/campusexplorer', method: 'GET', params: true },
    getOneExpByCllgName: {url: 'campusexplorerspecific', method: 'GET', query: true },
    getAllExp: {url: 'cafesnearcollege', method: 'GET', query: true },

    // accommodation
    getAllPg: { url: '/accommodation', method: 'GET', params: true },
    getOnePg: { url: 'accomodationnearme', method: 'GET', query: true },

    // contact form
    postContact: { url: '/contact', method:'POST' }
}