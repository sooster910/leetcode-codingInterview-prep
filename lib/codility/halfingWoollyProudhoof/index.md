## 문제 에서 정의를 잘해야 한다.


Halfling Woolly Proudhoof is an eminent sheep herder. He wants to build a pen (enclosure) for his new flock of sheep. The pen will be rectangular and built from exactly four pieces of fence (so, the pieces of fence forming the opposite sides of the pen must be of equal length). Woolly can choose these pieces out of N pieces of fence that are stored in his barn. To hold the entire flock, the area of the pen must be greater than or equal to a given threshold X.

can choose : 이것도 중요하다. 직접 사용한다는 것이다. 그러니 문제를 풀 때 사용하는 것에 대한 차감이 필요하다.


Woolly is interested in. **the number of different ways in which he can build a pen.** <--return 해야 하는것 . pen 을 만들기 위해 사용되는 여러가지 방법의 수를 알고 싶은 것이다. 

1. area는 같지만 한변과 다른 한변의 길이가 다르면 different하다고 간주한다 -> 즉 문제에서 number of different 니깐 이 경우의 different는 number of different에 포함이 되어야 한다. 그래서 --> 카운트 한다.

Pens are considered different if the sets of lengths of their sides are different. For example, a pen of size 1×4 is different from a pen of size 2×2 (although both have an area of 4), but pens of sizes 1×2 and 2×1 are considered the same.

Write a function:  <-- 문제가 시작 된다.

function solution(A, X);

that, given an array A of N integers (containing the lengths of the available pieces of fence) and an integer X, **returns the number of different ways of building a rectangular pen satisfying the above conditions.**  <-- 이 부분이 필요한것 . The function should return −1 if the result exceeds 1,000,000,000.


For example, given X = 5 and the following array A:

  A[0] = 1
  A[1] = 2
  A[2] = 5
  A[3] = 1
  A[4] = 1
  A[5] = 2
  A[6] = 3
  A[7] = 5
  A[8] = 1


the function should return 2. The figure above shows available pieces of fence (on the left) and possible to build pens (on the right). The pens are of sizes 1x5 and 2x5. Pens of sizes 1×1 and 1×2 can be built, but are too small in area. It is not possible to build pens of sizes 2×3 or 3×5, as there is only one piece of fence of length 3.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
X is an integer within the range [1..1,000,000,000];
each element of array A is an integer within the range [1..1,000,000,000].



