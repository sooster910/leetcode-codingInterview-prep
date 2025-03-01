/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    
    // check if mat, target same otherwise false
    for(let r = 0; r<4; r++){
        //transpose 
        for(let i=0;i<mat.length; i++){
            for(let j= i+1;j<mat[0].length; j++){
                [mat[i][j], mat[j][i]]= [mat[j][i],mat[i][j]]
            }

        }

        //reverse the rows
        for( let i =0; i<mat.length; i++){
            for(let j =0; j<Math.floor(mat[0].length/2); j++){
                [mat[i][j], mat[i][mat[0].length-1-j]] = [mat[i][mat[0].length-1-j], mat[i][j]]
            }
        }

             //check 
        let isMatched = true
        for(let i =0; i<mat.length; i++){
            for(let j =0; j<mat[0].length; j++){
                if( mat[i][j] !==target[i][j]){
                    isMatched = false
                }
            }
        }
        if(isMatched){
            return true
        }

    }
    
    return false
        

};