package BudgetApp;
public class TeamLead extends BudgetHandler{
	
	public String checkEligibility(Budget budget){
		if(budget.getCost()>25000 && budget.getCost()<=50000)
			return "Shift Lead has approved the budget "+budget.getCost()+" for "+budget.getEmpName()+"'s project";
		else
			return successor.checkEligibility(budget);
	}
}

