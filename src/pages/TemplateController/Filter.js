import Collapse from 'antd/lib/collapse';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Filter = ({ filter, columns }) => {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="Filter" key="1">
        {text}
      </Panel>
    </Collapse>
  );
};

export default Filter;