import { describe, expect, it } from "vitest";
import { Car } from "../domain/car.js";
import { ERROR_NAME_LABEL } from "../domain/validation.js";

describe("Car", () => {
  it("이름이 5자 이하이면 정상적으로 호출됩니다.", () => {
    expect(() => Car("람보르기니")).not.toThrowError();
  });

  it("이름이 5자 이상이면 에러를 발생시킵니다.", () => {
    expect(() => Car("람보르기니니")).toThrowError(ERROR_NAME_LABEL);
  });

  it("초기 위치를 지정할 수 있습니다.", () => {
    const car = Car("제네시스", 3);

    expect(car.now).toBe(3);
  });

  it("이동한 값만큼 현재 위치가 변경됩니다.", () => {
    const car = Car("제네시스");
    car.incrementMovement(100);

    expect(car.now).toBe(100);
  });
});
