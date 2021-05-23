package BeautyParlor;
import java.util.*;

public abstract class Deal{
	protected ArrayList<Beautify> deals = new ArrayList<Beautify>();
	
	public Deal()
	{
		CreateDeals();
	}

	public abstract void CreateDeals();

	public void printDeal()
	{
		for(int i=0;i<deals.size();i++)
		{
			deals.get(i).printDetails();
		}
		System.out.println("\n");
	}
	
}