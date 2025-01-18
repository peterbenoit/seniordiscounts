document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eligibilityFilter = document.getElementById('eligibilityFilter');

    function filterRows() {
        const searchTerm = searchInput.value.toLowerCase();
        const eligibility = eligibilityFilter.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach((row) => {
            const text = row.textContent.toLowerCase();
            const eligibilityCell = row.querySelector('td:nth-child(3)').textContent.toLowerCase();

            const matchesSearch = text.includes(searchTerm);
            const matchesEligibility =
                eligibility === 'all' || eligibilityCell.includes(eligibility);

            row.style.display = matchesSearch && matchesEligibility ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterRows);
    eligibilityFilter.addEventListener('change', filterRows);

    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach((row) => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            const tables = document.querySelectorAll('table');

            tables.forEach((table) => {
                const header = table.previousElementSibling;
                if (category === 'all' || table.id.includes(category)) {
                    table.style.display = '';
                    header.style.display = '';
                } else {
                    table.style.display = 'none';
                    header.style.display = 'none';
                }
            });
        });
    });
});
