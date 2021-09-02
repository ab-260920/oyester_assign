  function mostFrequent(arr, n) {

    let max_count = 1, res = arr[0];
    let curr_count = 1;
   
    for (let i = 1; i < n; i++)
    {
      if (arr[i] == arr[i - 1])
        curr_count++;
      else
      {
        if (curr_count > max_count)
        {
          max_count = curr_count;
          res = arr[i - 1];
        }
        curr_count = 1;
      }
    }
 
    if (curr_count > max_count)
    {
      max_count = curr_count;
      res = arr[n - 1];
    }
    return res;
  }
  function leastFrequent(arr, n) {
        let min_count = n+1, res1 = -1;
        let curr_min_count = 1;
           
        for (let j = 1; j < n; j++) {
            if (arr[j] == arr[j - 1])
                curr_min_count++;
            else {
                if (curr_min_count < min_count) {
                    min_count = curr_min_count;
                    res1 = arr[j - 1];
                }
                   
                curr_min_count = 1;
            }
        }
       
        if (curr_min_count < min_count)
        {
            min_count = curr_min_count;
            res1 = arr[n - 1];
        }
       
        return res1;
    }
 
// INPUT YOUR ARRAY HERE

    let arr = [2, 5, 2, 1, 3, 2, 1];
    let n = arr.length;
    arr.sort();
    let final_Arr = [];
    final_Arr.push(mostFrequent(arr,n));
    final_Arr.push(leastFrequent(arr,n));

    document.write(final_Arr);