const {
  quickSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  heapSort,
  bucketSort,
  radixSort,
  countingSort,
} = require("./sort");

// 定义排序算法列表
const sortingAlgorithms = [
  { name: "快速排序 (Quick Sort)", func: quickSort },
  { name: "归并排序 (Merge Sort)", func: mergeSort },
  { name: "堆排序 (Heap Sort)", func: heapSort },
  { name: "计数排序 (Counting Sort)", func: countingSort },
  { name: "基数排序 (Radix Sort)", func: radixSort },
  { name: "桶排序 (Bucket Sort)", func: bucketSort },
  { name: "插入排序 (Insertion Sort)", func: insertionSort },
  { name: "冒泡排序 (Bubble Sort)", func: bubbleSort },
];

// 验证排序结果是否正确
function isSortCorrect(sortedArray, expectedArray) {
  if (sortedArray.length !== expectedArray.length) return false;

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== expectedArray[i]) return false;
  }

  return true;
}

// 格式化持续时间，对于小于1ms的时间使用微秒显示
function formatDuration(ms) {
  if (ms < 1) {
    return `${(ms * 1000).toFixed(2)}μs`;
  }
  return `${ms.toFixed(2)}ms`;
}

// 运行性能测试
function runPerformanceTests() {
  console.log("\x1b[1m%s\x1b[0m", "JavaScript 排序算法性能测试\n");

  // 1. 首先验证每个算法是否正确地排序
  console.log("\x1b[1;36m%s\x1b[0m", "🔍 验证排序算法正确性");
  console.log("=".repeat(80));

  const testCases = [
    { name: "空数组", arr: [] },
    { name: "单一元素数组", arr: [42] },
    { name: "已排序数组", arr: [1, 2, 3, 4, 5] },
    { name: "逆序数组", arr: [5, 4, 3, 2, 1] },
    { name: "含有重复元素", arr: [3, 1, 4, 1, 5, 9, 2, 6, 5] },
    { name: "随机数组", arr: [23, 45, 12, 67, 89, 34, 56] },
  ];

  const allCorrect = true;

  testCases.forEach((testCase) => {
    const expected = [...testCase.arr].sort((a, b) => a - b);

    sortingAlgorithms.forEach((algorithm) => {
      const result = algorithm.func([...testCase.arr]);
      const correct = isSortCorrect(result, expected);

      if (!correct) {
        console.log(`❌ ${algorithm.name} 在 "${testCase.name}" 测试中失败`);
        console.log(`   输入: [${testCase.arr.join(", ")}]`);
        console.log(`   期望: [${expected.join(", ")}]`);
        console.log(`   实际: [${result.join(", ")}]`);
        allCorrect = false;
      }
    });
  });

  if (allCorrect) {
    console.log("\x1b[32m%s\x1b[0m", "✅ 所有算法的排序结果都正确\n");
  }

  // 2. 随机数组性能测试
  console.log("\x1b[1;36m%s\x1b[0m", "🚀 随机数组排序性能测试");
  console.log("=".repeat(80));

  const sizes = [1000, 10000, 50000];

  sizes.forEach((size) => {
    console.log(`\n📊 数组大小: ${size.toLocaleString()}`);
    console.log("-".repeat(80));

    // 生成随机测试数据
    const testArray = Array(size)
      .fill()
      .map(() => Math.floor(Math.random() * 10000));
    const expectedResult = [...testArray].sort((a, b) => a - b);

    const results = [];

    // 测试每种算法
    sortingAlgorithms.forEach((algorithm) => {
      const arrCopy = [...testArray];

      const start = performance.now();
      const sortedArray = algorithm.func(arrCopy);
      const end = performance.now();

      const timeElapsed = end - start;
      const isCorrect = isSortCorrect(sortedArray, expectedResult);

      results.push({
        name: algorithm.name,
        time: timeElapsed,
        isCorrect,
      });
    });

    // 按执行时间排序
    results.sort((a, b) => a.time - b.time);

    // 找出最快的算法作为基准
    const fastestTime = results[0].time;

    // 打印结果表格
    console.log(
      "算法名称".padEnd(30) +
        "执行时间".padEnd(15) +
        "相对性能".padEnd(15) +
        "正确性"
    );
    console.log("-".repeat(80));

    results.forEach((result) => {
      const relativeSpeed = result.time / fastestTime;
      const relativeSpeedText =
        relativeSpeed === 1 ? "基准 (1.0x)" : `${relativeSpeed.toFixed(2)}x 慢`;

      console.log(
        result.name.padEnd(30) +
          formatDuration(result.time).padEnd(15) +
          relativeSpeedText.padEnd(15) +
          (result.isCorrect ? "✓ 正确" : "❌ 错误")
      );
    });
  });

  // 3. 近乎有序数组测试
  console.log("\n\n");
  console.log("\x1b[1;36m%s\x1b[0m", "🔄 近乎有序数组排序性能测试");
  console.log("=".repeat(80));

  const size = 50000;
  const almostSortedArray = Array(size)
    .fill()
    .map((_, i) => i);

  // 随机交换5%的元素
  for (let i = 0; i < size * 0.05; i++) {
    const idx1 = Math.floor(Math.random() * size);
    const idx2 = Math.floor(Math.random() * size);
    [almostSortedArray[idx1], almostSortedArray[idx2]] = [
      almostSortedArray[idx2],
      almostSortedArray[idx1],
    ];
  }

  const expectedResult = [...almostSortedArray].sort((a, b) => a - b);
  const results = [];

  console.log(`\n📊 数组大小: ${size.toLocaleString()} (95% 已排序)`);
  console.log("-".repeat(80));

  sortingAlgorithms.forEach((algorithm) => {
    const arrCopy = [...almostSortedArray];

    const start = performance.now();
    const sortedArray = algorithm.func(arrCopy);
    const end = performance.now();

    const timeElapsed = end - start;
    const isCorrect = isSortCorrect(sortedArray, expectedResult);

    results.push({
      name: algorithm.name,
      time: timeElapsed,
      isCorrect,
    });
  });

  results.sort((a, b) => a.time - b.time);
  const fastestTime = results[0].time;

  console.log(
    "算法名称".padEnd(30) +
      "执行时间".padEnd(15) +
      "相对性能".padEnd(15) +
      "正确性"
  );
  console.log("-".repeat(80));

  results.forEach((result) => {
    const relativeSpeed = result.time / fastestTime;
    const relativeSpeedText =
      relativeSpeed === 1 ? "基准 (1.0x)" : `${relativeSpeed.toFixed(2)}x 慢`;

    console.log(
      result.name.padEnd(30) +
        formatDuration(result.time).padEnd(15) +
        relativeSpeedText.padEnd(15) +
        (result.isCorrect ? "✓ 正确" : "❌ 错误")
    );
  });

  // 4. 完全逆序数组测试
  console.log("\n\n");
  console.log("\x1b[1;36m%s\x1b[0m", "⬇️ 完全逆序数组排序性能测试");
  console.log("=".repeat(80));

  const reversedSize = 5000;
  const reversedArray = Array(reversedSize)
    .fill()
    .map((_, i) => reversedSize - i);

  const reversedExpected = [...reversedArray].sort((a, b) => a - b);
  const reversedResults = [];

  console.log(`\n📊 数组大小: ${reversedSize.toLocaleString()} (完全逆序)`);
  console.log("-".repeat(80));

  sortingAlgorithms.forEach((algorithm) => {
    const arrCopy = [...reversedArray];

    const start = performance.now();
    const sortedArray = algorithm.func(arrCopy);
    const end = performance.now();

    const timeElapsed = end - start;
    const isCorrect = isSortCorrect(sortedArray, reversedExpected);

    reversedResults.push({
      name: algorithm.name,
      time: timeElapsed,
      isCorrect,
    });
  });

  reversedResults.sort((a, b) => a.time - b.time);
  const reversedFastestTime = reversedResults[0].time;

  console.log(
    "算法名称".padEnd(30) +
      "执行时间".padEnd(15) +
      "相对性能".padEnd(15) +
      "正确性"
  );
  console.log("-".repeat(80));

  reversedResults.forEach((result) => {
    const relativeSpeed = result.time / reversedFastestTime;
    const relativeSpeedText =
      relativeSpeed === 1 ? "基准 (1.0x)" : `${relativeSpeed.toFixed(2)}x 慢`;

    console.log(
      result.name.padEnd(30) +
        formatDuration(result.time).padEnd(15) +
        relativeSpeedText.padEnd(15) +
        (result.isCorrect ? "✓ 正确" : "❌ 错误")
    );
  });

  console.log("\n\n");
  console.log("\x1b[1;32m%s\x1b[0m", "✅ 性能测试完成！");
}

// 启用 Node.js 中的性能API
globalThis.performance = globalThis.performance || {
  now: () => new Date().getTime(),
};

// 运行测试
runPerformanceTests();
