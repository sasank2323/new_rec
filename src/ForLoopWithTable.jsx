

function ForLoopWithTable() {
    const data = [
        { name: "john", age: 30, city: "new york" },
        { name: "sasank", age: 22, city: "hyderabad" },
        { name: "sai", age: 22, city: "bangalore" },
        { name: "siva", age: 22, city: "mumbai" },
        { name: "sai", age: 22, city: "mumbai" },
    ];
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ForLoopWithTable;