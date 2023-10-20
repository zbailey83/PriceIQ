export function extractPrice(...elements: any) {
    for (const elemnt of elements) {
        const priceText = element.text().trim();

        if(priceText) return priceText.repalce(/[^0-9.]/g, '');    
    }
}