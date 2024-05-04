export default function Random() {
    let randomGenerate = () => {
        return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
    }

    let randomGenerateSize = () => {
        return Math.floor(Math.random() * 50);
    }
    return <p style={{ 'backgroundColor': randomGenerate(), 'fontSize': randomGenerateSize() }}>Random Number :- {randomGenerate()}</p>
}