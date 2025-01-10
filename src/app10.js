function showNumbers(limit) {
    const results = [];

    for (let i = 0; i <= limit; i++) {
        if (i / 2 === 0) {
            results.push(`${i} EVEN`);
        } else {
             results.push(`${i} ODD`);
        }
    }

    return results;
}

console.log(showNumbers(5))