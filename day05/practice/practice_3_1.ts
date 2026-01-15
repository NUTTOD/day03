{
  const objs: number[] = [10, 20, 30, 10, 20, 30, 20, 40];
  const sum: number = objs.reduce((total, current) => total + current, 0);
  console.log(sum);
}