import { VerticalAlignBottom } from '@mui/icons-material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';

const DataTable = (_props) => {
  let cols = [
    {
      field: ' ',
      headerName: ' ',
      width: 1,
      disablePadding: true,
      disableColumnMenu: true,
      disableColumnFilter: true,
      sortable: false,
    },
    { field: 'id', headerName: 'Id' },
  ];
  const [pageSize, setPageSize] = useState(5);

  _props.rows.columns.map((val) => {
    cols.push({
      field: val.field,
      headerName: val.title,
      width: 200,
    });
  });

  return (
    <div className='rounded-2xl' style={{ height: 400, width: '100%' }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
        MoreActionsIcon={<VerticalAlignBottom />}
        rows={_props.rows.rows}
        columns={cols}
        disableSelectionOnClick
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </div>
  );
};

export default DataTable;
