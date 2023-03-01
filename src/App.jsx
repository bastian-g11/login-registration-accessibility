// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import LinkPage from './components/pages/LinkPage';
import Unauthorized from './components/pages/Unauthorized';
import Missing from './components/pages/Missing';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/pages/PersistLogin';
import { ROLES } from './utils/Constants';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* Protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.user]} />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
            <Route path='admin' element={<Admin />} />
          </Route>
          {/* Catch all */}
          <Route path='*' element={<Missing />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
