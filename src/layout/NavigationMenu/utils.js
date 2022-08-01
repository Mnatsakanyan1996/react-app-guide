import MailOutlined from '@ant-design/icons/MailOutlined';

export function getItem(label, key, icon, children, type) {
  const obj = { key, icon: <MailOutlined />, label };
  if (children?.length) {
    return {
      ...obj,
      children: children.map(item => getItem(item.a2, item.a1, item.a1, item.a5)),
    };
  }
  return obj;
}
