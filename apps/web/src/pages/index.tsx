import { Button, MultiSelect, SegmentedControl, Switch } from '@mantine/core';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

export default function Web() {
  return (
    <Layout title="Test" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="xs">
            <h3>Button</h3>
            <Button className="btn-primary" unstyled>
              Click here!
            </Button>
            <h2 className="mt-5">Switch</h2>
            <Switch label="I agree to sell my privacy" />
            <h2 className="mt-5">SegmentedControl</h2>
            <SegmentedControl
              data={[
                { label: 'React', value: 'react' },
                { label: 'Angular', value: 'ng' },
                { label: 'Vue', value: 'vue' },
                { label: 'Svelte', value: 'svelte' },
              ]}
            />
            <h2 className="mt-5">MultiSelect</h2>
            <MultiSelect
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
                { value: 'riot', label: 'Riot' },
                { value: 'next', label: 'Next.js' },
                { value: 'blitz', label: 'Blitz.js' },
              ]}
              label="Your favorite frameworks/libraries"
              placeholder="Pick all that you like"
            />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
