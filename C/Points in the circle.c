/*
You have the radius of a circle with the center in point (0,0).

Write a function that calculates the number of points in the circle where (x,y) - the cartesian coordinates of the points - are integers.

Example: for radius = 2 the result should be 13.

0 <= radius <= 1000
*/

int pointsNumber(int radius) 
{
int count=0;
for(int i=1;i<=radius;i++) {
count+=(int)(sqrt(radius*radius-i*i));
}
  return  1+4*(radius+count);
}
