public class Solution {
    public int[] TwoSum(int[] nums, int target) {
            int[] sumArray = new int[2];
            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = 0; j < nums.Length-1; j++){
                    if(nums[i] + nums[j] == target){
                        sumArray[0] = i;
                        sumArray[1] = j;
                        break;
                    }
                }
            } 
        return sumArray;
    }
}