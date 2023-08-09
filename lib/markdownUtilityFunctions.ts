type MarkdownMetadata = {
  [key: string]: string;
};

// Function to extract metadata from the markdown input
export const extractMetadataFromMarkdown = (markdown: string | undefined) => {
  const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
  const metadataMatched = markdown!.match(charactersBetweenGroupedHyphens);

  if (!metadataMatched) {
    return { error: `Wrong metadata format` };
  }

  const metadata = metadataMatched[1];

  const metadataLines = metadata.split('\n');
  const metadataObject = metadataLines.reduce((accumulator: MarkdownMetadata, line) => {
    const [key, ...value] = line.split(':').map((part) => part.trim());

    if (key) accumulator[key] = value[1] ? value.join(':') : value.join('');
    return accumulator;
  }, {});

  return metadataObject;
};

// Function to remove metadata from the markdown input before sending it to the database
export const markdownWithoutMetadata = (markdown: string | undefined) => {
  const withoutMetadata = markdown!.replace(/^---([\s\S]*?)---/gm, '');
  return withoutMetadata.trim();
};

// Function to get tags as an array from the markdown metadata
export const getTags = (metaData: MarkdownMetadata) => {
  const tagsArray = metaData.tags.split(', ');
  return tagsArray;
};
