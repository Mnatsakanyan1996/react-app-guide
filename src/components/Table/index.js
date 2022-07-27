import { Page, Card, DataTable } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function SortableDataTableExample({ data }) {
  const [sortedRows, setSortedRows] = useState(null);

  
  const rows = sortedRows ? sortedRows : data;

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows]
  );

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          hasFixedFirstColumn
          columnContentTypes={[
            "text",
            "numeric",
            "numeric",
            "numeric",
            "numeric",
          ]}
          headings={[
            "Product",
            "Price",
            "SKU Number",
            "Net quantity",
            "Net sales",
            "Net sales",
            "Net sales",
            "Net sales",
          ]}
          rows={rows}
          showTotalsInFooter
          totals={["", "", "", 255, "$155,830.00"]}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
        />
      </Card>
    </Page>
  );

  function sortCurrency(rows, index, direction) {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(rowA[index].substring(1));
      const amountB = parseFloat(rowB[index].substring(1));

      return direction === "descending" ? amountB - amountA : amountA - amountB;
    });
  }
}