// * react
import { useState } from 'react';

// * styles
import styles from './Main.module.scss';
import Pagination from '@mui/material/Pagination';

// * components
import Filters from './components/Filters';
import Accordion from '../../ui/Accordion';

const Main = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <main className={styles.main}>
            <Filters />
            <div className={styles.documents}>
                <div className={styles.pagination}>
                    <Accordion />

                    <Pagination
                        count={10}
                        page={page}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;
