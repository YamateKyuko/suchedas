'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder, queryName }: { placeholder: string, queryName: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(queryName, term);
    } else {
      params.delete(queryName);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get(queryName)?.toString()}
      />
    </div>
  );
}
