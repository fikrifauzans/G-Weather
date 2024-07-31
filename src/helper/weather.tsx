export const findImageObject = (
  dateTime: string,
  code: number,
  data: any
): any | null => {
  const date = new Date(dateTime);
  const hour = date.getHours();

  const matchingObject = data.find(
    (d: any) => d.codes.includes(code) && d.clock.includes(hour)
  );

  if (!matchingObject) {
    console.error("No matching image object found.");
    return null;
  }

  return matchingObject;
};
