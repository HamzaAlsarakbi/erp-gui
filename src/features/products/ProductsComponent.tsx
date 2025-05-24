import { EditIcon } from '@/components/icons/EditIcon';
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@heroui/react';
import { Link } from 'react-router-dom';

export const Products: React.FC = () => {
  return (
    <div className="p-2">
      <h1 className="title">Inventory</h1>

      <div className="flex flex-col">
        <Link className="self-end" to="/products/new">
          <Button color="primary">Add inventory</Button>
        </Link>

        <div className="flex flex-row gap-1">
          <div
            className="flex flex-col filter-menu"
            style={{ minWidth: '300px' }}
          >
            <Accordion
              selectionMode="multiple"
              defaultExpandedKeys={['1', '2', '3', '4']}
            >
              <AccordionItem
                key="1"
                aria-label="Type"
                title="Type"
                value="filter"
              >
                <div className="flex flex-col gap-1">
                  <Checkbox>Footballs</Checkbox>
                  <Checkbox>Basketballs</Checkbox>
                  <Checkbox>Volleyballs</Checkbox>
                  <Checkbox>Sneakers</Checkbox>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Vendor"
                title="Vendor"
                value="filter"
              >
                <div className="flex flex-col gap-1">
                  <Checkbox>Molten</Checkbox>
                  <Checkbox>Bodysolid</Checkbox>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Warehouse"
                title="Warehouse"
                value="filter"
              >
                <div className="flex flex-col gap-1">
                  <Checkbox>Adra</Checkbox>
                  <Checkbox>Darreya</Checkbox>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Price"
                title="Price"
                value="filter"
              >
                <div className="flex flex-col gap-1">
                  <Slider
                    className="max-w-md"
                    defaultValue={[100, 500]}
                    formatOptions={{ style: 'currency', currency: 'SYP' }}
                    label="Price Range"
                    maxValue={1000}
                    minValue={0}
                  />
                  <Checkbox>On sale</Checkbox>
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          <Table aria-label="Products Table">
            <TableHeader>
              <TableColumn>#</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Vendor</TableColumn>
              <TableColumn>Warehouse</TableColumn>
              <TableColumn>Quantity</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>1</TableCell>
                <TableCell>Product 1</TableCell>
                <TableCell>Vendor 1</TableCell>
                <TableCell>Warehouse 1</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10.00 L.S.</TableCell>
                <TableCell>
                  <Tooltip content="Edit product">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon />
                    </span>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
