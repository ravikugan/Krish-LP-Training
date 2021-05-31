package BudgetApp;
public class Budget{
	private String empName;
	private double cost;


	public Budget(String empName,double cost){
		this.empName = empName;
		this.cost = cost;
	}


	public void setEmpName(String name){
		this.empName = name;
	}

	public void setCost(double cost){
		this.cost = cost;
	}

	

	public String getEmpName(){
		return empName;
	}

	public double getCost(){
		return cost;
	}

	
}

