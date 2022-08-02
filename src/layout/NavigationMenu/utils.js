import Image from 'antd/lib/image';

export function getItem(label, key, children, data) {
  const obj = {
    key,
    data,
    label,
    icon: <Image
      width={25}
      src={`https://resources.besofted.com/images/admin/icons/${key}.svg`}
    />,
  };
  if (children?.length) {
    return {
      ...obj,
      children: children.map(item => getItem(item.a2, item.a1, item.a5, item)),
    };
  }
  return obj;
}
