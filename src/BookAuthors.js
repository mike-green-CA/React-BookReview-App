export default function findSequels({ targetBook }) {
  var authorInfo = `By: ${targetBook.author}`;

  if (targetBook.hasOwnProperty("coAuthor")) {
    authorInfo += ` <br/>&<br/> Co-author:
    ${targetBook.coAuthor}`;
  }

  return <div dangerouslySetInnerHTML={{ __html: authorInfo }} />;
}
