import { Categories } from './categories.styles';

const App = () => {
  const directory = [
    {
      id: 1,
      title: 'My Collection',
    },
    {
      id: 2,
      title: 'See Contact Info for Group Members',
    },
    {
      id: 3,
      title: "See Another Member's Collection ",
    },
  ];
  return (
    <Categories>
      {directory.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Open Now</p>
          </div>
        </div>
      ))}
    </Categories>
  );
};

export default App;
