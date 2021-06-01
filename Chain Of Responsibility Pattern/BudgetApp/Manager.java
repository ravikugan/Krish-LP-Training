package BudgetApp;
public class Manager extends BudgetHandler{
	
	public String checkEligibility(Budget budget){
		if(budget.getCost() <=100000)
			return "Manager has approved the budget "+budget.getCost()+" for "+budget.getEmpName()+"'s project";
		else
			return budget.getEmpName()+"'s budget is too high and cannot be approved.";
	}
}

