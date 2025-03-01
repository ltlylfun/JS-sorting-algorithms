# JavaScript 排序算法性能测试

[中文](#javascript-排序算法性能测试) | [English](#javascript-sorting-algorithm-performance-test)

这个项目包含了多种常见 JavaScript 排序算法的实现，并提供了详细的性能比较测试。

## 包含的排序算法

- 快速排序 (Quick Sort)
- 冒泡排序 (Bubble Sort)
- 插入排序 (Insertion Sort)
- 归并排序 (Merge Sort)
- 堆排序 (Heap Sort)
- 桶排序 (Bucket Sort)
- 基数排序 (Radix Sort)
- 计数排序 (Counting Sort)

## 运行性能测试

无需安装额外依赖，直接运行以下命令即可查看所有排序算法的性能比较：

```bash
npm start
```

或者

```bash
npm test
```

这将执行专门的性能测试脚本，并显示每种算法在不同数据集上的执行时间。性能测试包括：

- 不同大小的随机数组
- 近乎有序的数组
- 完全逆序的数组

性能测试结果将显示每种算法的执行时间（毫秒）和排序结果的正确性。

## 排序算法的时间复杂度

| 算法     | 最佳情况   | 平均情况   | 最坏情况   | 空间复杂度 |
| -------- | ---------- | ---------- | ---------- | ---------- |
| 快速排序 | O(n log n) | O(n log n) | O(n²)      | O(log n)   |
| 冒泡排序 | O(n)       | O(n²)      | O(n²)      | O(1)       |
| 插入排序 | O(n)       | O(n²)      | O(n²)      | O(1)       |
| 归并排序 | O(n log n) | O(n log n) | O(n log n) | O(n)       |
| 堆排序   | O(n log n) | O(n log n) | O(n log n) | O(1)       |
| 桶排序   | O(n + k)   | O(n + k)   | O(n²)      | O(n + k)   |
| 基数排序 | O(nk)      | O(nk)      | O(nk)      | O(n + k)   |
| 计数排序 | O(n + k)   | O(n + k)   | O(n + k)   | O(k)       |

其中，n 是数组长度，k 是数值范围或最大位数。

---

# JavaScript Sorting Algorithm Performance Test

[中文](#javascript-排序算法性能测试) | [English](#javascript-sorting-algorithm-performance-test)

This project contains implementations of various common JavaScript sorting algorithms and provides detailed performance comparison tests.

## Included Sorting Algorithms

- Quick Sort
- Bubble Sort
- Insertion Sort
- Merge Sort
- Heap Sort
- Bucket Sort
- Radix Sort
- Counting Sort

## Running the Performance Test

No additional dependencies needed. Just run the following command to see the performance comparison of all sorting algorithms:

```bash
npm start
```

Or

```bash
npm test
```

This will execute a specialized performance test script and display the execution time of each algorithm on different data sets. Performance tests include:

- Random arrays of different sizes
- Almost sorted arrays
- Completely reversed arrays

The performance test results will display the execution time (in milliseconds) and the correctness of the sorting result for each algorithm.

## Time Complexity of Sorting Algorithms

| Algorithm      | Best Case  | Average Case | Worst Case | Space Complexity |
| -------------- | ---------- | ------------ | ---------- | ---------------- |
| Quick Sort     | O(n log n) | O(n log n)   | O(n²)      | O(log n)         |
| Bubble Sort    | O(n)       | O(n²)        | O(n²)      | O(1)             |
| Insertion Sort | O(n)       | O(n²)        | O(n²)      | O(1)             |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) | O(n)             |
| Heap Sort      | O(n log n) | O(n log n)   | O(n log n) | O(1)             |
| Bucket Sort    | O(n + k)   | O(n + k)     | O(n²)      | O(n + k)         |
| Radix Sort     | O(nk)      | O(nk)        | O(nk)      | O(n + k)         |
| Counting Sort  | O(n + k)   | O(n + k)     | O(n + k)   | O(k)             |

Where n is the array length and k is the range of values or maximum number of digits.
