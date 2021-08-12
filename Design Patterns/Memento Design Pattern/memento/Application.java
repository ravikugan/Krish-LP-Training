package memento;


public class Application {
    
    public static void main(String[] args) {
        FoodBasketCareTaker ct = new FoodBasketCareTaker();
        FoodBasket fb = new FoodBasket();
        
        fb.addFood(new Food("Fish Rolls"));
        fb.addFood(new Food("Burger"));
        ct.save(fb);
        System.out.println(fb);
        
        fb.addFood(new Food("Submarine"));
        ct.save(fb);
        System.out.println(fb);
        
        fb.addFood(new Food("French Fries"));
        ct.save(fb);
        System.out.println(fb);
        
        fb.addFood(new Food("Cold Soda"));
       // ct.save(fb);
        System.out.println(fb);
        
        ct.revert(fb);
        System.out.println(fb);
        
        ct.revert(fb);
        System.out.println(fb);   
    }
}
