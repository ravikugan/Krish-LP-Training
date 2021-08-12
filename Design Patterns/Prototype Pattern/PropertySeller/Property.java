package PropertySeller;

public abstract class Property implements Cloneable{
	private double price;
	private String owner;


	public String getOwner()
	{
		return owner;
	}

	public double getPrice()
	{
		return price;
	}

	public void setOwner(String name)
	{
		owner = name;
	}

	public void setPrice(double price)
	{
		this.price = price; 
	}

	public void printDetails()
	{
		System.out.println("Owner is "+owner);	
		System.out.println("Selling price is "+price);
	}

	   @Override
    protected Object clone() throws CloneNotSupportedException {
        
        return super.clone();
    }
}