const List = (props) => {
  const { data } = props;

  // NOTE
  // GET DATA



  return (
    <div className="list">
      {data.map((dataItem, index) => (
        <div key={index} className="list__item">
          {dataItem}
        </div>
      ))}
    </div>
  );
};
export default List;
