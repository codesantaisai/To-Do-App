export const getClasses = (classes: string[]): string =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
