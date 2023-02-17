// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// функция-предикат isOdd() возвращает true, если переданное в неё число нечётное
const isOdd = (num) => num % 2 !== 1;

// метод filter() возвращает новый массив, состоящий из только из тех элементов первоначального массива, на которых функция-колбэк вернёт true
const odd = numbers.filter(isOdd);

console.log(odd); // => [1, 3, 5, 7, 9]