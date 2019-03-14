import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ActionClass {
    public static void main(String[] args) {
        List<Integer> originalList = new ArrayList<Integer>();
        List<Integer> answerList = new ArrayList<Integer>();
        originalList.add(1);
        originalList.add(2);
        originalList.add(7);
        originalList.add(3);
        originalList.add(1);
        originalList.add(5);
        originalList.add(3);
        originalList.add(7);

        System.out.println("the Original List: " + originalList);
        answerList = cleanUnicOnes(originalList);
        System.out.println("The Answer Lis: " + answerList);

    }

    private static List<Integer> cleanUnicOnes(List<Integer> originalList) {
        List<Integer> finalList = new ArrayList<Integer>();
        HashMap<Integer, Integer> chest = new HashMap<Integer, Integer>();

        for (Integer member : originalList){
            if (!chest.containsKey(member)){
                chest.put(member,1);
            }else if (chest.containsKey(member)){
                int itterate = chest.get(member);
                chest.put(member,itterate+1);
            }
        }

        for (int i=0; i<originalList.size(); i++){
            if (chest.get(originalList.get(i)) != 1) {
                finalList.add(originalList.get(i));
            }
        }
        return finalList;
    }
}
