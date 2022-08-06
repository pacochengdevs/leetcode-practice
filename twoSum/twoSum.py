from typing import List

def twoSum(nums: List[int], target:int) -> List[int]:
    for i in range(len(nums)):
        for j in range(1,len(nums)-i):
            if(nums[i]+nums[j+i]==target):
                return [i,j+i]
            if (i == len(nums) - 1):
                return "No Solution!"  
