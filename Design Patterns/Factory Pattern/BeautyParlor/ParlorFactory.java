package BeautyParlor;
import java.util.*;

public class ParlorFactory{

	public static Deal createDeal(String deal)
	{
		switch(deal){
		case "FullHair": return new FullHair();
		   		
		case "FullFace": return new FullFace();
		   		
		case "FullBody": return new FullBody();

		default : return null;
		   		
		}
	}

}