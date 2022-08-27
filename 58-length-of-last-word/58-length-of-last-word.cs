public class Solution {
    public int LengthOfLastWord(string s) {
        string str = s.Trim();
        char[] result = str.ToCharArray();
        char a = ' ';
        for (int i = result.Length; i --> 0; )
        {
            if(result[i] == a){
                return (result.Length - i - 1);
            }
        }
        return result.Length;
    }
}