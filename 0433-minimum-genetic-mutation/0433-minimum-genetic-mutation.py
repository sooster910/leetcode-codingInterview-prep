from collections import deque
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if startGene == endGene:
            return 0
        if endGene not in bank:
            return -1

        bank = set(bank)  # bank를 집합으로 변환하여 탐색 속도 향상
        queue = deque([(startGene, 0)])
        visited = set([startGene])

        while queue:
            current_gene, mutation_count = queue.popleft()

            # 가능한 모든 변형 생성
            for next_gene in self.get_mutations(current_gene, bank):
                if next_gene not in visited:
                    if next_gene == endGene:
                        return mutation_count + 1  # 목표에 도달했으므로 변형 횟수 반환
                    queue.append((next_gene, mutation_count + 1))
                    visited.add(next_gene)

        return -1  # 모든 가능성을 탐색했으나 목표 유전자에 도달하지 못했다면 -1 반환
    
    def get_mutations(self, current_gene, bank):
        mutations = []
        gene_length = len(current_gene)

        for gene in bank:
            # Count the number of differences between the current gene and the gene in the bank
            differences = sum(1 for i in range(gene_length) if current_gene[i] != gene[i])
            if differences == 1:
                mutations.append(gene)

        return mutations