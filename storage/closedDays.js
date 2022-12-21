import moment from "moment/moment.js";

const styles = {
  style: {
    backgroundColor: "white",
  },
  textStyle: { color: "red" }, // sets the font color
  containerStyle: [], // extra styling for day container
  allowDisabled: true,
};

export const closeDays = [
  {
    date: moment("2022/08/28"),
    ...styles,
  },
  {
    date: moment("2022/05/18"),
    ...styles,
  },
  {
    date: moment("2022/12/19"),
    ...styles,
  },
  {
    date: moment("2023/01/01"),
    ...styles,
  },
];
