public class ActionClass {
    public static void main(String[] args) {
        String pass = "dummyPassword1";
        int number_of_changes = strongPasswordChecker(pass);
        System.out.println("the anwer is: "+number_of_changes);
    }

    public static int strongPasswordChecker(String pass) {
        int answer = 0;

        if (pass.length()<6)        answer += 6-pass.length();
        else if (pass.length()>20)  answer += pass.length()-20;

        for (int i=0; i<pass.length()-2; i++){
            if(pass.charAt(i)==pass.charAt(i+1)){
                if (pass.charAt(i)==pass.charAt(i+2)){
                    answer +=1;
                    i +=2;
                }else {
                    i+=1;
                }
            }
        }

        Boolean lower_case_bool = false;
        Boolean upper_case_bool = false;
        Boolean digit_bool = false;

        while (!lower_case_bool && !upper_case_bool && !digit_bool){
            for (int i=0; i<pass.length(); i++){
                if (Character.isLowerCase(pass.charAt(i))){
                    lower_case_bool = true;
                }else if (Character.isUpperCase(pass.charAt(i))){
                    upper_case_bool = true;
                }else if (Character.isDigit(pass.charAt(i))){
                    digit_bool = true;
                }
            }
        }

        if (!lower_case_bool)answer +=1;
        if (!upper_case_bool)answer +=1;
        if (!digit_bool)answer +=1;

        return answer;
    }
}
