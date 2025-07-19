function monotoneIncreasingDigits(n: number): number {
    
    const digits = n.toString().split("").map(Number) 
    // 11 이상일  경우, 
    //역순 부터 순회해서, 감소관계인 경우 현재 인덱스를 
    // 감소관계라면, prev의 값을 -1 해서 업데이트
    // pointer 현재 i를 가리키기
    let pointer = null
    for(let i =digits.length-1; i>=1; i--){
        if(digits[i-1]>digits[i]){
            digits[i-1] -=1
            pointer=i
        }
        
    }

    //pointer부터 모두 9로 만들기 
    if(pointer){
        for(let i =pointer; i<digits.length; i++){
            digits[i] = 9
        }
    }
    return Number(digits.join(""))
};