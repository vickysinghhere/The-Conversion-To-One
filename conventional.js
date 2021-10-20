import java.io.*;
public class Main {
    
    static int set_bits(int n) 
{ 
    int count = 0; 
  
    while (n > 0) 
    { 
        count += n % 2; 
        n /= 2; 
    } 
    return count; 
} 
  
// Function to return the minimum 
// steps required to reach 1 
static int getCoventionSteps(int n) 
{ 
    int ans = 0; 
  
    while (n != 1)  
    { 
  
        // If n is even then divide it by 2 
        if (n % 2 == 0) 
            n /= 2; 
  
        // If n is 3 or the number of set bits 
        // in (n - 1) is less than the number 
        // of set bits in (n + 1) 
        else if (n == 3
                || set_bits(n - 1) < set_bits(n + 1)) 
            n--; 
        else
            n++; 
  
        // Increment the number of steps 
        ans++; 
    } 
  
    // Return the minimum number of steps 
    return ans; 
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