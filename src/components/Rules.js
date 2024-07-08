export const Rules = ({ handleRules, rules }) => {
    if (rules) {
        return (
            <div className="rules">
                <div className="close" onClick={handleRules}>X</div>
                <p>Rules</p>
            </div>
        )
    }
}
