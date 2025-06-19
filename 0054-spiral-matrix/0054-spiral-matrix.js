var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const total = m * n;

    const dir = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0], // 위
    ];

    const result = [];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    let y = 0, x = 0, dirIndex = 0;

    for (let i = 0; i < total; i++) {
        result.push(matrix[y][x]);
        visited[y][x] = true;

        // 다음 위치 계산
        let ny = y + dir[dirIndex][0];
        let nx = x + dir[dirIndex][1];

        // 경계 또는 방문 여부 확인
        if (ny < 0 || ny >= m || nx < 0 || nx >= n || visited[ny][nx]) {
            // 방향 전환
            dirIndex = (dirIndex + 1) % 4;
            ny = y + dir[dirIndex][0];
            nx = x + dir[dirIndex][1];
        }

        y = ny;
        x = nx;
    }

    return result;
};
