export default function ProfileMaths(InputDataStorage) {
  const raRotationnrMath = parseFloat(InputDataStorage.raRotationnr);
  const raDiameterMath = parseFloat(InputDataStorage?.raDiameter);
  const raRotationMath = parseFloat(InputDataStorage?.raRotation);
  const raInclinationMath = parseFloat(InputDataStorage?.raInclination);
  const totalLengthMath = parseFloat(InputDataStorage?.totalLength);
  const rcEffectiveLengthMath = parseFloat(InputDataStorage?.rcEffectiveLength);
  const diameterMath = parseFloat(InputDataStorage?.diameter);
  const allowanceMath = parseFloat(InputDataStorage?.allowance);
  const electiveLengthMath = parseFloat(InputDataStorage?.electiveLength);
  const speedPeripheralMath = parseFloat(InputDataStorage?.speedPeripheral);

  const radragRotationnr = raRotationnrMath / 60;
  const peripheralSpeed =
    ((Math.PI * raDiameterMath * raRotationMath) / 60000) *
    Math.cos(raInclinationMath);
  const passingSpeed =
    ((Math.PI * raDiameterMath * raRotationMath) / 1000) *
    Math.sin(raInclinationMath);
  const partQuantity = passingSpeed / totalLengthMath;
  const cycleTime = 1 / partQuantity;
  const revolution =
    rcEffectiveLengthMath /
    (Math.PI * diameterMath * Math.tan(raInclinationMath));
  const removeRate =
    (allowanceMath *
      passingSpeed *
      Math.PI *
      diameterMath *
      electiveLengthMath) /
    (2 * rcEffectiveLengthMath * totalLengthMath);
  const cutThickness = removeRate / speedPeripheralMath;
  return {
    radragRotationnr,
    peripheralSpeed,
    passingSpeed,
    partQuantity,
    cycleTime,
    revolution,
    removeRate,
    cutThickness,
  };
}
