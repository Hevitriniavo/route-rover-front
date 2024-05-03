
const Local = () => {
    let n: number = 0;
    const incr = () => {
        const storedN = localStorage.getItem("n");
        if (storedN != null) {
            n = parseInt(storedN) + 1;
            localStorage.removeItem("n")
            localStorage.setItem('n', `${n}`)

        } else {
            localStorage.setItem('n', '0')
        }
        console.log(n);
        
    }
    return (
        <div>
            <p>counter is {n} </p>
            <button onClick={incr}>incr</button>
        </div>
    )
}

export default Local