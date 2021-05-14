
import java.util.Scanner;
public class FrogProblem{



	public static void main(String args[])
	{
		//5,3,1
		//1,2,5
		int hops=0,time=0;
	
		Scanner s = new Scanner(System.in);
		System.out.println("Enter the max distance");
		
		int i = s.nextInt();
		

		for( int j=i;j>0;)
		{
			hops++;
			j-=5;
			
			if(j<=0)
			  break;

			time+=1;
			hops++;
			j-=3;

			if(j<=0)
			 break;

			time+=2;
			hops++;
			j-=1;

			if(j<=0)
			  break;
			
			time+=5;
			
       		}

		System.out.println("The total number of hops is :"+hops);
		System.out.println("The total waiting time is :"+time);

	}
}