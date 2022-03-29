
export const sumPoints = (studentPoints) => {
    const result = Object.values(studentPoints).reduce(function(sum, current) {
        return sum + current;
      }, 0);
    return result
}
