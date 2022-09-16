// * react
import { useEffect } from 'react';

// * services
import useAllDocuments from '@services/documents/hooks/useAllDocuments';

// * hooks
import useDebounce from 'hooks/useDebounce';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * components
import Layout from './components/layout/Layout';
import Main from './components/screens/Main';

const App = observer(() => {
    const { documents } = useAllDocuments(
        filter.dates,
        filter.name,
        filter.uuid,
    );

    const debounceName = useDebounce(filter.name);
    const debounceUUID = useDebounce(filter.uuid);

    useEffect(() => {
        if (documents?.length) {
            const totalPages = Math.ceil(documents.length / 5);
            filter.setTotalPages(totalPages);
        }
    }, [documents, filter.dates, debounceName, debounceUUID]);

    return (
        <Layout>
            <Main />
        </Layout>
    );
});

export default App;
