const Illness = ({name}) => {
    return (
        <div className="radioButtonContainer">
            {name}: 
            <input type="radio" value="good" name="degree" /> Good
            <input type="radio" value="okay" name="degree" /> Okay
            <input type="radio" value="bad"  name="degree" /> Bad
        </div>
    )
}

export default Illness
