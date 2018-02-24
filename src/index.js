module.exports = function solveEquation(equation) {
    equation = equation.split(' ');
    a = +equation[0];
    b = +(equation[3]+equation[4])
    c = +(equation[7]+equation[8])
    d = Math.sqrt(b*b - 4 * c * a);
    x = [];
    x[0] = Math.round((-b - d)/(2*a));
    x[1] = Math.round((-b + d)/(2*a));
    x.sort((left, right) => left - right);
    return x;
}
