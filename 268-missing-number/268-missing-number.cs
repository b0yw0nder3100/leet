public class Solution {
    public int MissingNumber(int[] nums) {
        int APsum = ((nums.Length + 1) * ( (2*0) + (nums.Length + 1 - 1) ))/2;
        int sum = 0;
        for (int i = 0; i < nums.Length;i++){
            sum += nums[i];
        }
        return APsum - sum;
    }
}


// add ths sum in the array your given and compare it with the one its meant to be given every number is present(use sum of AP)