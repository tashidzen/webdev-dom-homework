let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
};

export function formatDate(date) {
    return date.toLocaleString('ru-RU', options).replace(',', '');
}
