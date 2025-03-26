// Bug data for Python
const bug_data_python = {
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
};

// ... (keep the bug_data_python object the same as before)

// Game state
const bugDataArray = Object.values(bug_data_python).slice(0, 25);
let bingoState = {
    rows: new Array(5).fill(0),
    cols: new Array(5).fill(0),
    diagonal1: 0,
    diagonal2: 0
};
let completedCells = new Array(5).fill().map(() => new Array(5).fill(false));
let completedLetters = 0;
let correctAnswers = new Set();

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    createGrid();
});

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const index = i * 5 + j;
            const cell = document.createElement('div');
            cell.className = 'bug-cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.dataset.index = index;
            cell.innerHTML = '🐛';
            
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

function openModal(row, col, index) {
    const bugData = bugDataArray[index];
    
    if (!bugData) {
        console.error('No bug data found for index:', index);
        return;
    }
    
    document.getElementById('buggedCode').textContent = bugData.code;
    document.getElementById('testCase').textContent = `Test Case: ${bugData.test_case};`
    document.getElementById('expectedOutput').textContent = `Expected Output: ${bugData.expected_output};`
    document.getElementById('userCode').value = '';
    document.getElementById('testCasesResult').innerHTML = '';
    
    document.getElementById('submitBtn').onclick = function() {
        submitSolution(row, col, index, bugData);
    };
    
    const modal = new bootstrap.Modal(document.getElementById('buggedCodeModal'));
    modal.show();
}

function submitSolution(row, col, index, bugData) {
    const userCode = document.getElementById('userCode').value.trim();
    
    // Check if code is empty
    if (userCode === '') {
        document.getElementById('testCasesResult').innerHTML = `
            <div class="alert alert-warning">
                Please enter your solution code!
            </div>
        `;
        return;
    }
    
    // Check if user just copied the original bugged code
    if (userCode === bugData.code) {
        document.getElementById('testCasesResult').innerHTML = `
            <div class="alert alert-warning">
                You haven't fixed the bug! The code is still the same.
            </div>
        `;
        return;
    }
    
    // Validate the code
    validatePythonCode(userCode, bugData.test_case, bugData.expected_output)
        .then(isCorrect => {
            if (isCorrect) {
                // Mark as permanently correct
                correctAnswers.add(index);
                completedCells[row][col] = true;
                
                // Update cell appearance
                const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
                cell.classList.add('correct');
                cell.innerHTML = '✅';
                
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
                
                // Show success message
                document.getElementById('testCasesResult').innerHTML = `
                    <div class="alert alert-success">
                        ✅ Correct! Well done! The test case passed.
                    </div>
                `;
                
                // Close modal after delay
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById('buggedCodeModal'));
                    modal.hide();
                }, 1500);
            } else {
                document.getElementById('testCasesResult').innerHTML = `
                    <div class="alert alert-danger">
                        ❌ Incorrect solution. The test case didn't produce the expected output.
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Validation error:', error);
            document.getElementById('testCasesResult').innerHTML = `
                <div class="alert alert-danger">
                    ❌ Error in your code: ${error.message}
                </div>
            `;
        });
}

function validatePythonCode(userCode, testCase, expectedOutput) {
    return new Promise((resolve, reject) => {
        try {
            // Properly format the Python code for execution
            const pyodideReady = async () => {
                // Load pyodide if not already loaded
                if (!window.pyodide) {
                    window.pyodide = await loadPyodide({
                        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
                    });
                }
                
                try {
                    // Run the Python code
                    await pyodide.loadPackagesFromImports(userCode);
                    pyodide.runPython(userCode);
                    
                    // Execute the test case
                    const result = pyodide.runPython(testCase);
                    
                    // Compare results
                    const expected = pyodide.runPython(expectedOutput);
                    resolve(result === expected);
                } catch (error) {
                    reject(error);
                }
            };
            
            pyodideReady();
        } catch (error) {
            reject(error);
        }
    });
}
// ... (keep the rest of the functions unchanged: checkBingo, completeBingoLetter, showWinCelebration)

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