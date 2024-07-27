class Solution:
    def reverseWords(self, s: str) -> str:
        arr_s = s.split()
        return " ".join(arr_s[::-1])