export default function Clock() {
    let Clock = new Date().toLocaleString();
    return <>
        <h2 className="text-center" style={{ "padding": "10px" }}>Current time :- {Clock}</h2 >
    </>
}