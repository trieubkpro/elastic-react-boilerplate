import { request } from "http";
import { requestHeader } from "../../core/api";

export function fetch(payload={}) {
    const { page, pageSize, ordering } = payload;

    return request(
        `/experiments/?page_size=${config.PAGE_SIZE}&page=${page ? page : '1'}&ordering=${ordering ? ordering : ''}`,
        {
            mode: 'cors',
            headers: requestHeader(),
            method: 'GET'
        }
    )
}