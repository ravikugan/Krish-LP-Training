package ResturantApplication;
public class OrderFood{
		
	public static void main(String args[])
	{
		TCFood1 f1= new TCFood1("water","full","half"); 
		System.out.println(f1);

		TCFood2 f2= new TCFood2("water","full","half");
		System.out.println(f2);		

		Food.Builder builder= new Food.Builder("water");
		Food f3 = builder.kottu("full").rice("half").build();
		System.out.println(f3); 
	}

}