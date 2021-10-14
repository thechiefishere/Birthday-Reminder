const RenderData = ({ data }) => {
  return (
    <div className="data">
      <img src={data.image} alt={data.name} className="data-img" />
      <div className="data-details">
        <h5 className="data-name">{data.name}</h5>
        <p className="data-age">{data.age} years</p>
      </div>
    </div>
  );
};

const List = ({ data, setData }) => {
  const list = data.map((data) => {
    return <RenderData key={data.id} data={data} />;
  });

  return (
    <div className="list">
      <h3 className="list-topic"> {data.length} birthdays today</h3>
      <div className="list-items">{list}</div>
      <button className="list-btn" onClick={() => setData([])}>
        Clear All
      </button>
    </div>
  );
};

export default List;
