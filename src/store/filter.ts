import { makeAutoObservable } from 'mobx';

class Filter {
    page: number = 1;

    dateStart: Date | null = null;

    dateEnd: Date | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setPage(newPage: number) {
        this.page = newPage;
    }

    setDateStart(date: Date) {
        this.dateStart = date;
    }

    setDateEnd(date: Date) {
        this.dateEnd = date;
    }
}

export default new Filter();
