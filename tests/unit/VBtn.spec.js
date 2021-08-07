import { mount } from "@vue/test-utils";
import VBtn from "@/components/ui/VBtn/VBtn";

describe("VBtn", () => {
  it("if loading true text button should not be show", () => {
    let text = "Test";
    const wrapper = mount(VBtn, {
      props: {
        loading: true,
      },
      slots: {
        default: text,
      },
    });

    expect(wrapper.html()).toBe(
      '<button class="btn btn-primary"><span class="clock-loader"></span></button>'
    );
  });
});
