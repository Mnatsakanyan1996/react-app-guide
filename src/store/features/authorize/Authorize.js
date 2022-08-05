import { useSelector } from 'react-redux';

import LoginPage from 'pages/Login';
import Loader from 'components/Loader';

import { isLoggedInSelector } from 'store/selectors';

export const Authorize = ({
  fallback = <LoginPage />,
  children,
}) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const content = isLoggedIn ? children : fallback;

  return (
    <Loader isShow={isLoggedIn === null}>
      {content}
    </Loader>
  );
};
