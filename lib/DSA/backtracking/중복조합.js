function combinationWithRepetition(availableNums, n){
  // 1️⃣ Base Case: 앞으로 선택해야할 개수가 1개만 남은 경우(= 트리의 마지막 레벨에 도착했을 때)
  if(n ===1) return arr.map((v)=>[v])

  const result = []
  // 2️⃣ 현재 레벨에서 가능한 모든 숫자를 순회 (트리의 각 가지)

  availableNums.forEach((selected , idx)=>{
    // 3️⃣ 현재 숫자 이후의 숫자들만 사용 (트리의 다음 레벨)
    const nextAvailableNums = availableNums.slice(idx); // idx부터 봄
    // 4️⃣ 다음 레벨로 재귀 (트리를 더 깊이 탐색)
    const combination = combinationWithRepetition( nextAvailableNums, n-1)
    // 5️⃣ 현재 숫자와 재귀 결과를 결합 (트리의 경로를 완성)
    const combinationsWithCurrent = combination.map((v)=>[selected, ...v]) // 리턴된 모든 조합에 현재 select한 숫자 추가하기
    result.push(...combinationsWithCurrent)

  })

  return result
}

const result = combinationWithRepetition([...Array(11).keys()],11) //0부터 11에서 n만큼 뽑는데 중복 가능
console.log(result)