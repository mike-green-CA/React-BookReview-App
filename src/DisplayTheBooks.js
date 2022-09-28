import books from "./Data";
import BookValidator from "./BookValidator";
import RatingsDevice from "./RatingsDevice";
import BookAuthors from "./BookAuthors";

export default function DisplayTracks({ currentIndex }) {
  let targetBook = books;

  books.forEach((book) => {
    if (book.id === currentIndex) {
      targetBook = book;
    }
  });

  return (
    <div className="sect-1">
      <div>
        <div>
          <h5>
            <BookAuthors targetBook={targetBook} />
          </h5>
        </div>

        <img className="bookCoverImg" src={targetBook.coverImg} alt="" />
        <div className="bookRating">
          <div>
            <h5>This book is rated</h5>
          </div>
          <div className="ratingsBar">
            <p>
              <RatingsDevice targetBook={targetBook} />
            </p>
          </div>
        </div>
      </div>

      <div className="content-2">
        <ol>
          <BookValidator targetBook={targetBook} />
        </ol>
      </div>
    </div>
  );
}
