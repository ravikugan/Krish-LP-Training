package memento;

import java.util.Stack;

//CareTaker
public class FoodBasketCareTaker {
    Stack<FoodBasket.FoodBasketMemento> history = new Stack<>();
    
    public void save(FoodBasket foodBasket){
        history.push(foodBasket.save());
    }
    
    public void revert(FoodBasket foodBasket){
        if(!history.isEmpty())
            foodBasket.revertBasket(history.pop());
        else
            System.out.println("Can't undo the food basket");
    }
}
