import { useIdToken } from 'react-firebase-hooks/auth';
import { Auth } from '../Firebase';
import Login from './Login';
import Home from './Home';


export const CurrentUser = () => {
  
  const [user, loading, error] = useIdToken(Auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
        <Home userId={user.uid}/>
    );
  }
  return <Login />;
};
