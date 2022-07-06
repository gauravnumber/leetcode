fn fib(n: usize) -> usize {
    let mut f = vec![0; n + 2];

    f[0] = 0;
    f[1] = 1;

    let mut i: usize = 2;

    while i <= n {
        f[i] = f[i - 1] + f[i - 2];
        i += 1;
    }

    return f[n];
}

fn main() {
    let res = fib(12);

    println!("{:?}", res);
}