import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import List from '../components/List';

const Products = ({ data, loading, onClick }) => {
    let products = "";
    let pagination
    let pages = {}

    if (data) {
        const datahits = data.hits
        products = datahits.map((product, index) =>
            (
                <div key={`${index}`} className="row">
                    <List products={datahits[index]} />
                </div>
            )
        )
        
        pages = {
            "page" : data.meta.page,
            "pageCount" : data.meta.page_count,
            "perPage" : data.meta.params.per_page
        }

        if(data.meta.page_count > 1){
            pagination = (
                <div className="react-paginate text-right">
                    <ReactPaginate previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pages.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={pages.perPage}
                    forcePage={pages.page-1}
                    onPageChange={e => {onClick(e.selected)}}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
              </div>
           )
        }
    }

    if (loading) {
        pagination = ""
        products = <div className="loading"></div>
    }

    return (
        <div>
            {products}
            {pagination}
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.json,
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => {
    dispatch(fetchPosts(0));
    return {
        onClick: (page) => {
            console.log("masuk click")
            dispatch(fetchPosts(page))
        }
    }
}

const conn = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);

export default conn

