const N = 3

function combination(depth,arr){
	if(depth ===2){
		// console.log("end", arr)
		return 
	}
	// console.log("a", depth, arr)
	for(let i = depth; i<N; i++){
		// console.log("for", i, depth, arr)
		arr.push(i)
		combination(i+1,arr )
		
	}
	combination()
}


combination(0, [])