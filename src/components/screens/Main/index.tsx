// * services
import useFilteredDocuments from '@services/documents/hooks/useFilteredDocuments';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * styles
import styles from './Main.module.scss';
import Pagination from '@mui/material/Pagination';

// * components
import Filters from './components/Filters';
import Accordion from './components/Accordion';

const Main = observer(() => {
    const { documents, isLoading } = useFilteredDocuments(
        filter.page,
        filter.sort,
        filter.order,
        filter.dates,
        filter.name,
        filter.uuid,
    );

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        filter.setPage(value);
    };

    return (
        <main className={styles.main}>
            <Filters />
            <div className={styles.documents}>
                <div className={styles.pagination}>
                    <Accordion documents={documents} isLoading={isLoading} />
                    <Pagination
                        count={filter.totalPages}
                        page={filter.page}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </main>
    );
});

export default Main;
