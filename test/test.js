a = 1
b = 0
while (a <= 20) {
    if (a % 2 == 0) {
        a += 1
    } else {
        b = a
        a += 1
        console.log(b)
    }
}