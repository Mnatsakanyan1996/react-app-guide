import { useSelector, useDispatch } from 'react-redux';

import Button from 'antd/lib/button';

import LoginPage from 'pages/Login';
import Loader from 'components/Loader';

import { toggleState } from './authorizeSlice';

export const Authorize = ({
  fallback = <LoginPage />,
  children,
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authorize.isLoggedIn);

  const content = isLoggedIn ? children : fallback;

  return (
    <Loader isShow={isLoggedIn === null}>
      {/* Example */}
      <Button onClick={() => dispatch(toggleState())}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </Button>
      {content}
    </Loader>
  );
};
