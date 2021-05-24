package PropertySeller;
public class SellerApp{
	public static void main(String args[])
	{
		Registry reg = new Registry();
		
		House k1 = (House)reg.getProperty(PropertyType.HOUSE);
		House k2 = (House)reg.getProperty(PropertyType.HOUSE);

		k2.setOwner("Chanuka");
		
		k1.printDetails();
		System.out.println("");
		k2.printDetails();
	}
}