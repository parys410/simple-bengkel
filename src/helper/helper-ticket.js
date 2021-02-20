import moment from "moment";

export default {
  getSearchByData: data => {
    const search = data.map(item => {
      const tempSearch = {
        label: item.DESCRIPTION,
        value: item.DESCRIPTION,
        description: `${item.DESCRIPTION}`
      };
      return tempSearch;
    });
    return search;
  },

  getMappedData: data => {
    const search = data.map(item => {
      const tempSearch = {
        label: item.DESCRIPTION,
        value: item.number,
        description: `${item.DESCRIPTION}`
      };
      return tempSearch;
    });
    return search;
  },

  getTicketReply: data => {
    const ticketReply = data.map(item => {
      const tempTicketReply = {
        no: item["line-no"],
        hotelName: item["replied-by"],
        emailAddress: item["replied-email"],
        date: moment(item["post-datetime"], "YYYY-MM-DDTHH:mm:ss.SSS").format(
          "DD/MM/YYYY HH:mm"
        ),

        dateSort: moment(
          item["post-datetime"],
          "YYYY-MM-DDTHH:mm:ss.SSS"
        ).format("DD/MM/YYYY HH:mm:ss"),
        isStaffNote: item["staff-note"],
        message: item.content
      };
      return tempTicketReply;
    });
    return ticketReply;
  },

  getSettingTicket: data => {
    const settingTicket = data.map(item => {
      const tempSettingTicket = {
        subject: item["subject"],
        email: item["submitter-mail"],
        status: item["ticket-status"],
        priority: item.priority,
        department: item.department,
        assignTo: item["assign-to"],
        module: item.module,
        issueType: item["issue-type"],
        sla: item.SLA,
        createdDate: moment(
          item["created-date"].replace("T", " "),
          "YYYY-MM-DD HH:mm:ss.sss"
        ).format("DD/MM/YYYY HH:mm")
      };
      return tempSettingTicket;
    });
    return settingTicket;
  },

  getDetailTicket: data => {
    const detailTicket = data.map(item => {
      const tempDetailTicket = {
        ticketNo: item["ticket-no"],
        ticketStatus: item["t-status"],
        createdDate: moment(
          item.created.replace("T", " "),
          "YYYY-MM-DD HH:mm:ss.sss"
        ).format("DD/MM/YYYY HH:mm"),
        departement: item.department,
        priority: item.priority,
        rating: item.rating
      };
      return tempDetailTicket;
    });
    return detailTicket;
  },

  getDropdown: data => {
    const dropDown = data.map(item => {
      const tempDropDown = {
        label: item.DESCRIPTION,
        value: item.number
      };
      return tempDropDown;
    });
    return dropDown;
  },

  getPredefinedReplies: data => {
    const predefinedReplies = data.map(item => {
      const tempPredefinedReplies = {
        label: item["temp-name"],
        value: item["temp-message"]
      };
      return tempPredefinedReplies;
    });
    return predefinedReplies;
  },

  getPredefinedReplies: data => {
    const predefinedReplies = data.map(item => {
      const tempPredefinedReplies = {
        label: item["temp-name"],
        value: item["temp-message"]
      };
      return tempPredefinedReplies;
    });
    return predefinedReplies;
  },

  getLog: data => {
    const log = data.map(item => {
      const tempLog = {
        date: moment(
          item["date-time"].replace("T", " "),
          "YYYY-MM-DD HH:mm:ss.sss"
        ).format("DD/MM/YYYY HH:mm"),
        value: item["content"]
      };

      return tempLog;
    });
    return log;
  },

  getUserList: data => {
    const userList = data.map(item => {
      const tempUserList = {
        label: item.username,
        value: item["usr-id"],
        email: item.email
      };

      return tempUserList;
    });
    return userList;
  }
};
