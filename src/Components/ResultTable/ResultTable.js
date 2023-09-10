import classes from './ResultTable.module.css';

const ResultTable = (props) => {
    return <table className={classes.result}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {props.data.forEach((yearlyData) => {
                <tr key={yearlyData.year}>
                    <td>{yearlyData.year}</td>
                    <td>{yearlyData.savingsEndOfYear}</td>
                    <td>{yearlyData.yearlyInterest}</td>
                    <td>{yearlyData.savingsEndOfYear - yearlyData.currentSavings - yearlyData.year * yearlyData.yearlyContribution}</td>
                    <td>{yearlyData.currentSavings - yearlyData.year * yearlyData.yearlyContribution}</td>
                </tr>
            })}
        </tbody>
    </table>
}

export default ResultTable;