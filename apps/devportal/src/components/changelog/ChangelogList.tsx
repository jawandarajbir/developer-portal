import { buildQuerystring, entriesApiUrl, getChangeTypeOptions, getProductOptions } from '@/src/common/changelog';
import axios from 'axios';
import { useState } from 'react';
import { Product } from 'sc-changelog/types';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';
import { Fetcher } from 'swr';
import useSWRInfinite from 'swr/infinite';
import Button from 'ui/components/buttons/Button';
import { Option } from 'ui/components/dropdown/MultiSelect';
import ChangelogFilter from './ChangelogFilter';
import ChangelogResultsList from './ChangelogResultsList';
import { Hint } from './Hint';

type ChangelogListProps = {
  initialProduct?: Product;
  selectedProducts?: Option[];
  onProductsChange: (selectedProducts: Option[]) => void;
};

const ChangelogList = ({ initialProduct, selectedProducts, onProductsChange }: ChangelogListProps): JSX.Element => {
  const [selectedChange, setSelectedChange] = useState<Option[]>([]);
  const fetcher: Fetcher<ChangelogEntryList<ChangelogEntry[]>, string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const getKey = (pageIndex: any, previousPageData: ChangelogEntryList<ChangelogEntry[]>) => {
    if (previousPageData && !previousPageData.hasNext) {
      return null;
    }

    const cursor = previousPageData ? previousPageData.endCursor : undefined;
    const query = buildQuerystring(selectedProducts != null ? selectedProducts : [], selectedChange, cursor, initialProduct);

    return [`${entriesApiUrl}?${query.join('&')}`];
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
  const items = data ? data.flatMap((data) => data.entries.map((entry) => entry)) : [];

  return (
    <div className="col-span-3">
      <div className={`z-50 ${initialProduct ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}>
        {initialProduct && (
          <div className="bg-primary-100 text-primary-800 mb-2 mr-2 flex rounded-md px-3 py-2 text-sm">
            <div className="m-auto">
              <strong>Product:</strong> {initialProduct.name}
              <Button variant={'icon'} size={'xs'} icon={true} iconName="close" href="/changelog" text="Go back to the changelog overview" />
            </div>
          </div>
        )}
        {!initialProduct && (
          <ChangelogFilter
            id="productSelector"
            label="Products"
            placeholder="Select one or more products"
            options={getProductOptions()}
            onSelectChange={function (selectedValues: Option[]): void {
              onProductsChange(selectedValues);
            }}
          />
        )}
        <ChangelogFilter
          id="changeSelector"
          label="Changes"
          placeholder="Select one or more "
          options={getChangeTypeOptions()}
          onSelectChange={function (selectedValues: Option[]): void {
            setSelectedChange(selectedValues);
          }}
        />
      </div>

      <Hint products={selectedProducts} enabled={selectedProducts?.length == 1} />

      {isLoading && (
        <>
          <Skeleton />
          <Skeleton />
        </>
      )}

      {!error && data && <ChangelogResultsList entries={items} isLoading={isLoading} hasNext={data[data.length - 1].hasNext} onEndTriggered={() => setSize(size + 1)} />}

      {data && !data[data.length - 1].hasNext && <span className={`border-violet text-violet dark:border-teal dark:text-teal mt-5 inline-block w-full border-2 px-3 py-2 text-center text-sm`}>No more results</span>}
    </div>
  );
};
ChangelogList.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onProductsChange: () => {},
};

export default ChangelogList;

const Skeleton = (): JSX.Element => {
  const skeletonLoaderClasses = 'bg-theme-bg-alt block animate-pulse text-transparent hover:text-transparent m-1';
  return (
    <div className="mb-16 mt-8">
      <h2 className={`${skeletonLoaderClasses} w-full py-2`}>Title</h2>
      <div className="flex flex-row">
        <div className={`${skeletonLoaderClasses} h-6 w-1/5`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-1/5`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-1/5`}></div>
      </div>
      <div className="flex-column items-center gap-5 py-2">
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
        <div className={`${skeletonLoaderClasses} h-6 w-full`}></div>
      </div>
    </div>
  );
};
