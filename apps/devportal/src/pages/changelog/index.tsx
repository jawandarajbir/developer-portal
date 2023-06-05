import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogResults from '@/src/components/integrations/changelog-search/ChangelogResults';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import Container from 'ui/components/common/Container';
import { Message, Type } from 'ui/components/common/Message';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { Option } from 'ui/components/dropdown/MultiSelect';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

type ChangelogHomeProps = {
  fallback: any;
  preview: boolean;
};

export default function ChangelogHome({ fallback }: ChangelogHomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);

  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
          <div className="absolute flex h-8 flex-row dark:hidden">
            <span className="mr-1 text-xs">Powered by</span>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
            </Link>
          </div>
          <div className="absolute hidden h-8 flex-row dark:flex">
            <span className="mr-1 text-xs">Powered by</span>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5e8689d29cc4ef49a74b96e2149af13" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
            </Link>
          </div>
        </Hero>
        <VerticalGroup>
          <Container>
            <Message type={Type.Info} className="mt-8">
              <p>
                You are viewing the public preview of the upcoming Sitecore global changelog.
                <Link href="/changelog/current" title="View the list of current release notes per product" className="mx-1 font-bold hover:underline">
                  Click here
                </Link>
                for the current release notes per product
              </p>
            </Message>
            <div className="mt-8 grid h-full gap-16 md:grid-cols-5">
              {/* <SWRConfig value={{ fallback }}>
                <ChangelogList selectedProducts={selectedProduct} onProductsChange={setSelectedProduct} />
              </SWRConfig> */}

              <ChangelogResults rfkId='rfkid_7' />

              <div className="col-span-2 hidden md:block">
                <div className="flex flex-row">
                  <SmallLinkButton text={'RSS'} href={`${router.pathname}/rss.xml`} icon={'feed'} />
                  <SmallLinkButton text={'ATOM'} href={`${router.pathname}/atom.xml`} icon={'feed'} />
                </div>
                <ChangelogByMonth selectedProducts={selectedProduct} />
              </div>
            </div>
          </Container>
        </VerticalGroup>
      </Layout>
    </>
  );
}

export async function getStaticProps(context: any) {
  const isPreview = context.preview ? context.preview : null;
  const entries = await ChangelogEntriesPaginated(isPreview, '5', '', '', '');

  return {
    props: {
      fallback: {
        '/api/changelog/v1?limit=5': entries,
      },
      preview: isPreview,
    },
    revalidate: 60,
  };
}
