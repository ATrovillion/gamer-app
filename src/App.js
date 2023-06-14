import Directory from './components/directory/directory.component.jsx';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Collections',
      imageLocation: 'https://picsum.photos/id/0/200',
    },
    {
      id: 2,
      title: 'Contact Info',
      imageLocation: 'https://picsum.photos/id/60/200',
    },
  ];
  return <Directory categories={categories} />;
};
export default App;
