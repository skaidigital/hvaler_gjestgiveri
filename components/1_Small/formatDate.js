export const formatDate = (dato) => {
  if (dato != null) {
    let monthIn = dato.slice(5, 7);
    let month = "";
    switch (monthIn) {
      case "01":
        month = "Januar";
        break;
      case "02":
        month = "Februar";
        break;
      case "03":
        month = "Mars";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "Mai";
        break;
      case "06":
        month = "Juni";
        break;
      case "07":
        month = "Juli";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "Oktober";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "Desember";
        break;
    }
    return `${dato.slice(8, 10)}. ${month} `;
    // ${dato.slice(0, 4)}
  }
  return "null ish";
  // const dag = dato.slice(0, 4),
  // const måned = dato.slice(5, 7);
  // const år = dato.slice(8, 10),
};
