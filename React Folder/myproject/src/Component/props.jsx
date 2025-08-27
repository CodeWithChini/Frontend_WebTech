 function Personalinfo() {
    return (
        <>
            <Child name="Hill Kalola" age={"19"} Mno={"1234567890"} />
        </>
    );
}

function Child(props) {
     return (
        <>
            <h1>Name : {props.name}</h1>
            <h2>Age : {props.age}</h2>
            <h3>Mobile_No : {props.Mno}</h3>
        </>
    );
}

export { Personalinfo };
