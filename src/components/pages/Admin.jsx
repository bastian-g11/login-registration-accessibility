// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const Admin = () => (
  <section>
    <h1>Admins Page</h1>
    <br />
    <p>You must have been assigned an Admin role.</p>
    <div className='flexGrow'>
      <Link to='/'>Home</Link>
    </div>
  </section>
);

export default Admin;