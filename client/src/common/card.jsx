function Card({ data, setData }) {
  function deleteEntry(id) {
    const updatedData = data.filter((item) => {
      return item.id != id;
    });
    setData(updatedData);
  }
  return (
    <>
      {data.map(function (item, index) {
        return (
          <>
            <div class="card">
              {/* <div class="card" style="width: 18rem;"> */}
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-header">{index + 1}</div>
              <div class="card-body">
                <h5 class="card-title">{item.id}</h5>
                <h5 class="card-subtitle">{item.title}</h5>
                <p class="card-text">{item.body}</p>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => deleteEntry(item.id)}
                >
                  Delete
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
export default Card;
