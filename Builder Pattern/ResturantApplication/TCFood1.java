package ResturantApplication;
public class TCFood1{

	private String kottu;
	private String rice;
	private Boolean utensils;
	private String drink;
	private String desert;
	
	public TCFood1(String drink)
	{
		this.drink = drink;
	}

	public TCFood1(String drink,String kottu)
	{
		this(drink);
		this.kottu = kottu;
	}	

	public TCFood1(String drink,String kottu,String rice)
	{
		this(drink,kottu);
		this.rice = rice;
	}

	public TCFood1(String drink,String kottu,String rice,Boolean utensils)
	{
		this(drink,kottu,rice);
		this.utensils = utensils;
	}

	public TCFood1(String drink,String kottu,String rice,Boolean utensils,String desert)
	{
		this(drink,kottu,rice,utensils);
		this.desert = desert;
	}

	public String toString()
	{
		return "drink :"+drink+", Kottu :"+kottu+" ,rice :"+rice+" ,utensils :"+utensils+" ,desert :"+desert;
	}

			

}