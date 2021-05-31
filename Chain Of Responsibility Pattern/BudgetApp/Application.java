package BudgetApp;
public class Application{
	public static void main(String[] args){
		BudgetCheck bc = new BudgetCheck();
		Manager mr = new Manager();
		ShiftLead sl = new ShiftLead();
		TeamLead tl = new TeamLead();

		bc.setSuccessor(sl);
		sl.setSuccessor(tl);
		tl.setSuccessor(mr);

		Budget b1 = new Budget("John",10000);
		System.out.println(bc.checkEligibility(b1)+"\n");

		Budget b2 = new Budget("Jack",30000);
		System.out.println(bc.checkEligibility(b2)+"\n");

		Budget b3 = new Budget("Jill",60000);
		System.out.println(bc.checkEligibility(b3)+"\n");

		Budget b4 = new Budget("Doe",150000);
		System.out.println(bc.checkEligibility(b4)+"\n");
		
	}
}
