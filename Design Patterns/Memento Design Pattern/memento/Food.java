package memento;

public class Food {
    String name;
    
    public Food(String name){
        this.name = name;
    }

    @Override
    public String toString() {
        return "Food{ name:="+name+" } ";
    }
}
