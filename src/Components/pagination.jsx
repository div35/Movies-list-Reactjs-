import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Pagination = props => {
    const { itemCount, limit, currentPage, onPagechange } = props;
    if (Math.ceil(itemCount / limit) >= 2) {
        let totalpage = Math.ceil(itemCount / limit);
        const arr = [];
        for (var i = 1; i <= totalpage; i++) {
            arr.push(i);
        }

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {arr.map((page) => {
                        return (
                            <li className={page === currentPage ? "page-item active" : "page-item"} onClick={() => {
                                onPagechange(page)
                            }}><a className="page-link">{page}</a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
    else {
        return null;
    }
}
export default Pagination;