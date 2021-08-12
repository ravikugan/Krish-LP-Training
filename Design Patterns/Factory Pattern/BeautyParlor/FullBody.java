package BeautyParlor;
import java.util.*;

public class FullBody extends Deal{


	public void CreateDeals()
	{
		deals.add(new Haircut());
		deals.add(new HairColor());
		deals.add(new Facial());
		deals.add(new Trim());
	}

	public void printDeal()
	{
		System.out.println("Full Body Package has been selected");
		super.printDeal();
	}

}