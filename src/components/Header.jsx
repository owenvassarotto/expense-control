import NewBudget from "./NewBudget";

const Header = ({
    budget, 
    setBudget,
    isValidBudget,
    setIsValidBudget,
}) => {
  return (
    <header>
        <h1>Expense Control</h1>

        {/* conditional display components */}
        {isValidBudget ? (
            <p>Expense Control</p>
        ) : (
            <NewBudget 
                budget={budget} 
                setBudget={setBudget} 
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget} 
            />
        )}
    </header>
  )
}

export default Header