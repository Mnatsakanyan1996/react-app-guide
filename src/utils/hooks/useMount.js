import { useEffect } from 'react';

import noop from 'utils/noop';

// eslint-disable-next-line
const useMount = (onMount = noop) => useEffect(onMount, []);

export default useMount;
