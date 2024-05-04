export default function Clock() {
    let Clock = new Date().toLocaleString();
    return <>
        <h1 className="text-center">Current time :- {Clock}</h1>
    </>
}