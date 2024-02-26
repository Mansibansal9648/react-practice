function AuthCard({ data, setData }) {
  function authorChange(author) {
    let updatedData = data.map((item) => {
      if (item.author === author) {
        item.author = "Mansi";
      }
      return item;
    });

    setData(updatedData);
  }
  return (
    <>
      {data.map(function (item, index) {
        return (
          <>
            <div class="card">
              <div class="card-header">{index + 1}</div>
              <div class="card-body">
                <h5 class="card-title">Course id: {item.id}</h5>
                <h5 class="card-subtitle">Author: {item.author}</h5>
                <p class="card-text">Course: {item.course}</p>
                <p class="card-text">Rating: {item.rating}</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => authorChange(item.author)}
                >
                  Change Author
                </a>
              </div>
            </div>
            {/* </div> */}
          </>
        );
      })}
    </>
  );
}
export default AuthCard;
