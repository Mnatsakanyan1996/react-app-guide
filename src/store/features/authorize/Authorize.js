import { useSelector } from 'react-redux';

import LoginPage from 'pages/Login';
import Loader from 'components/Loader';

export const Authorize = ({
  fallback = <LoginPage />,
  children,
}) => {
  const isLoggedIn = useSelector(state => state.authorize.isLoggedIn);

  const content = isLoggedIn ? children : fallback;

  return (
    <Loader isShow={isLoggedIn === null}>
      {content}
    </Loader>
  );
};
