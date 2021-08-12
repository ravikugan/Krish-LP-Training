package BeautyParlor;
import java.util.*;

public class FullFace extends Deal{


	public void CreateDeals()
	{
		deals.add(new Haircut());
		deals.add(new HairColor());
		deals.add(new Facial());
	}

	public void printDeal()
	{
		System.out.println("Full Face Package has been selected");
		super.printDeal();
	}

}