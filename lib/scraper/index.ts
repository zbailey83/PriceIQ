import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeAmazonProduct(productURL: string) {
    if(!url) return;

// curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_c3ada012-zone-unblocker:s37207gz6nu8 -k https://lumtest.com/myip.json 

    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id = (1000000 * match.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }  
}

try {
    // Fetch Product Page
  const response async = await axios.get(url, options);
  const $ = cheerio.load(response.data);
  
 // Extract the prproduct title
  const title = $('#productTitle').text().trim();
  const currentPrice = extractPrice();
  
  console.log({title})
} catch (error: any) {
  throw new Error(`Failed to scrape product: ${error.message}`)
 }
