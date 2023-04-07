// 1(fixed) -> permutation([2,3,4]) -> 2(fixed) -> permutation(3,4) -> ...
// 2(fixed) -> permutation([1,3,4]) -> 1(fixed) -> permutation(3,4) -> ...
// 3(fixed) -> permutation([1,2,4]) -> ...
// 4(fixed) -> permutation([1,2,3]) -> ...


const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
  };
  
  const arr = [1, 2, 3, 4];
  const result = getPermutations(arr, 3);
  console.log(result);
  // => [
  //   [ 1, 2, 3 ], [ 1, 2, 4 ],
  //   [ 1, 3, 2 ], [ 1, 3, 4 ],
  //   [ 1, 4, 2 ], [ 1, 4, 3 ],
  //   [ 2, 1, 3 ], [ 2, 1, 4 ],
  //   [ 2, 3, 1 ], [ 2, 3, 4 ],
  //   [ 2, 4, 1 ], [ 2, 4, 3 ],
  //   [ 3, 1, 2 ], [ 3, 1, 4 ],
  //   [ 3, 2, 1 ], [ 3, 2, 4 ],
  //   [ 3, 4, 1 ], [ 3, 4, 2 ],
  //   [ 4, 1, 2 ], [ 4, 1, 3 ],
  //   [ 4, 2, 1 ], [ 4, 2, 3 ],
  //   [ 4, 3, 1 ], [ 4, 3, 2 ]
  // ]