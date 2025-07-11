/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    const countMapper = {}
    const valueLableMerged = values.map((value,i )=> [value, labels[i]])
    
    const sortedValueLableMerged = valueLableMerged.sort((a,b)=> b[0]-a[0])

    let selected = []
    for(const [value, label] of sortedValueLableMerged){
        if((countMapper[label] || 0) >= useLimit){
            continue
        }else{
            countMapper[label] = (countMapper[label]??0)+1
            selected.push(value)
        }

        if(selected.length === numWanted){
            return selected.reduce((acc, cur)=> acc+cur, 0)
        }
    }
    
    // 엣지케이스: selected.length와 numwanted 가 다른채 loop이 끝날 수도 있음
    return selected.reduce((acc, cur)=> acc+cur, 0)
};