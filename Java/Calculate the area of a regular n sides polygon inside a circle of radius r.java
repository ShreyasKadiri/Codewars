/*
Write the following function:

public static double areaOfPolygonInsideCircle(double circleRadius, int numberOfSides) 
It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, 
or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number 
rounded to 3 decimal places.

Input :: Output Examples

areaOfPolygonInsideCircle(3, 3) // returns 11.691

areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

areaOfPolygonInsideCircle(4, 5) // returns 38.042

*/

class Kata {
  static double areaOfPolygonInsideCircle(double circleRadius, int numberOfSides) {
    double totalAngle=180./numberOfSides;
    double side1=circleRadius*Math.sin(Math.toRadians(totalAngle));
    double side2=circleRadius*Math.cos(Math.toRadians(totalAngle));
    return Math.round(side1*side2*numberOfSides*1000.0)/1000.0;
  }
}