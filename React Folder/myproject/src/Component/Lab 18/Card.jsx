function Parent() {
    const data = "Hello World! I am a Panda.";
    const name = "Hill Kalola";
    return (
        <div>
            <Child data={data} name={name} />
        </div>
    );
}

function Child(props) {
    const img = "https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8=";
    return (
        <div>
            <Card data={props.data} name={props.name} img={img} />
        </div>
    );
}

function Card(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.data}</p>
            </div>
        </div>
    );
}

export default Parent;
