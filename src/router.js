import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./components/Home";
import VideoList from "./components/VideoList";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

// 라우터 서례
/*
GET /demo/video                 추천 영상 목록 페이지 <VideoList />
GET /demo/video/list            추천 영상 목록 페이지 <VideoList />
GET /demo/video/search          검색 영상 목록 페이지 <VideoList />

GET /demo/book                  추천 도서 목록 페이지 <BookList />
GET /demo/book/list             추천 도서 목록 페이지 <BookList />
GET /demo/book/search           검색 도서 목록 페이지 <BookList />
GET /demo/book/search/:isbn     검색 도서 상세 페이지 <BookDetail />

*/

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
            errorElement: <>
                <h1>Opps!!!</h1>
            </>
        },
        {
            path: "/video",
            element: <Root />,
            children: [
                {
                    path: "/video",
                    element: <VideoList />,
                    // (
                    //     <>
                    //         <p>추천 영상 목록 페이지</p>
                    //     </>
                    // ),
                },
                {
                    path: "/video/list",
                    element: <VideoList />,
                    // (
                    //     <>
                    //         <p>추천 영상 목록 페이지</p>
                    //     </>
                    // ),
                },
                {
                    path: "/video/search",
                    element: <VideoList />,
                    // (
                    //     <>
                    //         <p>영상 검색 목록 페이지</p>
                    //     </>
                    // ),
                },
            ],
        },
        {
            path: "/book",
            element: <Root />,
            children: [
                {
                    path: "/book",
                    element: <BookList />,
                    // (
                    //     <>
                    //         <p>추천 도서 목록 페이지</p>
                    //     </>
                    // ),
                },
                {
                    path: "/book/list",
                    element: <BookList />,
                    // (
                    //     <>
                    //         <p>추천 도서 목록 페이지</p>
                    //     </>
                    // ),
                },
                {
                    path: "/book/search",
                    element: <BookList />,
                    // (
                    //     <>
                    //         <p>도서 검색 목록 페이지</p>
                    //     </>
                    // ),
                },
                {
                    path: "/book/search/:isbn",
                    element: <BookDetail />,
                    // (
                    //     <>
                    //         <p>검색 도서 상세 페이지</p>
                    //     </>
                    // ),
                },
            ],
        },
    ],
    {
        basename: "/demo",
    }
);

export default router;