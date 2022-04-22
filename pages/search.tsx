// Global
import { TTailwindString } from 'tailwindcss-classnames';
import { classnames } from 'tailwindcss-classnames';
import { useId } from 'react-id-generator';
import Head from 'next/head';
import Script from 'next/script';
import { getPageInfo } from '@/scripts/page-info';
import VerticalGroup from '@/components/helper/VerticalGroup';
import Layout from '@/components/layout/Layout';
import { PageInfo } from '@/interfaces/page-info';
import Search from '@/components/Search';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('search');

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
  };
}

type SearchPageProps = {
  pageInfo: PageInfo;
};

const SearchPage = ({ pageInfo }: SearchPageProps): JSX.Element => (
  <Layout pageInfo={pageInfo}>
    <VerticalGroup>
      <Search />
    </VerticalGroup>
  </Layout>
);
export default SearchPage;
