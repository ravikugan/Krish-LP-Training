package PropertySeller;
public class Warehouse extends Property{
	private int area;
	
	public int getArea()
	{
		return area;
	}

	public void setArea(int area)
	{
		this.area = area;
	} 

	public void printDetails()
	{
		System.out.println("Property is : Wearhouse\nWearhouse area is "+area+" square feets.");
		super.printDetails();
	}
	
}