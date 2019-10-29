
class StringManipulator {
    String trimAndConcat(String x, String y) {
        return x.trim() + y.trim();
    }
    Integer getIndexOrNull(String str, char ch) {
        return str.indexOf(ch);
    }
    Integer getIndexOrNull(String str, String ch) {
        return str.indexOf(ch);
    }
    String concatSubstring(String str1, int n1, int n2, String str2) {
        String tmp = str1.substring(n1, n2);
        return tmp.concat(str2);
    }
}


public class StringManipulatorTest {
    public static void main(String[] args) {
        StringManipulator manipulator = new StringManipulator();
        char letter = 'o';
        Integer a = manipulator.getIndexOrNull("Coding", letter);
        Integer b = manipulator.getIndexOrNull("Hello World", letter);
        Integer c = manipulator.getIndexOrNull("Hi", letter);
        System.out.println(a); // 1
        System.out.println(b); // 4
        System.out.println(c); // null

        
        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        Integer a2 = manipulator.getIndexOrNull(word, subString);
        Integer b2 = manipulator.getIndexOrNull(word, notSubString);
        System.out.println(a2); // 2
        System.out.println(b2); // null

        String word2 = manipulator.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word2); // eworld
    }
}
