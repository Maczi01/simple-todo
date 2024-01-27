import { getAllTodos } from '@/api/todos';
import { Pagination } from '@/components/Pagination';
import { styles } from '@/components/styles';
import { usePagination } from '@/hooks/usePagination';
import { Todo } from '@/types/Todo';
import {
    Box,
    Paper,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useQuery } from 'react-query';

export const Table = () => {
    const { page, handlePageChange } = usePagination();

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['todos'],
        queryFn: getAllTodos,
    });

    return (
        <Box sx={styles.tableWrapper}>
            {data ? (
                <TableContainer component={Paper}>
                    <MuiTable aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Priority</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.data.map((todo: Todo) => (
                                <TableRow key={todo.id} sx={styles.tableRow}>
                                    <TableCell component="th" scope="row">
                                        {todo.name}
                                    </TableCell>
                                    <TableCell align="center">{todo.category}</TableCell>
                                    <TableCell align="center">{todo.priority}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </MuiTable>
                </TableContainer>
            ) : (
                <Typography sx={styles.noData}>No Data</Typography>
            )}
            <Pagination
                currentPage={page.pageStart}
                disabled={isLoading || isFetching}
                data={data}
                onChange={handlePageChange}
            />
        </Box>
    );
};
