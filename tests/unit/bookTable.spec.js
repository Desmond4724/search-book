import { mount } from "@vue/test-utils";
import BookTable from "@/components/search/BookTable";

const generatorBooks = (count = 10) => {
  return new Array(count).fill(null).map((_, index) => {
    return {
      title: `title-${index}`,
      images: {},
      description: `Description ${index}`,
    };
  });
};

describe("BookTable", () => {
  it("If items are empty should to view no data", () => {
    const wrapper = mount(BookTable, {
      props: { items: [] },
    });
    expect(wrapper.find('[data-test="no-items"]').exists()).toBe(true);
  });

  it("Row in table should equal with prop items", () => {
    const itemsCount = 15;
    const wrapper = mount(BookTable, {
      props: { items: generatorBooks(itemsCount) },
    });
    expect(wrapper.findAll('[data-test="row"]')).toHaveLength(itemsCount);
  });
});
