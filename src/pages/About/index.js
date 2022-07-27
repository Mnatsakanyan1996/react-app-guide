import { Page, Card, Button } from '@shopify/polaris';

export default function About() {
  return (
    <Page title="About page">
      <Card sectioned>
        <Button url='/'>Example button</Button>
      </Card>
    </Page>
  );
}