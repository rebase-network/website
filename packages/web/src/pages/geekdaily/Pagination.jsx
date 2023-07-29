import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { API, API_DOMAIN } from '/src/constant';

const perPage = 15;

const avatarImg = (editor) => {
  if (editor && editor.avatar) {
    return (
      <div className="avatar avatar-sm">
        <img
          src={API_DOMAIN + editor.avatar.url}
          className="avatar-image rounded-circle"
          alt={editor.name}
        />
      </div>
    )
  }
};

export default function GeekDailyPagination() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {

    try {
      const geekdailiesurl = API + `/geekdailies/all/list?pagination[page]=${page}&pagination[pageSize]=${perPage}`;

      const resp = await axios.get(geekdailiesurl);
      const rawdata = resp.data;

      setData(rawdata.data);

      const meta = rawdata.meta;

      const totalCount = meta['total'];
      const totalPages = meta['pageCount'];
      setTotalPages(totalPages);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {!!data &&
          data.map((item) => (
            <div className="col mt-5">
              <div className="card h-100 shadow-light hover-lift-light">

                <div className="card-body">
                  <a href={item.url} target='_blank' className="h5 font-weight-normal text-dark text-decoration-none">
                    {item.title}
                  </a>

                  <p className="text-secondary font-size-sm mt-3">{item.author}：{item.introduce}</p>
                </div>

                <div className="card-bottom-info">
                  {avatarImg(item.editor)}
                  <span className="text-uppercase-xs text-muted ml-2">{!!item.editor && item.editor.name}</span>
                  <div className="text-uppercase-xs text-muted ml-auto">
                    <i className="far fa-calendar fa-xs relative-top--1"></i>
                    <span style={{ marginLeft: '5px' }}>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-4">
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          renderOnZeroPageCount={null}
        />
      </div>

    </>
  );
};
