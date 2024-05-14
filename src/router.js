import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import VideoList from "./components/VideoList";

// 라우터 서례
/*
GET /demo/video                 추천 영상 목록 페이지
GET /demo/video/list            추천 영상 목록 페이지
GET /demo/video/search          검색 영상 목록 페이지

GET /demo/book                  추천 도서 목록 페이지
GET /demo/book/list             추천 도서 목록 페이지
GET /demo/book/search           검색 도서 목록 페이지
GET /demo/book/search/{:isbn}   검색 도서 상세 페이지

*/

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/sample",
                element: <>
                    <p>자식이다.</p>
                </>
            }
        ]
    },
    {
        path: "/video",
        element: <Root />,
        children: [
            {
                path: "/list",
                element: <></>
            },
            {
                path: "/search",
                element: <></>
            }
        ]
    },
    {
        path: "/book",
        element: <Root />,
        children: [
            {
                path: "/list",
                element: <></>
            },
            {
                path: "/search",
                element: <></>,
                children: [
                    {
                        path: "/{:isbn}",
                        element: <></>
                    }
                ]
            }
        ]
    }
], {
    basename: "/demo"
});

export default router;