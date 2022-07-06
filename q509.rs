// not working
fn fib(n: i32) {
    // let m = n + 2;
    let mut f:[i32; 7];
    // let mut f: Vec<i32> = vec![];

    f[0] = 0;
    f[1] = 1;

    let mut i = 2;

    while i <= n {
        f[i] = f[i - 1] + f[i - 2];
        i += 1;
    }

    return f[n];
}

fn main() {
    let res = fib(5);

    println!("{:?}", res);
}