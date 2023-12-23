import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

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
            <BudgetControl
                budget={budget}
            />
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