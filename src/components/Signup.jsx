import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

import Form from './Form';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/profile');
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="Sign up" handleClick={handleSignup} />
    </div>
  );
}
