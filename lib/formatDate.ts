export const formatDate = (inputDate: Date) => {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
