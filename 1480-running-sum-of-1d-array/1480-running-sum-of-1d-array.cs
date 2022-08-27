public class Solution {
    public int[] RunningSum(int[] nums) {
        int sum = 0;
        int[] runsum = new int[nums.Length];
        for(int i = 0; i < nums.Length;i++){
            sum += nums[i];
            runsum[i] = sum;
        }
        return runsum;
    }
}