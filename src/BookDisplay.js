import books from "./Data";

export default function DisplayBooks({ setIndex, currentIndex }) {
  return books.map((book) => (
    <div className="bookButton" onClick={() => setIndex(book.id)}>
      <div>
        <img className="bookButtonImage" src={book.coverImg} alt="" />
      </div>
      <p
        style={{ color: currentIndex === book.id ? "lime" : "white" }}
        className="bookName"
      >
        {book.name}
      </p>
    </div>
  ));
}
