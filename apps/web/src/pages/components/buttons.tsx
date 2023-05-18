import { Button } from '@mantine/core';
import Container from 'ui/components/common/Container';
import SvgIcon from 'ui/components/common/SvgIcon';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  return (
    <Layout title="Components" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="xs">
            <h3>Buttons</h3>

            <p>Rounded</p>
            <Button className="btn-violet rounded" unstyled>
              Rounded!
            </Button>

            <p>Default</p>
            <Button className="btn-red">Default!</Button>

            <p>Variants</p>
            <Button variant="light">light</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="white">white</Button>
            <Button variant="filled">filled</Button>

            <p>With Icon</p>
            <Button
              className="text-theme-text group hover:bg-transparent"
              rightIcon={
                <span className="ml-1 inline-block h-5 w-5 transform-gpu transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1">
                  <SvgIcon icon="arrow-right" className="text-primary-500 top-2 dark:text-red-400" />
                </span>
              }
            >
              Read more
            </Button>
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
