import React from 'react';

import { API, API_DOMAIN } from '/src/constant';
import { useData } from '/src/utils/utils.js';

export default function GeekDaily() {
  const geekdailiesurl = API + '/geekdailies/all/list';
  const categoriesurl = API + '/categories';

  const geekdailiesresult = useData(geekdailiesurl);
  const dails = geekdailiesresult.data;

  const categoriesurlresult = useData(categoriesurl);
  const categories = categoriesurlresult.data;

  return (
    <>
      <section className="sticky-top bg-white shadow-light-sm py-4">
        <div className="container d-flex flex-column flex-lg-row">
          <div className="d-none d-md-flex align-items-center flex-wrap text-uppercase font-size-xs">
            <span className="font-size-sm font-weight-bold mr-4">Categories:</span>

            {!!categories &&
              categories.data.map((item, key) => (
                <a href="#" key={key} className="text-secondary mr-4">
                  {item.attributes.title}
                </a>
              ))}
          </div>

          <form className="w-200 mt-md-3 mt-lg-0 ml-lg-auto">
            <div className="position-relative">
              <i className="fas fa-search fa-sm text-muted position-absolute left-0 top-0 mt-2"></i>
              <input
                type="text"
                className="form-control form-control-sm pl-4 border-0"
                placeholder="Search on the blog"
              />
            </div>
          </form>
        </div>
      </section>

      <section className="fx-fade-up">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {!!dails &&
              dails.data.map((item) => (
                <div className="col mt-5">
                  <div className="card h-100 shadow-light hover-lift-light">
                    <a
                      href="#!"
                      className="bg-cover h-250 rounded-top"
                      style={{ backgroundImage: `url('${!!item.cover && API_DOMAIN + item.cover.url}')` }}
                    ></a>

                    <div className="card-body">
                      <a href="#!" className="h5 font-weight-normal text-dark text-decoration-none">
                        {item.title}
                      </a>

                      <p className="text-secondary font-size-sm mt-3">{item.introduce}</p>
                    </div>

                    <div className="card-bottom-info">
                      <div className="avatar avatar-sm">
                        <img
                          src={`${!!item.editor && API_DOMAIN + item.editor.avatar.url}`}
                          className="avatar-image rounded-circle"
                          alt=""
                        />
                      </div>
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
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
