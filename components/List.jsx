const List = (props) => {
  const { data, onDeleteItem } = props;

  const handleDeleteClick = (id) => {
    // Вызываем функцию onDeleteItem и передаем ей id для удаления
    onDeleteItem(id);
  };

  return (
    <div className="list">
      {data.map((dataItem, index) => (
        <div key={dataItem.id} className="list__item">
          <span>{dataItem.task} </span>
          <span><button onClick={() => handleDeleteClick(dataItem.id)}>X</button></span>
        </div>
      ))}
    </div>
  );
};
export default List;
