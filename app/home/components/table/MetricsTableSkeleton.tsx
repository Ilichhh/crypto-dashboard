import { Skeleton } from '~/components/ui/skeleton';
import { Table, TableBody, TableCell, TableRow } from '~/components/ui/Table';

export function MetricsTableSkeleton() {
  const rows = 24;
  const cols = 8;

  return (
    <Table>
      <TableBody>
        {Array.from({ length: rows }).map((_, rowId) => (
          <TableRow key={rowId}>
            {Array.from({ length: cols }).map((_, colId) => (
              <TableCell key={colId} className="p-2">
                <Skeleton className="bg-card h-5 w-full rounded" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
