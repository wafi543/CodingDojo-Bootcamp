import java.lang.Math;

class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
        double hypotenuse = Math.pow(legA,2) + Math.pow(legB, 2);
        double squareRoot = Math.sqrt(hypotenuse);
        return squareRoot;
    }
}

public class PythagoreanTheorem {
    public static void main(String[] args) {
        Pythagorean obj = new Pythagorean();
        double num = obj.calculateHypotenuse(5, 5);
        System.out.println(num);
    }
}