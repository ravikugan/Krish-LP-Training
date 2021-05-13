
import java.util.Scanner;
public class FrogProblem3{



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
			if(hops%3==0 && j>0)
			{
				if(j!=i)
				  time+=5;
				hops++;
				j-=5;
				   
			}
			else
				break;

			if(hops%3 == 1 && j>0)
			{
				time+=1;
				hops++;
				j-=3;   
			}
			else
				break;

			if(hops%3 == 2 && j>0)
			{
				time+=2;
				hops++;
				j-=1;			
			}
			else
				break;
		
       		}

		System.out.println("The total number of hops is :"+hops);
		System.out.println("The total waiting time is :"+time);

	}
}