import axios from 'axios';
import { IDocument } from 'models';

const API_URL = 'http://localhost:7777/';

axios.defaults.baseURL = API_URL;

const documentsService = {
    async allDocuments(
        dates: string[] | null,
        name: string,
        uuid: string | null,
    ) {
        const searchQuery = uuid !== null && uuid.length === 36 ? uuid : name;

        const datesQuery = dates
            ? dates.map((date) => `&createdAt=${date}&`).join('')
            : null;

        return axios.get<IDocument[]>(
            `documents?q=${searchQuery}${datesQuery}`,
        );
    },
    async paginateDocuments(
        page: number,
        sort: string | null,
        order: string,
        dates: string[] | null,
        name: string,
        uuid: string | null,
    ) {
        const searchQuery = uuid !== null && uuid.length === 36 ? uuid : name;

        const datesQuery =
            uuid !== null && uuid.length === 36
                ? null
                : dates?.map((date) => `createdAt=${date}&`).join('');

        return axios.get<IDocument[]>(
            `documents?q=${searchQuery}&${datesQuery}_page=${page}&_limit=5&_sort=${sort}&_order=${order}`,
        );
    },
};

export default documentsService;
