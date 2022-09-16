import { makeAutoObservable } from 'mobx';

class Filter {
    totalPages: number = 1;

    page: number = 1;

    uuid: string | null = null;

    name: string = '';

    dateStart: Date | null = null;

    dateEnd: Date | null = null;

    sort: string | null = 'createdAt';

    order: string = 'asc';

    dates: string[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setTotalPages(pages: number) {
        this.totalPages = pages;
    }

    setPage(newPage: number) {
        this.page = newPage;
    }

    setUUID(uuid: string) {
        this.uuid = uuid;
    }

    setName(name: string) {
        this.name = name;
    }

    setDateStart(date: Date) {
        this.dateStart = date;
    }

    setDateEnd(date: Date) {
        this.dateEnd = date;
    }

    setSort(sort: string | null) {
        this.sort = sort;
    }

    setOrder(order: string) {
        this.order = order;
    }

    setDates(dates: string[] | null) {
        this.dates = dates;
    }
}

export default new Filter();
