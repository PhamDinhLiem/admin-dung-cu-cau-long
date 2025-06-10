export const sortNewsList = (newList: any) => {
  const newarr = newList.sort((a: any, b: any) => {
    const dateA = a.extablishedDate;
    const dateB = b.extablishedDate;

    return dateA - dateB;
  });

  return newarr.reverse();
};
