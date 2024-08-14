// class A extends Thread{
//     public void run(){
//         for(int i=0;i<10;i++){
//             System.out.println("Hello A");
//             try {
//                 Thread.sleep(10);
//             } catch (InterruptedException e) {
//                 e.printStackTrace();
//             }
//         }
//     }
// }

// class B extends Thread{
//     public void run(){
//         for(int i=0;i<10;i++){
//             try {
//                 Thread.sleep(10);
//             } catch (InterruptedException e) {
//                 e.printStackTrace();
//             }
//             System.out.println("Hello B");
//         }
//     }
// }


// Runnable supports multiple inheritance
// class A implements Runnable {
//     public void run() {
//         for (int i = 0; i < 10; i++) {
//             System.out.println("Hello A");
//             try {
//                 Thread.sleep(10);
//             } catch (InterruptedException e) {
//                 e.printStackTrace();
//             }
//         }
//     }
// }

// class B implements Runnable {
//     public void run() {
//         for (int i = 0; i < 10; i++) {
//             System.out.println("Hello B");
//             try {
//                 Thread.sleep(10);
//             } catch (InterruptedException e) {
//                 e.printStackTrace();
//             }
//         }
//     }
// }

class Counter {
    public int count;
    public synchronized void increament(){
        count++;
    }
}

public class ExampleTh {
    public static void main(String[] args) throws InterruptedException {
        // A obj = new A();
        // B obj1 = new B();

        // obj.start();
        // obj1.start();

        // System.out.println(obj.getPriority());
        // System.out.println(obj1.getPriority());
        // obj1.setPriority(Thread.MAX_PRIORITY);
        // obj.setPriority(5);

        // Runnable
        // Runnable obj1 = new A();
        // Runnable obj2 = new B();

        // Thread T1 = new Thread(obj1);
        // Thread T2 = new Thread(obj2);

        // T1.start();
        // T2.start();

        // Runnable obj1 = new Runnable() {
        //     public void run() {
        //         for (int i = 0; i < 10; i++) {
        //             System.out.println("Hello A");
        //             try {
        //                 Thread.sleep(10);
        //             } catch (InterruptedException e) {
        //                 e.printStackTrace();
        //             }
        //         }
        //     }
        // };
        // // Runnable is also functional interface so we use lamda expression
        // Runnable obj2 = () ->  {
        //     {
        //         for (int i = 0; i < 10; i++) {
        //             System.out.println("Hello B");
        //             try {
        //                 Thread.sleep(10);
        //             } catch (InterruptedException e) {
        //                 e.printStackTrace();
        //             }
        //         }
        //     }
        // };
        // Thread T3 = new Thread(obj1);
        // Thread T4 = new Thread(obj2);
        // T4.start();
        // T3.start();

        // Race Condtion -> when one variable is accessing with two threads
        Counter c = new Counter();
        Runnable obj1 = new Runnable() {
            public void run() {
                for(int i=0;i<10000;i++)
                {
                    c.increament();
                }
            }
        };
        Runnable obj2 = () ->  {
            {
                for(int i=0;i<10000;i++){
                    c.increament();
                }
            }
        };
        Thread T3 = new Thread(obj1);
        Thread T4 = new Thread(obj2);
        T4.start();
        T3.start();
        T4.join();
        T4.join(); // you can join when the two threads are completed is execution
        // join will not predicating it always unpredicatable
        // because threads are unpredicatable
        System.out.println(c.count);



    }
}
