
const Local = () => {
    const json = {
        email: "elise",
        password: "1234",
        role: "Admin"
    }

    const jsonString = JSON.stringify(json);

    const showType = () => {
        console.log(JSON.parse(jsonString));
    }
    return (
        <div>
            <pre>
                {jsonString}
            </pre>
            <button onClick={showType}>show</button>
        </div>
    )
}

export default Local