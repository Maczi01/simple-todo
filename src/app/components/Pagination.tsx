import { Box, Pagination as MuiPagination } from '@mui/material';

type PaginationData<T> = {
    totalRecords: number;
    data: T[];
};

type PaginationProps<T> = {
    currentPage: number;
    perPage?: number;
    disabled?: boolean;
    data: PaginationData<T>;
    onChange: (pageStart: number, pageEnd: number) => void;
};

export const Pagination = <T,>({
    currentPage,
    perPage = 10,
    disabled,
    data,
    onChange,
}: PaginationProps<T>) => {
    if (!data || data?.totalRecords <= perPage) {
        return null;
    }
    const { totalRecords } = data;
    const totalPages = Math.ceil(totalRecords / perPage);

    const getNextPageAttr = (page: number) => {
        const pageStart = page === 1 ? 1 : (page - 1) * perPage + 1;
        let pageEnd = page * perPage;
        if (pageEnd > totalRecords) {
            pageEnd = totalRecords;
        }
        onChange(pageStart, pageEnd);
    };

    return (
        <Box display="flex" justifyContent="flex-end" mt={1}>
            <MuiPagination
                disabled={disabled}
                page={Math.ceil(currentPage / perPage)}
                count={totalPages}
                onChange={(_, page) => getNextPageAttr(page)}
            />
        </Box>
    );
};
