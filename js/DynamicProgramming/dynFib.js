'use strict';
/**
 * 1）动态规划是运筹学中用于求解决策过程中的最优化数学方法。 当然，我们在这里关注的是作为一种算法设计技术，作为一种使用多阶段决策过程最优的通用方法。
 * 它是应用数学中用于解决某类最优化问题的重要工具。
 * 2）如果问题是由交叠的子问题所构成，我们就可以用动态规划技术来解决它，一般来说，这样的子问题出现在对给定问题求解的递推关系中，这个递推关系包含了相
 * 同问题的更小子问题的解。动态规划法建议，与其对交叠子问题一次又一次的求解，不如把每个较小子问题只求解一次并把结果记录在表中（动态规划也是空间换时间
 * 的），这样就可以从表中得到原始问题的解。
 * 动态规划的思想是什么：记忆，空间换时间，不重复求解，由交叠子问题从较小问题解逐步决策，构造较大问题的解。
 */

/**
 * 动态规划求解 斐波那契 数列
 * 斐波那契 数列最简单的做法是使用递归。但是递归由于计算过程中的重复计算，效率非常低下。
 * 动态规划设计的算法从它能解决的最简单的子问题开始，继而通过得到的解，去解决其他更复杂的子问题，直到整个问题都被解决。
 * 所有子问题的解通常被存储在一个数组里面以便于访问。
 * 动态规划是 空间换时间
 */

let dynFib = function(n) {
    //result保存中间计算结果
    let result = [];
    result.push(0);
    result.push(1);
    if (n === 0 || n === 1) {
        return result[n];
    } else {
        for (let i = 2; i <= n; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }
    }
    return result[n];
}

/**
 * 尾递归求解斐波那契
 * @param  {Number} n    求解第几个
 * @param  {Number} pre1 第n个数
 * @param  {Number} pre2 第n个与第n+1个之和
 * @return {Number}      
 */
let fibByTailRecursion = function(n, pre1, pre2) {
    console.log(pre2);
    if (n < 2) {
        return pre1;
    } else {
        return fibByTailRecursion(n - 1, pre2, pre1 + pre2);
    }
}


console.log(fibByTailRecursion(5, 1, 1));