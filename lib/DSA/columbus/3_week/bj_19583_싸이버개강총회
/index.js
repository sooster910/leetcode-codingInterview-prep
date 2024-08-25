/**
 * 
 * 
 * 
 * 
 */

const fs= require('fs')
const input= fs.readFileSync("./input.txt").toString().trim()

// 시간 문자열을 분 단위의 정수로 변환하는 함수
function parseTime(timeStr) {
    // 시간 문자열을 ':' 기준으로 나누고 숫자로 변환
    const [hours, minutes] = timeStr.split(':').map(Number);
    // 시간을 분 단위로 변환하여 반환
    return hours * 60 + minutes;
}

// 출석을 확인하는 메인 함수
function checkAttendance(input) {
    // 입력을 줄 단위로 나눔
    const lines = input.split('\n');
    // 첫 번째 줄에서 시작 시간, 종료 시간, 스트리밍 종료 시간을 파싱
    const [s, e, q] = lines[0].split(' ').map(parseTime);
    // 나머지 줄들은 채팅 기록
    const records = lines.slice(1);
    
    // 출석 인원을 세는 변수
    let count = 0
    
    // 입장한 사람들의 집합
    const enter = new Set()
    // 퇴장한 사람들의 집합
    const leave = new Set()
    
    // 각 채팅 기록에 대해 반복
    for (const record of records) {
        // 채팅 기록에서 시간과 이름을 분리
        const [timeStr, name] = record.split(' ');
        // 시간 문자열을 분 단위로 변환
        const time = parseTime(timeStr);
        
        // 개강총회 시작 시간 이전에 채팅한 경우 입장으로 처리
        if (time <= s) {
            enter.add(name);
        // 개강총회 종료 시간 이후, 스트리밍 종료 시간 이전에 채팅한 경우 퇴장으로 처리
        } else if (time >= e && time <= q) {
            leave.add(name)
        }
    }
    
    // 입장한 사람들 중 퇴장도 한 사람들을 카운트
    for (const e of enter) {
        if (leave.has(e)) {
            count += 1
        }
    }
    
    // 최종 출석 인원 반환
    return count
}

// 입력을 받아 출석 인원을 계산하고 출력
console.log(checkAttendance(input));