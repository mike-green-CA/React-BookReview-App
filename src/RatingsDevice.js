export default function findSequels({ targetBook }) {
  var star = `⭐`;

  const stars = star.repeat(targetBook.rating);

  return <div dangerouslySetInnerHTML={{ __html: stars }} />;
}
