/*
Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
struct node
{
  int value;
  node* left;
  node* right;
}
public class Node
{  
    public int Value;  
    public Node Left;  
    public Node Right;

    public Node(int value, Node left = null, Node right = null)
    {
      Value = value;
      Left = left;
      Right = right;
    }
}  
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
*/

#define NULL (0)
struct node
{
  int value;
  struct node* left;
  struct node* right;
};


int sumTheTreeValues(struct node* root)
{
  if(root==NULL)
  return 0;
  return sumTheTreeValues(root->left) + sumTheTreeValues(root->right)+root->value;
}
