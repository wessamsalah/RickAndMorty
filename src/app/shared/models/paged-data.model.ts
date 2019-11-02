import { PageInfo } from './page-info.model';

export class PagedData<T> {
    constructor(public info: PageInfo, public results: T[]) {

    }

}
