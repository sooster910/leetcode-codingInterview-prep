<h2><a href="https://leetcode.com/problems/invert-binary-tree">226. Invert Binary Tree</a></h2><h3>Easy</h3><hr><p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" style="width: 500px; height: 165px;" />
<pre>
<strong>Input:</strong> root = [4,2,7,1,3,6,9]
<strong>Output:</strong> [4,7,2,9,6,3,1]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" style="width: 500px; height: 120px;" />
<pre>
<strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> [2,3,1]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

### Solution with Python

```python

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        self.invertOrder(root)
        return root

    def invertOrder(self,root):
        if not root:
            return

        self.invertOrder(root.left)
        self.invertOrder(root.right)
        self.swap(root)

    def swap(self,root):
        if not root:
            return
        temp = root.left
        root.left = root.right
        root.right = temp
        

```

### Solution with JS
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    invertOrder(root)
    return root

    function invertOrder(root){
       if(!root) return
    
        invertOrder(root.left)
        invertOrder(root.right)
        swap(root)  // if(root.right||root.left) 조건 추가 해주면 함수를 호출 연산 절약._
        
    }
        function swap(root){
            let temp = root.left
            root.left = root.right
            root.right = temp
        }
};

```

