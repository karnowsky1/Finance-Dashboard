import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "../../state/api"
import BoxHeader from "../../components/BoxHeader"
import DashboardBox from "../../components/DashboardBox"
import FlexBetween from "../../components/FlexBetween"
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts"
import { Box, Typography, useTheme } from "@mui/material"
import { useMemo } from "react"
import { DataGrid, GridCellParams } from "@mui/x-data-grid"

const Row3 = (props: Props) => {
  const { palette } = useTheme()
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();

  const styles ={ 
    root: {
      color: palette.grey[300],
      border: "none"
    },
    cell: {
      borderBottom: `1px solid ${palette.grey[800]} !important`
    },
    columnHeaders: {
      borderBottom: `1px solid ${palette.grey[800]} !important`
    },
    columnSeparator: {
      visibility: "hidden",
    },
  }

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `${params.value}`,
    },
  ]
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader 
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none"
              // can't target itself, so create a box around data grid and modify the class below it
            },
            "& .MuiDataGrid-cell": {
              borderTop: `1px solid rgba(66, 66, 66, 0.5) !important`,
              backgroundColor: `rgba(0, 0, 0, 0.1)`
            },
            "& .MuiDataGrid-columnHeaders": {
              borderTop: `1px solid rgba(66, 66, 66, 0.5) !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .css-1oudwrl::after": {
              backgroundColor: "rgba(66, 66, 66, 0.5)"
            }
          }}
        >
          <DataGrid 
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
      <BoxHeader 
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
      </DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
} 
export default Row3