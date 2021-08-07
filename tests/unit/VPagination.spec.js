import VPagination from "@/components/ui/VPagination/VPagination";
import { mount } from "@vue/test-utils";

describe("VPagination", () => {
  it("Max size pagination should be 10", () => {
    const wrapper = mount(VPagination, {
      props: {
        length: 50,
        modelValue: 1,
      },
    });

    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(10);
  });
});
