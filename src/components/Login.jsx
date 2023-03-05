import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
      <Form title="Log in" handleClick={handleLogin} />
    </div>
  );
}
