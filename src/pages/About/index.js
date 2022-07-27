import { Page, Card, Button } from '@shopify/polaris';
import SortableDataTableExample from 'components/Table';

const initiallySortedRows = [
  ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
  ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
  [
    "Navy Merino Wool Blazer with khaki chinos and yellow belt",
    "$445.00",
    124518,
    32,
    "$14,240.00",
  ],
];

export default function About() {
  return (
    <Page title="About page">
      <Card sectioned>
        <Button url='/'>Example button</Button>

        <SortableDataTableExample data={initiallySortedRows} />
      </Card>
    </Page>
  );
}