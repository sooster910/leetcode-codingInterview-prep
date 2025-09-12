function isAnagram(s: string, t: string): boolean {
    //Unicode characters?
    if( s.length !== t.length) return false
    const s_ = s.match(/[a-zA-Z]/g)
    const t_ = t.match(/[a-zA-Z]/g)

    const sMapper = new Map()
    const tMapper = new Map()
    s_.forEach((char)=> sMapper.set(char, (sMapper.get(char) || 0)+1 ))
    t_.forEach((char)=> tMapper.set(char, (tMapper.get(char) || 0)+1 ))

    return [...sMapper].every(([key,value])=>{
        return tMapper.has(key) && tMapper.get(key) ===value
    })


    
    
    
};