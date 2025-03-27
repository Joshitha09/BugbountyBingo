// Bug data for all languages
const bug_data = {
    python: {
        "bug_1": {
            "code": "def fibonacci(n):\n    if n == 0:\n        return 1\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)",
            "test_case": "fibonacci(5)",
            "expected_output": "5"
        },
        "bug_2": {
            "code": "def factorial(n):\n    return n * factorial(n - 1)",
            "test_case": "factorial(5)",
            "expected_output": "120"
        },
        "bug_3": {
        "code": "def merge_sort(arr):\n    if len(arr) < 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)",
        "test_case": "merge_sort([4, 3, 2, 1])",
        "expected_output": "[1, 2, 3, 4]"
    },
    "bug_4": {
        "code": "def binary_search(arr, target):\n    mid = len(arr) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] > target:\n        return binary_search(arr[:mid], target)\n    else:\n        return binary_search(arr[mid:], target)",
        "test_case": "binary_search([1, 3, 5, 7, 9], 5)",
        "expected_output": "2"
    },
    "bug_5": {
        "code": "def is_palindrome(s):\n    return s.lower() == s[::-1]",
        "test_case": "is_palindrome('Madam')",
        "expected_output": "True"
    },
    "bug_6": {
        "code": "def quicksort(arr):\n    if len(arr) < 1:\n        return arr\n    pivot = arr[0]\n    left = [x for x in arr if x < pivot]\n    right = [x for x in arr if x >= pivot]\n    return quicksort(left) + [pivot] + quicksort(right)",
        "test_case": "quicksort([3, 6, 8, 10, 1, 2, 1])",
        "expected_output": "[1, 1, 2, 3, 6, 8, 10]"
    },
    "bug_7": {
        "code": "def gcd(a, b):\n    while b:\n        a = b\n        b = a % b\n    return abs(a)",
        "test_case": "gcd(-8, 12)",
        "expected_output": "4"
    },
    "bug_8": {
        "code": "def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr) - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr",
        "test_case": "bubble_sort([5, 3, 8, 1, 2])",
        "expected_output": "[1, 2, 3, 5, 8]"
    },
    "bug_9": {
        "code": "def reverse_string(s):\n    return s[::-2]",
        "test_case": "reverse_string(\"hello\")",
        "expected_output": "'olleh'"
    },
    "bug_10": {
        "code": "def sum_list(lst):\n    total = 0\n    for i in range(len(lst) + 1):\n        total += lst[i]\n    return total",
        "test_case": "sum_list([1, 2, 3, 4])",
        "expected_output": "10"
    },
    "bug_11": {
        "code": "def count_vowels(s):\n    count = 0\n    for char in s:\n        if char in 'aeiou':\n            count += 1\n    return count",
        "test_case": "count_vowels('Hello World')",
        "expected_output": "3"
    },
    "bug_12": {
        "code": "def power(x, n):\n    if n == 0:\n        return 1\n    elif n < 0:\n        return 1 / power(x, -n)\n    return x * power(x, n - 1)",
        "test_case": "power(2, 3)",
        "expected_output": "8"
    },
    "bug_13": {
        "code": "def remove_duplicates(lst):\n    seen = []\n    return [x for x in lst if not (x in seen or seen.append(x))]",
        "test_case": "remove_duplicates([1, 3, 3, 5, 5])",
        "expected_output": "[1, 3, 5]"
    },
    "bug_14": {
        "code": "def multiply_list(lst):\n    result = 1\n    for num in lst:\n        result *= num\n    return result if result != 0 else 1",
        "test_case": "multiply_list([2, 3, 4])",
        "expected_output": "24"
    },
    "bug_15": {
        "code": "def find_max(lst):\n    max_num = lst[0]\n    for num in lst:\n        if num >= max_num:\n            max_num = num\n    return max_num",
        "test_case": "find_max([1, 5, 3, 9, 2])",
        "expected_output": "9"
    },
    "bug_16": {
        "code": "def count_words(s):\n    words = s.split()\n    return len(words) + 1",
        "test_case": "count_words(\"Hello world! This is a test.\")",
        "expected_output": "6"
    },
    "bug_17": {
        "code": "def anagram_check(s1, s2):\n    return sorted(s1.lower()) == sorted(s2)",
        "test_case": "anagram_check(\"Listen\", \"Silent\")",
        "expected_output": "True"
    },
    "bug_18": {
        "code": "def find_min(lst):\n    min_num = lst[0]\n    for num in lst:\n        if num > min_num:\n            min_num = num\n    return min_num",
        "test_case": "find_min([4, 2, 9, 1])",
        "expected_output": "1"
    },
    "bug_19": {
        "code": "def is_leap_year(year):\n    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\n        return False\n    return True",
        "test_case": "is_leap_year(2000), is_leap_year(1900)",
        "expected_output": "True, False"
    },
    "bug_20": {
        "code": "def square_elements(lst):\n    return [x*x for x in lst if x >= 0]",
        "test_case": "square_elements([1, 2, 3, 4, -1, -2])",
        "expected_output": "[1, 4, 9, 16]"
    },
    "bug_21": {
        "code": "def count_occurrences(lst, target):\n    count = 0\n    for num in lst:\n        if num = target:\n            count += 1\n    return count",
        "test_case": "count_occurrences([1, 2, 2, 3, 4, 2], 2)",
        "expected_output": "3"
    },
    "bug_22": {
        "code": "def reverse_list(lst):\n    return lst.sort()",
        "test_case": "reverse_list([5, 3, 8, 1, 2])",
        "expected_output": "[8, 5, 3, 2, 1]"
    },
    "bug_23": {
        "code": "def word_count(sentence):\n    words = sentence.split()\n    return {word: words.count(word) for word in set(words)}",
        "test_case": "word_count(\"apple banana apple orange apple banana\")",
        "expected_output": "{'apple': 3, 'banana': 2, 'orange': 1}"
    },
    "bug_24": {
        "code": "def capitalize_names(names):\n    return [name.capitalize for name in names]",
        "test_case": "capitalize_names(['alice', 'bob', 'charlie'])",
        "expected_output": "['Alice', 'Bob', 'Charlie']"
    },
    "bug_25": {
        "code": "def get_even_numbers(lst):\n    return filter(lambda x: x % 2 == 0, lst)",
        "test_case": "get_even_numbers([1, 2, 3, 4, 5, 6])",
        "expected_output": "[2, 4, 6]"
    }
},

// ... (keep the bug_data_python object the same as before)

// Game state
        // ... (all your Python bugs)
    
        java: {
            "bug_1": {
                "code": "public class Main {\n    public static int factorial(int n) {\n        return n * factorial(n - 1);\n    }\n}",
                "test_case": "factorial(5)",
                "expected_output": "120",
                "hidden_tests": [
                    {
                        "test_case": "factorial(0)",
                        "expected_output": "1"
                    },
                    {
                        "test_case": "factorial(6)",
                        "expected_output": "720"
                    }
                ]
            },
            "bug_2": {
                "code": "public class Main {\n    public static int fibonacci(int n) {\n        if (n == 0) return 1;\n        if (n == 1) return 1;\n        return fibonacci(n-1) + fibonacci(n-2);\n    }\n}",
                "test_case": "fibonacci(5)",
                "expected_output": "5",
                "hidden_tests": [
                    {
                        "test_case": "fibonacci(0)",
                        "expected_output": "0"
                    },
                    {
                        "test_case": "fibonacci(6)",
                        "expected_output": "8"
                    }
                ]
            },
            "bug_3": {
        "code": "public class Main {\n    public static int[] mergeSort(int[] arr) {\n        if (arr.length < 1) return arr;\n        int mid = arr.length / 2;\n        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));\n        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));\n        return merge(left, right);\n    }\n}",
        "test_case": "mergeSort(new int[]{4, 3, 2, 1})",
        "expected_output": "[1, 2, 3, 4]",
        "hidden_tests": [
            {"test_case": "mergeSort(new int[]{5, 1, 4, 2, 8})", "expected_output": "[1, 2, 4, 5, 8]"},
            {"test_case": "mergeSort(new int[]{})", "expected_output": "[]"}
        ]
    },
    "bug_4": {
        "code": "public class Main {\n    public static int binarySearch(int[] arr, int target) {\n        int mid = arr.length / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] > target) return binarySearch(Arrays.copyOfRange(arr, 0, mid), target);\n        else return binarySearch(Arrays.copyOfRange(arr, mid, arr.length), target);\n    }\n}",
        "test_case": "binarySearch(new int[]{1, 3, 5, 7, 9}, 5)",
        "expected_output": "2",
        "hidden_tests": [
            {"test_case": "binarySearch(new int[]{1, 2, 3, 4, 5}, 1)", "expected_output": "0"},
            {"test_case": "binarySearch(new int[]{10, 20, 30}, 30)", "expected_output": "2"}
        ]
    },
    "bug_5": {
        "code": "public class Main {\n    public static boolean isPalindrome(String s) {\n        return s.toLowerCase().equals(new StringBuilder(s).reverse().toString());\n    }\n}",
        "test_case": "isPalindrome(\"Madam\")",
        "expected_output": "true",
        "hidden_tests": [
            {"test_case": "isPalindrome(\"racecar\")", "expected_output": "true"},
            {"test_case": "isPalindrome(\"hello\")", "expected_output": "false"}
        ]
    },"bug_6": {
        "code": "public class Main {\n    public static int[] quickSort(int[] arr) {\n        if (arr.length < 1) return arr;\n        int pivot = arr[0];\n        ArrayList<Integer> left = new ArrayList<>();\n        ArrayList<Integer> right = new ArrayList<>();\n        for (int x : arr) {\n            if (x < pivot) left.add(x);\n            else right.add(x);\n        }\n        return concatenate(quickSort(left.toArray(new Integer[0])), \n                          new int[]{pivot}, \n                          quickSort(right.toArray(new Integer[0])));\n    }\n}",
        "test_case": "quickSort(new int[]{3, 6, 8, 10, 1, 2, 1})",
        "expected_output": "[1, 1, 2, 3, 6, 8, 10]",
        "hidden_tests": [
            {"test_case": "quickSort(new int[]{5, 3, 7})", "expected_output": "[3, 5, 7]"},
            {"test_case": "quickSort(new int[]{})", "expected_output": "[]"}
        ]
    },
    "bug_7": {
        "code": "public class Main {\n    public static int gcd(int a, int b) {\n        while (b != 0) {\n            a = b;\n            b = a % b;\n        }\n        return Math.abs(a);\n    }\n}",
        "test_case": "gcd(-8, 12)",
        "expected_output": "4",
        "hidden_tests": [
            {"test_case": "gcd(54, 24)", "expected_output": "6"},
            {"test_case": "gcd(0, 5)", "expected_output": "5"}
        ]
    },
    "bug_8": {
        "code": "public class Main {\n    public static int[] bubbleSort(int[] arr) {\n        for (int i = 0; i < arr.length; i++) {\n            for (int j = 0; j < arr.length - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n        return arr;\n    }\n}",
        "test_case": "bubbleSort(new int[]{5, 3, 8, 1, 2})",
        "expected_output": "[1, 2, 3, 5, 8]",
        "hidden_tests": [
            {"test_case": "bubbleSort(new int[]{1, 2, 3})", "expected_output": "[1, 2, 3]"},
            {"test_case": "bubbleSort(new int[]{})", "expected_output": "[]"}
        ]
    },
    "bug_9": {
        "code": "public class Main {\n    public static String reverseString(String s) {\n        return new StringBuilder(s).reverse().substring(0, s.length()/2 + 1);\n    }\n}",
        "test_case": "reverseString(\"hello\")",
        "expected_output": "\"olleh\"",
        "hidden_tests": [
            {"test_case": "reverseString(\"world\")", "expected_output": "\"dlrow\""},
            {"test_case": "reverseString(\"\")", "expected_output": "\"\""}
        ]
    },
    "bug_10": {
        "code": "public class Main {\n    public static int sumList(int[] lst) {\n        int total = 0;\n        for (int i = 0; i <= lst.length; i++) {\n            total += lst[i];\n        }\n        return total;\n    }\n}",
        "test_case": "sumList(new int[]{1, 2, 3, 4})",
        "expected_output": "10",
        "hidden_tests": [
            {"test_case": "sumList(new int[]{10, 20, 30})", "expected_output": "60"},
            {"test_case": "sumList(new int[]{})", "expected_output": "0"}
        ]
    },
    "bug_11": {
        "code": "public class Main {\n    public static int countVowels(String s) {\n        int count = 0;\n        for (char c : s.toCharArray()) {\n            if (\"aeiou\".indexOf(c) >= 0) count++;\n        }\n        return count;\n    }\n}",
        "test_case": "countVowels(\"Hello World\")",
        "expected_output": "3",
        "hidden_tests": [
            {"test_case": "countVowels(\"AEIOU\")", "expected_output": "5"},
            {"test_case": "countVowels(\"xyz\")", "expected_output": "0"}
        ]
    },
    "bug_12": {
        "code": "public class Main {\n    public static double power(double x, int n) {\n        if (n == 0) return 1;\n        else if (n < 0) return 1 / power(x, -n);\n        return x * power(x, n - 1);\n    }\n}",
        "test_case": "power(2, 3)",
        "expected_output": "8.0",
        "hidden_tests": [
            {"test_case": "power(3, 2)", "expected_output": "9.0"},
            {"test_case": "power(5, 0)", "expected_output": "1.0"}
        ]
    },
    "bug_13": {
        "code": "public class Main {\n    public static ArrayList<Integer> removeDuplicates(ArrayList<Integer> lst) {\n        ArrayList<Integer> seen = new ArrayList<>();\n        ArrayList<Integer> result = new ArrayList<>();\n        for (Integer x : lst) {\n            if (!seen.contains(x)) {\n                seen.add(x);\n                result.add(x);\n            }\n        }\n        return result;\n    }\n}",
        "test_case": "removeDuplicates(new ArrayList<>(Arrays.asList(1, 3, 3, 5, 5)))",
        "expected_output": "[1, 3, 5]",
        "hidden_tests": [
            {"test_case": "removeDuplicates(new ArrayList<>(Arrays.asList(2, 2, 2)))", "expected_output": "[2]"},
            {"test_case": "removeDuplicates(new ArrayList<>())", "expected_output": "[]"}
        ]
    },
    "bug_14": {
        "code": "public class Main {\n    public static int multiplyList(ArrayList<Integer> lst) {\n        int result = 1;\n        for (int num : lst) {\n            result *= num;\n        }\n        return result != 0 ? result : 1;\n    }\n}",
        "test_case": "multiplyList(new ArrayList<>(Arrays.asList(2, 3, 4)))",
        "expected_output": "24",
        "hidden_tests": [
            {"test_case": "multiplyList(new ArrayList<>(Arrays.asList(5, 0, 2)))", "expected_output": "0"},
            {"test_case": "multiplyList(new ArrayList<>())", "expected_output": "1"}
        ]
    },
    "bug_15": {
        "code": "public class Main {\n    public static int findMax(int[] lst) {\n        int maxNum = lst[0];\n        for (int num : lst) {\n            if (num >= maxNum) maxNum = num;\n        }\n        return maxNum;\n    }\n}",
        "test_case": "findMax(new int[]{1, 5, 3, 9, 2})",
        "expected_output": "9",
        "hidden_tests": [
            {"test_case": "findMax(new int[]{-1, -5, -3})", "expected_output": "-1"},
            {"test_case": "findMax(new int[]{7})", "expected_output": "7"}
        ]
    },
    "bug_16": {
        "code": "public class Main {\n    public static int countWords(String s) {\n        String[] words = s.split(\" \");\n        return words.length + 1;\n    }\n}",
        "test_case": "countWords(\"Hello world! This is a test.\")",
        "expected_output": "6",
        "hidden_tests": [
            {"test_case": "countWords(\"Single\")", "expected_output": "1"},
            {"test_case": "countWords(\"\")", "expected_output": "0"}
        ]
    },
    "bug_17": {
        "code": "public class Main {\n    public static boolean anagramCheck(String s1, String s2) {\n        char[] arr1 = s1.toLowerCase().toCharArray();\n        char[] arr2 = s2.toCharArray();\n        Arrays.sort(arr1);\n        Arrays.sort(arr2);\n        return Arrays.equals(arr1, arr2);\n    }\n}",
        "test_case": "anagramCheck(\"Listen\", \"Silent\")",
        "expected_output": "true",
        "hidden_tests": [
            {"test_case": "anagramCheck(\"hello\", \"world\")", "expected_output": "false"},
            {"test_case": "anagramCheck(\"\", \"\")", "expected_output": "true"}
        ]
    },
    "bug_18": {
        "code": "public class Main {\n    public static int findMin(int[] lst) {\n        int minNum = lst[0];\n        for (int num : lst) {\n            if (num > minNum) minNum = num;\n        }\n        return minNum;\n    }\n}",
        "test_case": "findMin(new int[]{4, 2, 9, 1})",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "findMin(new int[]{5, 3, 7})", "expected_output": "3"},
            {"test_case": "findMin(new int[]{-1, -5, -3})", "expected_output": "-5"}
        ]
    },
    "bug_19": {
        "code": "public class Main {\n    public static boolean isLeapYear(int year) {\n        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n            return false;\n        }\n        return true;\n    }\n}",
        "test_case": "isLeapYear(2000)",
        "expected_output": "true",
        "hidden_tests": [
            {"test_case": "isLeapYear(1900)", "expected_output": "false"},
            {"test_case": "isLeapYear(2020)", "expected_output": "true"}
        ]
    },
    "bug_20": {
        "code": "public class Main {\n    public static ArrayList<Integer> squareElements(ArrayList<Integer> lst) {\n        ArrayList<Integer> result = new ArrayList<>();\n        for (int x : lst) {\n            if (x >= 0) result.add(x * x);\n        }\n        return result;\n    }\n}",
        "test_case": "squareElements(new ArrayList<>(Arrays.asList(1, 2, 3, 4, -1, -2)))",
        "expected_output": "[1, 4, 9, 16]",
        "hidden_tests": [
            {"test_case": "squareElements(new ArrayList<>(Arrays.asList(-5, -3)))", "expected_output": "[]"},
            {"test_case": "squareElements(new ArrayList<>())", "expected_output": "[]"}
        ]
    },
    "bug_21": {
        "code": "public class Main {\n    public static int countOccurrences(int[] lst, int target) {\n        int count = 0;\n        for (int num : lst) {\n            if (num = target) count++;\n        }\n        return count;\n    }\n}",
        "test_case": "countOccurrences(new int[]{1, 2, 2, 3, 4, 2}, 2)",
        "expected_output": "3",
        "hidden_tests": [
            {"test_case": "countOccurrences(new int[]{5, 5, 5}, 5)", "expected_output": "3"},
            {"test_case": "countOccurrences(new int[]{}, 1)", "expected_output": "0"}
        ]
    }, "bug_22": {
        "code": "public class Main {\n    public static ArrayList<Integer> reverseList(ArrayList<Integer> lst) {\n        Collections.sort(lst);\n        return lst;\n    }\n}",
        "test_case": "reverseList(new ArrayList<>(Arrays.asList(5, 3, 8, 1, 2)))",
        "expected_output": "[8, 5, 3, 2, 1]",
        "hidden_tests": [
            {"test_case": "reverseList(new ArrayList<>(Arrays.asList(1, 2, 3)))", "expected_output": "[3, 2, 1]"},
            {"test_case": "reverseList(new ArrayList<>())", "expected_output": "[]"}
        ]
    },
    "bug_23": {
        "code": "public class Main {\n    public static HashMap<String, Integer> wordCount(String sentence) {\n        String[] words = sentence.split(\" \");\n        HashMap<String, Integer> counts = new HashMap<>();\n        for (String word : words) {\n            counts.put(word, counts.getOrDefault(word, 0) + 1);\n        }\n        return counts;\n    }\n}",
        "test_case": "wordCount(\"apple banana apple orange apple banana\")",
        "expected_output": "{apple=3, banana=2, orange=1}",
        "hidden_tests": [
            {"test_case": "wordCount(\"a a a b b c\")", "expected_output": "{a=3, b=2, c=1}"},
            {"test_case": "wordCount(\"\")", "expected_output": "{}"}
        ]
    },
    "bug_24": {
        "code": "public class Main {\n    public static ArrayList<String> capitalizeNames(ArrayList<String> names) {\n        ArrayList<String> result = new ArrayList<>();\n        for (String name : names) {\n            result.add(name.toUpperCase().charAt(0) + name.substring(1));\n        }\n        return result;\n    }\n}",
        "test_case": "capitalizeNames(new ArrayList<>(Arrays.asList(\"alice\", \"bob\", \"charlie\")))",
        "expected_output": "[\"Alice\", \"Bob\", \"Charlie\"]",
        "hidden_tests": [
            {"test_case": "capitalizeNames(new ArrayList<>(Arrays.asList(\"john\", \"mary\")))", "expected_output": "[\"John\", \"Mary\"]"},
            {"test_case": "capitalizeNames(new ArrayList<>())", "expected_output": "[]"}
        ]
    },
    "bug_25": {
        "code": "public class Main {\n    public static ArrayList<Integer> getEvenNumbers(ArrayList<Integer> lst) {\n        ArrayList<Integer> result = new ArrayList<>();\n        for (int num : lst) {\n            if (num % 2 == 0) result.add(num);\n        }\n        return result;\n    }\n}",
        "test_case": "getEvenNumbers(new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6)))",
        "expected_output": "[2, 4, 6]",
        "hidden_tests": [
            {"test_case": "getEvenNumbers(new ArrayList<>(Arrays.asList(1, 3, 5)))", "expected_output": "[]"},
            {"test_case": "getEvenNumbers(new ArrayList<>())", "expected_output": "[]"}
        ]
    }
            // ... more Java bugs
        },
        c: {
            // ... (keep your existing C bugs)
            "bug_1": {
        "code": "#include <stdio.h>\n\nint factorial(int n) {\n    return n * factorial(n - 1);\n}",
        "test_case": "factorial(5)",
        "expected_output": "120",
        "hidden_tests": [
            {"test_case": "factorial(0)", "expected_output": "1"},
            {"test_case": "factorial(6)", "expected_output": "720"}
        ]
    },
    "bug_2": {
        "code": "#include <stdio.h>\n\nint fibonacci(int n) {\n    if (n == 0) return 1;\n    if (n == 1) return 1;\n    return fibonacci(n-1) + fibonacci(n-2);\n}",
        "test_case": "fibonacci(5)",
        "expected_output": "5",
        "hidden_tests": [
            {"test_case": "fibonacci(0)", "expected_output": "0"},
            {"test_case": "fibonacci(6)", "expected_output": "8"}
        ]
    },
    "bug_3": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid merge_sort(int arr[], int size) {\n    if (size < 1) return;\n    int mid = size / 2;\n    merge_sort(arr, mid);\n    merge_sort(arr + mid, size - mid);\n    merge(arr, mid, size);\n}",
        "test_case": "int arr[] = {4, 3, 2, 1};\nmerge_sort(arr, 4);\n// Check arr contents",
        "expected_output": "[1, 2, 3, 4]",
        "hidden_tests": [
            {"test_case": "int arr[] = {5, 1, 4, 2, 8};\nmerge_sort(arr, 5);", "expected_output": "[1, 2, 4, 5, 8]"},
            {"test_case": "int arr[] = {};\nmerge_sort(arr, 0);", "expected_output": "[]"}
        ]
    },
    "bug_4": {
        "code": "#include <stdio.h>\n\nint binary_search(int arr[], int size, int target) {\n    int mid = size / 2;\n    if (arr[mid] == target) return mid;\n    else if (arr[mid] > target) return binary_search(arr, mid, target);\n    else return binary_search(arr + mid, size - mid, target);\n}",
        "test_case": "int arr[] = {1, 3, 5, 7, 9};\nbinary_search(arr, 5, 5)",
        "expected_output": "2",
        "hidden_tests": [
            {"test_case": "int arr[] = {1, 2, 3, 4, 5};\nbinary_search(arr, 5, 1)", "expected_output": "0"},
            {"test_case": "int arr[] = {10, 20, 30};\nbinary_search(arr, 3, 30)", "expected_output": "2"}
        ]
    },
    "bug_5": {
        "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint is_palindrome(char *s) {\n    int len = strlen(s);\n    for (int i = 0; i < len; i++) {\n        if (tolower(s[i]) != tolower(s[len-i-1])) return 0;\n    }\n    return 1;\n}",
        "test_case": "is_palindrome(\"Madam\")",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "is_palindrome(\"racecar\")", "expected_output": "1"},
            {"test_case": "is_palindrome(\"hello\")", "expected_output": "0"}
        ]
    },
    "bug_6": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid quick_sort(int arr[], int size) {\n    if (size < 1) return;\n    int pivot = arr[0];\n    int *left = malloc(size * sizeof(int));\n    int *right = malloc(size * sizeof(int));\n    int left_size = 0, right_size = 0;\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] < pivot) left[left_size++] = arr[i];\n        else right[right_size++] = arr[i];\n    }\n    \n    quick_sort(left, left_size);\n    quick_sort(right, right_size);\n    \n    // Missing merge step\n    free(left);\n    free(right);\n}",
        "test_case": "int arr[] = {3, 6, 8, 10, 1, 2, 1};\nquick_sort(arr, 7);\n// Check arr contents",
        "expected_output": "[1, 1, 2, 3, 6, 8, 10]",
        "hidden_tests": [
            {"test_case": "int arr[] = {5, 3, 7};\nquick_sort(arr, 3);", "expected_output": "[3, 5, 7]"},
            {"test_case": "int arr[] = {};\nquick_sort(arr, 0);", "expected_output": "[]"}
        ]
    },
    "bug_7": {
        "code": "#include <stdlib.h>\n\nint gcd(int a, int b) {\n    while (b) {\n        a = b;\n        b = a % b;\n    }\n    return abs(a);\n}",
        "test_case": "gcd(-8, 12)",
        "expected_output": "4",
        "hidden_tests": [
            {"test_case": "gcd(54, 24)", "expected_output": "6"},
            {"test_case": "gcd(0, 5)", "expected_output": "5"}
        ]
    },
    "bug_8": {
        "code": "#include <stdio.h>\n\nvoid bubble_sort(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        for (int j = 0; j < size - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}",
        "test_case": "int arr[] = {5, 3, 8, 1, 2};\nbubble_sort(arr, 5);\n// Check arr contents",
        "expected_output": "[1, 2, 3, 5, 8]",
        "hidden_tests": [
            {"test_case": "int arr[] = {1, 2, 3};\nbubble_sort(arr, 3);", "expected_output": "[1, 2, 3]"},
            {"test_case": "int arr[] = {};\nbubble_sort(arr, 0);", "expected_output": "[]"}
        ]
    },
    "bug_9": {
        "code": "#include <string.h>\n\nvoid reverse_string(char *s) {\n    int len = strlen(s);\n    for (int i = 0; i < len/2; i++) {\n        char temp = s[i];\n        s[i] = s[len-i];\n        s[len-i] = temp;\n    }\n}",
        "test_case": "char s[] = \"hello\";\nreverse_string(s);",
        "expected_output": "\"olleh\"",
        "hidden_tests": [
            {"test_case": "char s[] = \"world\";\nreverse_string(s);", "expected_output": "\"dlrow\""},
            {"test_case": "char s[] = \"\";\nreverse_string(s);", "expected_output": "\"\""}
        ]
    },
    "bug_10": {
        "code": "#include <stdio.h>\n\nint sum_list(int lst[], int size) {\n    int total = 0;\n    for (int i = 0; i <= size; i++) {\n        total += lst[i];\n    }\n    return total;\n}",
        "test_case": "int lst[] = {1, 2, 3, 4};\nsum_list(lst, 4)",
        "expected_output": "10",
        "hidden_tests": [
            {"test_case": "int lst[] = {10, 20, 30};\nsum_list(lst, 3)", "expected_output": "60"},
            {"test_case": "int lst[] = {};\nsum_list(lst, 0)", "expected_output": "0"}
        ]
    },
    "bug_11": {
        "code": "#include <stdio.h>\n#include <string.h>\n\nint count_vowels(char *s) {\n    int count = 0;\n    for (int i = 0; i < strlen(s); i++) {\n        if (strchr(\"aeiou\", s[i])) count++;\n    }\n    return count;\n}",
        "test_case": "count_vowels(\"Hello World\")",
        "expected_output": "3",
        "hidden_tests": [
            {"test_case": "count_vowels(\"AEIOU\")", "expected_output": "5"},
            {"test_case": "count_vowels(\"xyz\")", "expected_output": "0"}
        ]
    },
    "bug_12": {
        "code": "#include <stdio.h>\n\ndouble power(double x, int n) {\n    if (n == 0) return 1;\n    else if (n < 0) return 1 / power(x, -n);\n    return x * power(x, n - 1);\n}",
        "test_case": "power(2, 3)",
        "expected_output": "8.0",
        "hidden_tests": [
            {"test_case": "power(3, 2)", "expected_output": "9.0"},
            {"test_case": "power(5, 0)", "expected_output": "1.0"}
        ]
    },
    "bug_13": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* remove_duplicates(int lst[], int size, int *new_size) {\n    int *seen = malloc(size * sizeof(int));\n    int *result = malloc(size * sizeof(int));\n    int count = 0;\n    \n    for (int i = 0; i < size; i++) {\n        int found = 0;\n        for (int j = 0; j < count; j++) {\n            if (lst[i] == seen[j]) {\n                found = 1;\n                break;\n            }\n        }\n        if (!found) {\n            seen[count] = lst[i];\n            result[count++] = lst[i];\n        }\n    }\n    \n    *new_size = count;\n    free(seen);\n    return result;\n}",
        "test_case": "int lst[] = {1, 3, 3, 5, 5};\nint new_size;\nint *result = remove_duplicates(lst, 5, &new_size);\n// Check result contents",
        "expected_output": "[1, 3, 5]",
        "hidden_tests": [
            {"test_case": "int lst[] = {2, 2, 2};\nint new_size;\nint *result = remove_duplicates(lst, 3, &new_size);", "expected_output": "[2]"},
            {"test_case": "int lst[] = {};\nint new_size;\nint *result = remove_duplicates(lst, 0, &new_size);", "expected_output": "[]"}
        ]
    },
    "bug_14": {
        "code": "#include <stdio.h>\n\nint multiply_list(int lst[], int size) {\n    int result = 1;\n    for (int i = 0; i < size; i++) {\n        result *= lst[i];\n    }\n    return result != 0 ? result : 1;\n}",
        "test_case": "int lst[] = {2, 3, 4};\nmultiply_list(lst, 3)",
        "expected_output": "24",
        "hidden_tests": [
            {"test_case": "int lst[] = {5, 0, 2};\nmultiply_list(lst, 3)", "expected_output": "0"},
            {"test_case": "int lst[] = {};\nmultiply_list(lst, 0)", "expected_output": "1"}
        ]
    },
    "bug_15": {
        "code": "#include <stdio.h>\n\nint find_max(int lst[], int size) {\n    int max_num = lst[0];\n    for (int i = 0; i < size; i++) {\n        if (lst[i] >= max_num) max_num = lst[i];\n    }\n    return max_num;\n}",
        "test_case": "int lst[] = {1, 5, 3, 9, 2};\nfind_max(lst, 5)",
        "expected_output": "9",
        "hidden_tests": [
            {"test_case": "int lst[] = {-1, -5, -3};\nfind_max(lst, 3)", "expected_output": "-1"},
            {"test_case": "int lst[] = {7};\nfind_max(lst, 1)", "expected_output": "7"}
        ]
    },
    "bug_16": {
        "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint count_words(char *s) {\n    int count = 0;\n    char *token = strtok(s, \" \");\n    while (token != NULL) {\n        count++;\n        token = strtok(NULL, \" \");\n    }\n    return count + 1;\n}",
        "test_case": "char s[] = \"Hello world! This is a test.\";\ncount_words(s)",
        "expected_output": "6",
        "hidden_tests": [
            {"test_case": "char s[] = \"Single\";\ncount_words(s)", "expected_output": "1"},
            {"test_case": "char s[] = \"\";\ncount_words(s)", "expected_output": "0"}
        ]
    },
    "bug_17": {
        "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n#include <stdlib.h>\n\nint anagram_check(char *s1, char *s2) {\n    int len1 = strlen(s1);\n    int len2 = strlen(s2);\n    if (len1 != len2) return 0;\n    \n    char *copy1 = strdup(s1);\n    char *copy2 = strdup(s2);\n    \n    for (int i = 0; i < len1; i++) {\n        copy1[i] = tolower(copy1[i]);\n        copy2[i] = tolower(copy2[i]);\n    }\n    \n    // Missing sort step\n    \n    int result = strcmp(copy1, copy2) == 0;\n    free(copy1);\n    free(copy2);\n    return result;\n}",
        "test_case": "anagram_check(\"Listen\", \"Silent\")",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "anagram_check(\"hello\", \"world\")", "expected_output": "0"},
            {"test_case": "anagram_check(\"\", \"\")", "expected_output": "1"}
        ]
    },
    "bug_18": {
        "code": "#include <stdio.h>\n\nint find_min(int lst[], int size) {\n    int min_num = lst[0];\n    for (int i = 0; i < size; i++) {\n        if (lst[i] > min_num) min_num = lst[i];\n    }\n    return min_num;\n}",
        "test_case": "int lst[] = {4, 2, 9, 1};\nfind_min(lst, 4)",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "int lst[] = {5, 3, 7};\nfind_min(lst, 3)", "expected_output": "3"},
            {"test_case": "int lst[] = {-1, -5, -3};\nfind_min(lst, 3)", "expected_output": "-5"}
        ]
    },
    "bug_19": {
        "code": "#include <stdio.h>\n\nint is_leap_year(int year) {\n    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n        return 0;\n    }\n    return 1;\n}",
        "test_case": "is_leap_year(2000)",
        "expected_output": "1",
        "hidden_tests": [
            {"test_case": "is_leap_year(1900)", "expected_output": "0"},
            {"test_case": "is_leap_year(2020)", "expected_output": "1"}
        ]
    },
    "bug_20": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* square_elements(int lst[], int size, int *new_size) {\n    int *result = malloc(size * sizeof(int));\n    *new_size = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (lst[i] >= 0) {\n            result[(*new_size)++] = lst[i] * lst[i];\n        }\n    }\n    \n    return result;\n}",
        "test_case": "int lst[] = {1, 2, 3, 4, -1, -2};\nint new_size;\nint *result = square_elements(lst, 6, &new_size);\n// Check result contents",
        "expected_output": "[1, 4, 9, 16]",
        "hidden_tests": [
            {"test_case": "int lst[] = {-5, -3};\nint new_size;\nint *result = square_elements(lst, 2, &new_size);", "expected_output": "[]"},
            {"test_case": "int lst[] = {};\nint new_size;\nint *result = square_elements(lst, 0, &new_size);", "expected_output": "[]"}
        ]
    },
    "bug_21": {
        "code": "#include <stdio.h>\n\nint count_occurrences(int lst[], int size, int target) {\n    int count = 0;\n    for (int i = 0; i < size; i++) {\n        if (lst[i] = target) count++;\n    }\n    return count;\n}",
        "test_case": "int lst[] = {1, 2, 2, 3, 4, 2};\ncount_occurrences(lst, 6, 2)",
        "expected_output": "3",
        "hidden_tests": [
            {"test_case": "int lst[] = {5, 5, 5};\ncount_occurrences(lst, 3, 5)", "expected_output": "3"},
            {"test_case": "int lst[] = {};\ncount_occurrences(lst, 0, 1)", "expected_output": "0"}
        ]
    },
    "bug_22": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nvoid reverse_list(int lst[], int size) {\n    for (int i = 0; i < size/2; i++) {\n        int temp = lst[i];\n        lst[i] = lst[size-i];\n        lst[size-i] = temp;\n    }\n}",
        "test_case": "int lst[] = {5, 3, 8, 1, 2};\nreverse_list(lst, 5);\n// Check lst contents",
        "expected_output": "[8, 5, 3, 2, 1]",
        "hidden_tests": [
            {"test_case": "int lst[] = {1, 2, 3};\nreverse_list(lst, 3);", "expected_output": "[3, 2, 1]"},
            {"test_case": "int lst[] = {};\nreverse_list(lst, 0);", "expected_output": "[]"}
        ]
    },
    "bug_23": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// This would need a more complex implementation for word count\n// Simplified for demo purposes\nvoid word_count(char *sentence) {\n    // Missing implementation\n}",
        "test_case": "word_count(\"apple banana apple orange apple banana\");\n// Check word counts",
        "expected_output": "{apple=3, banana=2, orange=1}",
        "hidden_tests": [
            {"test_case": "word_count(\"a a a b b c\");", "expected_output": "{a=3, b=2, c=1}"},
            {"test_case": "word_count(\"\");", "expected_output": "{}"}
        ]
    },
    "bug_24": {
        "code": "#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nvoid capitalize_names(char *names[], int size) {\n    for (int i = 0; i < size; i++) {\n        names[i][0] = toupper(names[i][0]);\n    }\n}",
        "test_case": "char *names[] = {\"alice\", \"bob\", \"charlie\"};\ncapitalize_names(names, 3);\n// Check names contents",
        "expected_output": "[\"Alice\", \"Bob\", \"Charlie\"]",
        "hidden_tests": [
            {"test_case": "char *names[] = {\"john\", \"mary\"};\ncapitalize_names(names, 2);", "expected_output": "[\"John\", \"Mary\"]"},
            {"test_case": "char *names[] = {};\ncapitalize_names(names, 0);", "expected_output": "[]"}
        ]
    },
    "bug_25": {
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint* get_even_numbers(int lst[], int size, int *new_size) {\n    int *result = malloc(size * sizeof(int));\n    *new_size = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (lst[i] % 2 == 0) {\n            result[(*new_size)++] = lst[i];\n        }\n    }\n    \n    return result;\n}",
        "test_case": "int lst[] = {1, 2, 3, 4, 5, 6};\nint new_size;\nint *result = get_even_numbers(lst, 6, &new_size);\n// Check result contents",
        "expected_output": "[2, 4, 6]",
        "hidden_tests": [
            {"test_case": "int lst[] = {1, 3, 5};\nint new_size;\nint *result = get_even_numbers(lst, 3, &new_size);", "expected_output": "[]"},
            {"test_case": "int lst[] = {};\nint new_size;\nint *result = get_even_numbers(lst, 0, &new_size);", "expected_output": "[]"}
        ]
    }
        }
    };
    
    // Enhanced Java validator
    async function validateJavaCode(userCode, bugData) {
        try {
            // 1. Basic syntax validation
            if (!validateJavaSyntax(userCode)) {
                throw new Error("Java syntax error");
            }
    
            // 2. Anti-cheating checks
            if (containsDirectReturn(userCode, bugData.expected_output)) {
                throw new Error("Don't return hardcoded values - fix the actual logic");
            }
    
            // 3. Hidden test case validation (simulated)
            const hiddenResults = await checkHiddenTestCases(userCode, bugData.hidden_tests);
            if (!hiddenResults.allPassed) {
                throw new Error(`Failed hidden test cases`);
            }
    
            return true;
        } catch (error) {
            throw error;
        }
    }
    
    // Helper functions
    function validateJavaSyntax(code) {
        const requiredPatterns = [
            /public\s+class\s+\w+/,
            /public\s+static\s+int\s+\w+\s*\(/,
            /return\s+.+;/
        ];
        
        const forbiddenPatterns = [
            /System\.exit/,
            /Runtime\.getRuntime\(\)/,
            /ProcessBuilder/
        ];
    
        return requiredPatterns.every(p => p.test(code)) && 
               !forbiddenPatterns.some(p => p.test(code));
    }
    
    function containsDirectReturn(code, expectedOutput) {
        // Escape special regex characters in expected output
        const escapedOutput = expectedOutput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp(`return\\s+${escapedOutput}\\s*;`).test(code);
    }
    
    // Simulated hidden test case validation
    async function checkHiddenTestCases(userCode, hiddenTests) {
        // In a real implementation, this would call a server-side validator
        // For demo, we'll simulate by checking for signs of correct logic
        
        const results = {
            allPassed: true,
            failedCases: []
        };
        
        if (!hiddenTests) return results; // Skip if no hidden tests
        
        // Check for signs of correct implementation
        hiddenTests.forEach(test => {
            let passed = false;
            
            // For factorial, check for base case and recursion
            if (test.test_case.includes("factorial")) {
                const hasBaseCase = /if\s*\(\s*n\s*==\s*0\s*\)\s*\{?\s*return\s*1\s*;?\s*\}?/.test(userCode);
                const hasRecursion = /return\s+n\s*\*\s*factorial\s*\(/.test(userCode);
                passed = hasBaseCase && hasRecursion;
            } 
            // For fibonacci, check for correct base cases and recursion
            else if (test.test_case.includes("fibonacci")) {
                const hasBaseCase0 = /if\s*\(\s*n\s*==\s*0\s*\)\s*\{?\s*return\s*0\s*;?\s*\}?/.test(userCode);
                const hasBaseCase1 = /if\s*\(\s*n\s*==\s*1\s*\)\s*\{?\s*return\s*1\s*;?\s*\}?/.test(userCode);
                const hasRecursion = /return\s+fibonacci\s*\(.*?\)\s*\+\s*fibonacci\s*\(.*?\)/.test(userCode);
                passed = (hasBaseCase0 || /if\s*\(\s*n\s*<=?\s*1\s*\)\s*\{?\s*return\s*n\s*;?\s*\}?/.test(userCode)) 
                         && hasRecursion;
            }
            
            if (!passed) {
                results.allPassed = false;
                results.failedCases.push(test.test_case);
            }
        });
        
        return results;
    }
    
    // In your submitSolution function:
    async function submitSolution(row, col, index, bugData) {
        const userCode = document.getElementById('userCode').value.trim();
        
        try {
            // First do client-side validation
            if (!validateJavaSyntax(userCode)) {
                throw new Error("Java syntax error - check your class and method declarations");
            }
            
            // Then validate the solution
            const isValid = await validateJavaCode(userCode, bugData);
            
            if (isValid) {
                markCellAsCorrect(row, col, index);
                showResult('✅ Correct! All test cases passed.', 'success');
                
                // Close modal after delay
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('buggedCodeModal'));
                    modal.hide();
                }, 1500);
            }
        } catch (error) {
            showResult(`❌ ${error.message}`, 'danger');
        }
    }
    
// Game state
let currentLanguage = '';
let bugDataArray = [];
let bingoState = {
    rows: new Array(5).fill(0),
    cols: new Array(5).fill(0),
    diagonal1: 0,
    diagonal2: 0
};
let completedCells = new Array(5).fill().map(() => new Array(5).fill(false));
let completedLetters = 0;
let correctAnswers = new Set();
let pyodideLoaded = false;

// Initialize the game when a language is selected
async function startGame(language) {
    currentLanguage = language;
    document.getElementById('languageSelection').style.display = 'none';
    document.getElementById('pythonGame').style.display = 'block';
    
    // Update game title based on language
    document.querySelector('.game-title').textContent = `${language.charAt(0).toUpperCase() + language.slice(1)} Bug Bingo`;
    
    try {
        // Load Pyodide only for Python
        if (language === 'python' && !window.pyodide) {
            window.pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
            });
            pyodideLoaded = true;
        }
        
        // Set the appropriate bug data
        bugDataArray = Object.values(bug_data[language]).slice(0, 25);
        createGrid();
        resetGameState();
        
    } catch (error) {
        console.error("Initialization failed:", error);
        alert(`Failed to initialize ${language} environment. Please try again.`);
    }
}

function resetGameState() {
    bingoState = {
        rows: new Array(5).fill(0),
        cols: new Array(5).fill(0),
        diagonal1: 0,
        diagonal2: 0
    };
    completedCells = new Array(5).fill().map(() => new Array(5).fill(false));
    completedLetters = 0;
    correctAnswers = new Set();
    
    // Reset BINGO letters display
    const letters = document.querySelectorAll('.bingo-letter');
    letters.forEach(letter => letter.classList.remove('completed'));
}

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    
  
    // Shuffle bugs for random placement
    shuffleArray(bugDataArray);
    
    // Create 5x5 grid (25 bugs)
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const index = i * 5 + j;
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.dataset.index = index;
            
            const bugIcon = document.createElement('div');
            bugIcon.className = 'bug-icon';
            bugIcon.textContent = '🐛';
            
            const bugNumber = document.createElement('div');
            bugNumber.className = 'bug-number';
            bugNumber.textContent = `Bug ${index + 1}`;
            
            cell.appendChild(bugIcon);
            cell.appendChild(bugNumber);
            
            cell.addEventListener('click', function() {
                const clickedIndex = parseInt(this.dataset.index);
                if (!correctAnswers.has(clickedIndex)) {
                    openModal(i, j, clickedIndex);
                }
            });
            
            grid.appendChild(cell);
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function openModal(row, col, index) {
    console.log("Opening modal for index:", index); // Debug log
    console.log("Bug data array:", bugDataArray); // Debug log
    
    const bugData = bugDataArray[index];
    
    if (!bugData) {
        console.error('No bug data found for index:', index, bugData);
        alert('Error: No bug data found. Please try another bug or reset the game.');
        return;
    }
    
    // Update modal content
    document.getElementById('buggedCode').textContent = bugData.code || "No code available";
    document.getElementById('testCase').textContent = `Test Case: ${bugData.test_case || "No test case"}`;
    document.getElementById('expectedOutput').textContent = `Expected Output: ${bugData.expected_output || "No expected output"}`;
    document.getElementById('userCode').value = '';
    document.getElementById('testCasesResult').innerHTML = '';
    
    // Set up submit button
    document.getElementById('submitBtn').onclick = function() {
        submitSolution(row, col, index, bugData);
    };
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('buggedCodeModal'));
    modal.show();
}
function submitSolution(row, col, index, bugData) {
    const userCode = document.getElementById('userCode').value.trim();
    
    // Check if code is empty
    if (userCode === '') {
        showResult('Please enter your solution code!', 'warning');
        return;
    }
    
    // Check if user just copied the original bugged code
    if (userCode === bugData.code) {
        showResult('You haven\'t fixed the bug! The code is still the same.', 'warning');
        return;
    }
    
    // Validate the code based on language
    let validationPromise;
    if (currentLanguage === 'python') {
        validationPromise = validatePythonCode(userCode, bugData.test_case, bugData.expected_output);
    } else if (currentLanguage === 'java') {
        validationPromise = validateJavaCode(userCode, bugData);
    } else if (currentLanguage === 'c') {
        validationPromise = validateCCode(userCode, bugData);
    }
    
    validationPromise
        .then(isCorrect => {
            if (isCorrect) {
                markCellAsCorrect(row, col, index);
                showResult('✅ Correct! Well done! The test case passed.', 'success');
                
                // Close modal after delay
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('buggedCodeModal'));
                    modal.hide();
                }, 1500);
            } else {
                showResult('❌ Incorrect solution. The test case didn\'t produce the expected output.', 'danger');
            }
        })
        .catch(error => {
            console.error('Validation error:', error);
            showResult(`❌ Error in your code: ${error.message}`, 'danger');
        });
}

function markCellAsCorrect(row, col, index) {
    // Mark as permanently correct
    correctAnswers.add(index);
    completedCells[row][col] = true;
    
    // Update cell appearance
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.classList.add('correct');
    
    // Clear previous content
    cell.innerHTML = '';
    
    // Add bug number back (smaller)
    const bugNumber = document.createElement('div');
    bugNumber.className = 'bug-number';
    bugNumber.textContent = `Bug ${index + 1}`;
    cell.appendChild(bugNumber);
    
    // Update Bingo state
    bingoState.rows[row]++;
    bingoState.cols[col]++;
    if (row === col) bingoState.diagonal1++;
    if (row + col === 4) bingoState.diagonal2++;
    
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Check for completed lines
    checkBingo();
}
    
    // Check for completed lines
    

function showResult(message, type) {
    document.getElementById('testCasesResult').innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>
    `;
}

// Python validation using Pyodide
async function validatePythonCode(userCode, testCase, expectedOutput) {
    if (!window.pyodide) {
        throw new Error("Python environment not loaded");
    }
    
    try {
        // Run the Python code
        await pyodide.loadPackagesFromImports(userCode);
        pyodide.runPython(userCode);
        
        // Execute the test case
        const result = pyodide.runPython(testCase);
        
        // Compare results
        const expected = pyodide.runPython(expectedOutput);
        return result == expected;
    } catch (error) {
        throw new Error(`Python error: ${error.message}`);
    }
}

// Java validation - pattern matching approach
function validateJavaCode(userCode, bugData) {
    return new Promise((resolve, reject) => {
        try {
            // Basic Java structure validation
            if (!userCode.includes("public class") || !userCode.includes("public static")) {
                throw new Error("Java code must contain a public class with static methods");
            }

            // Specific validation for Fibonacci
            if (bugData.test_case.includes("fibonacci")) {
                // Check for base cases (flexible matching)
                const hasBaseCase0 = /if\s*\(\s*n\s*==\s*0\s*\)\s*\{?\s*return\s*0\s*;?\s*\}?/.test(userCode);
                const hasBaseCase1 = /if\s*\(\s*n\s*==\s*1\s*\)\s*\{?\s*return\s*1\s*;?\s*\}?/.test(userCode);
                
                // Alternative single base case check
                const hasCombinedBaseCase = /if\s*\(\s*n\s*==\s*0\s*\|\|\s*n\s*==\s*1\s*\)\s*\{?\s*return\s*n\s*;?\s*\}?/.test(userCode);

                if (!(hasBaseCase0 && hasBaseCase1) && !hasCombinedBaseCase) {
                    throw new Error("Fibonacci implementation needs base cases for n==0 and n==1");
                }

                // Check for recursive case
                if (!/\breturn\s*fibonacci\s*\(.*?\)\s*\+\s*fibonacci\s*\(.*?\)\s*;/.test(userCode)) {
                    throw new Error("Missing recursive case (fibonacci(n-1) + fibonacci(n-2))");
                }

                // If we got here, the solution is correct
                resolve(true);
                return;
            }

            // Default validation if no specific test case matched
            resolve(true);
            
        } catch (error) {
            reject(error);
        }
    });
}

// C validation - pattern matching approach
function validateCCode(userCode, bugData) {
    return new Promise((resolve, reject) => {
        try {
            // Basic checks for C code
            if (!userCode.includes("#include")) {
                throw new Error("C code should include necessary headers");
            }
            
            // Check if the expected fix pattern exists in the code
            if (bugData.expected_fix && !userCode.includes(bugData.expected_fix)) {
                resolve(false);
                return;
            }
            
            // Additional checks based on bug type
            if (bugData.test_case.includes("factorial")) {
                // Check for base case in factorial
                if (!userCode.includes("if (n == 0) return 1;")) {
                    resolve(false);
                    return;
                }
            }
            
            // If we get here, assume the code is correct
            // Note: In a real app, you'd need server-side compilation for accurate validation
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}
function handleCorrectAnswer(row, col, index) {
    gameState.correctAnswers.add(index);
    gameState.completedCells[row][col] = true;
    
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.classList.add('correct');
    cell.innerHTML = '✅';
    
    gameState.bingoState.rows[row]++;
    gameState.bingoState.cols[col]++;
    if (row === col) gameState.bingoState.diagonal1++;
    if (row + col === 4) gameState.bingoState.diagonal2++;
    
    checkBingo();
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
function checkBingo() {
    // Check rows
    for (let i = 0; i < 5; i++) {
        if (bingoState.rows[i] === 5 && completedLetters < 5) {
            completeBingoLetter();
            bingoState.rows[i] = 0; // Reset to prevent multiple triggers
            return;
        }
    }
    
    // Check columns
    for (let j = 0; j < 5; j++) {
        if (bingoState.cols[j] === 5 && completedLetters < 5) {
            completeBingoLetter();
            bingoState.cols[j] = 0; // Reset
            return;
        }
    }
    
    // Check diagonals
    if (bingoState.diagonal1 === 5 && completedLetters < 5) {
        completeBingoLetter();
        bingoState.diagonal1 = 0; // Reset
        return;
    }
    
    if (bingoState.diagonal2 === 5 && completedLetters < 5) {
        completeBingoLetter();
        bingoState.diagonal2 = 0; // Reset
        return;
    }
}

function completeBingoLetter() {
    if (completedLetters < 5) {
        const letters = document.querySelectorAll('.bingo-letter');
        letters[completedLetters].classList.add('completed');
        
        // Big confetti for letter completion
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        completedLetters++;
        
        // Check for full BINGO
        if (completedLetters === 5) {
            setTimeout(showWinCelebration, 1000);
        }
    }
}

function showWinCelebration() {
    const celebration = document.getElementById('winCelebration');
    celebration.classList.add('active');
    
    // Mega confetti blast
    confetti({
        particleCount: 500,
        spread: 120,
        origin: { y: 0.6 }
    });
}

function resetGame() {
    document.getElementById('winCelebration').classList.remove('active');
    startGame(currentLanguage);
}

document.addEventListener('DOMContentLoaded', function() {
    // Show language selection by default
    document.getElementById('languageSelection').style.display = 'block';
    document.getElementById('pythonGame').style.display = 'none';
    
    // Make sure the startGame function is globally available
    window.startGame = startGame;
    window.resetGame = resetGame;
});
