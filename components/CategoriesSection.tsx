'use client';
import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import FilterCarousel from '@/components/FilterCarousel';
import { trpc } from '@/trpc/client';


type CategorySectionProps = {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategorySectionProps) => {
  return (
    <Suspense fallback={<FilterCarousel isLoading={true} data={[]} onSelect={() => {
    }} />}>

      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategorySectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories?.getMany.useSuspenseQuery();
  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set('categoryId', value);

    } else {
      url.searchParams.delete('categoryId');
    }
    router.push(url.toString());
  };

  return (
    <FilterCarousel data={data} value={categoryId} onSelect={onSelect} />
  );
};

