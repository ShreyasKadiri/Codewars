/*
Your boss is making yet another absolutely absurd request. He wants you to write a function that creates an object, which implements a couple of interfaces. In fact, 
an entire list of interfaces. The catch? The list is different every time, and is in fact, essentially random.

You do know a bit about what the interfaces are supposed to do, however. Each interface declares a list of method pairs, each of which is made up of a get and a set 
method. For example, you might run into an interface like this:

public interface Date {

    Integer getYear();

    void setYear(Integer i);

    Integer getMonth();

    void setMonth(Integer i);

}
This interface being called Date, and having Year and Month as its method pairs. All of the interfaces will generally follow this pattern, some declaring more methods, 
some declaring less. You also know that you'll never run into any combination of interfaces that declare conflicting methods. Every interface is entirely unique and 
semi-random.

And as a lucky break, you also got access to the unit test code, which might come in as a handy reference, if you're ever stuck.



*/

import java.util.*;
import java.lang.reflect.*;

public class Interfacing {
    public static Object create(Class<?>[] interfaces) {
        return Proxy.newProxyInstance(interfaces[0].getClassLoader(), interfaces, new InvocationHandler() {
            final Map<String, Object> values = new HashMap<>();
            public Object invoke(Object o, Method method, Object[] objects) throws Throwable {
                String prop = method.getName().substring(3);
                if (method.getName().startsWith("set")) {
                    values.put(prop,objects[0]);
                    return null;
                } else {
                    return values.get(prop);
                }
            }
        });
    }
}