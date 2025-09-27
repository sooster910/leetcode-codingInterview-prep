function productExceptSelf(nums: number[]): number[] {
    // return array , answer[i] is equal to the 
    // product of all element of nums except nums[i] 
   const prefixProduct = nums.reduce((acc, cur, i) => {
    acc[i] = (acc[i - 1] ?? 1) * cur;
    return acc;
  }, []);

  const postfixProduct = nums.reduceRight((acc, cur, i) => {
    console.log( cur, i)
    acc[i] = (acc[i + 1] ?? 1) * cur;
    return acc;
  },[])

  //prefix 는 left, postfix 는 right 인데, 현재 인덱스 제외해야 하니깐 prefix[i-1]*postfix[i+1]
  const productExceptSelf = prefixProduct.map((prefix, i)=> (prefixProduct[i-1]??1) * (postfixProduct[i+1]??1)
  )

  return productExceptSelf
};