describe("ageClassification", () => {
  it("<0-0 повертає null", () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(0)).toBe(null);
  });
  it("1-24 повертає Дитинство", () => {
    expect(ageClassification(1)).toBe("Дитинство");
    expect(ageClassification(24)).toBe("Дитинство");
  });
  it("24-44 повертає Молодість", () => {
    expect(ageClassification(24.1)).toBe("Молодість");
    expect(ageClassification(44)).toBe("Молодість");
  });
  it("44-65 повертає Зрілість", () => {
    expect(ageClassification(44.01)).toBe("Зрілість");
    expect(ageClassification(65)).toBe("Зрілість");
  });
  it("65-75 повертає Старість", () => {
    expect(ageClassification(65.1)).toBe("Старість");
    expect(ageClassification(75)).toBe("Старість");
  });
  it("75-90 повертає Довголіття", () => {
    expect(ageClassification(75.01)).toBe("Довголіття");
    expect(ageClassification(90)).toBe("Довголіття");
  });
  it("90-122 повертає Рекорд", () => {
    expect(ageClassification(90.01)).toBe("Рекорд");
    expect(ageClassification(122)).toBe("Рекорд");
  });
  it("<122 повертає null", () => {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});
describe("weekFn", () => {
  it("1-7 для чисел повертає правильну назву дня тижня", () => {
    expect(weekFn(1)).toBe("Понеділок");
    expect(weekFn(2)).toBe("Вівторок");
    expect(weekFn(3)).toBe("Середа");
    expect(weekFn(4)).toBe("Четвер");
    expect(weekFn(5)).toBe("П'ятниця");
    expect(weekFn(6)).toBe("Субота");
    expect(weekFn(7)).toBe("Неділя");
  });
  it("Повертає null для не правильних  значень", () => {
    expect(weekFn(0)).toBe(null);
    expect(weekFn(8)).toBe(null);
    expect(weekFn(9)).toBe(null);
    expect(weekFn(1.5)).toBe(null);
    expect(weekFn("2")).toBe(null);
    expect(weekFn(null)).toBe(null);
    expect(weekFn(undefined)).toBe(null);
  });
});
