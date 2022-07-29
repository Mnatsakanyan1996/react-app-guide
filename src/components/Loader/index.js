import Spin from 'antd/lib/spin';

const Loader = props => {
  const {
    isShow,
    children,
  } = props;

  return (
    isShow
      ? <div className="loader">
          <Spin />
        </div>
      : children
  );
};

export default Loader;
