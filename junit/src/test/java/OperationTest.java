import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import static org.junit.jupiter.api.Assertions.*;

class OperationTest {

    @Test
    void divide() {
        Operation operation = new Operation();

        int result = operation.divide(6,3);
        Assertions.assertEquals(2,result);
    }

    @Test
    void dividebyzerotest() {
        final Operation operation = new Operation();
        Assertions.assertThrows(ArithmeticException.class, new Executable() {
            public void execute() throws Throwable {
                operation.divide(6,0);
            }
        });
    }

    @Test
    void sumtest(){
        Operation operation = new Operation();
        int result = operation.sum(03,40);
        Assertions.assertEquals(43, result);
    }

    @Test
    void multiplyTest(){
        Operation operation = new Operation();
        int result = operation.multiply(03,40);
        Assertions.assertEquals(120, result);
    }

    @Test
    void deffrenceTest(){
        Operation operation = new Operation();
        int result = operation.difference(03,4);
        Assertions.assertEquals(-1, result);
    }
}