package memento;

//Originator Class
import java.util.ArrayList;

public class FoodBasket {
    ArrayList<Food> foods = new ArrayList<Food>();
    
    public void addFood(Food food){
        foods.add(food);
    }
    
    public ArrayList<Food> getFoodBasket(){
        return (ArrayList<Food>) foods.clone();
    }
    
    public FoodBasketMemento save(){
        return new FoodBasketMemento(this.getFoodBasket());
    }
    
    public void revertBasket(FoodBasketMemento memento){
        foods=memento.getFoods();
    }

    @Override
    public String toString() {
        return "Food Basket{"+foods+"}";
    }
   
    
    static class FoodBasketMemento{
        ArrayList<Food> foods;

        public FoodBasketMemento(ArrayList<Food> foods) {
            this.foods = foods;
        }

        private ArrayList<Food> getFoods() {
            return foods;
        }
        
    }
}
