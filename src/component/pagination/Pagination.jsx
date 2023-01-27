
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Cards from '../cards/Cards';
import ReactPaginate from 'react-paginate';
import './pagination.css'

export default function Pagination({data}) {

    return (
        <div id="container"><PaginatedItems itemsPerPage={4} /></div>
        
      );

      
function Items({ currentItems }) {
  return (
    <main>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3><Cards item={item} key={item.id}/></h3>
          </div>
        ))}
    </main>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
}
