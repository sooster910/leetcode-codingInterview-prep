
class Solution:
    def compress(self, chars: List[str]) -> int:
        # 1. 문자열 압축
        compressed = []
        count = 1
        for i in range(1, len(chars) + 1):
            if i < len(chars) and chars[i] == chars[i-1]:
                count += 1
            else:
                compressed.append(chars[i-1])
                if count > 1:
                    compressed.extend(list(str(count)))
                count = 1
        
        # 2. 압축 결과를 원래 리스트에 복사
        for i in range(len(compressed)):
            chars[i] = compressed[i]
        
        # 3. 압축된 결과의 길이 반환
        return len(compressed)


        