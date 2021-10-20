import java.io.*;
public class Main {
    
    public static int getCoventionSteps(int input){
        int step = 0;
        while(input >= 1){
            if(input % 2 == 0)
            step++;
            else input = input - 1;
        }
        return step;
    }
    
    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        try{
		    int noOFTestCase = Integer.parseInt(br.readLine());
		    for(int index = 0; index < noOFTestCase; index++){
		        int input = Integer.parseInt(br.readLine());
		        System.out.println(getCoventionSteps(input));
		    }
		}catch(Exception ex){
		    System.out.println("Error while getting data");
		}    
    }
}