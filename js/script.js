
        // Filter Tariffs
        function filterTariffs(period, btn) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cards = document.querySelectorAll('.tariff-card');
            cards.forEach(card => {
                if (period === 'all') {
                    card.style.display = 'flex';
                } else if (card.getAttribute('data-period') === period) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Scroll to Tariffs
        function scrollToTariffs() {
            document.getElementById('tariffs').scrollIntoView({ behavior: 'smooth' });
        }

        // Accordion Toggle
        function toggleAccordion(element) {
            const item = element.parentElement;
            item.classList.toggle('active');
        }

        // Modal Logic
        function openModal(name, price) {
            document.getElementById('modalTariffName').innerText = name;
            document.getElementById('modalTariffPrice').innerText = price;
            document.getElementById('subscriptionModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('subscriptionModal').classList.remove('active');
        }

        function handleSubscribe(e) {
            e.preventDefault();
            const phone = document.getElementById('phoneInput').value;
            alert(`Код подтверждения с номера 1490 отправлен на номер ${phone}. Переход на mobicinema.uz...`);
            closeModal();
            window.open('https://mobicinema.uz', '_blank');
        }