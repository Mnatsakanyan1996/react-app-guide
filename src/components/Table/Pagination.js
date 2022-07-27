import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs';

const Pagination = ({ state, setPageSize, gotoPage, canPreviousPage, previousPage, pageOptions, nextPage, canNextPage, pageCount }) => (
  <div className="pagination">
    <div className="control">
      <ButtonGroup size="sm" variant="outline" spacing="6">
        <ButtonGroup size="sm" isAttached variant="outline" spacing="3">
          <IconButton
            aria-label="Go to begining"
            icon={<BsChevronDoubleLeft />}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage} />
          <IconButton
            aria-label="Go to previous"
            icon={<BsChevronLeft />}
            onClick={() => previousPage()}
            disabled={!canPreviousPage} />
        </ButtonGroup>
        <ButtonGroup size="sm" isAttached variant="outline" spacing="3">
          <IconButton
            aria-label="Go to next"
            icon={<BsChevronRight />}
            onClick={() => nextPage()}
            disabled={!canNextPage} />
          <IconButton
            aria-label="Go to Last"
            icon={<BsChevronDoubleRight />}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage} />
        </ButtonGroup>
      </ButtonGroup>
    </div>
    <div className="options">
      <div className="info">
        <p>Page</p>
        <strong>
          {state.pageIndex + 1} of {pageOptions.length}
        </strong>
      </div>
      <select
        value={state.pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 20].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Pagination;
