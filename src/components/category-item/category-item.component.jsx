import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { title, imageLocation } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageLocation})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Open</p>
      </div>
    </div>
  );
};

export default CategoryItem;
