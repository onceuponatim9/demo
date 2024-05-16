import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Box, Button, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { TableCaption, TableContainer, Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import BookList from "../components/BookList";

const BookDetail = () => {
    const [params] = useSearchParams();

    console.log("params : " + params);

    const {isbn} = useParams();
    const {title} = useParams();
    const {author} = useParams();
    const {publisher} = useParams();
    const {contents} = useParams();
    const {url} = useParams();
    const {thumbnail} = useParams();

    console.log("isbn : ", + isbn);

    const [bookList, setBookList] = useState([]);
    const [search, setSearch] = useState('강아지똥');

    const fetchBooks = async () => {
        const response = await fetch(
            `https://dapi.kakao.com/v3/search/book?query=${isbn}`,
            {
                method: "GET",
                headers: {
                    Authorization: `KakaoAK ${process.env.REACT_APP_API_KEY}`,
                },
            }
        );
        const data = await response.json();
        console.log(data);
        
        setBookList(data.documents);
    };

    // const changeSearch = e => {
    //     if(e.target.value.length >= 2)
    //         setSearch(e.target.value);
    // }

    useEffect(() => {
        fetchBooks();
    });

    // bookList.map((book) => {
    //     book.isbn = isbn;
    //     book.title = title;
    //     book.author = author;
    //     book.publisher = publisher;
    //     book.contents = contents;
    //     book.url = url;
    // })

    return (
        <TableContainer>
            {bookList.map((book) => (
                <Table>
                <Thead>
                    {/* <Tr>
                        <Th>Thumbnail</Th>
                        <Th>Title</Th>
                        <Th>Author</Th>
                        <Th>Publisher</Th>
                        <Th>Contents</Th>
                    </Tr> */}
                </Thead>
                <Tbody>
                <Tr>
                    <Td><img src={book.thumbnail} /></Td>
                </Tr>
                <Tr>
                    <Td><Link to={book.url}>{book.title}</Link></Td>
                </Tr>
                <Tr>
                    <Td>{book.author} | {book.publisher}</Td>
                </Tr>
                </Tbody>
                <Tfoot></Tfoot>
            </Table>
            ))}
                
            </TableContainer>
    );
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