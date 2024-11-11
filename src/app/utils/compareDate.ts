export const CompareTodayDate = (oldDate: string | Date) => {
  const specificDate = new Date(oldDate);
  const currentDate = new Date();
  const differenceInMs = currentDate.getTime() - specificDate.getTime();

  return Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
};
