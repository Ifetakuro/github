export const convertDate = (apiDate) => {
  const dateFromAPIString = new Date(apiDate);
  var d = dateFromAPIString.getDate();
  var m = dateFromAPIString.getMonth() + 1;
  var y = dateFromAPIString.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + "/" + (m <= 9 ? "0" + m : m) + "/" + y;
};
