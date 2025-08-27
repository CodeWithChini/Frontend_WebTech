export default function StudentDemo() {
  const array = [
    {
      "name": "Evangeline",
      "Image": "https://avatars.githubusercontent.com/u/35874443",
      "id": "1"
    },
    {
      "name": "Ella",
      "Image": "https://avatars.githubusercontent.com/u/66903724",
      "id": "2"
    },
    {
      "name": "Pink",
      "Image": "https://avatars.githubusercontent.com/u/30192883",
      "id": "3"
    },
    {
      "name": "Lucius",
      "Image": "https://avatars.githubusercontent.com/u/28740702",
      "id": "4"
    },
    {
      "name": "Dixie",
      "Image": "https://avatars.githubusercontent.com/u/76690503",
      "id": "5"
    },
    {
      "name": "Lon",
      "Image": "https://avatars.githubusercontent.com/u/89384140",
      "id": "6"
    },
    {
      "name": "Karianne",
      "Image": "https://avatars.githubusercontent.com/u/45338747",
      "id": "7"
    },
    {
      "name": "Taya",
      "Image": "https://avatars.githubusercontent.com/u/76734419",
      "id": "8"
    },
    {
      "name": "Kari",
      "Image": "https://avatars.githubusercontent.com/u/12095704",
      "id": "9"
    },
    {
      "name": "Mario",
      "Image": "https://avatars.githubusercontent.com/u/95306608",
      "id": "10"
    }
  ];

  return (
    <div className="container">
          <div className="row">

        {array.map((faculti) => (
          <div className="col-md-4 mb-4">
            <div className="card" style={{width: '18rem'}}>
              <img
                src={faculti.Image}
              />
              <div className="card-body">
                <h5 className="card-title">{faculti.name}</h5>
                <p className="card-text">Faculty Member ID: {faculti.id}</p>
                <a href="#" className="btn btn-primary">View Profile</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
