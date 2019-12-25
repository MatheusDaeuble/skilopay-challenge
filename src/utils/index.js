export function formatNumber(number) { // Função p/ transformar 1000 em K c/ 1 casa decimal, exemplo: 43.213 = 43.2k
    const numberk = (number/1000).toFixed(1)
    if (numberk==0) return parseInt(number) // Tratamento p/ caso o resultado seja 0, não faria sentindo retornar  "0.0k".
    return `${numberk}K`
}
