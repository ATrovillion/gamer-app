import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
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
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
