package PropertySeller;
public class House extends Property{
	private int noOfRooms;
	
	public int getRooms()
	{
		return noOfRooms;
	}

	public void setRooms(int count)
	{
		this.noOfRooms = count;
	} 

	public void printDetails()
	{
		System.out.println("Property is : House\nNo of rooms in the house is "+noOfRooms);
		super.printDetails();
	}
	
}