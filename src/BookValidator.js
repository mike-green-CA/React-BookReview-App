export default function findSequels({ targetBook }) {
  if (targetBook.hasOwnProperty("sequels")) {
    return targetBook.sequels.map((book) => (
      <li className="sequelDisp">
        <p>{book}</p>
      </li>
    ));
  } else {
    return (
      <div className="sequelDisp">
        <p>This book has no sequels!</p>
      </div>
    );
  }
}
