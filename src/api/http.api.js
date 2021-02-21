import { ipcRenderer } from "electron";

/**
 * Starting command:
 * cd ./data
 * json-server --watch db.json --port 30306
 */

export default {
  doFetch: async (url, body) => {
    let reqBody = null;
    if (!body) {
      reqBody = "";
    } else {
      reqBody = body;
    }

    const requestPath = url;
    const args = reqBody;

    try {
      const data = await ipcRenderer.invoke(requestPath, args);
      return data;
    } catch (error) {
      return { errorMessage: error.message };
    }
  }
};
