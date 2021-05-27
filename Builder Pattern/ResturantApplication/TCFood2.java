package ResturantApplication;
public class TCFood2{
	
	private String kottu;
	private String rice;
	private Boolean utensils;
	private String drink;
	private String desert;
	

	public TCFood2(String drink,String kottu,String rice,Boolean utensils,String desert)
	{
		this.drink = drink;
		this.kottu = kottu;
		this.rice = rice;
		this.utensils = utensils;
		this.desert = desert;
	}

	
	public TCFood2(String drink,String kottu,String rice,Boolean utensils)
	{
		this(drink,kottu,rice,utensils,null);
	}

	public TCFood2(String drink,String kottu,String rice)
	{
		this(drink,kottu,rice,null);
	}	

	public TCFood2(String drink,String kottu)
	{
		this(drink,kottu,null);
	}

	public TCFood2(String drink)
	{
		this(drink,null);
	}
	
	public String toString()
	{
		return "drink :"+drink+", Kottu :"+kottu+" ,rice :"+rice+" ,utensils :"+utensils+" ,desert :"+desert;
	}
	

  	
}