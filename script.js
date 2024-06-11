document.getElementById('ageCalculatorForm').addEventListener('submit', function (event)
{
    event.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (!isValidDate(dob))
    {
        document.getElementById('result').textContent = 'Please enter a valid date of birth.';
        return;
    }

    if (dob > today)
    {
        document.getElementById('result').textContent = 'Date of birth cannot be in the future.';
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0)
    {
        months--;
        days += daysInMonth(today.getMonth() - 1, today.getFullYear());
    }

    if (months < 0)
    {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});

function isValidDate(date)
{
    return date instanceof Date && !isNaN(date);
}

function daysInMonth(month, year)
{
    return new Date(year, month + 1, 0).getDate();
}
