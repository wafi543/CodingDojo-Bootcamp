import java.util.Random;

public class BankAccount {
    private String accountNumber;
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccounts = 0;
    private static double totalMoney = 0;

    public String getAccountNumber () {
        return this.accountNumber;
    }

    private static long getRandom () {
        return (long)(Math.random() * ((9999999999L - 1000000000L) + 1)) + 1000000000L;
    }

    public BankAccount () {
        this.accountNumber = (String) getRandom();
        numberOfAccounts++;
        this.checkingBalance = 0;
        this.savingsBalance = 0;
    }

    public double getCheckingBalance () {
        return this.checkingBalance;
    }

    public double getSavingsBalance () {
        return this.savingsBalance;
    }

    public void deposit (double value, boolean isInChecking) {
        if (isInChecking) {
            this.checkingBalance = this.checkingBalance + value;
        }else {
            this.savingsBalance = this.savingsBalance + value;
        }
        totalMoney = totalMoney + value;
    }

    public void withdraw (double value, boolean isInChecking) {
        if (isInChecking) {
            if (value <= this.checkingBalance) {
                this.checkingBalance = this.checkingBalance - value;
            }else {System.out.println("You don't have enough credit");}
        }else {
            if (value <= this.savingsBalance){
                this.savingsBalance = this.savingsBalance - value;
            }else {System.out.println("You don't have enough credit");}
        }
    }

    public static void getNumberOfAccounts () {
        System.out.println(numberOfAccounts);
    }

    public static void getTotalMoney () {
        System.out.println(totalMoney);
    }
}
