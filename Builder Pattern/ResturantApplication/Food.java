package ResturantApplication;
public class Food{

	private String kottu;
	private String rice;
	private Boolean utensils;
	private String drink;
	private String desert;

	public Food(Builder builder)
	{
		this.kottu = builder.kottu;
		this.rice = builder.rice;
		this.utensils = builder.utensils;
		this.drink = builder.drink;
		this.desert = builder.desert;
	}

	static class Builder{
		private String kottu;
		private String rice;
		private Boolean utensils;
		private String drink;
		private String desert;

		public Food build()
		{
			return new Food(this);
		}

		public Builder(String drink)
		{
			this.drink = drink;
		}

		public Builder kottu(String kottu)
		{
			this.kottu = kottu;
			return this;
		}

		public Builder rice(String rice)
		{
			this.rice = rice;
			return this;
		}

		public Builder desert(String desert)
		{
			this.desert = desert;
			return this;
		}

		public Builder utensils(Boolean utensils)
		{
			this.utensils = utensils;
			return this;
		}
		
	
	}

	
	public String toString()
	{
		return "drink :"+drink+", Kottu :"+kottu+" ,rice :"+rice+" ,utensils :"+utensils+" ,desert :"+desert;
	}

}