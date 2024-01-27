import { useState } from 'react';

export type Page = {
    pageStart: number;
    pageEnd: number;
};

const defaultInitialPage: Page = {
    pageStart: 1,
    pageEnd: 10,
};

export const usePagination = (initialPage: Page = defaultInitialPage) => {
    const [page, setPage] = useState<Page>(initialPage);

    const handlePageChange = (pageStart: number, pageEnd: number) => {
        setPage({ pageStart, pageEnd });
    };

    return { page, handlePageChange };
};
