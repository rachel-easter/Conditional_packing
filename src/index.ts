// FlourPackingCalculator class
class FlourPackingCalculator {
  static canPack(bigFlourCount: number, smallFlourCount: number, packingGoal: number): boolean {
      if (bigFlourCount >= 0 && smallFlourCount >= 0 && packingGoal >= 0) {
          const totalKilos = 5 * bigFlourCount + smallFlourCount;
          return totalKilos >= packingGoal && (packingGoal % 5 <= smallFlourCount);
      }
      return false;
  }

  static displayResult(message: string): void {
      const resultDiv = document.getElementById('packingResult');
      if (resultDiv) {
          resultDiv.innerHTML = message;
      }
  }
}

// Event listener
document.addEventListener("DOMContentLoaded", function () {
  const checkPackingButton = document.getElementById('checkPackingButton');
  if (checkPackingButton) {
      checkPackingButton.addEventListener('click', () => {
          const bigFlourInput = document.getElementById('bigFlourInput') as HTMLInputElement;
          const smallFlourInput = document.getElementById('smallFlourInput') as HTMLInputElement;
          const goalInput = document.getElementById('goalInput') as HTMLInputElement;

          if (bigFlourInput.value === '' || smallFlourInput.value === '' || goalInput.value === '') {
              alert('Please fill in all the fields.');
              return;
          }

          const bigFlourCount = parseInt(bigFlourInput.value, 10);
          const smallFlourCount = parseInt(smallFlourInput.value, 10);
          const packingGoal = parseInt(goalInput.value, 10);

          const canPackResult = FlourPackingCalculator.canPack(bigFlourCount, smallFlourCount, packingGoal);
          FlourPackingCalculator.displayResult(`Available packing methods: ${canPackResult ? 'Yes' : 'No'}`);
      });
  }
});
