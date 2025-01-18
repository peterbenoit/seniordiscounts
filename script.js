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

    // Search functionality
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach((row) => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Category filter functionality
    filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;
            const tables = document.querySelectorAll('table');

            tables.forEach((table) => {
                if (category === 'all' || table.id.includes(category)) {
                    table.style.display = '';
                } else {
                    table.style.display = 'none';
                }
            });
        });
    });
});
