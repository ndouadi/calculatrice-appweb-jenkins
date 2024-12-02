const { Builder, By } = require('selenium-webdriver');

(async function test_Calculatrice() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:8081'); 


    

    // Fonction pour obtenir le résultat affiché
    async function getDisplayValue() {
      return await driver.findElement(By.id('afficher')).getAttribute('value');
    }

    // Test Addition
    await clickButton('2');
    await clickButton('+');
    await clickButton('3');
    await clickButton('=');
    let resultat = await getDisplayValue();
    assert.strictEqual(resultat, '5', 'Test Addition réussi');
    console.log('Test Addition réussi');

    // Effacer l'affichage
    await clickButton('C');

    // Test Soustraction
    await clickButton('8');
    await clickButton('-');
    await clickButton('3');
    await clickButton('=');
    resultat = await getDisplayValue();
    assert.strictEqual(resultat, '5', 'Test Soustraction réussi');
    console.log('Test Soustraction réussi');

    // Effacer l'affichage
    await clickButton('C');

    // Test Multiplication
    await clickButton('4');
    await clickButton('*');
    await clickButton('5');
    await clickButton('=');
    resultat = await getDisplayValue();
    assert.strictEqual(resultat, '20', 'Test Multiplication réussi');
    console.log('Test Multiplication réussi');

    // Effacer l'affichage
    await clickButton('C');

    // Test Division
    await clickButton('1');
    await clickButton('5');
    await clickButton('/');
    await clickButton('3');
    await clickButton('=');
    resultat = await getDisplayValue();
    assert.strictEqual(resultat, '5', 'Test Division réussi');
    console.log('Test Division réussi');

  } finally {
    await driver.quit();
  }
})();