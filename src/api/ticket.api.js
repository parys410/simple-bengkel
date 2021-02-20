import ky from "ky";

const baseURL = "http://localhost:3030/";

const helpdeskBaseURL =
  "https://hdesk.e1-vhp.com:8443/VhpHelpDesk/rest/deskServices/";

// const helpdeskBaseURL =
//   "http://devwshdesk.e1-vhp.com:8080/VhpHelpDesk/rest/deskServices/";

/**
 * Starting command:
 * cd ./data
 * json-server --watch db.json --port 30306
 */

export default {
  getSetup: async url => {
    const requestURL = baseURL + url;

    try {
      const response = await ky.get(requestURL);
      const data = await response.json();
      return data;
    } catch (error) {
      return { errorMessage: error.message };
    }
  },
  getTicketList: async url => {
    const requestURL = baseURL + url;

    try {
      const response = await ky.get(requestURL);
      const data = await response.json();
      return data;
    } catch (error) {
      return { errorMessage: error.message };
    }
  },
  authorize: async (url, email) => {
    const requestURL = baseURL + url + "?email=" + email;
    try {
      const response = await ky.get(requestURL);
      const data = await response.json();
      return data;
    } catch (error) {
      return { errorMessage: error.message };
    }
  },
  doFetch: async (url, body) => {
    let reqBody = null;
    if (!body) {
      reqBody = "";
    } else {
      reqBody = body;
    }

    const requestURL = helpdeskBaseURL + url;

    const httpOptions = {
      json: {
        request: reqBody
      },
      timeout: 10000
    };

    try {
      const response = await ky.post(requestURL, httpOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      return { errorMessage: error.message };
    }
  },
  getBaseUrl() {
    return helpdeskBaseURL;
  }
};
