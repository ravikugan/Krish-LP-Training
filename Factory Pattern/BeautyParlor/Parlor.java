package BeautyParlor;
import java.util.*;

public class Parlor{
	
	public static void main (String args[])
	{

		Deal deal1 = ParlorFactory.createDeal("FullHair");
		Deal deal2 = ParlorFactory.createDeal("FullBody");

		deal1.printDeal();
		deal2.printDeal();
	}
}