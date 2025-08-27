export default function A() {
    const name = "Hill Kalola";
    return (
        <div>
            <B name={name} />
        </div>
    )
}

function B(props) {
    return (
        <div>
            <C name={props.name} />
        </div>
    )
}

function C(props) {
    return (
        <h1>{ props.name }</h1>
    )
}
