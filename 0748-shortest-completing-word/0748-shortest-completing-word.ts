function shortestCompletingWord(licensePlate: string, words: string[]): string {
  

    const sortedWords = words.sort((a,b)=> a.length - b.length)
    const validLicensePlate = licensePlate.replace(/[^a-zA-Z]/g, "").toLowerCase().split("").sort((a, b) => a.localeCompare(b)).join("");
    const validLicensePlateMap = new Map<string, number>();
    validLicensePlate.split("").forEach(char => validLicensePlateMap.set(char, ((validLicensePlateMap.get(char)||0)+1)))
    for (const word of sortedWords) {

        //word가 licensePlate를 충족하는지 확인
        //licensePlate의 알파벳이 word에 포함되어 있는지 확인
        //word의 길이가 licensePlate의 알파벳보다 짧은지 확인   
        const wordMap = new Map<string, number>();
        word.split("").forEach(char => wordMap.set(char, ((wordMap.get(char)||0)+1)));
   
        const isValid = Array.from(validLicensePlateMap).every(([key, value]) => {
            const count = wordMap.get(key);
            if(!count)return false
            return count >= value;
        })
        if(isValid) {
            return word;
        }
    }

   return ""
};