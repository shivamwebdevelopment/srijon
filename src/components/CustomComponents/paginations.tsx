// @ts-nocheck
import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
    handlePage
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        // <div className='pagination'>
        //     {pages.map((page, index) => {
        //         return (
        //             <button
        //                 key={index}
        //                 onClick={() => handlePage(page-1)}
        //                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        //                 {page}
        //             </button>
                    
        //         );
        //     })}
        // </div>
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-sm">
            {pages.map((page, index) => {
                return (    
                <li>
                    {page == currentPage ? 
                    <span className="bg-sky-500/100 flex items-center justify-center px-3 h-8 leading-tight text-white-500 border border-gray-300 hover:bg-gray-100 hover:text-white-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {page}</span> 
                    :
                    <a 
                    href="#" 
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    key={index}
                    onClick={() => handlePage(page-1)}
                    
                    >{page}</a>
                    }
                </li>
                    
                );
            })}
            </ul>
        </nav>
    );
};

export default Pagination;