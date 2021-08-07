import { mount } from "@vue/test-utils";
import VDialog from "../../src/components/ui/VDialog/VDilog";

afterEach(() => {
  document.body.outerHTML = "";
});

describe("VDialog", () => {
  it("Dialog should be in body when modelValue is true", () => {
    mount(VDialog, {
      props: { modelValue: true },
    });
    expect(!!document.body.querySelector('[data-test="dialog-wrap"]')).toBe(
      true
    );
  });

  it("Dialog should not be in body when modelValue is false", () => {
    mount(VDialog, {
      props: { modelValue: false },
    });
    const isExistInBody = !!document.body.querySelector(
      '[data-test="dialog-wrap"]'
    );
    expect(isExistInBody).toBe(false);
  });
});
