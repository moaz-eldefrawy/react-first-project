import ProgressBar from 'react-customizable-progressbar'
const Summary = () => {
    return (
        <div className="flex">
            <div className="flex">
            <ProgressBar
                progress={60}
                radius={100}
            />
            </div>

            <div className="flex">Alzheimer:
            <ProgressBar
                progress={60}
                radius={100}
            />
            </div>

            <div className="flex">High Blood Pressure:
            <ProgressBar
                progress={60}
                radius={100}
            />
            </div>
        </div>
    )
}

export default Summary
