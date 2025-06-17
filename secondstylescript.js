    // DOM Elements
    const numberInput = document.getElementById('number-input');
    const functionInput = document.getElementById('function-input');
    const moneyInput = document.getElementById('money-input');
    const rMoneyGroup = document.getElementById('r-money-group');
    const rMoneyInput = document.getElementById('r-money-input');
    const ahkaysGroup = document.getElementById('ahkays-group');
    const ahkaysInput = document.getElementById('ahkays-input');
    const functionBtn = document.getElementById('function-btn');
    const saveBtn = document.getElementById('save-btn');
    const functionList = document.getElementById('function-list');
    const listTable = document.getElementById('list-table').getElementsByTagName('tbody')[0];
    const overLimitTable = document.getElementById('over-limit-table').getElementsByTagName('tbody')[0];
    const numberSequenceTable = document.getElementById('number-sequence-table');
    const headerRow = document.getElementById('header-row');
    const footerRow = document.getElementById('footer-row');
    const totalMoneyEl = document.getElementById('total-money');
    const breakLimitInput = document.getElementById('break-limit');
    const applyLimitBtn = document.getElementById('apply-limit-btn');
    const overLimitTotalEl = document.getElementById('over-limit-total');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const totalLedgerMoneyEl = document.getElementById('total-ledger-money');
    const commissionInput = document.getElementById('commission-input');
    const multiplierInput = document.getElementById('multiplier-input');
    const payoutInput = document.getElementById('payout-input');
    const displayTotalLedgerMoney = document.getElementById('display-total-ledger-money');
    const commissionAmount = document.getElementById('commission-amount');
    const afterCommission = document.getElementById('after-commission');
    const afterPayout = document.getElementById('after-payout');
    const profitLoss = document.getElementById('profit-loss');
    const resultStatus = document.getElementById('result-status');
    
    // DI Input Elements
    const diNumberInput = document.getElementById('dinumber-input');
    const diFunctionInput = document.getElementById('difunction-input');
    const diMoneyInput = document.getElementById('dimoney-input');
    const diRMoneyGroup = document.getElementById('dir-money-group');
    const diRMoneyInput = document.getElementById('dir-money-input');
    const diAhkaysGroup = document.getElementById('diahkays-group');
    const diAhkaysInput = document.getElementById('diahkays-input');
    const diFunctionBtn = document.getElementById('difunction-btn');
    const diSaveBtn = document.getElementById('disave-btn');
    const diFunctionList = document.getElementById('difunction-list');
    const diListTable = document.getElementById('di-list-table').getElementsByTagName('tbody')[0];
    const ditotalMoneyEl = document.getElementById('di-total-money');
    // Data
    let numberMoneyData = JSON.parse(localStorage.getItem('numberMoneyData')) || [];
    let diNumberMoneyData = JSON.parse(localStorage.getItem('diNumberMoneyData')) || [];
    let breakLimit = parseInt(localStorage.getItem('breakLimit')) || 1000000;
    let entryCounter = 1;

    // Initialize the app
    function initApp() {
        breakLimitInput.value = breakLimit;
        renderAllTables();
        renderDIListTable();
        updateTotalMoney();
updateDITotalMoney();
        numberInput.focus();
    }

    // Auto-focus flow for main input
    numberInput.addEventListener('input', function() {
        if (this.value.length === 2) {
            functionInput.focus();
        }
    });

    // Auto-focus flow for DI input
    diNumberInput.addEventListener('input', function() {
        if (this.value.length === 2) {
            diFunctionInput.focus();
        }
    });

    functionInput.addEventListener('input', function() {
        updateFunctionsplay(this.value, rMoneyGroup, ahkaysGroup, functionBtn);
    });

    diFunctionInput.addEventListener('input', function() {
        updateFunctionsplay(this.value, diRMoneyGroup, diAhkaysGroup, diFunctionBtn);
    });

    function updateFunctionsplay(funcSign, rMoneyGroup, ahkaysGroup, functionBtn) {
        if (funcSign.includes('/')) {
            rMoneyGroup.style.display = 'block';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ဆတူအာ';
            functionBtn.style.backgroundColor = '#4CAF50';
            moneyInput.focus();
        } else if (funcSign.includes('+')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'အပူး';
            functionBtn.style.backgroundColor = '#FF9800';
            moneyInput.focus();
        } else if (funcSign.includes('a')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'အပါ';
            functionBtn.style.backgroundColor = '#9C27B0';
            moneyInput.focus();
        } else if (funcSign.includes('b')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ဘရိတ်';
            functionBtn.style.backgroundColor = '#607d8b';
            moneyInput.focus();
        } else if (funcSign.includes('p')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ပါဝါ';
            functionBtn.style.backgroundColor = '#5C6BC0';
            moneyInput.focus();
        } else if (funcSign.includes('k')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'နက္ခ';
            functionBtn.style.backgroundColor = '#26A69A';
            moneyInput.focus();
        } else if (funcSign.includes('t')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ထိပ်';
            functionBtn.style.backgroundColor = '#FF5722';
            moneyInput.focus();
        } else if (funcSign.includes('d')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ပိတ်';
            functionBtn.style.backgroundColor = '#795548';
            moneyInput.focus();
        } else if (funcSign.includes('sg')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ညီကို';
            functionBtn.style.backgroundColor = '#EC407A';
            moneyInput.focus();
        } else if (funcSign.includes('gs')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ကိုညီ';
            functionBtn.style.backgroundColor = '#AB47BC';
            moneyInput.focus();
        } else if (funcSign.includes('x')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'block';
            functionBtn.textContent = 'အခွေ';
            functionBtn.style.backgroundColor = '#8D6E63';
            moneyInput.focus();
        } else if (funcSign.includes('z')) {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'block';
            functionBtn.textContent = 'အပူးပါအခွေ';
            functionBtn.style.backgroundColor = '#7E57C2';
            moneyInput.focus();
        } else {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.textContent = 'ဒဲ့';
            functionBtn.style.backgroundColor = '#2196F3';
        }
    }

    // Function list toggle
    functionBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        functionList.classList.toggle('show');
    });

    // DI Function list toggle
    diFunctionBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        diFunctionList.classList.toggle('show');
    });

    // Select function from list
    document.querySelectorAll('.function-list a').forEach(item => {
        item.addEventListener('click', function() {
            selectFunction(this.textContent, functionInput, functionBtn, rMoneyGroup, ahkaysGroup);
        });
    });

    // Select DI function from list
    document.querySelectorAll('.difunction-list a').forEach(item => {
        item.addEventListener('click', function() {
            selectFunction(this.textContent, diFunctionInput, diFunctionBtn, diRMoneyGroup, diAhkaysGroup);
        });
    });

    function selectFunction(text, functionInput, functionBtn, rMoneyGroup, ahkaysGroup) {
        functionInput.value = text;
        functionBtn.textContent = text;
        functionList.classList.remove('show');
        diFunctionList.classList.remove('show');
        
        if (text === 'ဆတူအာ') {
            functionInput.value = '/';
            rMoneyGroup.style.display = 'block';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#4CAF50';
            moneyInput.focus();
        } else if (text === 'အပူး') {
            functionInput.value = '+';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#FF9800';
            moneyInput.focus();
        } else if (text === 'အပါ') {
            functionInput.value = 'a';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#9C27B0';
            moneyInput.focus();
        } else if (text === 'ဘရိတ်') {
            functionInput.value = 'b';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#607d8b';
            moneyInput.focus();
        } else if (text === 'ပါဝါ') {
            functionInput.value = 'p';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#5C6BC0';
            moneyInput.focus();
        } else if (text === 'နက္ခ') {
            functionInput.value = 'k';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#26A69A';
            moneyInput.focus();
        } else if (text === 'ထိပ်') {
            functionInput.value = 't';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#FF5722';
            moneyInput.focus();
        } else if (text === 'ပိတ်') {
            functionInput.value = 'd';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#795548';
            moneyInput.focus();
        } else if (text === 'ညီကို') {
            functionInput.value = 'sg';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#EC407A';
            moneyInput.focus();
        } else if (text === 'ကိုညီ') {
            functionInput.value = 'gs';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#AB47BC';
            moneyInput.focus();
        } else if (text === 'အခွေ') {
            functionInput.value = 'x';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'block';
            functionBtn.style.backgroundColor = '#8D6E63';
            moneyInput.focus();
        } else if (text === 'အပူးပါအခွေ') {
            functionInput.value = 'z';
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'block';
            functionBtn.style.backgroundColor = '#7E57C2';
            moneyInput.focus();
        } else {
            rMoneyGroup.style.display = 'none';
            ahkaysGroup.style.display = 'none';
            functionBtn.style.backgroundColor = '#2196F3';
        }
    }

    // Close function list when clicking outside
    window.addEventListener('click', function() {
        functionList.classList.remove('show');
        diFunctionList.classList.remove('show');
    });

    // Reverse number digits (12 -> 21)
    function reverseNumber(num) {
        return num.split('').reverse().join('');
    }

    // Get all numbers with same first digit (for 't' - ထိပ်)
    function getPrefixNumbers(number) {
        const prefix = number.charAt(0);
        let numbers = [];
        
        for (let i = 0; i < 10; i++) {
            numbers.push(prefix + i);
        }
        
        return numbers;
    }

    // Get all numbers with same first or second digit (for 'a' - အပါ)
    function getAPANumbers(number) {
        const firstgit = number.charAt(0);
        const secondgit = number.charAt(1);
        let numbers = new Set();
        
        for (let i = 0; i < 10; i++) {
            numbers.add(firstgit + i);
        }
        
        for (let i = 0; i < 10; i++) {
            numbers.add(i + secondgit);
        }
        
        return Array.from(numbers);
    }

    // Get all numbers with same last digit (for 'd' - ပိတ်)
    function getSuffixNumbers(number) {
        const suffix = number.charAt(1);
        let numbers = [];
        
        for (let i = 0; i < 10; i++) {
            numbers.push(i.toString() + suffix);
        }
        
        return numbers;
    }

    // Get all numbers where last digit of sum equals last digit of input number's sum
    function getBreakNumbers(number) {
        const digit1 = parseInt(number.charAt(0));
        const digit2 = parseInt(number.charAt(1));
        const sum = digit1 + digit2;
        const lastgit = sum % 10;
        
        let numbers = [];
        
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if ((i + j) % 10 === lastgit) {
                    const num = i.toString() + j.toString();
                    numbers.push(num);
                }
            }
        }
        
        return numbers;
    }

    // Get all power numbers (05, 16, 27, 38, 49, 50, 61, 72, 83, 94)
    function getPowerNumbers() {
        return ['05', '16', '27', '38', '49', '50', '61', '72', '83', '94'];
    }

    // Get all nacca numbers (07, 18, 24, 35, 42, 53, 69, 70, 81, 96)
    function getNaccaNumbers() {
        return ['07', '18', '24', '35', '42', '53', '69', '70', '81', '96'];
    }

    // Get brother numbers (01, 12, 23, 34, 45, 56, 67, 78, 89, 90)
    function getBrotherNumbers() {
        return ['01', '12', '23', '34', '45', '56', '67', '78', '89', '90'];
    }

    // Get reverse brother numbers (10, 21, 32, 43, 54, 65, 76, 87, 98, 09)
    function getReverseBrotherNumbers() {
        return ['10', '21', '32', '43', '54', '65', '76', '87', '98', '09'];
    }

    // Get all possible 2-digit combinations from a string of digits (for Ahkway)
    function getAhkwayNumbers(digits) {
        let numbers = new Set();
        
        for (let i = 0; i < digits.length; i++) {
            for (let j = 0; j < digits.length; j++) {
                if (i !== j) {
                    numbers.add(digits[i] + digits[j]);
                }
            }
        }
        
        return Array.from(numbers);
    }

    // Get all possible 2-digit combinations including identical numbers (for Ahput Par Ahkway)
    function getAhputParAhkwayNumbers(digits) {
        let numbers = new Set();
        
        for (let i = 0; i < digits.length; i++) {
            for (let j = 0; j < digits.length; j++) {
                numbers.add(digits[i] + digits[j]);
            }
        }
        
        return Array.from(numbers);
    }

    // Calculate total money for a number (including DI entries)
    function calculateMoneyForNumber(number) {
        const mainMoney = numberMoneyData
            .filter(item => item.number === number)
            .reduce((sum, item) => sum + parseInt(item.money), 0);
        
        const diMoney = diNumberMoneyData
            .filter(item => item.number === number)
            .reduce((sum, item) => sum - parseInt(item.money), 0); // Subtract DI money
        
        return mainMoney + diMoney;
    }
// Calculate total DI money
function calculateDITotalMoney() {
    return diNumberMoneyData.reduce((sum, item) => sum + parseInt(item.money), 0);
}

// Update DI total money display
function updateDITotalMoney() {
    document.getElementById('di-total-money').textContent = calculateDITotalMoney();
document.getElementById('di-total-money-display').textContent = calculateDITotalMoney();

}

    // Render all tables
    function renderAllTables() {
        renderListTable();
        renderDIListTable();
        renderNumberSequenceTable();
        updateOverLimitTable();
    }

    // Render list table
    function renderListTable() {
        listTable.innerHTML = '';
        entryCounter = 1;
        
        numberMoneyData.forEach((item, index) => {
            const row = listTable.insertRow();
            if (item.type === 'Main') row.classList.add('main-entry');
            if (item.type === 'Reversed') row.classList.add('r-entry');
            if (item.type === 'Identical') row.classList.add('identical-entry');
            if (item.type === 'Prefix') row.classList.add('prefix-entry');
            if (item.type === 'Suffix') row.classList.add('suffix-entry');
            if (item.type === 'Break') row.classList.add('break-entry');
            if (item.type === 'Power') row.classList.add('power-entry');
            if (item.type === 'Nacca') row.classList.add('nacca-entry');
            if (item.type === 'APa') row.classList.add('prefix-entry');
            if (item.type === 'Brother') row.classList.add('brother-entry');
            if (item.type === 'ReverseBrother') row.classList.add('reverse-brother-entry');
            if (item.type === 'Ahkway') row.classList.add('ahkway-entry');
            if (item.type === 'Ahput Par Ahkway') row.classList.add('ahput-par-ahkway-entry');
            
            row.insertCell(0).textContent = item.number;
            row.insertCell(1).textContent = item.money;
            row.insertCell(2).textContent = item.type || 'Normal';
            
            const actionsCell = row.insertCell(3);
            
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => editItem(index));
            actionsCell.appendChild(editBtn);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('danger');
            deleteBtn.addEventListener('click', () => deleteItem(index));
            actionsCell.appendChild(deleteBtn);
        });
    }

    // Render DI list table
    function renderDIListTable() {
        diListTable.innerHTML = '';
        
        diNumberMoneyData.forEach((item, index) => {
            const row = diListTable.insertRow();
            row.classList.add('di-list-entry');
            
            row.insertCell(0).textContent = item.number;
            row.insertCell(1).textContent = item.money;
            row.insertCell(2).textContent = item.type || 'DI Normal';
            
            const actionsCell = row.insertCell(3);
            
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => editDIItem(index));
            actionsCell.appendChild(editBtn);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('danger');
            deleteBtn.addEventListener('click', () => deleteDIItem(index));
            actionsCell.appendChild(deleteBtn);
        });
    }

    function renderNumberSequenceTable() {
        const table = document.getElementById('number-sequence-table');
        table.innerHTML = '';
        
        // Create header
        const headerRow = table.createTHead().insertRow();
        for (let i = 0; i < 10; i++) {
            headerRow.appendChild(document.createElement('th')).textContent = 'Number';
            headerRow.appendChild(document.createElement('th')).textContent = 'Money';
        }
        
        // Create body
        const tbody = table.createTBody();
        const columnTotals = Array(10).fill(0);
        let grandTotal = 0;
        
        for (let rowNum = 0; rowNum < 10; rowNum++) {
            const row = tbody.insertRow();
            
            for (let colNum = 0; colNum < 10; colNum++) {
                const number = (colNum * 10 + rowNum).toString().padStart(2, '0');
                const totalMoney = calculateMoneyForNumber(number);
                const displayMoney = totalMoney > breakLimit ? breakLimit : totalMoney;
                
                // Number cell
                row.insertCell().textContent = number;
                
                // Money cell
                const moneyCell = row.insertCell();
                moneyCell.textContent = displayMoney;
                
                if (totalMoney > breakLimit) {
                    moneyCell.classList.add('over-limit-cell');
                }
                
                // Add to column total and grand total
                columnTotals[colNum] += displayMoney;
                grandTotal += displayMoney;
            }
        }
        
        // Create footer
        const tfoot = table.createTFoot();
        const footer = tfoot.insertRow();
        footer.insertCell().textContent = 'Total';
        footer.insertCell().classList.add('total-cell');
        
        for (let colNum = 0; colNum < 10; colNum++) {
            footer.insertCell().textContent = columnTotals[colNum];
            footer.insertCell().classList.add('total-cell');
        }
        
        // Update grand total display
        totalLedgerMoneyEl.textContent = grandTotal;
    }

    // Update over limit table
    function updateOverLimitTable() {
        overLimitTable.innerHTML = '';
        let overLimitTotal = 0;
        
        for (let i = 0; i < 100; i++) {
            const number = i.toString().padStart(2, '0');
            const totalMoney = calculateMoneyForNumber(number);
            
            if (totalMoney > breakLimit) {
                const overAmount = totalMoney - breakLimit;
                overLimitTotal += overAmount;
                
                const row = overLimitTable.insertRow();
                row.insertCell(0).textContent = number;
                row.insertCell(1).textContent = totalMoney;
                row.insertCell(2).textContent = overAmount;
            }
        }
        
        overLimitTotalEl.textContent = overLimitTotal;
    }

    // Update total money
    function updateTotalMoney() {
        const total = numberMoneyData.reduce((sum, item) => sum + parseInt(item.money), 0);
        totalMoneyEl.textContent = total;
document.getElementById('total-money-display').textContent = total;
    }

    // Save data
    function saveData() {
        const number = numberInput.value;
        const money = (moneyInput.value)*100;
        const rMoney = (rMoneyInput.value)*100;
        const ahkays = ahkaysInput.value;

        if (!number || number.length !== 2 || isNaN(number)) {
            alert('Please enter a valid 2-digit number');
            numberInput.focus();
            return;
        }

        if (!money || isNaN(money) || money < 0) {
            alert('Please enter a valid money amount');
            moneyInput.focus();
            return;
        }

        const funcSign = functionInput.value;
        if (funcSign.includes('/')) {
            // Add main entry
            numberMoneyData.push({
                number: number,
                money: money,
                type: 'Main'
            });
            
            // Add reversed entry
            const reversedNumber = reverseNumber(number);
            const rMoneyValue = rMoney && !isNaN(rMoney) ? rMoney : money;
            numberMoneyData.push({
                number: reversedNumber,
                money: rMoneyValue,
                type: 'Reversed'
            });
        } else if (funcSign.includes('+')) {
            // Add entries for all identical numbers (00, 11, 22, etc.)
            for (let i = 0; i < 10; i++) {
                const identicalNumber = i.toString() + i.toString();
                numberMoneyData.push({
                    number: identicalNumber,
                    money: money,
                    type: 'Identical'
                });
            }
        } else if (funcSign.includes('a')) {
            // Add entries for all numbers with same first OR second digit (အပါ)
            const apaNumbers = getAPANumbers(number);
            apaNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'APa'
                });
            });
        } else if (funcSign.includes('t')) {
            // Add entries for all numbers with same first digit (ထိပ်)
            const prefixNumbers = getPrefixNumbers(number);
            prefixNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Prefix'
                });
            });
        } else if (funcSign.includes('d')) {
            // Add entries for all numbers with same last digit (ပိတ်)
            const suffixNumbers = getSuffixNumbers(number);
            suffixNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Suffix'
                });
            });
        } else if (funcSign.includes('b')) {
            // Add entries for all numbers where sum of digits has same last digit
            const breakNumbers = getBreakNumbers(number);
            breakNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Break'
                });
            });
        } else if (funcSign.includes('p')) {
            // Add entries for all power numbers
            const powerNumbers = getPowerNumbers();
            powerNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Power'
                });
            });
        } else if (funcSign.includes('k')) {
            // Add entries for all nacca numbers
            const naccaNumbers = getNaccaNumbers();
            naccaNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Nacca'
                });
            });
        } else if (funcSign.includes('sg')) {
            // Add entries for all brother numbers (01, 12, 23, etc.)
            const brotherNumbers = getBrotherNumbers();
            brotherNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Brother'
                });
            });
        } else if (funcSign.includes('gs')) {
            // Add entries for all reverse brother numbers (10, 21, 32, etc.)
            const reverseBrotherNumbers = getReverseBrotherNumbers();
            reverseBrotherNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'ReverseBrother'
                });
            });
        } else if (funcSign.includes('x')) {
            // Add entries for all Ahkway combinations
            if (!ahkays || ahkays.length < 2) {
                alert('Please enter at least 2 digits for Ahkway');
                ahkaysInput.focus();
                return;
            }
            
            const ahkwayNumbers = getAhkwayNumbers(ahkays);
            ahkwayNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Ahkway'
                });
            });
        } else if (funcSign.includes('z')) {
            // Add entries for all Ahput Par Ahkway combinations
            if (!ahkays || ahkays.length < 2) {
                alert('Please enter at least 2 digits for Ahput Par Ahkway');
                ahkaysInput.focus();
                return;
            }
            
            const ahputParAhkwayNumbers = getAhputParAhkwayNumbers(ahkays);
            ahputParAhkwayNumbers.forEach(num => {
                numberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'Ahput Par Ahkway'
                });
            });
        } else {
            // Add single entry
            numberMoneyData.push({
                number: number,
                money: money,
                type: 'Normal'
            });
        }

        // Save to localStorage
        localStorage.setItem('numberMoneyData', JSON.stringify(numberMoneyData));
        
        // Clear inputs and update UI
        clearInputs();
        renderAllTables();
        updateTotalMoney();
updateDITotalMoney();
         
        const tableContainer = document.querySelector('.table-container');
        if (tableContainer) {
            tableContainer.scrollTop = tableContainer.scrollHeight;
        }
    }

    // Save DI data
    function saveDIData() {
        const number = diNumberInput.value;
        const money = (diMoneyInput.value)*100;
        const rMoney = (diRMoneyInput.value)*100;
        const ahkays = diAhkaysInput.value;

        if (!number || number.length !== 2 || isNaN(number)) {
            alert('Please enter a valid 2-digit number');
            diNumberInput.focus();
            return;
        }

        if (!money || isNaN(money) || money < 0) {
            alert('Please enter a valid money amount');
            diMoneyInput.focus();
            return;
        }

        const funcSign = diFunctionInput.value;
        if (funcSign.includes('/')) {
            // Add main DI entry
            diNumberMoneyData.push({
                number: number,
                money: money,
                type: 'DI Main'
            });
            
            // Add reversed DI entry
            const reversedNumber = reverseNumber(number);
            const rMoneyValue = rMoney && !isNaN(rMoney) ? rMoney : money;
            diNumberMoneyData.push({
                number: reversedNumber,
                money: rMoneyValue,
                type: 'DI Reversed'
            });
        } else if (funcSign.includes('+')) {
            // Add DI entries for all identical numbers (00, 11, 22, etc.)
            for (let i = 0; i < 10; i++) {
                const identicalNumber = i.toString() + i.toString();
                diNumberMoneyData.push({
                    number: identicalNumber,
                    money: money,
                    type: 'DI Identical'
                });
            }
        } else if (funcSign.includes('a')) {
            // Add DI entries for all numbers with same first OR second digit (အပါ)
            const apaNumbers = getAPANumbers(number);
            apaNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI APa'
                });
            });
        } else if (funcSign.includes('t')) {
            // Add DI entries for all numbers with same first digit (ထိပ်)
            const prefixNumbers = getPrefixNumbers(number);
            prefixNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Prefix'
                });
            });
        } else if (funcSign.includes('d')) {
            // Add DI entries for all numbers with same last digit (ပိတ်)
            const suffixNumbers = getSuffixNumbers(number);
            suffixNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Suffix'
                });
            });
        } else if (funcSign.includes('b')) {
            // Add DI entries for all numbers where sum of digits has same last digit
            const breakNumbers = getBreakNumbers(number);
            breakNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Break'
                });
            });
        } else if (funcSign.includes('p')) {
            // Add DI entries for all power numbers
            const powerNumbers = getPowerNumbers();
            powerNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Power'
                });
            });
        } else if (funcSign.includes('k')) {
            // Add DI entries for all nacca numbers
            const naccaNumbers = getNaccaNumbers();
            naccaNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Nacca'
                });
            });
        } else if (funcSign.includes('sg')) {
            // Add DI entries for all brother numbers (01, 12, 23, etc.)
            const brotherNumbers = getBrotherNumbers();
            brotherNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Brother'
                });
            });
        } else if (funcSign.includes('gs')) {
            // Add DI entries for all reverse brother numbers (10, 21, 32, etc.)
            const reverseBrotherNumbers = getReverseBrotherNumbers();
            reverseBrotherNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI ReverseBrother'
                });
            });
        } else if (funcSign.includes('x')) {
            // Add DI entries for all Ahkway combinations
            if (!ahkays || ahkays.length < 2) {
                alert('Please enter at least 2 digits for Ahkway');
                diAhkaysInput.focus();
                return;
            }
            
            const ahkwayNumbers = getAhkwayNumbers(ahkays);
            ahkwayNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Ahkway'
                });
            });
        } else if (funcSign.includes('z')) {
            // Add DI entries for all Ahput Par Ahkway combinations
            if (!ahkays || ahkays.length < 2) {
                alert('Please enter at least 2 digits for Ahput Par Ahkway');
                diAhkaysInput.focus();
                return;
            }
            
            const ahputParAhkwayNumbers = getAhputParAhkwayNumbers(ahkays);
            ahputParAhkwayNumbers.forEach(num => {
                diNumberMoneyData.push({
                    number: num,
                    money: money,
                    type: 'DI Ahput Par Ahkway'
                });
            });
        } else {
            // Add single DI entry
            diNumberMoneyData.push({
                number: number,
                money: money,
                type: 'DI Normal'
            });
        }

        // Save to localStorage
        localStorage.setItem('diNumberMoneyData', JSON.stringify(diNumberMoneyData));
        
        // Clear DI inputs and update UI
        clearDIInputs();
        renderAllTables();
        updateTotalMoney();
updateDITotalMoney();
renderOverbuyList();
    }

    // Edit item
    function editItem(index) {
        const item = numberMoneyData[index];
        
        // Populate form with selected item data
        numberInput.value = item.number;
        moneyInput.value = (item.money)/100;
        functionInput.value = '';
        rMoneyGroup.style.display = 'none';
        ahkaysGroup.style.display = 'none';
        functionBtn.textContent = 'ဒဲ့';
        functionBtn.style.backgroundColor = '#2196F3';

        // Adjust function based on entry type
        if (item.type === 'Main') {
            functionInput.value = '';
            rMoneyGroup.style.display = 'block';
            functionBtn.textContent = 'ဆတူအာ';
            functionBtn.style.backgroundColor = '#4CAF50';
            
            // Look for reversed entry but don't auto-delete
            const reversedNumber = reverseNumber(item.number);
            const reversedEntry = numberMoneyData.find(entry => 
                entry.number === reversedNumber && entry.type === 'Reversed'
            );
            
            if (reversedEntry) {
                rMoneyInput.value = reversedEntry.money;
            }
        } else if (item.type === 'Identical') {
            functionInput.value = '';
            functionBtn.textContent = 'အပူး';
            functionBtn.style.backgroundColor = '#FF9800';
        }
        // ... other types ...

        // Remove only the selected item
        numberMoneyData.splice(index, 1);

        // Update storage and UI
        localStorage.setItem('numberMoneyData', JSON.stringify(numberMoneyData));
        renderAllTables();
        updateTotalMoney();
updateDITotalMoney();
        numberInput.focus();
    }

    // Edit DI item
    function editDIItem(index) {
        const item = diNumberMoneyData[index];
        
        // Populate form with selected item data
        diNumberInput.value = item.number;
        diMoneyInput.value = (item.money)/100;
        diFunctionInput.value = '';
        diRMoneyGroup.style.display = 'none';
        diAhkaysGroup.style.display = 'none';
        diFunctionBtn.textContent = 'ဒဲ့';
        diFunctionBtn.style.backgroundColor = '#2196F3';

        // Adjust function based on entry type
        if (item.type === 'DI Main') {
            diFunctionInput.value = '';
            diRMoneyGroup.style.display = 'block';
            diFunctionBtn.textContent = 'ဆတူအာ';
            diFunctionBtn.style.backgroundColor = '#4CAF50';
            
            // Look for reversed entry but don't auto-delete
            const reversedNumber = reverseNumber(item.number);
            const reversedEntry = diNumberMoneyData.find(entry => 
                entry.number === reversedNumber && entry.type === 'DI Reversed'
            );
            
            if (reversedEntry) {
                diRMoneyInput.value = reversedEntry.money;
            }
        } else if (item.type === 'DI Identical') {
            diFunctionInput.value = '';
            diFunctionBtn.textContent = 'အပူး';
            diFunctionBtn.style.backgroundColor = '#FF9800';
        }
        // ... other types ...

        // Remove only the selected item
        diNumberMoneyData.splice(index, 1);

        // Update storage and UI
        localStorage.setItem('diNumberMoneyData', JSON.stringify(diNumberMoneyData));
        renderAllTables();
        updateTotalMoney();
updateDITotalMoney();
        diNumberInput.focus();
    }

    // Delete item
    function deleteItem(index) {
        if (confirm('Are you sure you want to delete this item?')) {
            const item = numberMoneyData[index];
            
            // Remove only the selected item
            numberMoneyData.splice(index, 1);
            
            // Update local storage
            localStorage.setItem('numberMoneyData', JSON.stringify(numberMoneyData));
            renderAllTables();
            updateTotalMoney();
updateDITotalMoney();
        }
    }

    // Delete DI item
    function deleteDIItem(index) {
        if (confirm('Are you sure you want to delete this DI item?')) {
            const item = diNumberMoneyData[index];
            
            // Remove only the selected item
            diNumberMoneyData.splice(index, 1);
            
            // Update local storage
            localStorage.setItem('diNumberMoneyData', JSON.stringify(diNumberMoneyData));
            renderAllTables();
            updateTotalMoney();
updateDITotalMoney();
        }
    }

    // Apply break limit
    function applyBreakLimit() {
        const newLimit = parseInt(breakLimitInput.value);
        
        if (isNaN(newLimit) || newLimit < 0) {
            alert('Please enter a valid positive number');
            return;
        }
        
        breakLimit = newLimit;
        localStorage.setItem('breakLimit', breakLimit.toString());
        
        renderNumberSequenceTable();
        updateOverLimitTable();
    }

    // Overbuy modal အတွက် function
    document.getElementById('overbuy-btn').addEventListener('click', function() {
        // Hide all other elements
        document.querySelectorAll('.container > *:not(.overbuy-section)').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show modal
        document.getElementById('overbuy-modal').style.display = 'block';
        
        // Populate overbuy list
        renderOverbuyList();
    });

    // Close modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('overbuy-modal').style.display = 'none';
        
        // Show all elements again
        document.querySelectorAll('.container > *').forEach(el => {
            el.style.display = '';
        });
    });

    // Render overbuy list
    function renderOverbuyList() {
        const table = document.getElementById('overbuy-list-table').getElementsByTagName('tbody')[0];
        table.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const number = i.toString().padStart(2, '0');
            const totalMoney = calculateMoneyForNumber(number);
            
            if (totalMoney > breakLimit) {
                const overAmount = totalMoney - breakLimit;
                
                const row = table.insertRow();
                row.insertCell(0).textContent = number;
                row.insertCell(1).textContent = overAmount;
            }
        }
    }

    // Clear all data
    function clearAllData() {
        if (confirm('Are you sure you want to delete ALL data? This cannot be undone.')) {
            numberMoneyData = [];
            diNumberMoneyData = [];
            breakLimit = 1000000;
            breakLimitInput.value = '1000000';
            
            localStorage.removeItem('numberMoneyData');
            localStorage.removeItem('diNumberMoneyData');
            localStorage.removeItem('breakLimit');
            
            clearInputs();
            clearDIInputs();
            renderAllTables();
            updateTotalMoney();
updateDITotalMoney();
        }
    }

    // Clear input fields
    function clearInputs() {
        numberInput.value = '';
        functionInput.value = '';
        moneyInput.value = '';
        rMoneyInput.value = '';
        ahkaysInput.value = '';
        rMoneyGroup.style.display = 'none';
        ahkaysGroup.style.display = 'none';
        functionBtn.textContent = 'ဒဲ့';
        functionBtn.style.backgroundColor = '#2196F3';
        numberInput.focus();
    }

    // Clear DI input fields
    function clearDIInputs() {
        diNumberInput.value = '';
        diFunctionInput.value = '';
        diMoneyInput.value = '';
        diRMoneyInput.value = '';
        diAhkaysInput.value = '';
        diRMoneyGroup.style.display = 'none';
        diAhkaysGroup.style.display = 'none';
        diFunctionBtn.textContent = 'ဒဲ့';
        diFunctionBtn.style.backgroundColor = '#2196F3';
        diNumberInput.focus();
    }

    // Function to Update Calculations
    function updateCalculations() {
        // Get values from inputs
        const totalLedgerMoney = parseFloat(totalLedgerMoneyEl.textContent) || 0;
        const commission = parseFloat(commissionInput.value) || 0;
        const multiplier = parseFloat(multiplierInput.value) || 0;
        const payout = parseFloat(payoutInput.value) || 0;

        // splay Total Ledger Money
        displayTotalLedgerMoney.textContent = totalLedgerMoney;

        // Calculate Commission Amount
        const commissionValue = (totalLedgerMoney * commission) / 100;
        commissionAmount.textContent = commissionValue.toFixed();

        // Calculate After Commission
        const afterCommissionValue = totalLedgerMoney - commissionValue;
        afterCommission.textContent = afterCommissionValue.toFixed();

        // Calculate After Payout
        const afterPayoutValue = afterCommissionValue - (payout * multiplier);
        afterPayout.textContent = afterPayoutValue.toFixed();

        // Calculate Profit/Loss
        profitLoss.textContent = afterPayoutValue.toFixed();

        // Determine Result Status
        if (afterPayoutValue < 0) {
            resultStatus.textContent = "Loss";
            resultStatus.style.color = "red";
        } else {
            resultStatus.textContent = "Profit";
            resultStatus.style.color = "green";
        }
    }

    // DOM Elements for ledger modal
    const ledgerBtn = document.getElementById('ledger-btn');
    const ledgerModal = document.getElementById('ledger-modal');
    const closeLedgerModal = document.querySelector('.close-ledger-modal');

    // Show ledger modal
    ledgerBtn.addEventListener('click', function() {
        // Make sure the table is rendered before showing
        renderNumberSequenceTable();
        ledgerModal.style.display = 'block';
    });

    // Close ledger modal
    closeLedgerModal.addEventListener('click', function() {
        ledgerModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === ledgerModal) {
            ledgerModal.style.display = 'none';
        }
    });

    // Event listeners
    saveBtn.addEventListener('click', saveData);
    diSaveBtn.addEventListener('click', saveDIData);
    applyLimitBtn.addEventListener('click', applyBreakLimit);
    clearAllBtn.addEventListener('click', clearAllData);
    commissionInput.addEventListener('input', updateCalculations);
    multiplierInput.addEventListener('input', updateCalculations);
    payoutInput.addEventListener('input', updateCalculations);

    // Handle Enter key for main input
    moneyInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveData();
    });
    
    rMoneyInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveData();
    });

    ahkaysInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveData();
    });

    // Handle Enter key for DI input
    diMoneyInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveDIData();
    });
    
    diRMoneyInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveDIData();
    });

    diAhkaysInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') saveDIData();
    });

    // Hide Overbuy List Table and Number Sequence Table
    document.getElementById('over-limit-table').style.display = 'none';
    document.getElementById('number-sequence-table').style.display = '';

 // Add this new function to calculate DI total for a specific number
        function calculateDITotalForNumber(number) {
            return diNumberMoneyData
                .filter(item => item.number === number)
                .reduce((sum, item) => sum + parseInt(item.money), 0);
        }

        // Add this new function to highlight DI entries in the table
        function highlightDIEntries(number) {
            // Remove previous highlights
            const diRows = document.querySelectorAll('#di-list-table tr');
            diRows.forEach(row => {
                row.classList.remove('highlighted-di');
            });

            // Highlight matching DI entries
            diNumberMoneyData.forEach((item, index) => {
                if (item.number === number) {
                    const row = diListTable.rows[index];
                    if (row) row.classList.add('highlighted-di');
                }
            });
        }

     // Add this new function to calculate main list total for a specific number
        function calculateMainTotalForNumber(number) {
            return numberMoneyData
                .filter(item => item.number === number)
                .reduce((sum, item) => sum + parseInt(item.money), 0);
        }

        // Add this new function to highlight main list entries
        function highlightMainEntries(number) {
            // Remove previous highlights
            const mainRows = document.querySelectorAll('#list-table tr');
            mainRows.forEach(row => {
                row.classList.remove('highlighted-entry');
            });

            // Highlight matching main entries
            numberMoneyData.forEach((item, index) => {
                if (item.number === number) {
                    const row = listTable.rows[index];
                    if (row) row.classList.add('highlighted-entry');
                }
            });
        }





   // pnumber input change event listener
document.getElementById('pnumber-input').addEventListener('input', function() {
    const pnumber = this.value.padStart(2, '0');
    
    if(pnumber.length === 2) {
        // Calculate money for this number from sequence table
        const totalMoney = calculateMoneyForNumber(pnumber);
             const diMoney = calculateDITotalForNumber(pnumber);
  const mainMoney = calculateMainTotalForNumber(pnumber);

        // Fill the payout input
        document.getElementById('payout-input').value = totalMoney;
        document.getElementById('di-total-display').value = diMoney;
document.getElementById('main-total-display').value = mainMoney;
        // Highlight the number in sequence table (optional)
        highlightNumberInSequenceTable(pnumber);
highlightDIEntries(pnumber);
highlightMainEntries(pnumber);
const firstHighlighted = document.querySelector('.highlighted-entry');
                if (firstHighlighted) {
                    firstHighlighted.scrollIntoView({behavior: 'smooth', block: 'center'});
                }



    }
});

// Helper function to highlight number in sequence table
function highlightNumberInSequenceTable(number) {
    // Remove previous highlights
    document.querySelectorAll('#number-sequence-table td').forEach(cell => {
        cell.classList.remove('highlighted-number');
    });
    
    // Find and highlight the cell
    const cells = document.querySelectorAll('#number-sequence-table td');
    for(let cell of cells) {
        if(cell.textContent === number) {
            cell.classList.add('highlighted-number');
            cell.scrollIntoView({behavior: 'smooth', block: 'center'});
            break;
        }
    }
}

function calculateMoneyForNumber(number) {
    // Calculate from both main data and DI data
    const mainMoney = numberMoneyData
        .filter(item => item.number === number)
        .reduce((sum, item) => sum + parseInt(item.money), 0);
    
    const diMoney = diNumberMoneyData
        .filter(item => item.number === number)
        .reduce((sum, item) => sum - parseInt(item.money), 0);
    
    return mainMoney + diMoney;
}
 // Initialize app and calculations
    initApp();
    updateCalculations();
