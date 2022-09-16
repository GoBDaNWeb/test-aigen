// * react
import { useState, useEffect } from 'react';
import { IDocument } from 'models';

// * hooks
import useDebounce from 'hooks/useDebounce';

// * services
import documentsService from '../api';

export default function useFilteredDocuments(
    page: number,
    sort: string | null,
    order: string,
    dates: string[] | null,
    name: string,
    uuid: string | null,
) {
    const [documents, setDocuments] = useState<IDocument[]>();
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    const debounceName = useDebounce(name);
    const debounceUUID = useDebounce(uuid);

    const fetching = async () => {
        try {
            const { data } = await documentsService.paginateDocuments(
                page,
                sort,
                order,
                dates,
                name,
                uuid,
            );
            setDocuments(data);
            setIsLoading(false);
        } catch (err: any) {
            console.error(err.message);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetching();
    }, [page, sort, order, dates, debounceName, debounceUUID]);

    return {
        documents,
        error,
        isLoading,
    };
}
