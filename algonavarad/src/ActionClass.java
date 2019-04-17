import java.util.Scanner;

public class ActionClass {
    public static void main(String[] args) {
        int kMaxOutside = 0;
        int n = 20;
        int m = 20;
        int[][] matrix = new int[n][m];
        for (int i=0; i<n; i++){
            System.out.print("n= "+ (i+1)+"  ");
            for (int j=0; j<m; j++){
                if (Math.random()<0.5){
                    matrix [i][j] = 0;
                }else {
                    matrix [i][j] = 1;
                }
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }

        for (int i=0; i<n; i++){
            for (int j=0; j<m; j++){
                int k = 0;
                boolean wahr = false;

              if (matrix [i][j] == 1){
                  k += 1;
                  wahr = true;

                  for (int a = i; a<i+k+1; a++) {
                      if (i+k<n && j+k<m){
                      for (int b = i; b <j+k+1; b++) {
                          wahr = wahr && (matrix[a][b] == 1);
                      }
                      if (k>kMaxOutside){
                          kMaxOutside=k;
                      }
                      if (wahr){
                          k +=1;
                      }else {
                          break;
                        }
                      }
                  }
              }
            }
        }
        System.out.println("the Answer: "+kMaxOutside);
    }
}
