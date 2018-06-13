function is_prime(num){
    if(num===2 || num===3) return true
    if(num % 2 === 0 || num % 3 === 0) return false
    let i = 5;
    while (i*i <= num){
        if (num % i === 0 || num % (i+2) === 0) return false
        i = i + 6;
    }
    return true;
}

function prime_factors(num){
    let tmp = 2;
    let str = ""
    while(num >= tmp * tmp){
        if(num % tmp === 0){
            str += tmp + ' * '
            num=num/tmp
        }
        
        else
            tmp++
    }
    return str
}

function nth_fibonacci(num){
    if(num < 2) return num

    return nth_fibonacci(num-1) + nth_fibonacci(num-2)
}

function gcd(a, b){
    return a === 0 ? b : gcd(b%a, a)
}

function remove_dups_unsorted(arr){
    let storage = {}
    arr.map(val => {
        storage[val] ? false : storage[val] = true
    })
    return Object.keys(storage)
}

function remove_dups_sorted(arr){
    return arr.filter((val, idx, self) => {
        return self.indexOf(val) === idx
    })
}

function merge_sorted_arr(a, b){
    return a.concat(b).sort((a, b) => a-b) 
}

function swap_vars(){
    let a=2
    let b=3
    console.log(a, b)
    b = [a, a=b][0]
    console.log(a, b)
    return
}

function reverse_string(str){
    return str.split('').reverse().join('')
}

function reverse_sentence_in_place(str){
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

function non_repeted_char(str){
    let storage = {}
    str.split('').map(el => {
        if(storage[el]){
            return storage[el]++
        }
        storage[el] = 1;
    })

    return Object.keys(storage).filter(el => storage[el] === 1)[0]
}

function remove_dups_str(str){
    return str.split('').filter((el,idx,self) => {
        return self.indexOf(el) === idx
    }).join('')
}

function is_palindrome(a, b){
    return a.split('').reverse().join('') === b
}

function missing_num_arr(arr){
    let num;
    arr.sort((a,b) => a-b).map((el, idx) => {
        if(arr[idx+1] === undefined) return 
        num = el+1 === arr[idx+1] ? num :  el+1
        return
    })
    return num   
}

function two_arr_sum(arr, sum){
    let store = {}
    let results = []
    arr.map((el, idx) => {
        if(store[el] !== undefined){
            results.push(store[el], el)
            return
        }
        store[sum - el] = el
    })
    return results
}

function largest_sum(arr){
    arr.sort((a, b) => b - a)
    return arr[0] + arr[1]
}

function match_substr(str, sub){
    return str.split(sub).length - 1
}



module.exports = {
    is_prime,
    prime_factors,
    nth_fibonacci,
    gcd,
    remove_dups_unsorted,
    remove_dups_sorted,
    merge_sorted_arr,
    swap_vars,
    reverse_string,
    reverse_sentence_in_place,
    non_repeted_char,
    remove_dups_str,
    is_palindrome,
    missing_num_arr,
    two_arr_sum,
    largest_sum,
    match_substr
}