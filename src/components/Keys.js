
const Keys = ({ keys, colors, onLetterPress }) => {

    const typeLetter = (e) => {
        onLetterPress(e.target.innerText)
    }

    return (
        <div className="keyboard__row" tabIndex={0}>
            {keys.map((key) => {
                return <div type="button" className="keyboard__key" 
                    style={{ background: colors[key] ? colors[key] : '' }}
                    onClick={typeLetter}>{key}</div>
            })}
        </div>
    )
}

export default Keys