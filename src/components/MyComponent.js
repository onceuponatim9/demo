import Home from "./Home";

// props ({key-value})
// ㄴ 자식 요소가 부모에게 전달하는 정보(값)

function MyComponent({message}) {
    return (
        <>
            <h1>Hello world</h1>
            <p>{message}</p>
            <Home style={{
                "color": "red",
                "backgroundColor": "black",
                "width": "200px",
                "height": "60px",
                "border": "none",
                "borderRadius": "10px",
                "cursor": "pointer"
            }} />
        </>
    );
}

// const MyComponent = () => (

// )

export default MyComponent;