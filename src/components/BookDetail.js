import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { TableCaption, TableContainer, Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import BookList from "../components/BookList";

const BookDetail = () => {
    function BookInfo(info) {

        const { colorMode, toggleColorMode } = useColorMode();
        const color = useColorModeValue('red.500', 'white');
        const buttonScheme = useColorModeValue('blackAlpha', 'whiteAlpha');

        let {isbn} = useParams();
        const detail = BookList.find((book) => {
            return book.isbn === isbn;
        });

        useEffect(() => {
            BookInfo();
        });
    
        return (
            <TableContainer>
                    <Table variant={"striped"} colorScheme="blackAlpha">
                        <Thead>
                            <Tr>
                                <Th>Title</Th>
                                <Th>Author</Th>
                                <Th>Publisher</Th>
                                <Th>Datetime</Th>
                                <Th>ISBN</Th>
                                <Th>Contents</Th>
                                <Th>Price</Th>
                                <Th>Sales_price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>{detail.title}</Td>
                            <Td>{detail.authors}</Td>
                            <Td>{detail.publisher}</Td>
                            <Td>{detail.datetime}</Td>
                            <Td>{detail.isbn}</Td>
                            <Td>{detail.contents}</Td>
                            <Td>{detail.price}</Td>
                            <Td>{detail.sale_price}</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot></Tfoot>
                    </Table>
                </TableContainer>
        );
    }
};


// const BookDetail = () => {
//     const fetchBooks = async () => {
//         const response = await fetch(
//             // `https://dapi.kakao.com/v3/search/book?target=${isbn}`,
//             `https://dapi.kakao.com/v3/search/book?`,
//             {
//                 method: "GET",
//                 headers: {
//                     Authorization: `KakaoAK ${process.env.REACT_APP_API_KEY}`,
//                 },
//             }
//         );
//         return (
//             <div>
                
//             </div>
//         );
//     };
// };


export default BookDetail;