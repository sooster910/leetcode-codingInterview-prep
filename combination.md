## Combination and its variations

### Combination
- Combination is a selection of items from a collection, such that the order of selection does not matter.
- The number of ways to select r items from n items is given by the formula:
  - C(n, r) = n! / (r! * (n - r)!)

#### Example
- Given a collection of 3 items: {1, 2, 3}
- The number of ways to select 2 items from the collection is 3.
- The possible combinations are:
  - {1, 2}
  - {1, 3}
  - {2, 3}

여기서 중요한점은 1, 2 와 2, 1은 같은 조합이므로, 첫번 째 인덱스가  두번째 선택한 인덱스보다 작아야 한다. 
이걸 구현하려면 
```python

def combination(arr):
    
    def dfs( )

```
![combination.png](..%2F..%2F..%2FPictures%2FMonosnap%2Fcombination.png)