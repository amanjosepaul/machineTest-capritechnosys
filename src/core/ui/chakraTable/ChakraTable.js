import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const ChakraTable = (props) => {
  const { dataSource, column } = props;

  const renderRowData = () => {
    return dataSource.map((data, index) => {
      return (
        <Tr key={index}>
          {column?.map((column, index) => (
            <Td key={index}>{data[column]}</Td>
          ))}
        </Tr>
      );
    });
  };

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {column?.map((column, index) => (
                <Th key={index}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {dataSource ? (
              renderRowData()
            ) : (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ChakraTable;
