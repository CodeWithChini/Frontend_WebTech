// export default function facultiDemo() {
//     const array = [
//   {
//     "name": "Evangeline",
//     "Image": "https://avatars.githubusercontent.com/u/35874443",
//     "id": "1"
//   },
//   {
//     "name": "Ella",
//     "Image": "https://avatars.githubusercontent.com/u/66903724",
//     "id": "2"
//   },
//   {
//     "name": "Pink",
//     "Image": "https://avatars.githubusercontent.com/u/30192883",
//     "id": "3"
//   },
//   {
//     "name": "Lucius",
//     "Image": "https://avatars.githubusercontent.com/u/28740702",
//     "id": "4"
//   },
//   {
//     "name": "Dixie",
//     "Image": "https://avatars.githubusercontent.com/u/76690503",
//     "id": "5"
//   },
//   {
//     "name": "Lon",
//     "Image": "https://avatars.githubusercontent.com/u/89384140",
//     "id": "6"
//   },
//   {
//     "name": "Karianne",
//     "Image": "https://avatars.githubusercontent.com/u/45338747",
//     "id": "7"
//   },
//   {
//     "name": "Taya",
//     "Image": "https://avatars.githubusercontent.com/u/76734419",
//     "id": "8"
//   },
//   {
//     "name": "Kari",
//     "Image": "https://avatars.githubusercontent.com/u/12095704",
//     "id": "9"
//   },
//   {
//     "name": "Mario",
//     "Image": "https://avatars.githubusercontent.com/u/95306608",
//     "id": "10"
//   }
// ]
//     return (
//         <div>
//             {
//                 arr.map((faculti) => {
//                     return (
//                         <>
//                             <p>{ faculti.name}</p>
//                         </>
//                     )
//                 })
//             }
//         </div>
//     )
// }







export default function FacultiDemo() {
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
    <div>
      <table style={{border: '2px solid #ddd' }}>
        <thead >
          <tr >
            <th style={{border: '2px solid #ddd'}}>ID</th>
            <th style={{border: '2px solid #ddd'}}>Name</th>
            <th style={{border: '2px solid #ddd'}}>Image</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
                  {array.map((faculti) => {
                      return (
                          <>
                              <tr style={{border: '2px solid #ddd'}}>
                                  <td style={{border: '2px solid #ddd'}}>{faculti.id}</td>
                                  <td style={{border: '2px solid #ddd'}} >{faculti.name}</td>
                                  <td style={{border: '2px solid #ddd'}}>
                                      <img
                                          src={faculti.Image} />
                                  </td>
                              </tr>
                          </>
                      )
                  })}
        </tbody>
      </table>
    </div>
  );
}
