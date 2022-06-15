/**
 *
 * @param str
 * @param maxCount Max initials count
 * @returns Capitalized initials from string input
 */

export const getInitialsFromString = (str: string, maxCount?: number) => {
  const splittedString = str.split(" ");
  return splittedString
    .slice(
      0,
      maxCount && maxCount <= splittedString.length
        ? maxCount
        : splittedString.length
    )
    .reduce(
      (accumulatedText, currentText) =>
        (accumulatedText += currentText[0].toUpperCase()),
      ""
    );
};
