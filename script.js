document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');

  if (calculateBtn) {
    calculateBtn.addEventListener('click', function() {
      const distanceInput = document.getElementById('distance');
      const selectedVehicle = document.getElementById('vehicle');

      if (!distanceInput || !selectedVehicle) {
        console.error('Required elements not found.');
        return;
      }

      const distance = parseFloat(distanceInput.value);
      const vehicleName = selectedVehicle.value;

      if (isNaN(distance)) {
        console.error('Invalid distance input.');
        alert('Please enter a valid distance.');
        return;
      }

      const vehicleData = {
        Alto: { topSpeed: 140, efficiency: 22.05, tankCapacity: 35, maxRange: 771.75, image: 'Images/MarutiSuzukiAlto.jpg' },
        i20: { topSpeed: 180, efficiency: 20.35, tankCapacity: 37, maxRange: 753.05, image: 'Images/Hyundaii20.jpg' },
        Nexon: { topSpeed: 180, efficiency: 17.57, tankCapacity: 44, maxRange: 772.68, image: 'Images/TataNexon.jpg' },
        City: { topSpeed: 180, efficiency: 17.8, tankCapacity: 40, maxRange: 712.00, image: 'Images/HondaCity.jpg' },
        Thar: { topSpeed: 155, efficiency: 15.2, tankCapacity: 57, maxRange: 866.40, image: 'Images/MahindraThar.jpg' },
        Innova: { topSpeed: 179, efficiency: 11.25, tankCapacity: 55, maxRange: 618.75, image: 'Images/ToyotaInnovaCrysta.jpg' },
        Seltos: { topSpeed: 170, efficiency: 16.8, tankCapacity: 50, maxRange: 840.00, image: 'Images/KiaSeltos.jpg' },
        Kwid: { topSpeed: 150, efficiency: 22.3, tankCapacity: 28, maxRange: 624.40, image: 'Images/RenaultKwid.jpg' },
        EcoSport: { topSpeed: 182, efficiency: 15.9, tankCapacity: 52, maxRange: 826.80, image: 'Images/FordEcosport.jpg' },
        Tiago: { topSpeed: 150, efficiency: 23.84, tankCapacity: 35, maxRange: 834.40, image: 'Images/TataTiago.jpg' }
      };

      const vehicle = vehicleData[vehicleName];
      if (!vehicle) {
        console.error('Selected vehicle data not found.');
        alert('Invalid vehicle selection.');
        return;
      }

      const time = distance / (vehicle.topSpeed / 60);
      const fuelConsumption = distance / vehicle.efficiency;

      let resultText = `⏱️ Time to travel ${distance} km with ${vehicleName}: ${time.toFixed(2)} hours.`;
      let fuelText = `⛽ Fuel consumption: ${fuelConsumption.toFixed(2)} liters.`;

      if (fuelConsumption > vehicle.tankCapacity) {
        resultText += " Out of range!";
        fuelText = "";
      }

      const resultElement = document.getElementById('result');
      const fuelElement = document.getElementById('fuel-consumption');
      const vehicleImage = document.getElementById('vehicle-image');

      if (resultElement && fuelElement && vehicleImage) {
        resultElement.textContent = resultText;
        fuelElement.textContent = fuelText;
        vehicleImage.src = vehicle.image;
        vehicleImage.style.display = 'block';
      } else {
        console.error('Result elements not found.');
      }
    });
  } else {
    console.error('Calculate button not found.');
  }
});