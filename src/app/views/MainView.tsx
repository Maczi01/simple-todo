import { Table } from '@/components/Table';
import { styles } from '@/views/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const MainView = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">Simple Todo</Typography>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" sx={styles.title}>
                To do List
            </Typography>
            <Table />
        </Box>
    );
};
