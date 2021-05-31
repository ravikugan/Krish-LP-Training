package BudgetApp;
public abstract class BudgetHandler{
	
	protected BudgetHandler successor;
	
	public void setSuccessor(BudgetHandler successor){
		this.successor = successor;
	}

	public abstract String checkEligibility(Budget budget);
}

//scenario : An employee requests a resoruce;According to the cost the approval needs to be givven by the correct 
// Upper management
//https://dotnettutorials.net/lesson/real-time-examples-of-chain-of-responsibility-design-pattern/