import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromiumService
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.os_manager import ChromeType


# from selenium.webdriver.chrome.options import Options
# chrome_options = Options()
# chrome_options.add_argument("--disable-popup-blocking")
# chrome_options.add_argument('--ignore-certificate-errors')

# # disable the banner "Chrome is being controlled by automated test software"
# chrome_options.add_experimental_option("useAutomationExtension", False)
# chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])

# Obtenir le répertoire du script actuel
current_directory = os.path.dirname(os.path.realpath(__file__))

# # Chemin vers le fichier chromedriver, à remplacer par le chemin sur votre machine
# driver_path = current_directory + '../chromedriver-win64/chromedriver.exe'

# Création de l'instance du navigateur Chrome
driver = webdriver.Chrome(service=ChromiumService(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()))


# Ouverture de la page web
driver.get("https://m.eoneculture.com/#/")

# Prendre une capture d'écran et l'enregistrer
driver.save_screenshot(current_directory + "/screenshots/login.jpg")

# Fermer le navigateur
driver.quit()