function solution(n) {
    let count = 0;
    while(n > 0) {
        count += n % 10;
        n = parseInt(n / 10)
    }
    return count
}