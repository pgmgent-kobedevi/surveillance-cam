import firebase from 'firebase/app';
import { Button } from '../../Design';

const LogoutButton = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <Button onClick={logout} icon={false}>
      Logout
    </Button>
  );
};

export default LogoutButton;
