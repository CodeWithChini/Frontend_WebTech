export default function Demo() {
    const arr = ["Hill", "Valley", "Mountain", "River"];
    return (
        <div>
            {
                arr.map((name) => {
                    return (
                        <h4>{name}</h4>
                    )
                })
            }
        </div>
    )
}
