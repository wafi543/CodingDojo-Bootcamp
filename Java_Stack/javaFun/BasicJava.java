import java.lang.Math;

import sun.security.util.Length;

public class BasicJava {
    public void oneTo255() {
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }

    public void oddOneTo255() {
        for (int i = 1; i <= 255; i = i + 2) {
            System.out.println(i);
        }
    }

    public void sumOneTo255() {
        int sum = 0;
        for (int i = 0; i <= 255; i++) {
            sum += i;
            System.out.println("New number: " + i + " Sum: " + sum);
        }
    }

    public void iteratingArray(int[] arr) {
        for (int item : arr) {
            System.out.println(item);
        }
    }

    public void findMax(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println("Max : " + max);
    }

    public void getAverage(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println(sum / arr.length);
    }

    private static int[] push(int[] array, int push) {
        int[] longer = new int[array.length + 1];
        for (int i = 0; i < array.length; i++)
            longer[i] = array[i];
        longer[array.length] = push;
        return longer;
    }

    public void arrayWithOddNumbers() {
        int[] arr = new int[0];
        for (int i = 1; i <= 255; i = i + 2) {
            arr = push(arr, i);
        }
    }

    public int greaterThanY(int[] arr, int y) {
        int count = 0;
        for (int i=0; i<arr.length; i++) {
            if (arr[i] > y) {
                count += 1;
            }
        }
        return count;
    }

    public void squareTheValues (int[] x) {
        int[] arr = x;
        for (int i=0; i<x.length; i++) {
            arr[i] = x[i] * x[i];
        }
        System.out.println(x);
    }

    public void eliminateNegativeNumbers (int[] x) {
        int[] arr = x;
        for (int i=0; i<arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = 0;
            }
        }
        System.out.println(x);
    }

    public int[] minMaxAvg (int[] x) {
        int max = x[0];
        int min = x[0];
        int avg = 0;
        for (int i=0; i<x.length; i++) {
            if (x[i] > max) {
                max = x[i];
            }
            if (x[i] < min) {
                min = x[i];
            }
            avg += x[i];
        }
        avg = avg/x.length;
        int[] result = new int[3];
        result[0] = max;
        result[1] = min;
        result[2] = avg;
        return result;
    }
}