import moment from "moment/moment.js";

export const closedDaysStyles = {
  style: {
    // backgroundColor: "white",
  },
  textStyle: { color: "red" }, // sets the font color
  containerStyle: [], // extra styling for day container
  allowDisabled: true,
};

export const closeDays = [
  {
    date: moment("2023/02/21"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/03/8"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/03/26"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/03/17"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/04/14"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/04/19"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/04/21"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/04/22"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/04/23"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/05/1"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/05/4"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/06/28"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/06/29"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/06/30"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/07/29"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/08/15"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/09/6"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/09/28"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/10/24"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/12/16"),
    ...closedDaysStyles,
  },
  {
    date: moment("2023/12/25"),
    ...closedDaysStyles,
  },
];
