//Hàm sort lại theo ngày mới nhất
export const sortNewsList = (newList: any) => {
  const newarr = newList.sort((a: any, b: any) => {
    const dateA = a.extablishedDate;
    const dateB = b.extablishedDate;

    return dateA - dateB;
  });

  return newarr.reverse();
};

//Hàm xử lý ngày ra format Month(chữ) Date, Year
export const handleDateToString = (date: Date) => {
  // Xử lý tháng số ra tháng tiếng anh
  let months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // biến month này sẽ được gán dự theo index
  let month: string = months[date.getMonth()];

  return `${month} ${date.getDate().toString()}, ${date.getFullYear().toString()}`;
};
