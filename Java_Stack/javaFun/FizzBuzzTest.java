class FizzBuzz {
    public String fizzBuzz(int number) {
        String str = "";
        for (int i=0 ; i<= number; i++) {
            if (i%3==0 && i%5==0) {
                str += "FizzBuzz ";
            }else if (i%3==0 && i%5!=0) {
                str += "Fizz ";
            }else if (i%3!=0 && i%5==0) {
                str += "Buzz ";
            }else {
                str += i+" ";
            }
        }
        return str;
    }
}

public class FizzBuzzTest {
    public static void main(String[] args) {
        FizzBuzz fzbz = new FizzBuzz();
        System.out.println(fzbz.fizzBuzz(60));
    }
}