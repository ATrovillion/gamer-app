import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Contacts from './routes/contacts/contacts.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="sign-in" element={<SignIn />} />
    </Route>
  </Routes>
);
export default App;
