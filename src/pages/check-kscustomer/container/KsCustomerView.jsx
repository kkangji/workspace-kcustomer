import EnhancedTable from '@/components/EnhancedTable';

export default function KsCustomerView({ tableData, handleOnChange }) {
  const headCells = [
    {
      id: 'client_code',
      disableSorting: true,
      label: 'Client Code',
    },
    {
      id: 'client_name',
      disableSorting: true,
      label: 'Client Name',
    },
    {
      id: 'marketing_id',
      disableSorting: true,
      label: 'Marketing ID',
    },
    {
      id: 'marketing_name',
      disableSorting: true,
      label: 'Marketing',
    },
    {
      id: 'team',
      disableSorting: true,
      label: 'Team',
    },
  ];

  return (
    <EnhancedTable
      tableData={tableData}
      onChange={handleOnChange}
      headCells={headCells}
    />
  );
}
