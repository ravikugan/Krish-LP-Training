package BeautyParlor;
import java.util.*;

public class FullHair extends Deal{


	public void CreateDeals()
	{
		deals.add(new Haircut());
		deals.add(new HairColor());
	}

	public void printDeal()
	{
		System.out.println("Full Hair Package has been selected");
		super.printDeal();
	}

}