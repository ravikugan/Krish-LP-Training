package PropertySeller;
import java.io.*;
import java.util.*;
public class Registry{
	private Map<PropertyType,Property> properties = new HashMap<PropertyType,Property>(); 	

	public Registry()
	{
		Initialize();
	}

	public Property getProperty(PropertyType type)
	{
		Property property=null;
		
		try{
			property =(Property)properties.get(type).clone();
		}catch(CloneNotSupportedException ex){
			System.out.println("This object does not support cloning");
		}
	
		return property;
	}



	private void Initialize()
	{
	        Warehouse w1 = new Warehouse();
		w1.setOwner("Kugan");
		w1.setPrice(120000);
		w1.setArea(3000);

		House h1 = new House();
		h1.setOwner("Ravi");
		h1.setPrice(10000);
		h1.setRooms(4);
		
		properties.put(PropertyType.WAREHOUSE,w1);
		properties.put(PropertyType.HOUSE,h1);
	}
}