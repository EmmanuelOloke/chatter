export const readingTime = (content: string) => {
  const averageHumanWordsPerMinute = 225;
  const totalWordsInContent = content.trim().split(/\s+/).length;
  const timeToRead = Math.ceil(totalWordsInContent / averageHumanWordsPerMinute);

  return timeToRead;
};
