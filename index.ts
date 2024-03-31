import * as puppeteer from 'puppeteer';
import {Config} from './src/config'
(async () => {
    // Lance un navigateur Chrome.
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        // Accède à la page web.
        await page.goto('https://m.eoneculture.com/#/', {
            waitUntil: 'networkidle2' // Attend que le réseau soit inactif (sans nouvelles requêtes pendant au moins 500 ms).
        });

          // Sélectionner tous les champs input de la page
        const [login_input, password_input, ...rest] = await page.$$('input');
        console.log(login_input)
        await login_input.type(Config.INPUT_LOGIN, {delay: 100})
        await password_input.type(Config.INPUT_PASSWORD, {delay: 100})

        await page.click('img[src="/static/images/next.png"]', {delay: 100});

        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.waitForFunction('document.querySelector("body").innerText.includes("Mine")')
        
        await page.screenshot({ path: 'screenshot/screenshot.png' });
    } catch (error) {
        console.error(error)
        await page.screenshot({ path: 'screenshot/error.png' });
    }
    // Ferme le navigateur.
    await browser.close();
})();