import { Table, Thead, Tbody, Tr, Th, Td, chakra, Menu, MenuButton, IconButton, Box } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import NoData from 'components/NoData';
import Loader from 'components/Loader';

import { uuid } from 'utils';
import classNames from 'classnames';

const CoreTable = ({
  isLoading,
  className,
  page: rows,
  prepareRow,
  getActions,
  headerGroups,
  getTableProps,
  getTableBodyProps,
}) => {

  if (isLoading) return <Loader />;
  if (!rows?.length) return <NoData />;

  return (
    <Box
      overflowY="scroll"
      overflowX="scroll"
      className={classNames('table-wrapper', className)}
      padding="0"
      pos="relative"
      css={{
        '&::-webkit-scrollbar': {
          height: '4px',
          width: '1px',
        },
        '&::-webkit-scrollbar-track': {
          height: '4px',
          width: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '3px',
        },
      }}
    >
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups?.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render('Header')}
                  <chakra.span pl='4'>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                      ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows?.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells?.map((cell) => (
                  <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {cell.render('Cell')}
                  </Td>
                ))}
                {getActions && (
                  <Td className="action-bar" key={uuid()}>
                    <Menu key={uuid()} colorScheme="green">
                      <MenuButton
                        pos="sticky"
                        right="0"
                        top="10"
                        as={IconButton}
                        aria-label="Options"
                        icon={<BiDotsHorizontalRounded />}
                        variant="outline"
                      />
                      {getActions(row)}
                    </Menu>
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CoreTable;
