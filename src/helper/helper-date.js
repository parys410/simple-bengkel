import moment from "moment";

export default {
  getSubmitDate: date => {
    const submitDate = date.slice(0, 19).replace("T", " ");

    const dDate = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").date()
    ).padStart(2, "0");
    const dMonth = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").month() + 1
    ).padStart(2, "0");
    const dYear = String(moment(submitDate, "YYYY-MM-DD HH:mm").year());
    const dHour = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").hour()
    ).padStart(2, "0");
    const dMinute = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").minute()
    ).padStart(2, "0");
    const fullDate = moment(
      `${dDate}/${dMonth}/${dYear} ${dHour}:${dMinute}`,
      "DD/MM/YYYY HH:mm"
    )._i;

    return fullDate;
  },
  getTodaysDate: () => {
    const todaysDate = moment().format("MM/DD/YYYY HH:mm");

    return todaysDate;
  },
  handleArrayDate: date => {
    const submitDate = date.slice(0, 19).replace("T", " ");
    const dDate = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").date()
    ).padStart(2, "0");
    const dMonth = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").month()
    ).padStart(2, "0");
    const dYear = String(moment(submitDate, "YYYY-MM-DD HH:mm").year());
    const dHour = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").hour()
    ).padStart(2, "0");
    const dMinute = String(
      moment(submitDate, "YYYY-MM-DD HH:mm:ss").minute()
    ).padStart(2, "0");
    const dateArray = [dYear, dMonth, dDate, dHour, dMinute];

    return dateArray;
  },
  getElapseTime: (submitTime, serverTime) => {
    const fromDate = moment(submitTime);
    const toDate = moment(serverTime);

    let duration = toDate.diff(fromDate, "days");
    let durationRead = "";

    if (duration <= 0) {
      duration = toDate.diff(fromDate, "hours");
      durationRead = `${String(duration)}h`;
    } else if (duration >= 365) {
      duration = toDate.diff(fromDate, "months");

      const monthCount = duration % 12; // Menghitung Sisa hari
      const yearCount = (duration - monthCount) / 12; // Years
      durationRead = `${String(yearCount)}Y ${String(monthCount)}M`;
    } else if (duration >= 30 && duration < 365) {
      duration = toDate.diff(fromDate, "months");
      durationRead = `${String(duration)}M`;
    } else {
      durationRead = `${String(duration)}D`;
    }

    return durationRead;
  }
};
