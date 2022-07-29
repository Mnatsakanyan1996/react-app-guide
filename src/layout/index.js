import { Authorize } from 'store/features/authorize/Authorize';

import Container from './Container';

export default function Layout() {
  return (
    <Authorize>
      <Container />
    </Authorize>
  );
};
