/*

You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.


*/


function pathFinder(maze)
{
    const stack=[];
    const rows=maze.split("\n");
    const size=rows.length;
    const size2=size*2;
    const ends=size-1;
    
    const map=new Array(size*size);
    
    //Valid move or not
    const checkMove=(x,y,idx)=> 
    {
        if(x===ends && y===ends) { 
        return foundEnds=true }     
        
        //Out of bound
        if (x<0||x>ends || y<0 || y>ends || rows[y][x] === "W") {
        return false }
        
        if (map[idx]===undefined) {
            map[idx]=1;
            stack[stackPos++]=x;
            stack[stackPos++]=y;            
        }
        return false;
    }
    
    var x,y,idx,stackPos=0,foundEnds=false;

    checkMove(0,0,0)
    while (stackPos) {
        y=stack[--stackPos];
        x=stack[--stackPos]+1;  
        idx=x+y*size;
        
        if(checkMove(x,y,idx)) break 
        x-=2;
        idx-=2;
        if (checkMove(x++,y,idx++)) break 
        y+=1;
        idx+=size;
        if (checkMove(x,y,idx)) break 
        if (checkMove(x,y-2,idx-size2))  break 
    }
    return foundEnds;
}
